import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  padding: 16px;
`;

export const ProfileHeader = styled.div`
  display: grid;
  grid-template-columns: 80% 1fr;
`;

export const ProfileHeaderInfo = styled.div`
  display: flex;
`;

export const AvatarInput = styled.div`
  position: relative;
  width: 116px;
  grid-area: avatar;

  img {
    width: 116px;
    height: 116px;
    border-radius: 50%;
    border: 1px solid #eee;

    object-fit: contain;
  }

  label {
    position: absolute;
    cursor: pointer;
    width: 32px;
    height: 32px;
    color: ${(props) => props.theme.colors.secondary};
    background: ${(props) => props.theme.colors.primary};
    border-radius: 50%;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: ${shade(0.1, '#F04E7F')};
    }

    input {
      display: none;
    }
  }
`;

export const AccountInfo = styled.div`
  margin-left: 32px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: #777;
    font-weight: normal;
  }
`;

export const AccountStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  strong {
    display: block;
  }

  span {
    display: block;
    background: ${(props) => props.theme.colors.purple};
    border-radius: 8px;
    color: ${(props) => props.theme.colors.white};
    font-size: 16px;
    font-weight: bold;
    padding: 8px 32px;
  }
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
