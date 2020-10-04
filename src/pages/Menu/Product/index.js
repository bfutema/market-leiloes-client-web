import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Button } from '~/components/Form';
import Table from '~/components/Table';

import { Container, PageTitle } from './styles';

const columns = [
  { id: 'id', numeric: false, disablePadding: true, label: 'Id' },
  { id: 'name', numeric: false, disablePadding: true, label: 'Produto' },
  {
    id: 'description',
    numeric: false,
    disablePadding: true,
    label: 'Descrição',
  },
  // { id: 'note', numeric: false, disablePadding: true, label: 'Observação' },
  { id: 'lot', numeric: false, disablePadding: true, label: 'Lote' },
];

const rows = [
  {
    id: 1,
    name: 'Produto 1',
    description: 'Descrição do primeiro produto.',
    // note: 'Observação do primeiro produto.',
    lot: 'Lote 1',
  },
  {
    id: 2,
    name: 'Produto 2',
    description: 'Descrição do segundo produto.',
    // note: 'Observação do primeiro produto.',
    lot: 'Lote 2',
  },
  {
    id: 3,
    name: 'Produto 3',
    description: 'Descrição do terceiro produto.',
    // note: 'Observação do primeiro produto.',
    lot: 'Lote 3',
  },
  {
    id: 4,
    name: 'Produto 4',
    description: 'Descrição do quarto produto.',
    // note: 'Observação do primeiro produto.',
    lot: 'Lote 4',
  },
  {
    id: 5,
    name: 'Produto 5',
    description: 'Descrição do quinto produto.',
    // note: 'Observação do primeiro produto.',
    lot: 'Lote 5',
  },
  {
    id: 6,
    name: 'Produto 6',
    description: 'Descrição do sexto produto.',
    // note: 'Observação do primeiro produto.',
    lot: 'Lote 6',
  },
  {
    id: 7,
    name: 'Produto 7',
    description: 'Descrição do sétimo produto.',
    // note: 'Observação do primeiro produto.',
    lot: 'Lote 7',
  },
  {
    id: 8,
    name: 'Produto 8',
    description: 'Descrição do oitavo produto.',
    // note: 'Observação do primeiro produto.',
    lot: 'Lote 8',
  },
  {
    id: 9,
    name: 'Produto 9',
    description: 'Descrição do nono produto.',
    // note: 'Observação do primeiro produto.',
    lot: 'Lote 9',
  },
  {
    id: 10,
    name: 'Produto 10',
    description: 'Descrição do décimo produto.',
    // note: 'Observação do primeiro produto.',
    lot: 'Lote 10',
  },
  {
    id: 11,
    name: 'Produto 11',
    description: 'Descrição do décimo primeiro produto.',
    // note: 'Observação do primeiro produto.',
    lot: 'Lote 11',
  },
];

export default function Products() {
  return (
    <Container>
      <PageTitle>
        <div>
          <h1>Produtos cadastrados</h1>
          <span>Visualização do cadastro completo de seus produtos.</span>
        </div>
        <Button type="button">
          <FiPlus size={16} color="#f0f0f0" />
          Novo
        </Button>
      </PageTitle>
      <Table columns={columns} rows={rows} />
    </Container>
  );
}
