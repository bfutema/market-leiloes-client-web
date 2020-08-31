import React, { useState } from 'react';
import Ink from 'react-ink';
import { useLocation } from 'react-router-dom';
import { FiUser, FiPackage } from 'react-icons/fi';

import Profile from '../Profile';
import Product from '../Product';

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
              Meu perfil
            </button>
          </NavigationItem>
          <NavigationItem active={page === 2}>
            <button type="button" onClick={() => setPage(2)}>
              <Ink />
              <FiPackage size={20} color={page === 2 ? '#F0F0F0' : '#222222'} />
              Meus produtos
            </button>
          </NavigationItem>
        </AsideContainer>
        <PageWrapperContainer>
          {page === 1 && <Profile />}
          {page === 2 && <Product />}
        </PageWrapperContainer>
      </WrapperContainer>
    </Container>
  );
}
