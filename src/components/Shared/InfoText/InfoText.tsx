import React from 'react';
import styled from 'styled-components';

interface InfoTextProps {
    infoText: string;
}

const StyledInfoText = styled.p`
    font-size: 0.8rem;
    margin-top: 1.5rem;
`;

const InfoText: React.FC<InfoTextProps> = ({ infoText }) => {
    return <StyledInfoText>{infoText}</StyledInfoText>;
};

export default InfoText;
