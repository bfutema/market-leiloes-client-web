import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import Ink from 'react-ink';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { forgotPasswordRequest } from '~/store/modules/auth/actions';

import { Input } from '~/components/Form';

import { Container, Content, Button } from './styles';

export default function ForgotPassword() {
  const dispatch = useDispatch();

  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('Digite seu e-mail'),
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current.setErrors({});

      const { email } = data;

      dispatch(forgotPasswordRequest(email));
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
      <h1>Esqueçeu sua senha ?</h1>
      <p>
        Informe o seu endereço de e-mail que enviaremos á você a recuperação da
        sua senha.
      </p>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Content>
          <div>
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="text"
              name="email"
              placeholder="Seu email"
            />
          </div>
          <hr />
          <Button type="submit">
            <Ink />
            Recuperar senha
          </Button>
        </Content>
      </Form>
    </Container>
  );
}
