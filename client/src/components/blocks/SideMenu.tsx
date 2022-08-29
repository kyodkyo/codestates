import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { media } from '../../style/media';

const SideMenu = () => {
  const open = useSelector((state: RootState) => state.hamburgerMenu.checked);

  const menus = [
    { name: 'HOME', path: '/' },
    { name: 'QUESTIONS', path: '/questions' },
    { name: '개별질문창(임시)', path: '/question' },
  ];

  return (
    <StyledSideMenu open={open}>
      <div className="margin"></div>
      {menus.map((menu, index) => {
        return (
          <li className="menu" key={index}>
            <NavStyle to={menu.path}>{menu.name}</NavStyle>
          </li>
        );
      })}
    </StyledSideMenu>
  );
};

export default SideMenu;

const StyledSideMenu = styled.ul<{ open: boolean }>`
  position: absolute;
  width: 250px;
  height: 80%;
  background-color: ${({ theme }) => theme.mode.background};
  list-style: none;
  display: none;
  margin-top: -1px;

  ${media.custom('768px')} {
    display: block;
  }

  .margin {
    margin-top: 30px;
  }
  .menu {
    display: block;
    margin-top: 15px;
    margin-left: 30px;
  }

  ${(props) =>
    props.open
      ? css`
          transform: translateX(0px);
        `
      : css`
          transform: translateX(-100%);
        `};

  transition: transform 0.4s;

  li {
    transition: 0.1s;
  }

  li:hover {
    transform: scale(1.1, 1.1) translateX(10px);
  }
`;

const NavStyle = styled(NavLink)`
  color: ${({ theme }) => theme.mode.primaryText};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  &:link,
  &:visited {
    text-decoration: none;
  }
`;
