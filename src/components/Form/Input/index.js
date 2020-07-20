import React, { useState, useEffect, useRef } from 'react';
import InputMask from 'react-input-mask';
import PropTypes from 'prop-types';

import { useField } from '@unform/core';

import { Container } from './styles';

export default function Input({ name, mask, pattern, ...rest }) {
  const iRef = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: iRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setInputValue(value);
      },
      clearValue(ref) {
        ref.setInputValue('');
      },
    });
  }, [fieldName, registerField]);

  function handleChange(e) {
    pattern(e.target.value, setInputValue);
  }

  return (
    <Container>
      {mask ? (
        <InputMask
          ref={iRef}
          mask={mask}
          defaultValue={defaultValue}
          {...rest}
        />
      ) : (
        <input
          ref={iRef}
          defaultValue={defaultValue}
          {...rest}
          value={pattern && inputValue}
          onChange={pattern && handleChange}
        />
      )}
      {error && <span>{error}</span>}
    </Container>
  );
}

Input.defaultProps = {
  mask: undefined,
  pattern: undefined,
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  mask: PropTypes.string,
  pattern: PropTypes.func,
};
