import styled from 'styled-components';

interface FeedbackResponseProps {
    rating: number;
}

const FeedbackResponse = ({ rating }: FeedbackResponseProps) => {
    switch (true) {
        case rating === 10:
            return (
                <Wrapper>
                    Excellent! We're thrilled to hear you had such a positive
                    experience. Thank you for choosing our platform
                </Wrapper>
            );
        case rating > 7:
            return (
                <Wrapper>
                    Thank you for your positive feedback! We're glad to know
                    that you had a great experience and we appreciate your
                    support.
                </Wrapper>
            );
        case rating > 4:
            return (
                <Wrapper>
                    Thank you for your feedback. We're sorry to hear that your
                    experience wasn't perfect. We would love to hear more about
                    your concerns to see how we can improve.
                </Wrapper>
            );
        case rating > 2:
            return (
                <Wrapper>
                    We apologize for the inconvenience you experienced. We
                    appreciate your feedback and would like to work with you to
                    address any issues.
                </Wrapper>
            );
        case rating > 0:
            return (
                <Wrapper>
                    We're sorry to hear that you had a bad experience. We would
                    like to learn more about what happened and how we can make
                    things right.
                </Wrapper>
            );
        default:
            return <Wrapper />;
    }
};

const Wrapper = styled.div`
    margin: 2rem 0 0;
    height: 2rem;
`;

export default FeedbackResponse;
