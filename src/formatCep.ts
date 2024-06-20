export const formatCep = (value: string) => {
  return value.replace(/\D/g, '') // remove caracteres não numéricos
    .replace(/(\d{5})(\d)/, '$1-$2') // insere um hífen após o quinto dígito
    .replace(/(-\d{3})\d+?$/, '$1'); // garante que apenas três dígitos sigam o hífen
};