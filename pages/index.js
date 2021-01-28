import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/componentes/Widget';
import Footer from '../src/componentes/Footer';
import GitHubCorner from '../src/componentes/GitHubCorner';
import QuizBackground from '../src/componentes/QuizBackground';
import QuizLogo from '../src/componentes/QuizLogo';
import Input from '../src/componentes/Input';
import Button from '../src/componentes/Button';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>AluraQuiz- modelo base</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>
              {' '}
              {db.title}
            </h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infoDoEvento) {
              infoDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo a submissão');
            }}
            >
              <Input
                name="NomedoUsuário"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                Jogar
                {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1> Quiz da galera</h1>
            <p>Lorem lorem</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Rafael-Yokoyama" />
    </QuizBackground>
  );
}
