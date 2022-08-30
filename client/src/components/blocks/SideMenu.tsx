import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { media } from '../../style/media';
import { hamburgerMenuActions } from '../../store/hamburgerMenu-slice';

const SideMenu = () => {
  const open = useSelector((state: RootState) => state.hamburgerMenu.checked);
  const dispatch = useDispatch();
  const menus = [
    { name: 'HOME', path: '/' },
    { name: 'QUESTIONS', path: '/questions' },
  ];

  const sideMenuHandler = () => {
    dispatch(hamburgerMenuActions.close());
  };

  return (
    <StyledSideMenu open={open}>
      <div className="margin"></div>
      {menus.map((menu, index) => {
        return (
          <li className="menu" key={index} onClick={sideMenuHandler}>
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
  height: 60%;
  background-color: ${({ theme }) => theme.mode.background};
  list-style: none;
  display: none;
  z-index: 100;
  margin-top: 64px;

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

  transform: ${(props) =>
    props.open ? css`translateX(0px)` : css`translateX(-100%)`};

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
