import { useState } from 'react';
import styled from 'styled-components';
import FeedbackResponse from './FeedbackResponse';

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

    return (
        <Wrapper>
            <Scale>
                {scale.map((rating, index) => {
                    let side = 'right';
                    let gapWidth = '2.5rem';

                    if (index % 2 === 0) {
                        side = 'left';
                        gapWidth = '0';
                    }

                    const starColor: string =
                        rating > (hoveredRating as number) ? 'grey' : 'yellow';

                    const imageFilename = starColor + '-' + side + '.png';

                    return (
                        <Rating
                            src={imageFilename}
                            key={rating}
                            onMouseOver={() => handleHover(rating)}
                            onClick={() => handleClick(rating)}
                            onMouseLeave={handleLeave}
                            style={{
                                paddingRight: gapWidth,
                            }}
                        />
                    );
                })}
            </Scale>
            <FeedbackResponse rating={selectedRating as number} />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;
`;

const Scale = styled.div``;

const Rating = styled.img`
    height: 4.593rem;
`;

export default RatingScale;
