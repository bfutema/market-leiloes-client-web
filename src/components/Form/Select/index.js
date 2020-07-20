import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ReactSelect from 'react-select';

import { useField } from '@unform/core';

import { colors } from './theme';
import { Container } from './styles';

export default function Select({ name, ...rest }) {
  const sRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: sRef.current,
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Container>
      <ReactSelect
        ref={sRef}
        defaultValue={defaultValue}
        {...rest}
        theme={{
          colors,
        }}
        styles={{
          control: (styles) => ({
            ...styles,
            borderRadius: 8,
            boxShadow: 'inset 0 0 2px -1px #000;',
          }),
          option: (styles, { isSelected }) => ({
            ...styles,
            backgroundColor: isSelected && 'rgba(0,0,0,0.2)',
            color: '#222',
          }),
        }}
      />
      {error && <span>{error}</span>}
    </Container>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
};
