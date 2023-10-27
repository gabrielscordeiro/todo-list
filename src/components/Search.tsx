import { PlusCircle } from "@phosphor-icons/react";

export const Search = () => {
    return (
        <div className="flex justify-between h-14 gap-2">
            <input type="text" name="new-task" placeholder="Add a new task" className="w-full pl-4 rounded-lg"/>
            <button className="flex justify-between items-center p-4 bg-blue-dark text-gray-100 rounded-lg font-semibold gap-1 hover:bg-blue transition">
                Create
                <PlusCircle size={16} weight="bold"/>
            </button>
        </div>
    )
}