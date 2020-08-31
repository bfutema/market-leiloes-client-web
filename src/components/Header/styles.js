import styled from 'styled-components';

export const Container = styled.header`
  background: #fff;
  padding: 0 30px;
  box-shadow: 0 2px 4px -2px rgba(0, 0, 0, 0.2);

  position: fixed;
  top: 0;
  right: 0;
  left: 0;

  z-index: 1000;
`;

export const Content = styled.div`
  height: 64px;
  max-width: var(--max-width);
  margin: 0 auto;

  display: grid;
  grid-template-columns: 300px 1fr 1fr;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      width: 280px;

      &:hover {
        filter: brightness(90%);
      }
    }
  }

  aside {
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
`;

export const FormContent = styled.div`
  position: relative;

  width: 100%;
  max-width: 380px;

  margin: 0 auto;

  display: flex;
  align-items: center;

  input {
    width: 100%;

    height: 32px;

    border: 1px solid var(--f-color);
    border-radius: 8px;

    padding: 0 8px;

    transition: border 400ms;

    &:focus {
      border: 1px solid var(--p-color);
    }
  }

  button {
    position: absolute;
    right: 10px;

    &:hover {
      filter: brightness(90%);
    }
  }
`;

export const LoginContent = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  a {
    color: var(--p-color);
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: bold;

    position: absolute;
    right: 5px;

    &:hover {
      filter: brightness(90%);
    }
  }
`;

export const User = styled.div`
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  position: relative;
  height: 100%;

  &:hover ul {
    top: 62px;
    opacity: 1;
    visibility: initial;
  }
`;

export const UserAvatar = styled.div`
  width: 36px;
  height: 36px;

  border: 1px solid ${(props) => (props.hasProfile ? '#aaa' : '#222')};
  border-radius: 50%;

  margin-right: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #f0f0f0cc;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const UserInfo = styled.div`
  white-space: nowrap;

  margin-left: 8px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    color: #777;
    font-size: 12px;
    font-weight: bold;
  }

  strong {
    font-size: 14px;
    font-weight: bold;
  }
`;

export const UserLoggedContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  > button {
    cursor: pointer;

    margin-left: 32px;

    &:hover svg {
      filter: brightness(60%);
    }
  }
`;

export const Actions = styled.ul`
  position: absolute;
  top: 88px;
  left: 0;

  margin-top: 4px;
  padding: 8px 0;

  width: 168px;

  display: flex;
  flex-direction: column;
  background-color: #ffffff;

  border-radius: 4px;
  box-shadow: 0 4px 8px -4px rgba(0, 0, 0, 0.6);

  opacity: 0;

  visibility: hidden;

  transition: all 200ms;

  z-index: 1;

  li a,
  li button {
    font-size: 16px;
    color: #333;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    width: 100%;
    line-height: 48px;

    padding: 0 16px;
    border-radius: 4px;

    cursor: pointer;

    position: relative;

    svg {
      margin-right: 8px;
    }
  }

  li:hover a,
  li:hover button {
    background-color: #eee;
  }
`;
