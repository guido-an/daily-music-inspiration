import React from 'react';
import styled from 'styled-components';

interface TitleProps {
    titleText: string;
}

const StyledTitle = styled.h1`
    color: ${({theme}) => theme.colors.primary}; 
    max-width: 30rem;
`;

const Title: React.FC<TitleProps> = ({ titleText }) => {
    return <StyledTitle>{titleText}</StyledTitle>;
};

export default Title;
