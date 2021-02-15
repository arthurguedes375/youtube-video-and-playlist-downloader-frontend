import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    background-color: #1e272e;

    color: white;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const DownloadBox = styled.div`
    width: 480px;

    position: relative;
    overflow: hidden;
    
    background-color: white;

    border-radius: 5px;

    color: #1e272e;

`;

export const DownloadContainer = styled.form`
    width: 87%;
    padding: 25px 0;

    margin: 0 auto;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-top: 5px;

        span {
            color: #FF0201;
        }
    }

    .inputContainer {

        height: 220px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        label {
            font-weight: 700;   
        }

        margin: 35px 0;
        
    }
`;