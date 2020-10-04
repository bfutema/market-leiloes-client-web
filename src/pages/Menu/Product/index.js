import React from 'react';
import { FiPlus } from 'react-icons/fi';

import { Button } from '~/components/Form';
import Table from '~/components/Table';

import { Container, PageTitle } from './styles';

function createData(id, name, description, lot) {
  return {
    id,
    name,
    description,
    // note,
    lot,
  };
}

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
  createData(
    1,
    'Produto 1',
    'Descrição do primeiro produto.',
    // 'Observação do primeiro produto.',
    'Lote 1'
  ),
  createData(
    2,
    'Produto 2',
    'Descrição do segundo produto.',
    // 'Observação do segundo produto.',
    'Lote 2'
  ),
  createData(
    3,
    'Produto 3',
    'Descrição do terceiro produto.',
    // 'Observação do terceiro produto.',
    'Lote 3'
  ),
  createData(
    4,
    'Produto 4',
    'Descrição do quarto produto.',
    // 'Observação do quarto produto.',
    'Lote 4'
  ),
  createData(
    5,
    'Produto 5',
    'Descrição do quinto produto.',
    // 'Observação do quinto produto.',
    'Lote 5'
  ),
  createData(
    6,
    'Produto 6',
    'Descrição do sexto produto.',
    // 'Observação do sexto produto.',
    'Lote 6'
  ),
  createData(
    7,
    'Produto 7',
    'Descrição do sétimo produto.',
    // 'Observação do sétimo produto.',
    'Lote 7'
  ),
  createData(
    8,
    'Produto 8',
    'Descrição do oitavo produto.',
    // 'Observação do oitavo produto.',
    'Lote 8'
  ),
  createData(
    9,
    'Produto 9',
    'Descrição do nono produto.',
    // 'Observação do nono produto.',
    'Lote 9'
  ),
  createData(
    10,
    'Produto 10',
    'Descrição do décimo produto.',
    // 'Observação do décimo produto.',
    'Lote 10'
  ),
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
          <FiPlus size={20} color="#f0f0f0" />
        </Button>
      </PageTitle>
      <Table columns={columns} rows={rows} />
    </Container>
  );
}
