import React, { useState, useEffect } from 'react';
import Ink from 'react-ink';
import { useLocation } from 'react-router-dom';
import {
  FiUser,
  FiSettings,
  FiLock,
  FiPackage,
  FiCpu,
  FiMonitor,
} from 'react-icons/fi';

import Profile from './Profile';
import Product from './Product';

import {
  Container,
  Title,
  WrapperContainer,
  AsideContainer,
  PageWrapperContainer,
  NavigationItem,
} from './styles';

export default function Menu() {
  const location = useLocation();

  const [page, setPage] = useState(location.state);

  useEffect(() => {
    setPage(location.state);
  }, [location.state]);

  return (
    <Container className="main-container">
      <Title>
        <h1>Menu</h1>
      </Title>
      <WrapperContainer>
        <AsideContainer>
          <NavigationItem active={page === 1}>
            <button type="button" onClick={() => setPage(1)}>
              <Ink />
              <FiUser size={20} color={page === 1 ? '#F0F0F0' : '#222222'} />
              Meu Perfil
            </button>
          </NavigationItem>

          <NavigationItem active={page === 2}>
            <button type="button" onClick={() => setPage(2)}>
              <Ink />
              <FiSettings
                size={20}
                color={page === 2 ? '#F0F0F0' : '#222222'}
              />
              Configurações de conta
            </button>
          </NavigationItem>

          <NavigationItem active={page === 3}>
            <button type="button" onClick={() => setPage(3)}>
              <Ink />
              <FiLock size={20} color={page === 3 ? '#F0F0F0' : '#222222'} />
              Alteração de senha
            </button>
          </NavigationItem>

          <NavigationItem active={page === 4}>
            <button type="button" onClick={() => setPage(4)}>
              <Ink />
              <FiPackage size={20} color={page === 4 ? '#F0F0F0' : '#222222'} />
              Meus produtos
            </button>
          </NavigationItem>

          <NavigationItem active={page === 5}>
            <button type="button" onClick={() => setPage(5)}>
              <Ink />
              <FiCpu size={20} color={page === 5 ? '#F0F0F0' : '#222222'} />
              Parametrizações
            </button>
          </NavigationItem>

          <NavigationItem active={page === 6}>
            <button type="button" onClick={() => setPage(6)}>
              <Ink />
              <FiMonitor size={20} color={page === 6 ? '#F0F0F0' : '#222222'} />
              Sessões
            </button>
          </NavigationItem>
        </AsideContainer>
        <PageWrapperContainer>
          {page === 1 && <Profile />}
          {page === 4 && <Product />}
        </PageWrapperContainer>
      </WrapperContainer>
    </Container>
  );
}
