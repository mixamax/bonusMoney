import { createContext, useState, useCallback, useMemo } from "react";
import Modal from "react-modal";
import { ModalBlock } from "../modalBlock";

type TModalContextValue = {
    openModal: (payloadModal: TPayloadModal) => void;
    closeModal: () => void;
};
const contentCSS: React.CSSProperties = {
    position: "static",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    border: "none",
};
const overlayCSS: React.CSSProperties = {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backdropFilter: "blur(50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};

export type TPayloadModal = {
    type: "error" | "pressed button";
    name?: string;
    companyId?: string;
    errorMessage?: string;
};
const customStyles = {
    content: contentCSS,
    overlay: overlayCSS,
};

Modal.setAppElement("#modal");

export const ModalContext = createContext<TModalContextValue | null>(null);

type Props = {
    children: React.ReactNode;
};
export const WithModalProvider = ({ children }: Props) => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [payloadModal, setPayloadModal] = useState<TPayloadModal | null>(
        null
    );

    const openModal = useCallback((payloadModal: TPayloadModal) => {
        setIsOpen(true);
        setPayloadModal(payloadModal);
    }, []);
    const closeModal = useCallback(() => {
        setIsOpen(false);
    }, []);

    const value = useMemo(
        () => ({
            openModal,
            closeModal,
        }),
        []
    );

    return (
        <ModalContext.Provider value={value}>
            {children}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="modal"
                shouldCloseOnOverlayClick={false}
            >
                <ModalBlock
                    payloadModal={payloadModal}
                    closeModal={closeModal}
                />
            </Modal>
        </ModalContext.Provider>
    );
};
