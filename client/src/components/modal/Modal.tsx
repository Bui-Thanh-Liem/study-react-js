import { ReactNode } from "react";
import classes from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

//
interface IPropsModal {
    children: ReactNode;
}

export default function Modal({ children }: IPropsModal) {
    const navigate = useNavigate();

    //
    function handleCloseModal() {
        navigate('..');
    }

    return (
        <>
            <div className={classes.backdrop} onClick={handleCloseModal} />
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </>
    );
}
