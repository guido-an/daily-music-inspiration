import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const StyledLayout = styled.div`
  margin: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    margin: 4rem 20rem 6rem;
  }
  
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <main>{children}</main>
    </StyledLayout>
  );
};

export default Layout;
