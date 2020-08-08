import styled from 'styled-components';

export const Container = styled.div`
  border: none;
  border-radius: 8px;
  background-color: #fff;

  width: 60%;

  margin: 124px auto 64px;
  padding: 32px;

  h1 {
    color: var(--p-color);
    font-size: 30px;
    font-family: 'Nunito';
    font-weight: normal;
    text-align: center;
    margin-bottom: 5px;
  }

  p {
    color: var(--f-color);
    font-size: 12px;
    font-family: 'Nunito';
    font-weight: 600;
    text-align: center;
  }
`;

export const Content = styled.div`
  width: 100%;

  margin: 16px auto;

  > div {
    width: 50%;
    min-width: 350px;

    margin: 16px auto;

    display: flex;
    flex-direction: column;

    position: relative;

    label {
      color: var(--f-color);
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 5px;
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

  hr {
    border: 0.5px solid var(--p-color);
    margin: 45px 0;
  }

  button {
    width: 50%;
    min-width: 350px;
    margin: 16px auto 36px auto;
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
