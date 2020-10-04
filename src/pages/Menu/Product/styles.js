import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const PageTitle = styled.div`
  border-bottom: 1px solid #aaaaaa;
  padding-bottom: 8px;
  margin-bottom: 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 28px;
  }

  span {
    color: ${(props) => props.theme.colors.text};
    font-size: 14px;
  }
`;
