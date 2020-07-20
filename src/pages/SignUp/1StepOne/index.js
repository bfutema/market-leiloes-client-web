import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { signUpStepOne } from '~/store/modules/user/actions';

import { onlyChars } from '~/utils';

import { Input } from '~/components/Form';

import { Title, Items, LeftItems, RightItems, Item, Actions } from '../styles';

export default function StepOne({ handleNext }) {
  const dispatch = useDispatch();

  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        username: Yup.string().required('O campo username é obrigatório'),
        email: Yup.string()
          .email('Insira um e-mail válido')
          .required('O campo e-mail é obrigatório'),
        password: Yup.string()
          .min(3, 'A senha precisa conter no mínimo 8 caracteres')
          .required('A senha é obrigatória'),
        confirmPassword: Yup.string()
          .required('A confirmação de senha é obrigatória')
          .oneOf(
            [Yup.ref('password'), null],
            'A confirmação de senha está incorreta'
          ),
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current.setErrors({});

      const { username, email, password, confirmPassword } = data;

      dispatch(signUpStepOne(username, email, password, confirmPassword));

      handleNext();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] = error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
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
              name="username"
              placeholder="Nome de usuário"
              tabIndex="1"
              pattern={onlyChars}
            />
          </Item>
          <Item>
            <label htmlFor="password">Senha</label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Escolha uma senha secreta"
              tabIndex="3"
            />
          </Item>
        </LeftItems>
        <RightItems>
          <Item>
            <label htmlFor="email">E-mail</label>
            <Input
              id="email"
              type="text"
              name="email"
              placeholder="Digite seu e-mail"
              tabIndex="2"
              pattern={onlyChars}
            />
          </Item>
          <Item>
            <label htmlFor="confirmPassword">Confirmação de senha</label>
            <Input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirme sua senha"
              tabIndex="4"
            />
          </Item>
        </RightItems>
      </Items>
      <Actions>
        <button type="submit" tabIndex="5">
          Próximo
        </button>
      </Actions>
    </Form>
  );
}

StepOne.propTypes = {
  handleNext: PropTypes.func.isRequired,
};
