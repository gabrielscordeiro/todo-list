import { create } from 'zustand'
import { ITask } from "../types/ITask.types.ts";
import { v4 as uuidv4 } from 'uuid';
import { produce } from "immer";

interface GlobalState {
    tasks: ITask[]
    addTask: (description: string) => void
    updateTasks: (tasks: ITask[]) => void
    reOrderTasks: (tasks: ITask[]) => ITask[]
    handleCompleteTask: (id: string) => void
}

export const useGlobalState = create<GlobalState>()(
    (set, get) => ({
        tasks: [],

        addTask: (description) => {
            const newTask = {
                id: uuidv4(),
                description,
                isCompleted: false
            }

            const tasks = [newTask, ...get().tasks]

            get().updateTasks(tasks)

        },

        handleCompleteTask: (id) => {
            const taskIndex = get().tasks.findIndex(task => task.id === id);

            set(produce<GlobalState>((draft) => {
                draft.tasks[taskIndex].isCompleted = !draft.tasks[taskIndex].isCompleted
            }))

            get().reOrderTasks(get().tasks)
        },

        updateTasks: (tasks) => {
            const orderTasks = get().reOrderTasks(tasks)

            set(produce<GlobalState>((draft) => {
                draft.tasks = orderTasks
            }))

            localStorage.setItem('tasks', JSON.stringify(orderTasks))
        },

        reOrderTasks: (tasks) => {
            const tasksToOrder = structuredClone(tasks)
            tasksToOrder.sort((a, b) => {
                if (!a.isCompleted && b.isCompleted) {
                    return -1;
                } else if (a.isCompleted && !b.isCompleted) {
                    return 1;
                } else {
                    return 0;
                }
            })

            set({
                tasks: tasksToOrder
            })

            return get().tasks
        }
    })
)