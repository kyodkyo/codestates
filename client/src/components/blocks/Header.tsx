import React from 'react';
import { NavLink } from 'react-router-dom';

import styled from 'styled-components';
import { media } from '../../style/media';
import { Text } from '../atoms/Text';
import Toggle from '../atoms/Toggle';
import { TbSearch } from 'react-icons/tb';
import HamburgerMenu from '../atoms/HamburgerMenu';

export interface IToggle {
  themeMode: string;
  toggleTheme: () => void;
}

const Header = ({ themeMode, toggleTheme }: IToggle) => {
  const menus = [
    { name: 'QUESTIONS', path: '/questions' },
    { name: '개별질문창(임시)', path: '/question' },
  ].map((menu, idx) => (
    <li className="menu" key={idx}>
      <NavStyle to={menu.path}>{menu.name}</NavStyle>
    </li>
  ));

  return (
    <StyledHeader>
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
            <Toggle themeMode={themeMode} toggleTheme={toggleTheme} />
          </li>
          <li className="search-menu">
            <TbSearch />
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
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
    svg {
      margin-top: 0.2rem;
      color: ${({ theme }) => theme.mode.themeIcon};
      height: 27px;
      width: 27px;
      cursor: pointer;
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
