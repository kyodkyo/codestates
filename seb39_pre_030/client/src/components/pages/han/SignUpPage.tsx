import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { GoMarkGithub } from 'react-icons/go';
import { Text } from '../../atoms/Text';
import { useSignup } from '../../../react-query/hooks/signupPage/useSignup';

export default function SignUpPage() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const [emailValid, setEmailVaild] = useState(false);
  const [pwdVaild, setPwdVaild] = useState(false);

  const [notAllow, setNowAllow] = useState(true);

  const singUp = useSignup();

  function signUpSubmit() {
    singUp({
      userId: userName,
      userPw: pwd,
      email: email,
    });
  }

  const handleEmail = (e: any) => {
    setEmail(e.target.value);
    const regex =
      // eslint-disable-next-line
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (regex.test(email)) {
      setEmailVaild(true);
    } else {
      setEmailVaild(false);
    }
  };

  const handlePwd = (e: any) => {
    setPwd(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;

    if (regex.test(pwd)) {
      setPwdVaild(true);
    } else {
      setPwdVaild(false);
    }
  };
  const handleUserName = (e: any) => {
    setUserName(e.target.value);
  };

  useEffect(() => {
    if (emailValid && pwdVaild) {
      setNowAllow(false);
      return;
    }
    setNowAllow(true);
  }, [emailValid, pwdVaild]);

  return (
    <StyledLogin>
      <div className="button">
        <button className="google">
          <FcGoogle className="google-icon" />
          Login with Google
        </button>
        <button className="git">
          <GoMarkGithub className="git-icon" />
          Login with Github
        </button>
      </div>
      <div className="page">
        <div className="contentWrap">
          <Text fontSize="md" fontWeight="semiBold">
            UserName
          </Text>
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="example@gmail.com"
              value={userName}
              onChange={handleUserName}
            />
          </div>
          <Text className="user-email" fontSize="md" fontWeight="semiBold">
            UserEmail
          </Text>
          <div className="inputWrap">
            <input
              type="text"
              className="input"
              placeholder="example@gmail.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="errorMessageWrap">
            {/* 이메일 유효성검사 */}
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>
          <div style={{ marginTop: '26px' }} className="inputTitle">
            <Text fontSize="md" fontWeight="semiBold">
              Password
            </Text>
          </div>
          <div className="inputWrap">
            <input
              type="password"
              className="input"
              placeholder="영문,숫자,특수문자 포함 8글자 이상"
              value={pwd}
              onChange={handlePwd}
            />
          </div>
          <div className="errorMessageWrap">
            {/* 비밀번호 유효성검사 */}
            {!pwdVaild && pwd.length > 0 && (
              <div>영문,숫자,특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
          <button
            onClick={signUpSubmit}
            disabled={notAllow}
            className="bottomButton"
          >
            <Text
              fontWeight={pwdVaild ? 'bold' : ''}
              textColor={pwdVaild ? 'white' : ''}
            >
              SignUp
            </Text>
          </button>
        </div>
      </div>
    </StyledLogin>
  );
}

const StyledLogin = styled.div`
  display: flex;
  justify-content: center;
  width: 320px;
  box-shadow: 0 10px 25px rgb(0 0 0 / 5%), 0 20px 48px rgb(0 0 0 / 5%),
    0 1px 4px rgb(0 0 0 / 10%);
  padding: 24px;
  margin: 3rem auto 3rem;
  border-radius: 7px;
  box-sizing: inherit;
  display: block;

  .user-email {
    margin-top: 10px;
  }
  ${Text} {
    cursor: pointer;
  }

  .button {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 5px;
  }
  .google {
    width: 100%;
    height: 48px;
    border: none;
    font-weight: 700;
    background-color: #bf360c;
    border-radius: 64px;
    color: white;
    margin-top: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .git {
    width: 100%;
    height: 48px;
    border: none;
    font-weight: 700;
    background-color: #2f3337;
    border-radius: 64px;
    color: white;
    margin-top: 16px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .google-icon {
    font-size: large;
    margin-right: 3px;
  }
  .git-icon {
    font-size: large;
    margin-right: 3px;
  }

  .contentWrap {
    margin-top: 26px;
    flex: 1;
  }

  .inputWrap {
    display: flex;
    border-radius: 8px;
    padding: 16px;
    margin-top: 8px;
    background-color: white;
    border: 1px solid #e2e0e0;
  }

  .input {
    width: 100%;
    outline: none;
    border: none;
    height: 15px;
    font-size: 14px;
    font-weight: 400;
  }
  .input::placeholder {
    color: white;
  }
  .errorMessageWrap {
    margin-top: 8px;
    color: red;
    font-size: 12px;
  }
  .bottomButton {
    width: 100%;
    height: 48px;
    border: none;
    font-weight: 700;
    background-color: #0a95ff;
    border-radius: 64px;
    color: white;
    margin-top: 16px;
    cursor: pointer;
  }
  .signup {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
`;
