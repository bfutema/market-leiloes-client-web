import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Highlight = styled.div`
  > img {
    width: 100%;
    height: 380px;

    object-fit: none;
    object-position: 50% 50%;
    border: 1px solid #efefef;

    cursor: zoom-in;
  }
`;

export const LightboxTarget = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);

  overflow: hidden;
  z-index: 100;

  left: 0;

  opacity: ${(props) => (props.open ? 1 : 0)};
  top: ${(props) => (props.open ? 0 : '-100%')};
  bottom: ${(props) => (props.open ? 0 : 'initial')};

  transition: opacity 400ms;

  img {
    margin: auto;

    position: absolute;
    top: 64px;
    left: 0;
    bottom: 0;
    right: 0;

    background-color: #fff;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);

    width: 90%;
    height: 90%;

    object-fit: contain;
  }
`;

export const CloseButton = styled.a`
  width: 50px;
  height: 50px;

  background: #fff;

  position: absolute;
  top: ${(props) => (props.open ? '64px' : '-80px')};
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 400ms;
`;

export const GalleryPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2px;
`;

export const ImagePreview = styled.img`
  height: 100px;
  width: 100%;

  object-fit: cover;

  opacity: ${(props) => (props.active ? 1 : 0.6)};

  cursor: pointer;

  transition: 200ms;

  &:hover {
    opacity: 1;
  }
`;
