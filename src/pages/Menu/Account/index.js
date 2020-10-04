import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Form } from '@unform/web';

import { Input, Button } from '~/components/Form';

import { Container, Item } from './styles';

export default function Account() {
  // const dispatch = useDispatch();

  const formRef = useRef(null);

  const profile = useSelector((state) => state.user.profile);

  function handleSubmit() {}

  return (
    <Container>
      <Form initialData={profile} ref={formRef} onSubmit={handleSubmit}>
        <Item>
          <label htmlFor="username">Username</label>
          <Input id="username" name="username" placeholder="Username" />
        </Item>
        <Item>
          <label htmlFor="email">Email</label>
          <Input id="email" name="email" placeholder="E-mail" />
        </Item>
        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
}
