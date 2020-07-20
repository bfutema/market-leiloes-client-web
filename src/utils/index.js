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
