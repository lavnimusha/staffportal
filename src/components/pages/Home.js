import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Home extends Component {
  state = { authenticated: null };
    
  

  checkAuthentication = async() => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  login = async() => {
      console.log(this.props);
    this.props.auth.login('/');
  }

   logout = async() => {
    this.props.auth.logout('/');
  }

  render() {
    if (this.state.authenticated === null) return null;

    const mainContent = this.state.authenticated ?
      (<div>
          <p classNmae="lead">You have entered Staff portal,<Link to="/staff">click here</Link></p>
          <button className="btn btn-light btn-lg" onClick={this.logout}>Logout</button>
      </div>) :(<div><p className="lead">Sorry you do not have login access..</p>
          <button className="btn btn-dark btn-lg" onClick={this.login}>Login</button>
</div>)
      

    return (
      <div className="jumbotron">
        <h1 clssName="display-4">Staff Portal</h1>
        {mainContent}
      </div>
    );
  }
});
