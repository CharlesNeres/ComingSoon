import React from 'react';
import logo from '../../images/logo.svg'; 

class Header extends React.Component{
    render(){
        return(
            <header>
                <img src={logo} alt="logo ping coming soon page" /> 
                <h1>We are launching <strong>soon!</strong></h1>
                <h3>Subscribe and get notified</h3>
                <form>
                    <input placeholder="your email adress..." />  
                    <button type="submit">Notify Me</button>
                </form>
            </header>
        )
    }
}

export default Header;