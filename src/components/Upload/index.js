import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

export default function Upload({ onUpload, message }) {
  function renderDragMessage(isDragActive, isDragReject) {
    if (!isDragActive) {
      return (
        <UploadMessage>{message || 'Arraste arquivos aqui...'}</UploadMessage>
      );
    }

    if (isDragReject) {
      return <UploadMessage type="error">Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage type="success">Solte os arquivos aqui</UploadMessage>;
  }

  return (
    <Dropzone accept="image/*" onDropAccepted={onUpload}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <DropContainer
          {...getRootProps()}
          isDragActive={isDragActive}
          isDragReject={isDragReject}
        >
          <input {...getInputProps()} />

          {renderDragMessage(isDragActive, isDragReject)}
        </DropContainer>
      )}
    </Dropzone>
  );
}

Upload.defaultProps = {
  message: undefined,
};

Upload.propTypes = {
  onUpload: PropTypes.func.isRequired,
  message: PropTypes.string,
};
