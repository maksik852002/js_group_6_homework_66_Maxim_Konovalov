import React, { Component, Fragment } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';

const withLoader = (WrappedComponent, axios) => {
  return class extends Component {

    constructor(props) {
      super(props);

      this.state = {
        loading:false,
      }

    axios.interceptors.request.use(req => {
      this.setState({loading:!this.state.loading})
      return req
    })

    axios.interceptors.response.use(res => {
      this.setState({loading:!this.state.loading})
      return res
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

export default withLoader;