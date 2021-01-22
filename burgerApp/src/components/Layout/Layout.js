import Auxilary from '../../hoc/Auxilary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'

const layout = (props) => {
    return (
    <Auxilary>
        <Toolbar/>
        <main className={classes.Component}>
            {props.children}
        </main>
    </Auxilary>
    )
}

export default layout;