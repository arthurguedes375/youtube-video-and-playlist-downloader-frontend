import { FC } from 'react';
import styled from 'styled-components';


const Home: FC = () => {
    return (
        <>
            <Title>My First react-components Page with next.js</Title>
        </>
    );
}

const Title = styled.h1`
  color: red;
`;

export default Home;
