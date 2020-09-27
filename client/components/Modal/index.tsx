import * as React from 'react';
import './style.scss';

type ModalProps = {
    children: React.ReactNode,
    show?: boolean
};

const Modal = ({
    children,
    show = false
}: ModalProps): React.ReactElement => {
    if (!show) {
        return null;
    }

    return (
        <div className="overlay flex-center">
            <div className="modal">
                { children }
            </div>
        </div>
    );
};

export default Modal;
