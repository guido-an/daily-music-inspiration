import React from 'react';
import styled from 'styled-components';

interface OptionItemProps {
    optionText: string;
    selected: boolean;
}

const StyledOption = styled.p`
    color: ${({theme}) => theme.colors.primary}; 
    display: flex;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.lightYellow};
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    border-radius: 0.25rem;

    &.selected {
        background-color: ${({theme}) => theme.colors.darkYellow};
    }

    &:hover {
        cursor: pointer;
    }
`;

const OptionItem: React.FC<OptionItemProps> = ({ optionText, selected }) => {
    return (
        <StyledOption className={selected ? 'selected' : ''}>
            {optionText}
        </StyledOption>
    );
};
export default OptionItem;
