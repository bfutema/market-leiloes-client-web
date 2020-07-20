export function onlyChars(value, cb) {
  const re = /^\S*$/;

  if (re.test(value)) cb(value);
}
