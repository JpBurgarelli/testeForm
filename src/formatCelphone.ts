export const formatPhoneNumber = (value: string) => {
  return value.replace(/\D/g, '') // remove caracteres não numéricos
    .replace(/(\d{2})(\d)/, '($1) $2') // insere parênteses em torno dos dois primeiros dígitos
    .replace(/(\d{5})(\d)/, '$1-$2') // insere um hífen após o quinto dígito
    .replace(/(-\d{4})\d+?$/, '$1'); // garante que apenas quatro dígitos sigam o hífen
};