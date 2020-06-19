import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

import logo from '~/assets/logo-light.svg';

import { Container, Content, FormContent, LoginContent } from './styles';

export default function Header() {
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
          <LoginContent>
            <Link to="/login">Login</Link>
          </LoginContent>
        </aside>
      </Content>
    </Container>
  );
}
