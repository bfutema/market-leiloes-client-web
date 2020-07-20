import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { Form } from '@unform/web';
import { signUpStepTwo } from '~/store/modules/user/actions';

import { cpfCnpj } from '~/utils';

import { Input, Select } from '~/components/Form';

import { Title, Items, LeftItems, RightItems, Item, Actions } from '../styles';

export default function StepTwo({ handlePrev, handleNext }) {
  const dispatch = useDispatch();

  const formRef = useRef(null);

  async function handleSubmit(data) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Seu nome é obrigatório.'),
        cpf_cnpj: Yup.string().required('Informe seu CPF ou CNPJ'),
        rg: Yup.string().required('Informe seu RG'),
        surname: Yup.string().required('Digite seu sobrenome'),
        birth: Yup.date(),
        gender: Yup.string().required('Escolha o gênero'),
      });

      await schema.validate(data, { abortEarly: false });

      formRef.current.setErrors({});

      const { name, surname, cpf_cnpj, birth, rg, gender } = data;

      dispatch(signUpStepTwo(name, surname, cpf_cnpj, birth, rg, gender));

      handleNext();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errorMessages = {};

        err.inner.forEach((error) => {
          errorMessages[error.path] =
            error.params.type === 'date' ? 'Data inválida' : error.message;
        });

        formRef.current.setErrors(errorMessages);
      }
    }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Title>
        <span>Informações pessoais: </span>
        <span>Etapa 2 - 4</span>
      </Title>
      <Items>
        <LeftItems>
          <Item>
            <label htmlFor="name">Nome</label>
            <Input
              id="name"
              name="name"
              placeholder="Digite seu nome"
              tabIndex="1"
            />
          </Item>
          <Item>
            <label htmlFor="cpf_cnpj">CPF ou CNPJ</label>
            <Input
              id="cpf_cnpj"
              name="cpf_cnpj"
              placeholder="Informe seu CPF ou CNPJ"
              tabIndex="3"
              pattern={cpfCnpj}
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
        </LeftItems>
        <RightItems>
          <Item>
            <label htmlFor="surname">Sobrenome</label>
            <Input
              id="surname"
              name="surname"
              placeholder="Digite seu sobrenome"
              tabIndex="2"
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
              tabIndex="6"
            />
          </Item>
        </RightItems>
      </Items>
      <Actions>
        <button type="button" tabIndex="7" onClick={handlePrev}>
          Voltar
        </button>
        <button type="submit" tabIndex="8">
          Próximo
        </button>
      </Actions>
    </Form>
  );
}

StepTwo.propTypes = {
  handlePrev: PropTypes.func.isRequired,
  handleNext: PropTypes.func.isRequired,
};
