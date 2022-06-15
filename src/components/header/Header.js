import React from 'react';
import logo from '../../images/logo.svg'; 
import HeaderCss from './HeaderCss';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '',
            validEmail: true,
            messageError: ''          
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.validateEmail();
    }

    handleChange(event) {    
        this.setState({value: event.target.value});  
    }

    validateEmail(){
        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
        if(this.state.value){
            if(this.state.value.match(mailformat)){
                // do something if needed   
                this.setState({
                    validEmail: true,
                    messageError: ''
                });                             
            }else{                
                this.setState({
                    validEmail: false,
                    messageError: 'Please provide a valid email address'
                });                
            }
        }else{            
            this.setState({
                validEmail: false,
                messageError: 'Whoops! It looks like you forgot to add your email'
            });
        }
    }

    render(){
        return(
            <HeaderCss validEmail={this.state.validEmail}>
                <img src={logo} alt="logo ping coming soon page" /> 
                <h1>We are launching <strong>soon!</strong></h1>
                <h3>Subscribe and get notified</h3>
                <form onSubmit={this.handleSubmit}>
                    <input placeholder="your email adress..." value={this.state.value} onChange={this.handleChange}/>  
                    <button type="submit">Notify Me</button>
                    {this.state.messageError 
                        ? <p id='msgError'>{this.state.messageError}</p> 
                        : <></>
                    }                    
                </form>
            </HeaderCss>
        )
    }
}

export default Header;