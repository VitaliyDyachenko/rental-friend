import React, { Component } from 'react';
import Loader from '../common/loader.jsx';
import { callGet } from './services/fetchService.jsx';

const ComponentWithFetching = (url) => (Comp) =>
  class WithFetching extends Component {
    
    constructor(props) {
      super(props);
      
      this.state = {
        data: {},
        isLoading: false,
        error: null,
      };
    }

    componentDidMount() {
      this.setState({ isLoading: true });
    
      callGet(url)
        .then(data => this.setState({ data, isLoading: false }))
        .catch(error => 
            {
                this.setState({ error, isLoading: false });
            }
        );
    }

    render() {
      return (<div>
        {this.state.isLoading ? ( <Loader/>): (<Comp { ...this.props } { ...this.state } />)}
      </div>)
    }
  }

  export default ComponentWithFetching;
