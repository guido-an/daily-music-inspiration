import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children: ReactNode;
}

const StyledLayout = styled.div`
   margin: 2rem;
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <StyledLayout>
      <header>
         progress bar here
      </header>
      <main>
        {children}
      </main>
      <footer/>
    </StyledLayout>
  );
};

export default Layout;
