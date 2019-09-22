import React from 'react';
import Layout from '../layouts/Layout';
import Card from '../components/Card';
import CardGrid from '../components/CardGrid';

const Code = () => (
  <Layout>
    <h1>Code</h1>
    <CardGrid>
      <Card title="Tic-tac-toe" description="Emoji based noughts and crosses implemented in TypeScript/React." />
    </CardGrid>
  </Layout>
);

export default Code;
