// Função para aplicar a máscara
export const formatTelefone = (value) => {
  if (value) {
    // Remove tudo que não for número
    let v = value.replace(/\D/g, "");

    if (v.length > 11) v = v.slice(0, 11); // limita a 11 dígitos

    if (v.length <= 10) {
      // Formato fixo: (99) 9999-9999
      return v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, "($1) $2-$3");
    } else {
      // Formato celular: (99) 99999-9999
      return v.replace(/^(\d{2})(\d{5})(\d{0,4})$/, "($1) $2-$3");
    }
  }
};

export const formatCep = (value) => {
  if (value) {
    return value
      .replace(/\D/g, '')                  // Remove tudo que não for dígito
      .replace(/^(\d{2})(\d)/, '$1.$2')    // Adiciona ponto após 2 dígitos
      .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2-$3') // Adiciona traço após 5 dígitos
      .slice(0, 10);                       // Limita a 10 caracteres (12.345-678)
  }
};
