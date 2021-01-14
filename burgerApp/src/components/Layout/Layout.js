import Auxilary from '../../hoc/Auxilary'
import classes from './Layout.module.css'

const layout = (props) => {
    return (
    <Auxilary>
        <div>SideDrawer, toolbar, backdrop</div>
        <main className={classes.Component}>
            {props.children}
        </main>
    </Auxilary>
    )
}

export default layout;