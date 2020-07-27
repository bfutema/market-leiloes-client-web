import { toast } from 'react-toastify';

import api from '~/services/api';

export function onlyChars(value, cb) {
  const re = /^\S*$/;

  if (re.test(value)) cb(value);
}

export function cpfCnpj(value, cb) {
  value = value.replace(/\D/g, '');

  if (value.length > 14) value = value.slice(0, -1);

  if (value.length > 11) {
    value = value.replace(/(\d{2})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1/$2');
    value = value.replace(/(\d{4})(\d)/, '$1-$2');
  } else {
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1.$2');
    value = value.replace(/(\d{3})(\d)/, '$1-$2');
  }

  cb(value);
}

export async function validate(type, value, message, cb) {
  if (value.length === 0) return;

  const response = await api.post('validators', { type, value });

  const { success } = response.data.message;

  if (!success) {
    toast.error(message);
    cb();
  }

  return success;
}
