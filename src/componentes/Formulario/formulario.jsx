import React from 'react';
import './formulario.css';

export default function Formulario() {
  return (
    <form>
      <label>
        Nome
        <input />
      </label>

      <label>
        Email
        <input />
      </label>

      <button type='submit'>Cadastrar</button>
    </form>
  );
}
