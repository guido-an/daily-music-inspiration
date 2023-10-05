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
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <header></header>
      <main>{children}</main>
      <footer></footer>
    </StyledLayout>
  );
};

export default Layout;
