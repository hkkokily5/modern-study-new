import React from 'react';
import styled from 'styled-components';

const Navigation = () => {
  return (
    <div className="navbar-default">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-12">
            <div className="menu_area alt-font">
              <Nav className="navbar navbar-expand-lg navbar-light no-padding">
                <div className="navbar-header navbar-header-custom">
                  <a href="/" className="navbar-brand">
                    <img id="logo" src="/assets/custom/logo1.png" alt="logo" />
                  </a>
                </div>

                <div className="navbar-toggler" />

                <ul
                  className="navbar-nav ml-auto"
                  id="nav"
                  style={{ display: 'none' }}
                >
                  <li>
                    <a href="/about">브랜드 스토리</a>
                  </li>
                  <li>
                    <a href="/divide">모던스터디 차별성</a>
                  </li>
                  <li>
                    <a href="/studyzone">인테리어 공간</a>
                    <ul>
                      <li>
                        <a href="/studyzone">스터디 존</a>
                      </li>
                      <li>
                        <a href="/privacyroom">1인 집중실</a>
                      </li>
                      <li>
                        <a href="/cafezone">카페 존</a>
                      </li>
                      <li>
                        <a href="/studyroom">스터디 룸</a>
                      </li>
                      <li>
                        <a href="/etcroom">기 타</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/event">이벤트&커뮤니티</a>
                  </li>
                  {/*
                  <li>
                    <a href="/family">가맹문의</a>
                  </li>
                  */}
                </ul>
              </Nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

const Nav = styled.nav``;
