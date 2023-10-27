import { NoTasks } from "./NoTasks.tsx";

export const Tasks = () => {
    return (
        <div>
            <div className="flex justify-between mt-16">
                <span className="text-blue text-sm font-bold">
                    Created tasks
                    <span className="px-[8px] py-[2px] bg-gray-400 text-gray-200 rounded-full font-bold ml-2">0</span>
                </span>

                <span className="text-purple text-sm font-bold">
                    Completed
                    <span className="px-[8px] py-[2px] bg-gray-400 text-gray-200 rounded-full font-bold ml-2">0</span>
                </span>
            </div>

            <NoTasks />
        </div>
    )
}