import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, InvalidEvent, FormEvent, useState } from "react";
import { useGlobalState } from "../../store/tasks-store.ts";

export const CreateTask = () => {
    const [newTask, setNewTask] = useState<string>('')

    const {
        addTask
    } = useGlobalState((state => ({
        addTask: state.addTask
    })))

    const handleCreateTask = (event: FormEvent) => {
        event.preventDefault();
        const taskValue = (document.getElementById('new-task') as HTMLInputElement).value;

        addTask(taskValue);
        setNewTask('');
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('This field is required!')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewTask(event.target.value)
    }

    const isNewTaskEmpty = newTask.length === 0

    return (
        <form className="flex justify-between h-14 gap-2" onSubmit={handleCreateTask}>
            <input
                type="text"
                name="new-task"
                id="new-task"
                placeholder="Add a new task"
                className="w-full pl-4 rounded-lg"
                onChange={handleNewTaskChange}
                onInvalid={handleNewTaskInvalid}
                value={newTask}
                required
            />
            <button
                className="flex justify-between items-center p-4 bg-blue-dark text-gray-100 rounded-lg font-semibold gap-1 hover:bg-blue transition disabled:cursor-not-allowed"
                type="submit"
                disabled={isNewTaskEmpty}
            >
                Create
                <PlusCircle size={16} weight="bold"/>
            </button>
        </form>
    )
}