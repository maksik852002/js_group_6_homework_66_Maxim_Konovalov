import React, { Component, Fragment } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';

const withLoaderHandler = (WrappedComponent, axios) => {
  return class WithLoader extends Component {

    constructor(props) {
      super(props);

      this.state = {
        error:null,
        loading:false,
      }

    axios.interceptors.request.use(req => {
      this.setState({loading:!this.state.loading})
      return req
    })

    axios.interceptors.response.use(res => {
      this.setState({loading:!this.state.loading})
      return res
    }, error => {
      this.setState({loading:!this.state.loading})
      throw error
    })
  }

    render () {
      return (
        <Fragment>
          {this.state.loading && <Spinner/>}
          <WrappedComponent {...this.props}/>
        </Fragment>
      )
    }
  }
};

export default withLoaderHandler;