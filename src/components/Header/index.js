/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FiSearch, FiUser, FiLogOut } from 'react-icons/fi';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo-light.svg';

import {
  Container,
  Content,
  FormContent,
  LoginContent,
  User,
  UserLoggedContent,
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
                <div>
                  <FiUser size={20} color="var(--p-color)" />
                </div>
                <div>
                  <div>
                    <span>E-mail: </span>
                    <strong>{profile.email}</strong>
                  </div>
                  <div>
                    <span>Status: </span>
                    <strong>
                      {profile.status_id === 1
                        ? 'Em Análise'
                        : profile.status_id === 2
                        ? 'Aprovado'
                        : profile.status_id === 3
                        ? 'Reprovado'
                        : profile.status_id === 4
                        ? 'Ativo'
                        : 'Desativo'}
                    </strong>
                  </div>
                </div>
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
