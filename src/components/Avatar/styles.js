import styled from 'styled-components';

export const Container = styled.ul`
  margin-top: 20px;

  li {
    color: #444;

    display: flex;
    align-items: center;
    justify-content: space-between;

    & + li {
      margin-top: 15px;
    }
  }
`;

export const FileInfo = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div:nth-of-type(1) {
    display: flex;
    flex-direction: column;

    span {
      font-size: 12px;
      color: #999;
      margin-top: 5px;

      button {
        border: 0;
        background: transparent;
        color: #e57878;
        margin-left: 5px;
        cursor: pointer;
      }
    }
  }
`;

export const Preview = styled.div`
  width: 100%;
  height: 360px;
  border-radius: 5px;
  background-image: url(${(props) => props.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  border: 1px solid #eee;
  margin-right: 10px;
`;

export const PreviewInfo = styled.div`
  margin-top: 10px;

  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
