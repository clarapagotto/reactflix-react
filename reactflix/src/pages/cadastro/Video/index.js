import React from 'react';
import Layout from '../../../components/Layout';
import { Link } from 'react-router-dom';

function CadastroVideo() {
  return (
    <Layout>
      <h1>Cadastro de Video</h1>
      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </Layout>
  );
}

export default CadastroVideo;
