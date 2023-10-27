import { create } from 'zustand';
import { useGlobalState } from "../store/tasks-store.ts";
import toast from "react-hot-toast";

interface ConfirmModalStore {
    isModalOpen: boolean
    showModal: () => void
    handleDeleteTask: (id: string) => void
    handleOk: () => void
    handleCancel: () => void
    idToDelete: string
}

export const useConfirmModal = create<ConfirmModalStore>((set, get) => ({
    isModalOpen: false,
    idToDelete: '',

    showModal: () => set({ isModalOpen: true }),

    handleDeleteTask: (id) => {
        set({
            idToDelete: id
        })

        get().showModal()
    },

    handleOk: () => {
        let tasks = useGlobalState.getState().tasks

        tasks = tasks.filter(( task ) => {
            return task.id !== get().idToDelete
        });


        useGlobalState.setState({ tasks })
        localStorage.setItem('tasks', JSON.stringify(tasks))

        toast.success('Task successfully removed');


        set({ isModalOpen: false })
    },

    handleCancel: () => set({ isModalOpen: false })
}))

