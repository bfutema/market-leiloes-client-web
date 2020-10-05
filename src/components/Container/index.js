import React from 'react';
import PropTypes from 'prop-types';

import { Content, Card } from './styles';

export default function Container({ children, card, grid, gridCard }) {
  return (
    <Content grid={grid}>
      {card ? <Card gridCard={gridCard}>{children}</Card> : children}
    </Content>
  );
}

Container.defaultProps = {
  card: false,
  grid: undefined,
  gridCard: undefined,
};

Container.propTypes = {
  card: PropTypes.bool,
  grid: PropTypes.string,
  gridCard: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
