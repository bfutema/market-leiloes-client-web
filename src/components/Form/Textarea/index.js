import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import { useField } from '@unform/core';

import { Container } from './styles';

export default function Textarea({ name, ...rest }) {
  const tRef = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: tRef.current,
      path: 'value',
      setValue(ref, value) {
        ref.setTextareaValue(value);
      },
      clearValue(ref) {
        ref.setTextareaValue('');
      },
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <textarea ref={tRef} defaultValue={defaultValue} {...rest} />
      {error && <span>{error}</span>}
    </Container>
  );
}

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
};
