import React, { useState } from 'react';
import { Form, Input, Select } from '@rocketseat/unform';
import Lottie from 'react-lottie';
import * as Yup from 'yup';
import animationData from '~/assets/433-checked-done.json';

import {
  Container,
  Content,
  Items,
  LeftItems,
  RightItems,
  Item,
  Steps,
  ProgressBar,
  Title,
  Messages,
  Message,
  Actions,
} from './styles';

const schema = Yup.object().shape({
  username: Yup.string().required('O campo username é obrigatório'),
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O campo e-mail é obrigatório'),
  password: Yup.string()
    .min(8, 'A senha precisa conter no mínimo 8 caracteres')
    .required('A senha é obrigatória'),
  confirmPassword: Yup.string().required('Por favor, confirme sua senha'),
  // name: Yup.string().required('Por favor, insira o seu nome'),
});

function SignUp() {
  const [progressBar, setProgressBar] = useState(25);
  const [currentFs, setCurrentFs] = useState(1);

  function handleNext() {
    setCurrentFs(currentFs + 1);
    setProgressBar(progressBar + 25);
  }

  function handlePrev() {
    setCurrentFs(currentFs - 1);
    setProgressBar(progressBar - 25);
  }

  function validateStepOne(username, email, password, confirmPassword) {
    if (username && email && password && confirmPassword) {
      if (password === confirmPassword) {
        return true;
      }
    }

    return false;
  }

  function handleSubmit(data) {
    const { username, email, password, confirmPassword } = data;

    if (validateStepOne(username, email, password, confirmPassword)) {
      handleNext();
    }

    console.tron.log(data);
  }

  return (
    <Container>
      <h1>Inscreva sua conta de usuário</h1>
      <p>Preencha todos os campos do formulário para ir para a próxima etapa</p>
      <Form schema={schema} onSubmit={handleSubmit}>
        <Content fieldsetActive={currentFs}>
          <Steps id="progressbar">
            <li id="account" className={currentFs >= 1 ? 'active' : ''}>
              <strong>Conta</strong>
            </li>
            <li id="personal" className={currentFs >= 2 ? 'active' : ''}>
              <strong>Pessoal</strong>
            </li>
            <li id="documents" className={currentFs >= 3 ? 'active' : ''}>
              <strong>Documentos</strong>
            </li>
            <li id="confirm" className={currentFs >= 4 ? 'active' : ''}>
              <strong>Finalizar</strong>
            </li>
          </Steps>
          <ProgressBar className="progress" width={progressBar}>
            <div
              className={`progress-bar ${
                currentFs !== 4 && 'progress-bar-striped'
              } progress-bar-animated`}
              role="progressbar"
              aria-valuemin="0"
              aria-valuemax="100"
            />
          </ProgressBar>
          <fieldset className={currentFs === 1 ? 'active' : 'hide'}>
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
                    type="text"
                    name="username"
                    placeholder="Nome de usuário"
                    value="BrunoFutema"
                  />
                </Item>
                <Item>
                  <label htmlFor="password">Senha</label>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Escolha uma senha secreta"
                    value="12345678"
                  />
                </Item>
              </LeftItems>
              <RightItems>
                <Item>
                  <label htmlFor="email">E-mail</label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    value="bruno.futema@outlook.com"
                  />
                </Item>
                <Item>
                  <label htmlFor="confirmPassword">Confirmação de senha</label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirme sua senha"
                    value="12345678"
                  />
                </Item>
              </RightItems>
            </Items>
            <Actions>
              <button type="submit">Próximo</button>
            </Actions>
          </fieldset>
          <fieldset className={currentFs === 2 ? 'active' : 'hide'}>
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
                    type="text"
                    name="name"
                    placeholder="Digite seu nome"
                    autoComplete="none"
                  />
                </Item>
                <Item>
                  <label htmlFor="cpfCnpj">CPF ou CNPJ</label>
                  <Input
                    id="cpfCnpj"
                    type="text"
                    name="cpfCnpj"
                    placeholder="Informe seu CPF ou CNPJ"
                    autoComplete="none"
                  />
                </Item>
                <Item>
                  <label htmlFor="rg">RG</label>
                  <Input
                    id="rg"
                    type="text"
                    name="rg"
                    placeholder="Informe seu RG"
                    autoComplete="none"
                  />
                </Item>
              </LeftItems>
              <RightItems>
                <Item>
                  <label htmlFor="surname">Sobrenome</label>
                  <Input
                    id="surname"
                    type="text"
                    name="surname"
                    placeholder="Digite seu sobrenome"
                    autoComplete="none"
                  />
                </Item>
                <Item>
                  <label htmlFor="birth">Data de nascimento</label>
                  <Input
                    id="birth"
                    type="date"
                    name="birth"
                    autoComplete="none"
                  />
                </Item>
                <Item>
                  <label htmlFor="gender">Gênero</label>
                  <Select
                    id="gender"
                    name="gender"
                    options={[
                      { id: 'M', title: 'Masculino' },
                      { id: 'F', title: 'Feminino' },
                    ]}
                    // defaultValue={{ id: '0', title: 'Informe o gênero' }}
                  >
                    {/* <option value="0">Informe o gênero</option>
                    <option value="M">Masculino</option>
                    <option value="F">Feminino</option> */}
                  </Select>
                </Item>
              </RightItems>
            </Items>
            <Actions>
              <button type="button" onClick={handlePrev}>
                Voltar
              </button>
              <button type="submit">Próximo</button>
            </Actions>
          </fieldset>
          <fieldset className={currentFs === 3 ? 'active' : 'hide'}>
            <Title>
              <span>Documentos informativos: </span>
              <span>Etapa 3 - 4</span>
            </Title>
            <Items>
              <LeftItems>
                <Item>
                  <label htmlFor="avatar">Avatar</label>
                  <Input id="avatar" type="file" name="avatar" />
                </Item>
              </LeftItems>
              <RightItems>
                <Item>
                  <label htmlFor="documents">Documentos</label>
                  <Input id="documents" type="file" name="documents" multiple />
                </Item>
              </RightItems>
            </Items>
            <Actions>
              <button type="button" onClick={handlePrev}>
                Voltar
              </button>
              <button type="submit">Enviar</button>
            </Actions>
          </fieldset>
          {currentFs === 4 && (
            <fieldset>
              <Title>
                <span>Candidatura enviada com sucesso: </span>
                <span>Etapa 4 - 4</span>
              </Title>
              <Messages>
                <strong>Sucesso !</strong>
                <Message>
                  {/* <img src="https://i.imgur.com/GwStPmg.png" alt="" /> */}
                  <Lottie
                    options={{
                      loop: false,
                      autoplay: true,
                      animationData,
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice',
                      },
                    }}
                    height={300}
                    width={400}
                  />
                  <div>
                    <span>
                      Sua inscrição foi encaminhada para o setor de análise!
                    </span>
                  </div>
                </Message>
              </Messages>
            </fieldset>
          )}
        </Content>
      </Form>
    </Container>
  );
}

export default SignUp;
