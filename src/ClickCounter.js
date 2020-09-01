import React,{ Component } from 'react';
import UpdatedComponent from './withCounter';

class ClickCounter extends Component{

  render(){
    const { count,increment } = this.props;
    return(
      <div>
        <button onClick={increment}>clicked { count } times </button>
      </div>
    );
  }
}

export default UpdatedComponent(ClickCounter);