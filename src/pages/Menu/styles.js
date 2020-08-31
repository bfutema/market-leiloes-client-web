import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.section`
  width: 95%;
  margin: 64px auto 64px;
`;

export const Title = styled.div`
  margin-top: 16px;

  border-bottom: 1px solid #aaa;
`;

export const WrapperContainer = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  gap: 16px;
`;

export const AsideContainer = styled.div`
  border: none;
  border-radius: 8px;
  background-color: #fff;

  min-height: 70vh;

  margin-top: 16px;
  padding: 8px 0;
`;

export const PageWrapperContainer = styled.div`
  border: none;
  border-radius: 8px;
  background-color: #fff;

  min-height: 70vh;

  margin-top: 16px;
  padding: 8px 0;
`;

export const NavigationItem = styled.div`
  width: 100%;

  background: ${(props) =>
    props.active ? props.theme.colors.primary : 'transparent'};
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  margin: 16px 0;

  button,
  a {
    position: relative;
    width: 100%;

    color: ${(props) =>
      props.active ? props.theme.colors.white : props.theme.colors.text};
    font-size: 18px;
    text-align: left;

    outline: none;
    padding: 12px 32px;

    display: flex;
    align-items: center;

    transition: background 200ms;

    &:hover {
      background: ${(props) =>
        props.active ? darken(0.06, props.theme.colors.primary) : '#f0f0f0cc'};
    }

    svg {
      margin-right: 8px;
    }
  }
`;
