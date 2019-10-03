import React from 'react';
import Layout from '../layouts/Layout';
import Card from '../components/Card';
import CardGrid from '../components/CardGrid';

const Projects = () => (
  <Layout>
    <h1>Projects</h1>
    <h2>Toys</h2>
    <CardGrid>
      <Card
        to="https://oxo.hillsdon.net"
        title="Tic-tac-toe"
        description="Emoji based noughts and crosses implemented in TypeScript/React."
      />
      <Card to="http://dice.hillsdon.net" title="Dice" description="Trivial dice app. Everything sucked or had ads." />
    </CardGrid>
  </Layout>
);

export default Projects;
