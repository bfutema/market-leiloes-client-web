import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Form } from '@unform/web';

import { Input, Button } from '~/components/Form';

import { Container, Item } from './styles';

export default function ChangePassword() {
  // const dispatch = useDispatch();

  const formRef = useRef(null);

  const profile = useSelector((state) => state.user.profile);

  function handleSubmit() {}

  return (
    <Container>
      <Form initialData={profile} ref={formRef} onSubmit={handleSubmit}>
        <Item>
          <label htmlFor="old_password">Senha atual</label>
          <Input
            id="old_password"
            name="old_password"
            type="password"
            placeholder="Senha atual"
          />
        </Item>
        <Item>
          <label htmlFor="password">Nova senha</label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Nova senha"
          />
        </Item>
        <Item>
          <label htmlFor="confirmPassword">Confirmação da nova senha</label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirmação da nova senha"
          />
        </Item>
        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
}
