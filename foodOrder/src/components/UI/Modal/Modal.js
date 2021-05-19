import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backdrop = (props) => {
    return(
        <div className={classes.backdrop}/>
    )
};

const ModalOverlay = (props) => {
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
};

const portalElement = document.getElementById('overlays')

const Modal = (props) => {
    let currentModal = null
    if( props.visible){
        currentModal = <React.Fragment>
            {ReactDOM.createPortal(<Backdrop/>, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
        </React.Fragment>

    }

    return(
        <React.Fragment>
            {currentModal}
        </React.Fragment>
    )
}

export default Modal;