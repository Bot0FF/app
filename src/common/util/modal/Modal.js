
import "./modal.css";

const Modal = ({ active, setActive, background, children }) => {
    return (
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div
                className={active ? "modal__content active" : "modal__content"} onClick={(e) => e.stopPropagation()}>
                <div className="modal-item">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;