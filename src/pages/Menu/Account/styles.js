import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
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

  > span {
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
