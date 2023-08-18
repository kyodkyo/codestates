import react, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { NavLink, useNavigate } from 'react-router-dom';

import { TbSearch } from 'react-icons/tb';
import { IoClose } from 'react-icons/io5';
import { SearchMenuActions } from '../../store/ui-slice/SearchMenu-slice';

const SearchBar = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchOpen = useSelector(
    (state: RootState) => state.searchMenu.clicked
  );

  useEffect(() => {
    searchOpen &&
      setTimeout(() => document.getElementById('search')!.focus(), 400);
  });

  const inputHandler = (e: react.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const afterSearch = () => {
    if (!text) return;
    dispatch(SearchMenuActions.close());
    navigate(`/questions/${text}`);
    setText('');
    document.getElementById('search')!.blur();
  };

  const searchHandler = (e: react.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    afterSearch();
  };

  const searchButtonHandler = () => {
    afterSearch();
  };

  const clearHandler = () => {
    setText('');
  };

  return (
    <form onSubmit={searchHandler}>
      <StyledSearchBar open={searchOpen}>
        <div className="search">
          <NavLink onClick={searchButtonHandler} to={`/questions/${text}`}>
            <TbSearch />
          </NavLink>
          <input
            type="search"
            id="search"
            placeholder={`  Search...`}
            onChange={inputHandler}
            value={text}
          />
          <IoClose onClick={clearHandler} />
        </div>
        <div className="underline" />
      </StyledSearchBar>
    </form>
  );
};

export default SearchBar;

const StyledSearchBar = styled.div<{ open: boolean }>`
  z-index: 50;
  background: ${({ theme }) => theme.mode.background};
  position: fixed;
  right: 0;
  left: 0;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transform: ${(props) =>
    props.open ? css`translateY(64px)` : css`translateY(0px)`};

  transition: transform 0.4s;

  ${(props) =>
    props.open
      ? css`
          animation: searchBarShow 0.4s ease forwards;
        `
      : css`
          animation: searchBarHide 0.4s ease forwards;
        `};

  @keyframes searchBarHide {
    0% {
    }
    100% {
      visibility: hidden;
    }
  }

  @keyframes searchBarShow {
    0% {
      visibility: visible;
    }
    100% {
    }
  }

  .search {
    text-align: center;
    display: flex;
    width: 80%;
  }

  .underline {
    margin-top: -2px;
    height: 2px;
    width: calc(80% - 30px);
    margin-left: 30px;
    background-color: ${({ theme }) => theme.mode.searchBar};
  }

  svg {
    margin-right: 3px;
    margin-bottom: -7px;
    color: ${({ theme }) => theme.mode.searchBar};
    height: 27px;
    width: 27px;
    cursor: pointer;
  }

  input {
    height: 30px;
    flex: 1;
    border: none;
    background: transparent;
    font-size: 20px;
    color: ${({ theme }) => theme.mode.primaryText};
  }

  input:focus {
    outline: none;
  }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration {
    display: none;
  }
`;
