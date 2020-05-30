export default function Validate(data) {
  debugger;
  if (data.document.type == 1) validateCNPJ(data.document.number);
  else {
    validateBirthDate(data.birthDate);
    validateCPF(data.document.number);
  }

  validateName(data.name);
  validateTelephones(data.telephones);
  debugger;
}

function validateCNPJ(cnpj) {
  cnpj = cnpj.replace(/[^\d]+/g, '');

  if (cnpj.length != 14) throw new Error('CNPJ é inválido.');
}

function validateCPF(cpf) {
  cpf = cpf.replace('.', '').replace('-', '');

  if (cpf.length != 11) throw new Error('CPF é inválido.');
}

function validateName(name) {
  if (name.length < 3) throw new Error('atabom');
}

function validateBirthDate(birthDate) {
  birthDate = birthDate.split('/');
  birthDate.forEach((e) => {
    const parsedNumber = Number(e);
    if (parsedNumber == NaN) throw new Error('Data inválida');
  });
}

function validateTelephones(telephones) {
  telephones.forEach((telephone) => {
    if (telephone.length < 9) throw new Error('Telefone inválido');
  });
}