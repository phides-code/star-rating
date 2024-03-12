import styled from 'styled-components';
import RatingScale from './RatingScale';

const Card = () => {
    return (
        <Wrapper>
            <QuestionText>
                How many stars would you give to our Online Code Editor?
            </QuestionText>
            <RatingScale />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    background-color: white;
    border-radius: 16px;
    max-width: 48.438rem;

    box-shadow: 10px 10px 4px 0px #ffffff66;
    padding: 3.75rem 3.75rem 0;
`;

const QuestionText = styled.div`
    font-size: 2.5rem;
`;

export default Card;
