import styled from 'styled-components';

export const Loading = styled.div<{ active: boolean; }>`
    width: 250px;
    height: 10px;

    position: absolute;
    top: 0;
    left: 0;

    display: ${props => props.active ? "block" : "none"};

    background-color: #FF0201;


    animation-name: loading;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;


    @keyframes loading {
        0% {
            transform: translateX(-150%);
        }
        100% {
            transform: translateX(+290%);
        }
    }

`; 