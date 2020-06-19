import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  margin: 64px auto 64px;
`;

export const Banner = styled.div`
  width: 100%;
  height: 360px;

  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Spheres = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;

  width: 30%;

  display: flex;
  justify-content: space-between;
`;

export const Sphere = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 50%;
  background-color: var(--f-color);
  border: 1px solid #fff;
  cursor: pointer;

  &.active {
    background-color: var(--purple-color);
  }
`;

export const ImportantBar = styled.section`
  width: 100%;

  padding: 10px;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
