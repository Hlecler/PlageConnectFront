// Modules
import React from 'react';

// http
import client from '../../request/client';

import { Button } from 'reactstrap';

// Styles
import '../../style/home.css';

class Home extends React.Component{
  constructor(){
    super();    
    this.state = {
      warning: ''
    };
  }


  componentDidMount(){
    if(!client.me){
      this.props.history.push('/login')
    }
}

  render() {
    return (
      
    <div>  
      <div className="headerContent ">
        <div className="homepage-background"/>
        <h3>Bonjour {client.me}</h3>
      </div>
      <div>
        <Button onClick={this.handleMoodleConnection} color="primary">Redirection vers Moodle</Button>{' '}
      </div>
      <p>{this.state.warning}</p>
    </div>
    );
  }

  handleMoodleConnection = async e => 
  {
    e.preventDefault();
    this.setState({warning : 'error'})
    this.props.history.push('/moodle')
  };
}



// Export connected Components
export default Home;