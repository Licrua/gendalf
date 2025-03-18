import { Answer } from './components/Answer/Answer';
import { Application } from './components/Application/Application';
import { Description } from './components/Description/Description';
import Footer from './components/Footer/Footer';
import Container from './components/General/Container';
import Header from './components/Header/Header';
import Value from './components/Value/Value';
import { Welcome } from './components/Welcome/Welcome';
import '../src/style.css';
import { Base } from './components/Base/Base';
import Tape from './components/Tape/Tape';
import Main from './components/General/Main';

function App() {
  return (
    <Container>
      <Header />
      <Main>
        <Welcome />
        <Description />
        <Value />
        <Base />
        <Tape />
        <Application />
        <Answer />
      </Main>
      <Footer />
    </Container>
  );
}

export default App;
