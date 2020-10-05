import React, { useRef } from 'react';
import { Form } from '@unform/web';

import { Input, Textarea } from '~/components/Form';
import Container from '~/components/Container';

import Gallery from '~/components/Gallery';

import { ProductDetails, Item } from './styles';

export default function NewProduct() {
  const productFormRef = useRef(null);

  function handleSubmit() {}

  return (
    <Container card gridCard="380px 1fr 220px">
      <Gallery />
      <ProductDetails>
        <Form ref={productFormRef} onSubmit={handleSubmit}>
          <Item>
            <label htmlFor="name">Nome</label>
            <Input id="name" name="name" placeholder="Nome do produto" />
          </Item>
          <Item>
            <label htmlFor="description">Descrição</label>
            <Textarea
              id="description"
              name="description"
              placeholder="Descrição do produto"
            />
          </Item>
          <Item>
            <label htmlFor="note">Observações</label>
            <Textarea id="note" name="note" placeholder="Observações" />
          </Item>
        </Form>
      </ProductDetails>
      <div style={{ background: 'yellow' }}>Informações de Lance</div>
    </Container>
  );
}
