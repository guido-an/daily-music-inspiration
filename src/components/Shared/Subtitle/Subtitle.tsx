import React from 'react';
import styled from 'styled-components';

interface SubtitleProps {
    subtitleText: string;
}

const StyledTitle = styled.p`
    color: ${({theme}) => theme.colors.text}; 
    line-height: 1.5;
    max-width: 30rem;
`;

const Subtitle: React.FC<SubtitleProps> = ({ subtitleText }) => {
    return <StyledTitle>{subtitleText}</StyledTitle>;
};

export default Subtitle;
