import Card from '../../Card/Card'
import Button from "../Button/Button";
import classes from './Error.module.css'

const ErrorModal = (props) => {
    return (
        <div>
            <div className={classes.backdrop} onClick={props.onConfirm}/>
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
        </div>
    )
}

export default ErrorModal;