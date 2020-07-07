import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Form, Input, Select } from '@rocketseat/unform';

import { Title, Items, LeftItems, RightItems, Item, Actions } from '../styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Seu nome é obrigatório.'),
  cpfCnpj: Yup.string().required('Informe seu CPF ou CNPJ'),
  rg: Yup.string().required('Informe seu RG'),
  surname: Yup.string().required('Digite seu sobrenome'),
  birth: Yup.date(),
  gender: Yup.string().required('Preencha o gênero'),
});

export default function StepTwo({ handlePrev, handleNext }) {
  function handleSubmit() {
    handleNext();
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <Title>
        <span>Informações pessoais: </span>
        <span>Etapa 2 - 4</span>
      </Title>
      <Items>
        <LeftItems>
          <Item>
            <label htmlFor="name">Nome</label>
            <Input
              id="name"
              type="text"
              name="name"
              placeholder="Digite seu nome"
              autoComplete="none"
            />
          </Item>
          <Item>
            <label htmlFor="cpfCnpj">CPF ou CNPJ</label>
            <Input
              id="cpfCnpj"
              type="text"
              name="cpfCnpj"
              placeholder="Informe seu CPF ou CNPJ"
              autoComplete="none"
            />
          </Item>
          <Item>
            <label htmlFor="rg">RG</label>
            <Input
              id="rg"
              type="text"
              name="rg"
              placeholder="Informe seu RG"
              autoComplete="none"
            />
          </Item>
        </LeftItems>
        <RightItems>
          <Item>
            <label htmlFor="surname">Sobrenome</label>
            <Input
              id="surname"
              type="text"
              name="surname"
              placeholder="Digite seu sobrenome"
              autoComplete="none"
            />
          </Item>
          <Item>
            <label htmlFor="birth">Data de nascimento</label>
            <Input id="birth" type="date" name="birth" autoComplete="none" />
          </Item>
          <Item>
            <label htmlFor="gender">Gênero</label>
            <Select
              id="gender"
              name="gender"
              options={[
                { id: 'M', title: 'Masculino' },
                { id: 'F', title: 'Feminino' },
              ]}
            />
          </Item>
        </RightItems>
      </Items>
      <Actions>
        <button type="button" onClick={handlePrev}>
          Voltar
        </button>
        <button type="submit">Próximo</button>
      </Actions>
    </Form>
  );
}

StepTwo.propTypes = {
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};
