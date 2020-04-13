import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

interface PageTemplateProps {}

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <>
      <PageBlock className="main-wrapper">
        <Header />

        {children}

        <Footer />
      </PageBlock>
      <a href="#top" className="scroll-to-top">
        <i className="fas fa-angle-up" aria-hidden="true"></i>
      </a>
    </>
  );
};

export default PageTemplate;

const PageBlock = styled.div``;
