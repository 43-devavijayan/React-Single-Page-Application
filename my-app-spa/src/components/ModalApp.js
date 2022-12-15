import React from 'react';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import '../style/ModalApp.scss'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function ModalApp(props) {
    
    const onDelete= props.onDelete;
    const deleteContents=props.deleteContents;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const onDeleteClick = () => {
        onDelete()
        closeModal()
    }

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div className="delete-content">
            <FontAwesomeIcon icon={faTrash} onClick={openModal} />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className="on-delete-request">{deleteContents.deleteRequestCommand}
                    <div className='delete-on-alert'>
                        <button onClick={onDeleteClick} className="on-delete-accept">{deleteContents.buttonOnDelete}</button>
                        <button onClick={closeModal} className="on-delete-reject">{deleteContents.buttonOnCancel}</button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default ModalApp
