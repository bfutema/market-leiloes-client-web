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
  justify-content: flex-start;

  > div:nth-of-type(1) {
    width: 36px;
    height: 36px;

    border: 1px solid #222;
    border-radius: 50%;

    margin-right: 8px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: #f0f0f0cc;
    }
  }

  > div:nth-of-type(2) {
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
  }
`;

export const UserLoggedContent = styled.div`
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
