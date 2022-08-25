import React from 'react';
import { Link } from 'react-router-dom'; //ㅇ

import styled from 'styled-components';
import { media } from '../../style/media';
import { Text } from '../atoms/Text';
import Toggle from '../atoms/Toggle';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TbSearch } from 'react-icons/tb';

export interface IToggle {
  themeMode: string;
  toggleTheme: () => void;
}

const Header = ({ themeMode, toggleTheme }: IToggle) => {
  return (
    <StyledHeader>
      <li className="hamburger-menu">
        <GiHamburgerMenu />
      </li>
      <Link to="/" className="logo">
        <Text className="logo" fontSize="xl" fontWeight="bold">
          MyStackOverFlow
        </Text>
      </Link>
      <nav>
        <ul>
          <li className="menu">
            <Link to="/questions">
              <Text className="menu" fontSize="md" fontWeight="semiBold">
                TODO
              </Text>
            </Link>
          </li>
          <li className="menu">
            <Link to="/question">
              <Text className="menu" fontSize="md" fontWeight="semiBold">
                SHOP
              </Text>
            </Link>
          </li>
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

  .logo {
    margin-left: 5px;
    margin-right: auto;
    display: block;
    cursor: pointer;

    ${media.custom('992px')} {
      display: none;
    }
  }

  .logo:hover,
  .logo:active {
    color: rgb(198, 198, 203);
  }

  .menu {
    display: block;
    cursor: pointer;

    ${media.custom('992px')} {
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

  a:link,
  a:visited {
    text-decoration: none;
  }

  .menu:hover,
  .menu:active {
    color: rgb(198, 198, 203);
  }

  .hamburger-menu {
    display: none;

    ${media.custom('992px')} {
      display: block;
    }

    svg {
      margin-top: 0.3rem;
      color: ${({ theme }) => theme.mode.themeIcon};
      height: 24px;
      width: 24px;
      cursor: pointer;
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
