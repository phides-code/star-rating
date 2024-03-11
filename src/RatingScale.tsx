import { useState } from 'react';
import styled from 'styled-components';

const RatingScale = () => {
    const scale: number[] = [];
    for (let i = 1; i <= 10; i++) {
        scale.push(i);
    }

    const [hoveredRating, setHoveredRating] = useState<number | null>(null);
    const [selectedRating, setSelectedRating] = useState<number | null>(null);

    const handleHover = (rating: number) => {
        setHoveredRating(rating);
    };

    const handleClick = (rating: number) => {
        setSelectedRating(rating);
    };

    const handleLeave = () => {
        if (selectedRating !== 0) {
            setHoveredRating(selectedRating);
        }
    };

    const displayedSelectedRating: number | null =
        selectedRating !== null ? selectedRating * 0.5 : null;

    return (
        <Wrapper>
            <QuestionText>
                How many stars would you give to our Online Code Editor?
            </QuestionText>
            <Scale>
                {scale.map((rating, index) => {
                    const starColor: string =
                        rating > (hoveredRating as number) ? 'grey' : 'yellow';

                    const side: string = index % 2 === 0 ? 'left' : 'right';

                    const imageFilename = starColor + '-' + side + '.png';

                    return (
                        <Rating
                            src={imageFilename}
                            key={rating}
                            onMouseOver={() => handleHover(rating)}
                            onClick={() => handleClick(rating)}
                            onMouseLeave={handleLeave}
                        />
                    );
                })}
            </Scale>
            <div>Selected Rating: {displayedSelectedRating}</div>
        </Wrapper>
    );
};

const Wrapper = styled.div``;

const QuestionText = styled.div``;

const Scale = styled.div`
    display: flex;
`;

const Rating = styled.img`
    height: 4.593rem;
`;

export default RatingScale;
