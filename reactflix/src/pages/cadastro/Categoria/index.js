import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../components/Layout';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const initialValues = {
    name: '',
    description: '',
    color: '',
  };
  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(initialValues);

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost') 
    ? 'http://localhost:8080/categorias'
    : 'http://localhost:8080/categorias';
    fetch(URL).then(async (serverAnswer) => {
      const answer = await serverAnswer.json();
      setCategorias([
        ...answer,
      ]);
    });
  }, []);

  return (
    <Layout>
      <h1>Cadastro de Categoria: {values.name}</h1>

      <form
        onSubmit={function handleSubmit(e) {
          e.preventDefault();
          setCategorias([...categorias, values]);

          setValues(initialValues);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button>Cadastrar</Button>
      </form>

      {categorias.lenght === 0 && <div>Loading...</div>}

      <ul>
        {categorias.map((categoria) => {
          return <li key={`${categoria.nome}`}>{categoria.name}</li>;
        })}
      </ul>

      <Link to="/">Ir para home</Link>
    </Layout>
  );
}

export default CadastroCategoria;
