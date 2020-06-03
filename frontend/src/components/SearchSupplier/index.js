import React, { useState } from 'react';
import * as supplierService from '../../services/supplierServices';
import './styles.css';

export default function SearchSupplier(props) {
  const [searchOption, setSearchOption] = useState('');
  const [searchString, setSearchString] = useState('');

  async function search() {
    if (searchOption == 'nome') {
      await supplierService.getSupplierByName(searchString);
    }
  }

  const searchBy = {
    Nome: () => supplierService.getSupplierByName(searchString),
    CPF: () => supplierService.getSupplierByDocument(searchString),
    CNPJ: () => supplierService.getSupplierByDocument(searchString),
    DataDeCadastro: () =>
      supplierService.getSupplierByRegisterTime(searchString),
  };

  return (
    <form>
      <div className="search-supplier">
        <select
          className="search"
          onChange={(e) => {
            setSearchOption(e.target.value);
          }}
        >
          <option value={'Nome'}>Nome</option>
          <option value={'CPF'}>CPF</option>
          <option value={'CNPJ'}>CNPJ</option>
          <option value={'DataDeCadastro'}>Data de cadastro</option>
        </select>

        <input
          type={searchOption == 'DataDeCadastro' ? 'date' : 'text'}
          placeHolder={searchOption}
          onChange={(e) => {
            console.log(e);
            setSearchString(e.target.value);
          }}
        ></input>
        <button className="button" onClick={searchBy[searchOption]}>
          Pesquisar
        </button>
      </div>
    </form>
  );
}
