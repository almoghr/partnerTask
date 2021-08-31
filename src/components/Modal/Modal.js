import React from 'react';
import ReactModal from 'react-modal';

const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)',
        borderRadius          : '10px',
        padding               : '2em',
        maxHeight             : '90vh',
        display               : 'flex',
        justifyContent        : 'center',
        backgroundColor       : '#2cd5c4'

    },
    overlay: {
        backgroundColor:     'rgba(35, 31, 32, 0.5)',
        zIndex: 9999999999999
    }
};

const Modal = ({children, onClose, isOpen}) => {
    return (
        <ReactModal style={customStyles} isOpen={isOpen} onRequestClose={onClose}>
            {children}
        </ReactModal>
    )
};

export default Modal
