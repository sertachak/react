import React, {Component} from 'react'

import Aux from '../Auxilary/Auxilary'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return (class extends Component {

        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use( (req) => {
                this.setState({error: null})
                return req;
            })

            axios.interceptors.response.use( (response) => {
                return response;
            }, (error) => {
                this.setState({error: error})
            })
        }

        errorIsHandled = () => {
            this.setState({error: null})
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error} closeBackdrop={this.errorIsHandled}>
                        {this.state.error? this.state.error.message: null}
                    </Modal>
                    <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
    })
}

export default withErrorHandler;
