import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Ink from 'react-ink';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { resetPasswordRequest } from '~/store/modules/auth/actions';

import { Input } from '~/components/Form';

import { Container, Content, Button } from './styles';

export default function ResetPassword() {
  const dispatch = useDispatch();

  const location = useLocation();

  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        password: Yup.string().required('Digite uma nova senha'),
        confirmPassword: Yup.string().required('Confirme sua nova senha'),
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current.setErrors({});

      const { password } = data;
      const token = new URLSearchParams(location.search).get('token');

      dispatch(resetPasswordRequest(token, password));
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
    <Container>
      <h1>Recuperação de senha</h1>
      <p>Informe o seu endereço de e-mail e crie uma nova senha.</p>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Content>
          <div>
            <label htmlFor="password">Nova senha</label>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="Digite uma nova senha"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirmação de senha</label>
            <Input
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              placeholder="Confirme sua nova senha"
            />
          </div>
          <hr />
          <Button type="submit">
            <Ink />
            Nova senha
          </Button>
        </Content>
      </Form>
    </Container>
  );
}
