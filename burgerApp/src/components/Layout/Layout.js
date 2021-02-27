import React, {Component} from 'react'

import Auxilary from '../../hoc/Auxilary/Auxilary'
import classes from './Layout.module.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component {

    state = {
        showSideDrawer: false,
    }

    sideDrawerClosed = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerOpened = () => {
        this.setState( (prevState) => {
            return{ showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <Auxilary>
                <Toolbar drawerToggleClicked={this.sideDrawerOpened}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosed}/>
                <main className={classes.Component}>
                    {this.props.children}
                </main>
            </Auxilary>
        )
    }
}

export default Layout;