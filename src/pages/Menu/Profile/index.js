import React, { useRef, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FiCamera } from 'react-icons/fi';
import { Form } from '@unform/web';

import { updateAvatarRequest } from '~/store/modules/user/actions';
import { Input, Select, Button } from '~/components/Form';

import {
  Container,
  ProfileHeader,
  ProfileHeaderInfo,
  AvatarInput,
  AccountInfo,
  AccountStatus,
  Item,
} from './styles';

export default function Profile() {
  const dispatch = useDispatch();

  const formRef = useRef(null);

  const profile = useSelector((state) => state.user.profile);

  const handleAvatarChange = useCallback(
    async (e) => {
      if (e.target.files) dispatch(updateAvatarRequest(e.target.files[0]));
    },
    [dispatch]
  );

  function handleSubmit() {}

  return (
    <Container>
      <Form initialData={profile} ref={formRef} onSubmit={handleSubmit}>
        <ProfileHeader>
          <ProfileHeaderInfo>
            <AvatarInput>
              <img src={profile.avatar.url} alt={profile.name} />
              <label htmlFor="avatar">
                <FiCamera />

                <input type="file" id="avatar" onChange={handleAvatarChange} />
              </label>
            </AvatarInput>
            <AccountInfo>
              <h1>
                <strong>{profile.username}</strong>
              </h1>
              <h3>
                <span>{profile.email}</span>
              </h3>
            </AccountInfo>
          </ProfileHeaderInfo>
          <AccountStatus>
            <div>
              <strong>Situação da conta:</strong>
              <span>{profile.status.description}</span>
            </div>
          </AccountStatus>
        </ProfileHeader>
        <Item>
          <label htmlFor="name">Nome</label>
          <Input
            id="name"
            name="name"
            placeholder="Nome completo"
            tabIndex="1"
          />
        </Item>
        <Item>
          <label htmlFor="surname">Sobrenome</label>
          <Input
            id="surname"
            name="surname"
            placeholder="Sobrenome"
            tabIndex="1"
          />
        </Item>
        <Item>
          <label htmlFor="birth">Data de nascimento</label>
          <Input id="birth" type="date" name="birth" tabIndex="4" />
        </Item>
        <Item>
          <label htmlFor="gender">Gênero</label>
          <Select
            id="gender"
            name="gender"
            placeholder="Selecione seu gênero"
            options={[
              { value: 'M', label: 'Masculino' },
              { value: 'F', label: 'Feminino' },
            ]}
            defaultValue={{
              value: profile.gender,
              label: profile.gender === 'M' ? 'Masculino' : 'Feminino',
            }}
            tabIndex="6"
          />
        </Item>
        <Item>
          <label htmlFor="cpf_cnpj">CPF ou CNPJ</label>
          <Input
            id="cpf_cnpj"
            name="cpf_cnpj"
            placeholder="Informe seu CPF ou CNPJ"
            tabIndex="3"
            mask="999.999.999-99"
          />
        </Item>
        <Item>
          <label htmlFor="rg">RG</label>
          <Input
            id="rg"
            name="rg"
            placeholder="Informe seu RG"
            tabIndex="5"
            mask="99.999.999-9"
          />
        </Item>
        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
}
