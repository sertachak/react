import React, {Component} from 'react'

import Aux from '../Auxilary/Auxilary'
import Modal from '../../components/UI/Modal/Modal'

const withErrorHandler = (WrappedComponent, axios) => {
    return (class extends Component {

        state = {
            error: null,
            initialized: false
        }

        componentDidMount() {
            this.reqInterceptor = axios.interceptors.request.use( (req) => {
                this.setState({error: null})
                return req;
            })

            this.resInterceptor = axios.interceptors.response.use( (response) => {
                return response;
            }, (error) => {
                this.setState({error: error})
            })
            this.setState({initialized: true})
        }

        errorIsHandled = () => {
            this.setState({error: null})
        }

        componentWillUnmount() {
            console.log('Will unmount', this.reqInterceptor, this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        render() {
            const {initialized} = this.state;
            if(!initialized)
                return null
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
