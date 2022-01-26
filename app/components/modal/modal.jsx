


const Modal = (props) => {
    console.log(props)
    const closeModal = () => {
        props.setShowModal(!props.showModal);
    }
    
    return (
        <div className="modal">
            <button className="close" onClick={closeModal}>X</button>
            <div className="modalContent">
            {props.modalContent}
            </div>    
        </div>
    )
}

export default Modal;