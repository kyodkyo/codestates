import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { media } from '../../style/media';
import { hamburgerMenuActions } from '../../store/ui-slice/hamburgerMenu-slice';
import { loginActions } from '../../store/ui-slice/login-slice';

const SideMenu = () => {
  const open = useSelector((state: RootState) => state.hamburgerMenu.checked);
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state.login.email);
  const menus = login
    ? [
        { name: 'QUESTIONS', path: '/questions' },
        { name: 'LOGOUT', path: '/' },
      ]
    : [
        { name: 'QUESTIONS', path: '/questions' },
        { name: 'LOGIN', path: '/login' },
        { name: 'SIGN UP', path: '/sign-up' },
      ];

  const sideMenuHandler = () => {
    dispatch(hamburgerMenuActions.close());
  };

  return (
    <StyledSideMenu open={open}>
      <div className="margin"></div>
      {menus.map((menu, index) => {
        if (menu.name === 'LOGOUT') {
          return (
            <li className="menu" key={index} onClick={sideMenuHandler}>
              <NavStyle
                onClick={() => dispatch(loginActions.logout())}
                to={menu.path}
              >
                {menu.name}
              </NavStyle>
            </li>
          );
        }
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
  position: fixed;
  top: 64px;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: ${({ theme }) => theme.mode.background};
  list-style: none;
  display: none;
  z-index: 1000;

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
