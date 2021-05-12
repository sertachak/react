import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../../Card/Card'
import Button from "../Button/Button";
import classes from './Error.module.css'

const Backdrop = (props) => {
    return(
        <div className={classes.backdrop} onClick={props.onConfirm}/>
    )
}

const ModalOverlay = (props) => {
    return(
        <Card className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.error.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.error.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button clickHandler={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    )
}


const ErrorModal = (props) => {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(
                <Backdrop {...props}/>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ModalOverlay {...props}/>,
                document.getElementById( 'modal-root')
            )}
        </React.Fragment>
    )
}

export default ErrorModal;