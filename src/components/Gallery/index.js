import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { FiX } from 'react-icons/fi';

import {
  Container,
  Highlight,
  LightboxTarget,
  CloseButton,
  GalleryPreview,
  ImagePreview,
} from './styles';

export default function Gallery({ files }) {
  const [open, setOpen] = useState(false);

  const handleOpenLightbox = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Container>
      <Highlight>
        <img
          src="https://source.unsplash.com/collection/190727/1600x900"
          alt="Sem foto"
          onClick={handleOpenLightbox}
        />
        <LightboxTarget open={open}>
          <img
            src="https://source.unsplash.com/collection/190727/1600x900"
            alt=""
          />
          <CloseButton href="#" open={open} onClick={handleOpenLightbox}>
            <FiX size={16} color="#232323" />
          </CloseButton>
        </LightboxTarget>
      </Highlight>
      <GalleryPreview>
        {files.map((file, index) => (
          <ImagePreview
            key={file.id || index}
            src={
              file.src ||
              'https://source.unsplash.com/collection/190727/1600x900'
            }
            alt={file.name || 'Imagem 1'}
            active
          />
        ))}
      </GalleryPreview>
    </Container>
  );
}

Gallery.defaultProps = {
  files: [],
};

Gallery.propTypes = {
  files: PropTypes.arrayOf(PropTypes.object),
};
