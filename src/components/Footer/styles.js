import styled from 'styled-components';

export const Container = styled.footer`
  background: #fff;
  padding: 15px 30px;
  box-shadow: 0 -2px 4px -2px rgba(0, 0, 0, 0.2);

  margin-top: auto;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    display: flex;
    margin-bottom: 0;

    li {
      color: #777;
      cursor: pointer;
      font-size: 14px;
      font-weight: bold;

      & + li {
        margin-left: 25px;
      }

      &:hover {
        color: #222;
      }
    }
  }
`;
