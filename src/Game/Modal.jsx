// @ts-check
import React from 'react';
import PropTypes from 'prop-types';
import './modal.css';

const Modal = ({ handleReset, className, winText }) => {
    return (
        <div id="modal" className={ className }>
            <div id="modal__window">
                <h2 className="win-text">{ winText }</h2>
                <div id="modal__buttons">
                    <button onClick={ handleReset } className="reset">Играть еще</button>
                </div>
            </div>
        </div>
    )
}

Modal.propTypes = {
    handleReset: PropTypes.func,
    className: PropTypes.string,
    winText: PropTypes.string
};

export default Modal;