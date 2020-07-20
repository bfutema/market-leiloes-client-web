import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;

  > div {
    width: 100%;
  }

  > span {
    color: var(--p-color);
    font-weight: bold;
    align-self: flex-start;
    position: absolute;
    bottom: -20px;
  }
`;
