import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { uniqueId } from 'lodash';
import filesize from 'filesize';
import * as Yup from 'yup';

import { Form } from '@rocketseat/unform';
import api from '~/services/api';

import {
  signUploadAvatarRequest,
  signUploadAvatarSuccess,
  signUploadAvatarFailure,
  deleteAvatarRequest,
  signUploadDocumentsRequest,
  signUploadDocumentsSuccess,
  signUploadDocumentsFailure,
  signUploadDocumentsUpdateProgress,
  deleteDocumentRequest,
  deleteFilesInUnmountRequest,
} from '~/store/modules/user/actions';

import Upload from '~/components/Upload';
import Avatar from '~/components/Avatar';
import FileList from '~/components/FileList';

import { Title, Items, LeftItems, RightItems, Item, Actions } from '../styles';

const schema = Yup.object().shape({});

let ids = [];

export default function StepThree({
  avatar,
  documents,
  handlePrev,
  handleNext,
}) {
  const dispatch = useDispatch();

  async function processAvatarUpload(newAvatar) {
    const data = new FormData();

    data.append('file', newAvatar.file);

    try {
      const response = await api.post('tempfiles', data, {
        onUploadProgress: (e) => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          dispatch(signUploadAvatarRequest({ ...newAvatar, progress }));
        },
      });

      ids.push(response.data.id);

      dispatch(signUploadAvatarSuccess(response.data.id, response.data.url));
    } catch (err) {
      dispatch(signUploadAvatarFailure());
    }
  }

  async function processDocumentsUpload(document) {
    const data = new FormData();

    data.append('file', document.file);

    try {
      const response = await api.post('tempfiles', data, {
        onUploadProgress: (e) => {
          const progress = parseInt(Math.round((e.loaded * 100) / e.total));

          dispatch(signUploadDocumentsUpdateProgress(document.id, progress));
        },
      });

      ids.push(response.data.id);

      dispatch(
        signUploadDocumentsSuccess(
          document.id,
          response.data.id,
          response.data.url
        )
      );
    } catch (err) {
      dispatch(signUploadDocumentsFailure());
    }
  }

  function handleAvatarUpload(files) {
    const newAvatar = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    dispatch(signUploadAvatarRequest(newAvatar[0]));

    processAvatarUpload(newAvatar[0]);
  }

  function handleDocumentsUpload(files) {
    const newDocuments = files.map((file) => ({
      file,
      id: uniqueId(),
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      progress: 0,
      uploaded: false,
      error: false,
      url: null,
    }));

    dispatch(signUploadDocumentsRequest(newDocuments));

    newDocuments.forEach(processDocumentsUpload);
  }

  function handleDeleteAvatar(id) {
    dispatch(deleteAvatarRequest(id));
  }

  function handleDeleteDocument(id) {
    dispatch(deleteDocumentRequest(id));
  }

  function handleSubmit() {
    ids = [];

    handleNext();
  }

  useEffect(() => {
    return () => {
      if (ids.length > 0) dispatch(deleteFilesInUnmountRequest(ids));

      ids = [];
    };
  }, [dispatch]);

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <Title>
        <span>Documentos informativos: </span>
        <span>Etapa 3 - 4</span>
      </Title>
      <Items>
        <LeftItems>
          <Item>
            <label htmlFor="avatar">Avatar</label>
            <Upload
              onUpload={handleAvatarUpload}
              message="Arraste sua foto de perfil aqui"
            />
            {!!avatar && <Avatar onDelete={handleDeleteAvatar} />}
          </Item>
        </LeftItems>
        <RightItems>
          <Item>
            <label htmlFor="documents">Documentos</label>
            <Upload onUpload={handleDocumentsUpload} />
            {!!documents && <FileList onDelete={handleDeleteDocument} />}
          </Item>
        </RightItems>
      </Items>
      <Actions>
        <button type="button" tabIndex="3" onClick={handlePrev}>
          Voltar
        </button>
        <button type="submit" tabIndex="4">
          Enviar
        </button>
      </Actions>
    </Form>
  );
}

StepThree.defaultProps = {
  avatar: undefined,
  documents: undefined,
};

StepThree.propTypes = {
  avatar: PropTypes.object,
  documents: PropTypes.arrayOf(PropTypes.object),
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};
