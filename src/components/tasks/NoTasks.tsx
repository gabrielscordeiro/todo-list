import { ClipboardText } from "@phosphor-icons/react";

export const NoTasks = () => {
    return (
        <div className="flex justify-center flex-col items-center mt-6 py-16 text-gray-300 border-t-2 border-t-gray-400 rounded-tl-lg rounded-tr-lg">
            <ClipboardText size={56} color="#333333" />

            <strong className="pt-4">
                You don't have tasks registered yet
            </strong>
            <p>
                Create tasks and organize your to-do items
            </p>
        </div>
    )
}