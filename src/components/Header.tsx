import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const Header = () => {
  return (
    <HeaderBlock className="header-style1 menu_area-light">
      <div id="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <div className="top-bar-info">
                <ul>
                  <li>
                    <i className="fas fa-mobile-alt"></i>010-4355-6493
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>modernstudycafe@naver.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-md-3 xs-display-none">
              <ul className="top-social-icon">
                <li>
                  <a
                    href="https://blog.naver.com/modernstudycafe"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Naver />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/modernstudy_eungye"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Instagram className="fab fa-instagram"></Instagram>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </HeaderBlock>
  );
};

export default Header;

const HeaderBlock = styled.header``;

const Naver = styled.span`
  &:before {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
    font-weight: 600;
    content: 'N';
    color: #62c15b;
  }
  &:hover:before {
    color: #bcffb5;
  }
`;

const Instagram = styled.i`
  font-size: 16px;
  color: #ff77c2;
  &:hover {
    color: #ffbfff;
  }
`;
