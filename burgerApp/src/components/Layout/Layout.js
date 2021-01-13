import Auxilary from '../../hoc/Auxilary'

const layout = (props) => {
    return (
    <Auxilary>
        <div>SideDrawer, toolbar, backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxilary>
    )
}

export default layout;