import * as React from 'react';
import classnames from 'classnames';
import './style.scss';

type ModalProps = {
    children: React.ReactNode,
    show?: boolean,
    className?: string
};

const Modal = ({
    children,
    show = false,
    className
}: ModalProps): React.ReactElement => {
    if (!show) {
        return null;
    }

    const classes = classnames('modal', className);

    return (
        <div className="overlay flex-center">
            <div className={classes}>
                { children }
            </div>
        </div>
    );
};

export default Modal;
