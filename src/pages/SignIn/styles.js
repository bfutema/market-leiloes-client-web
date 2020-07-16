import styled from 'styled-components';

export const Container = styled.div`
  border: none;
  border-radius: 8px;
  background-color: #fff;

  width: 60%;

  margin: 124px auto 64px;
  padding: 32px;

  h1 {
    color: var(--f-color);
    font-size: 30px;
    font-family: 'Nunito';
    font-weight: normal;
    text-align: center;
  }

  hr {
    border: 0.5px solid var(--p-color);
    margin: 10px 0;
  }
`;

export const Content = styled.div`
  width: 50%;
  min-width: 350px;

  margin: 16px auto;

  .item {
    display: flex;
    flex-direction: column;

    margin: 25px 0;

    label {
      color: var(--f-color);
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    input {
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 8px;
      box-shadow: inset 0 0 2px -1px #000;

      padding: 8px 4px;
    }

    &:hover label {
      color: var(--p-color);
    }

    &:hover input {
      border: 1px solid var(--p-color);
    }

    &:nth-of-type(2) {
      margin-bottom: 40px;
    }
  }

  button {
    margin-bottom: 36px;
  }
`;

export const Button = styled.button`
  display: block;

  width: 100%;

  color: #fff;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.5px;
  text-transform: uppercase;

  background-color: var(--p-color);
  border-radius: 8px;

  padding: 4px;
  margin: 5px 0;

  position: relative;

  &:hover {
    filter: brightness(90%);
  }
`;

export const NavigationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    width: 100%;

    text-align: center;

    padding: 8px 30px;
    margin: 10px 0;

    &:nth-of-type(1) {
      border-right: 1px solid var(--p-color);
    }

    &:nth-of-type(2) {
      border-left: 1px solid var(--p-color);
    }

    span {
      font-size: 16px;
      margin-bottom: 22px;
      display: block;
    }

    a {
      display: block;

      width: 100%;

      color: #fff;
      font-size: 16px;
      font-weight: bold;
      letter-spacing: 0.5px;
      text-transform: uppercase;

      background-color: var(--p-color);
      border-radius: 8px;

      padding: 4px;
      margin: 5px 0;

      position: relative;

      &:hover {
        filter: brightness(90%);
      }
    }
  }
`;
