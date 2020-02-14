import React, { Component } from 'react'

export default class Staff extends Component {
    state ={
        currentUserName: '',
        currentUserEmail:''
    }
    componentDidMount(){
        const idToken = JSON.parse(localStorage.getItem('okta-token-storage'));
        this.setState({
            currentUserEmail:idToken.idToken.claims.email,
            currentUserName: idToken.idToken.claims.name
        });
    }
    render() {
        
        return (
            <div>
                <p> {this.state.currentUserName} E-mail is{this.state.currentUserEmail} </p>
                 
            </div>
        )
    }
}
