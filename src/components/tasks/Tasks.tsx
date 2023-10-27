import { NoTasks } from "./NoTasks.tsx";
import { TaskItem } from "./TaskItem.tsx";
import { useGlobalState } from "../../store/tasks-store.ts";
import { ConfirmModal } from "../modals/ConfirmModal.tsx";

export const Tasks = () => {

    const {
        tasks
    } = useGlobalState((state => ({
        tasks: state.tasks
    })))

    const tasksCompleted = tasks.filter(task => task.isCompleted).length

    return (
        <div>
            <div className="flex justify-between mt-16">
                <span className="text-blue text-sm font-bold">
                    Created tasks
                    <span className="px-[8px] py-[2px] bg-gray-400 text-gray-200 rounded-full font-bold ml-2">{tasks.length}</span>
                </span>

                <span className="text-purple text-sm font-bold">
                    Completed
                    <span className="px-[8px] py-[2px] bg-gray-400 text-gray-200 rounded-full font-bold ml-2">{tasksCompleted}</span>
                </span>
            </div>

            {tasks.length > 0 ? (
                <div className="mt-6">
                    {tasks.map((task) => (
                        <TaskItem key={task.id} task={task}/>
                    ))}

                    <ConfirmModal />
                </div>
            ): (
                <NoTasks />
            )}
        </div>
    )
}