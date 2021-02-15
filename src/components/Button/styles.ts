import styled from 'styled-components';

export const Button = styled.button`
    width: 100%;
    height: 40px;

    background-color: #FFF;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 700;
    font-size: 30px;
    color: black;


    cursor: pointer;

    transition: 0.2s;

    border-radius: 5px;

    outline: none;
    border: 1px solid #1e272e;

    &:hover {
        background-color: #FF0201;
        border: none;
        color: white;
    }
`;