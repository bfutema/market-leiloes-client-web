import React from 'react';
import Ink from 'react-ink';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  FiSearch,
  FiUser,
  FiSettings,
  FiLock,
  FiPackage,
  FiCpu,
  FiMonitor,
  FiLogOut,
} from 'react-icons/fi';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo-light.svg';

import {
  Container,
  Content,
  FormContent,
  LoginContent,
  User,
  UserAvatar,
  UserInfo,
  UserLoggedContent,
  Actions,
} from './styles';

export default function Header() {
  const dispatch = useDispatch();

  const signed = useSelector((state) => state.auth.signed);
  const profile = useSelector((state) => state.user.profile);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/">
            <img src={logo} alt="Logomarca de MARKET Leilões" />
          </Link>
        </nav>
        <form action="">
          <FormContent>
            <input type="text" placeholder="O que você deseja buscar ?" />
            <button type="submit">
              <FiSearch size={20} color="var(--p-color)" />
            </button>
          </FormContent>
        </form>
        <aside>
          {signed ? (
            <UserLoggedContent>
              <User>
                <Actions>
                  <li>
                    <Link to={{ pathname: '/profile', state: 1 }}>
                      <Ink />
                      <FiUser size={16} color="#222222" />
                      Meu perfil
                    </Link>
                  </li>
                  <li>
                    <Link to={{ pathname: '/account', state: 2 }}>
                      <Ink />
                      <FiSettings size={16} color="#222222" />
                      Minha conta
                    </Link>
                  </li>
                  <li>
                    <Link to={{ pathname: '/password', state: 3 }}>
                      <Ink />
                      <FiLock size={16} color="#222222" />
                      Dados de acesso
                    </Link>
                  </li>
                  <li>
                    <Link to={{ pathname: '/products', state: 4 }}>
                      <Ink />
                      <FiPackage size={16} color="#222222" />
                      Meus produtos
                    </Link>
                  </li>
                  <li>
                    <Link to={{ pathname: '/parametrizations', state: 5 }}>
                      <Ink />
                      <FiCpu size={16} color="#222222" />
                      Parametrizações
                    </Link>
                  </li>
                  <li>
                    <Link to={{ pathname: '/sessions', state: 6 }}>
                      <Ink />
                      <FiMonitor size={16} color="#222222" />
                      Sessões
                    </Link>
                  </li>
                  <li>
                    <button type="button" onClick={handleSignOut}>
                      <Ink />
                      <FiLogOut size={16} color="#222222" />
                      Sair
                    </button>
                  </li>
                </Actions>
                <UserAvatar hasProfile={profile !== undefined}>
                  {profile ? (
                    <img
                      src={profile.avatar.url}
                      alt={`Foto de ${profile.name}`}
                    />
                  ) : (
                    <FiUser size={20} color="var(--p-color)" />
                  )}
                </UserAvatar>
                <UserInfo>
                  <div>
                    <span>E-mail: </span>
                    <strong>{profile.email}</strong>
                  </div>
                  <div>
                    <span>Status: </span>
                    <strong>{profile.status.description}</strong>
                  </div>
                </UserInfo>
              </User>
              <button type="button" onClick={handleSignOut}>
                <FiLogOut size={20} color="var(--p-color)" />
              </button>
            </UserLoggedContent>
          ) : (
            <LoginContent>
              <Link to="/login">Login</Link>
            </LoginContent>
          )}
        </aside>
      </Content>
    </Container>
  );
}
