import styled from 'styled-components';
import RatingScale from './RatingScale';

const Card = () => {
    return (
        <Wrapper>
            <RatingScale />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 16px;

    box-shadow: 10px 10px 4px 0px #ffffff66;
`;

export default Card;
