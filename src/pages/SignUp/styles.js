import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  border: none;
  border-radius: 8px;
  background-color: #fff;

  width: 70%;

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

  hr {
    border: 0.5px solid var(--p-color);
    margin: 10px 0;
  }
`;

export const Content = styled.div`
  width: 100%;

  margin: 16px auto;

  fieldset.active {
    display: block;
  }

  fieldset.hide {
    display: none;
  }

  button {
    margin-bottom: 36px;
  }
`;

export const Items = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const LeftItems = styled.div`
  padding: 8px 16px;
  border-right: 1px solid var(--p-color);
`;

export const RightItems = styled.div`
  padding: 8px 16px;
  border-left: 1px solid var(--p-color);
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;

  margin: 25px 0;

  position: relative;

  label {
    color: var(--f-color);
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  input,
  select {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    box-shadow: inset 0 0 2px -1px #000;

    padding: 8px 4px;
  }

  span {
    color: var(--p-color);
    font-weight: bold;
    align-self: flex-start;
    position: absolute;
    bottom: -20px;
  }

  &:hover label {
    color: var(--p-color);
  }

  &:hover input {
    border: 1px solid var(--p-color);
  }

  &:first-child {
    margin-top: 0;
  }
`;

export const Steps = styled.ul`
  margin: 30px 16px 30px;

  overflow: hidden;
  color: var(--f-color);
  opacity: 0.7;

  & .active {
    color: var(--p-color);
  }

  li {
    list-style-type: none;
    font-size: 16px;
    width: 25%;
    float: left;
    position: relative;
    font-weight: 400;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &#account:before {
      font-family: FontAwesome;
      content: '\f13e';
    }

    &#personal:before {
      font-family: FontAwesome;
      content: '\f007';
    }

    &#documents:before {
      font-family: FontAwesome;
      content: '\f030';
    }

    &#confirm:before {
      font-family: FontAwesome;
      content: '\f00c';
    }

    &:before {
      width: 40px;
      height: 40px;
      line-height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      color: #fff;
      background: var(--f-color);
      border-radius: 50%;
      margin: 0 auto 10px auto;
      padding: 2px;
    }

    &:after {
      content: '';
      width: 100%;
      height: 2px;
      background: var(--f-color);
      position: absolute;
      left: 0;
      top: 25px;
      z-index: -1;
    }

    &.active:before,
    &.active:after {
      background: var(--p-color);
    }
  }
`;

export const ProgressBar = styled.div`
  height: 20px;
  margin: 0 16px;

  div {
    width: ${(props) => props.width}%;
    background-color: var(--p-color);
  }
`;

export const Title = styled.div`
  margin: 22px 0;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 20px;
  }

  span:nth-of-type(1) {
    color: var(--p-color);
  }

  span:nth-of-type(2) {
    color: var(--f-color);
  }
`;

export const Messages = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;

  strong {
    display: block;

    color: var(--p-color);
    font-size: 32px;
    font-weight: bold;
    text-transform: uppercase;

    margin: 80px 0 0;
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  span {
    display: block;

    color: var(--p-color);
    font-size: 16px;
    font-weight: 600;
  }
`;

export const Actions = styled.div`
  padding: 0 16px;
  margin-top: 30px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.5px;
    text-transform: uppercase;

    background-color: var(--p-color);
    border-radius: 8px;

    padding: 4px 16px;

    transition: background 0.2s;

    & + button {
      margin-left: 10px;
    }

    &:hover {
      background-color: ${darken(0.09, '#F04E7F')};
    }
  }
`;
