import React from 'react';

import banner from '~/assets/banner.png';

import Card from '~/components/Card';
import { Container, Banner, Spheres, Sphere, ImportantBar } from './styles';

export default function index() {
  return (
    <>
      <Container className="main-container">
        <Banner>
          <img src={banner} alt="" />
          <Spheres>
            <Sphere className="active" />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
            <Sphere />
          </Spheres>
        </Banner>
      </Container>
      <ImportantBar className="main-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </ImportantBar>
    </>
  );
}
