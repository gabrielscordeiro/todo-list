import { Button, Modal } from "antd";
import { useConfirmModal } from "../../hooks/useConfirmModal.ts";

export const ConfirmModal = () => {
    const confirmModal = useConfirmModal();

    return (
        <Modal
            title="Are you sure?"
            open={confirmModal.isModalOpen}
            onOk={confirmModal.handleOk}
            onCancel={confirmModal.handleCancel}
            footer={[
                <Button key="back" onClick={confirmModal.handleCancel}>
                    Cancel
                </Button>,
                <Button
                    key="submit"
                    type="primary"
                    className="bg-blue-dark"
                    onClick={confirmModal.handleOk}
                >
                    Remove
                </Button>,
            ]}
        >
            <p>Are you sure you want to remove this task?</p>
        </Modal>
    )
}