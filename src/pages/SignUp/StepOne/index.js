import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';

import { Form, Input } from '@rocketseat/unform';

import { Title, Items, LeftItems, RightItems, Item, Actions } from '../styles';

const schema = Yup.object().shape({
  username: Yup.string().required('O campo username é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O campo e-mail é obrigatório'),
  password: Yup.string()
    .min(3, 'A senha precisa conter no mínimo 8 caracteres')
    .required('A senha é obrigatória'),
  confirmPassword: Yup.string().required('Por favor, confirme sua senha'),
});

export default function StepOne({ handleNext }) {
  function handleSubmit() {
    handleNext();
  }

  return (
    <Form schema={schema} onSubmit={handleSubmit}>
      <Title>
        <span>Informações da conta: </span>
        <span>Etapa 1 - 4</span>
      </Title>
      <Items>
        <LeftItems>
          <Item>
            <label htmlFor="username">Username</label>
            <Input
              id="username"
              type="text"
              name="username"
              placeholder="Nome de usuário"
            />
          </Item>
          <Item>
            <label htmlFor="password">Senha</label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Escolha uma senha secreta"
            />
          </Item>
        </LeftItems>
        <RightItems>
          <Item>
            <label htmlFor="email">E-mail</label>
            <Input
              id="email"
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
            />
          </Item>
          <Item>
            <label htmlFor="confirmPassword">Confirmação de senha</label>
            <Input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirme sua senha"
            />
          </Item>
        </RightItems>
      </Items>
      <Actions>
        <button type="submit">Próximo</button>
      </Actions>
    </Form>
  );
}

StepOne.propTypes = {
  handleNext: PropTypes.func.isRequired,
};
