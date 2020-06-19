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
  grid-template-columns: 280px 1fr 280px;
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
    /* text-transform: uppercase; */

    position: absolute;
    right: 5px;

    &:hover {
      filter: brightness(90%);
    }
  }
`;
