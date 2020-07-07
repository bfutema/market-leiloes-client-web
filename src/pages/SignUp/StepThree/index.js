import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';

import { Title, Items, LeftItems, RightItems, Item, Actions } from '../styles';

const schema = Yup.object().shape({});

export default function StepThree({ handlePrev, handleNext }) {
  function handleSubmit() {
    handleNext();
  }

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
            <Input id="avatar" type="file" name="avatar" />
          </Item>
        </LeftItems>
        <RightItems>
          <Item>
            <label htmlFor="documents">Documentos</label>
            <Input id="documents" type="file" name="documents" multiple />
          </Item>
        </RightItems>
      </Items>
      <Actions>
        <button type="button" onClick={handlePrev}>
          Voltar
        </button>
        <button type="submit">Enviar</button>
      </Actions>
    </Form>
  );
}

StepThree.propTypes = {
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};
