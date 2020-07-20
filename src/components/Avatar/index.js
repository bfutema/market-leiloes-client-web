import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import CircularProgressbar from 'react-circular-progressbar';
import { MdCheckCircle, MdError, MdLink } from 'react-icons/md';

import { Container, FileInfo, Preview, PreviewInfo } from './styles';

export default function Avatar({ onDelete }) {
  const avatar = useSelector((state) => state.user.newUser.avatar);

  return (
    <Container>
      <li key={avatar.id}>
        <FileInfo>
          <Preview src={avatar.preview} />
          <PreviewInfo>
            <div>
              <strong>{avatar.name}</strong>
              <span>
                {avatar.readableSize}
                {!!avatar.url && (
                  <button type="button" onClick={() => onDelete(avatar.id)}>
                    Excluir
                  </button>
                )}
              </span>
            </div>
            <div>
              {!avatar.uploaded && !avatar.error && (
                <CircularProgressbar
                  styles={{
                    root: { width: 24 },
                    path: { stroke: '#7159c1' },
                  }}
                  strokeWidth={10}
                  percentage={avatar.progress}
                />
              )}

              {avatar.url && (
                <a href={avatar.url} target="_blank" rel="noopener noreferrer">
                  <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
                </a>
              )}

              {avatar.uploaded && <MdCheckCircle size={24} color="#78e5d5" />}
              {avatar.error && <MdError size={24} color="#e57878" />}
            </div>
          </PreviewInfo>
        </FileInfo>
      </li>
    </Container>
  );
}

Avatar.propTypes = {
  onDelete: PropTypes.func.isRequired,
};
