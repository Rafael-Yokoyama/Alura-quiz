import styled from "styled-components";
import db from "../db.json";
import Widget from "../src/componentes/Widget";
import Footer from "../src/componentes/Footer";
import GitHubCorner from "../src/componentes/GitHubCorner";
import QuizBackground from "../src/componentes/QuizBackground";
import QuizLogo from '../src/componentes/QuizLogo'

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
  return (
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
      <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1> Lolzinho</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Lorem</p>
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
