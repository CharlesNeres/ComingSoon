import styled from 'styled-components';

const HeaderCss = styled.header`
    padding-top: 4em;
    padding-bottom: 4em;
    /* background-color: aliceblue; */
    text-align: center;

    h1{
        color: var(--neutral-color-gray);
        margin-top: 1.4em;
        font-size: 120%;

        strong{
            color: black;
        }
    }

    h3{
        margin-top: 2em;
        margin-bottom: 2em;
        font-size: 65%;
    }

    form > * {
        padding: 0.6em 0.8em;
        border-radius: 1.5em;
        border: 0;
        outline: 0;
    }

    form{
        /* position: relative; */

        input{            
            border: 1px solid ${props => props.validEmail ? "#c2d3ff" : "red"};
            width: 100%;

            @media screen and (min-width: 378px) {
                width: 20em;
            }
        }

        button{            
            background-color: var(--primary-color-blue);
            border: 1px solid var(--primary-color-blue);
            color: #fff;
            width: 100%;
            margin-top: 1em; 
            
            &:hover{
                background-color: #fff;
                color: var(--primary-color-blue);
                border: 1px solid var(--secondary-color-pale-blue);
                cursor: pointer;
            }

            @media screen and (min-width: 378px) {
                width: 9em; 
                margin-left: .5em;
            }
        }   
        
        #msgError{
            color: ${props => props.validEmail ? "green" : "red"};
        }
    }

        
`

export default HeaderCss;