import styled from 'styled-components';

const FooterCss = styled.footer`
    text-align: center;
    padding-top: 4em;
    padding-bottom: 4em;

    ul li{
        display: inline-block; 
        
        /* links */
        a > *{
            color: var(--primary-color-blue);
            border: 1px solid var(--secondary-color-pale-blue);            
            width: 15px; 
            height: 15px ;
            padding: .5em;
            border-radius: 50%;            

            &:hover{
                background-color: var(--primary-color-blue);
                border: 1px solid var(--primary-color-blue);
                color: #fff;
            }
        }
    }

    ul li:nth-child(2){
        color: blue;
        margin-left: 1em;
        margin-right: 1em;
    }

    p{
        font-size: 70%;
        color: var(--neutral-color-gray);
        margin-top: 2em;
    }
`;

export default FooterCss;