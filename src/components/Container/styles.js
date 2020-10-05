import styled, { css } from 'styled-components';

export const Content = styled.section`
  width: 95%;
  margin: 64px auto 64px;

  ${(props) =>
    props.grid &&
    css`
      display: grid;
      grid-template-columns: ${props.grid};
      gap: 8px;
    `}
`;

export const Card = styled.div`
  border: none;
  border-radius: 8px;
  background-color: #fff;

  min-height: 70vh;

  margin-top: 16px;
  padding: 16px;

  ${(props) =>
    props.gridCard &&
    css`
      display: grid;
      grid-template-columns: ${props.gridCard};
      gap: 8px;
    `}
`;
