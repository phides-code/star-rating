import styled from 'styled-components';
import Card from './Card';
import { BackgroundColor } from './theme';

const App = () => {
    return (
        <Wrapper>
            <Card />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-color: ${BackgroundColor};
`;

export default App;
