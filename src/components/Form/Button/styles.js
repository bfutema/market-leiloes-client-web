import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  color: ${(props) => props.theme.colors.white};
  background: ${(props) => props.theme.colors.purple};
  border-radius: 4px;
  font-weight: bold;
  padding: 8px 16px;

  display: flex;
  align-items: center;

  &:hover {
    background: ${(props) => shade(0.2, props.theme.colors.purple)};
  }

  svg {
    margin-right: 4px;
  }
`;
