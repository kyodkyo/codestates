import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { hamburgerMenuActions } from '../../store/ui-slice/hamburgerMenu-slice';
import { useEffect, useRef } from 'react';
import { RootState } from '../../store';
import { SearchMenuActions } from '../../store/ui-slice/SearchMenu-slice';

const HamburgerMenu = () => {
  const dispatch = useDispatch();
  const HamburgerMenuRef = useRef<HTMLInputElement>(null);
  const close = useSelector((state: RootState) => state.hamburgerMenu.closed);

  useEffect(() => {
    HamburgerMenuRef.current!.checked = false;
  }, [close]);

  const changeState = () => {
    dispatch(hamburgerMenuActions.change(HamburgerMenuRef.current!.checked));
    dispatch(SearchMenuActions.close());
  };
  return (
    <StyledHamburgerMenu>
      <input
        type="checkbox"
        id="trigger"
        onClick={changeState}
        ref={HamburgerMenuRef}
      />
      <label htmlFor="trigger">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className="sidebar"></div>
    </StyledHamburgerMenu>
  );
};

const StyledHamburgerMenu = styled.div`
  input[id='trigger'] {
    display: none;
  }

  label[for='trigger'] {
    /* border: 1px solid red; */
    width: 25px;
    height: 15px;
    display: block;
    position: relative;
    cursor: pointer;
  }
  label[for='trigger'] span {
    display: block;
    height: 3px;
    background-color: ${({ theme }) => theme.mode.themeIcon};
    left: 0;
    width: 100%;
    position: absolute;
    transition: 0.3s;
  }

  label[for='trigger'] span:nth-child(1) {
    top: 0;
  }

  label[for='trigger'] span:nth-child(2) {
    top: 50%;
  }

  label[for='trigger'] span:nth-child(3) {
    top: 100%;
  }

  input[id='trigger']:checked + label span:nth-child(1) {
    top: 50%;
    transform: rotate(45deg);
  }

  input[id='trigger']:checked + label span:nth-child(2) {
    opacity: 0;
  }

  input[id='trigger']:checked + label span:nth-child(3) {
    top: 50%;
    transform: rotate(-45deg);
  }
`;

export default HamburgerMenu;
