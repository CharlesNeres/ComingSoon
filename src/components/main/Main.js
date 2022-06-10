import React from 'react';
import MainCss from './MainCss';
import myImage from '../../images/illustration-dashboard.png';

class Main extends React.Component{
    render(){
        return (
            <MainCss>
                <img src={myImage} alt="illustration dashboard" />
            </MainCss>
        )

    }
}

export default Main;