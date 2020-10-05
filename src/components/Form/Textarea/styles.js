import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;

  textarea {
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 8px;
    box-shadow: inset 0 0 2px -1px #000;
    width: 100%;
    min-height: 260px;

    padding: 8px 16px;

    resize: vertical;
  }

  > span {
    color: var(--p-color);
    font-weight: bold;
    align-self: flex-start;
    position: absolute;
    bottom: -20px;
  }
`;
