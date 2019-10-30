import React from 'react';
import Layout from '../layouts/Layout';
import Card from '../components/Card';
import CardGrid from '../components/CardGrid';
import Link from '../components/Link';

const Projects = () => (
  <Layout>
    <h1>Projects</h1>
    <section>
      <h2>Utilities</h2>
      <CardGrid>
        <Card to="https://www.npmjs.com/package/@mthx/circleci-opener" github="https://github.com/mthx/circleci-opener" title="cio">
          <p>
            Node CLI tool that opens the <Link to="https://circleci.com">CircleCI</Link> build web page for your current branch from the
            command line.
          </p>
          <p>I like tools that let me start from the command line and end up on the web.</p>
        </Card>
      </CardGrid>
    </section>
    <section>
      <h2>Toys</h2>
      <CardGrid>
        <Card to="https://oxo.hillsdon.net" github="https://github.com/mthx/oxo" title="Tic-tac-toe">
          <p>Emoji based noughts and crosses implemented in TypeScript/React.</p>
        </Card>
        <Card to="https://dice.hillsdon.net" github="https://github.com/mthx/dice" title="Dice">
          <p>Trivial dice app. Everything sucked or had ads</p>
        </Card>
      </CardGrid>
    </section>
    <section>
      <h2>Archive</h2>
      <CardGrid>
        <Card github="https://github.com/CoreFiling/reviki" title="Reviki">
          <p>SVN-backed wiki as a Java web app.</p>
          <p>
            The reviki.org site is no longer available. You can{' '}
            <a href="/archive/reviki/reviki-org-r1275.zip">download a ZIP of the latest wiki data</a>. I can provide a full SVN dump
            on request.
          </p>
        </Card>
      </CardGrid>
    </section>
  </Layout>
);

export default Projects;
