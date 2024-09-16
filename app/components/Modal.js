import React from 'react';

const Modal = ({ message, isOpen, onClose, isSuccess }) => {
    console.log('Modal render - isOpen:', isOpen, 'message:', message, 'isSuccess:', isSuccess); // Debug log

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
        }}>
            <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '5px',
                maxWidth: '400px',
                width: '100%',
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                textAlign: 'center'
            }}>
                <p style={{ marginBottom: '20px' }}>{message}</p>
                <button
                    onClick={onClose}
                    style={{
                        backgroundColor: isSuccess ? '#28a745' : '#dc3545',
                        color: 'white',
                        border: 'none',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer'
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;