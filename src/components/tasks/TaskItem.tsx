import { Check, Trash } from "@phosphor-icons/react";
import { ITask } from "../../types/ITask.types.ts";
import { useConfirmModal } from "../../hooks/useConfirmModal.ts";
import { useGlobalState } from "../../store/tasks-store.ts";
import { cn } from "../../lib/utils.ts";

interface ITaskItemProps {
    task: ITask
}
export const TaskItem = ({
    task: {
        id,
        description,
        isCompleted
    }
}: ITaskItemProps) => {

    const confirmModal = useConfirmModal();
    const onDeleteTask = () => {
        confirmModal.handleDeleteTask(id)
    }

    const handleCompleteTask = (id: string) => {
        useGlobalState.getState().handleCompleteTask(id)
    }

    return (
        <div className={cn(
            "flex justify-between bg-gray-500 rounded-lg p-4 mt-3 shadow-[0px_2px_8px_0px_rgba(0,0,0,0.06)] hover:shadow-[0px_0px_6px_-1px_rgb(111_111_111)] text-gray-100 cursor-pointer transition",
            isCompleted && 'text-gray-300 line-through'
        )} >
            <div
                className="flex gap-3 flex-1"
                onClick={() => handleCompleteTask(id)}
            >
                <div className={cn(
                    "flex justify-center items-center w-4 h-4 rounded-full border-2 border-blue mt-1",
                    isCompleted && 'bg-purple-dark border-purple-dark'
                )}>
                    {isCompleted && (
                        <Check size={10} color="#FFFFFF" weight="bold"/>
                    )}
                </div>
                <p className="text-xs leading-5">
                    {description}
                </p>
            </div>

            <Trash
                size={20}
                color="#808080"
                className="cursor-pointer hover:fill-red-600"
                onClick={onDeleteTask}
            />
        </div>
    )
}