import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { media } from '../../style/media';
import { Text } from '../atoms/Text';
import DarkModeButton from '../atoms/DarkModeButton';
import { TbSearch } from 'react-icons/tb';
import { MdOutlineClose } from 'react-icons/md';
import HamburgerMenu from '../atoms/HamburgerMenu';
import { useDispatch, useSelector } from 'react-redux';
import { SearchMenuActions } from '../../store/ui-slice/SearchMenu-slice';
import { RootState } from '../../store';
import { hamburgerMenuActions } from '../../store/ui-slice/hamburgerMenu-slice';
import { loginActions } from '../../store/ui-slice/login-slice';

const Header = () => {
  const dispatch = useDispatch();
  const searchOpen = useSelector(
    (state: RootState) => state.searchMenu.clicked
  );

  const login = useSelector((state: RootState) => state.login.email);

  const searchButtonHandler = () => {
    dispatch(SearchMenuActions.change());
    dispatch(hamburgerMenuActions.close());
  };

  const menuItem = login
    ? [
        { name: 'QUESTIONS', path: '/questions' },
        { name: 'LOGOUT', path: '/' },
      ]
    : [
        { name: 'QUESTIONS', path: '/questions' },
        { name: 'LOGIN', path: '/login' },
        { name: 'SIGN UP', path: '/sign-up' },
      ];

  const menus = menuItem.map((menu, idx) => {
    if (menu.name === 'LOGOUT') {
      return (
        <li
          className="menu"
          key={idx}
          onClick={() => dispatch(loginActions.logout())}
        >
          <NavStyle to={menu.path}>{menu.name}</NavStyle>
        </li>
      );
    } else {
      return (
        <li className="menu" key={idx}>
          <NavStyle to={menu.path}>{menu.name}</NavStyle>
        </li>
      );
    }
  });

  return (
    <StyledHeader open={searchOpen}>
      <li className="hamburger-menu">
        <HamburgerMenu />
      </li>
      <NavLink to="/" className="logo">
        <Text className="logo" fontSize="xl" fontWeight="bold">
          MyStackOverFlow
        </Text>
      </NavLink>
      <nav>
        <ul>
          {menus}
          <li>
            <DarkModeButton />
          </li>
          <li className="search-menu">
            <TbSearch className="search" onClick={searchButtonHandler} />
            <MdOutlineClose className="close" onClick={searchButtonHandler} />
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header<{ open: boolean }>`
  z-index: 100;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.mode.background};
  color: white;
  padding: 0 3%;
  border-bottom: ${({ theme }) => `1px solid ${theme.mode.divider}`};

  a:link,
  a:visited {
    text-decoration: none;
  }

  .logo {
    margin-left: 5px;
    margin-right: auto;
    display: block;
    cursor: pointer;

    ${media.custom('768px')} {
      display: none;
    }
  }

  .logo:hover,
  .logo:active {
    color: rgb(198, 198, 203);
  }

  .menu {
    display: block;
    margin-top: 2px;

    ${media.custom('768px')} {
      display: none;
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  li {
    margin: 0 1rem;
  }

  .menu:hover,
  .menu:active {
    color: rgb(198, 198, 203);
  }

  .hamburger-menu {
    display: none;

    ${media.custom('768px')} {
      display: block;
    }
  }

  .search-menu {
    margin-left: 1rem;

    svg {
      color: ${({ theme }) => theme.mode.themeIcon};
      height: 27px;
      width: 27px;
      cursor: pointer;
    }

    .search {
      display: ${(props) => (props.open ? 'none' : 'block')};
    }

    .close {
      display: ${(props) => (props.open ? 'block' : 'none')};
    }
  }
`;

const NavStyle = styled(NavLink)`
  color: ${({ theme }) => theme.mode.primaryText};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: ${({ theme }) => theme.mode.themeIcon};
    transition: width 0.2s;
  }

  &:hover::after {
    width: 100%;
  }

  &.active {
    color: ${({ theme }) => theme.mode.themeIcon};
  }

  &:link,
  &:visited {
    text-decoration: none;
  }
`;
