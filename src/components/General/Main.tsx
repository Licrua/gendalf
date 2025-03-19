import { Welcome } from '../Welcome/Welcome';
import { Description } from '../Description/Description';
import Value from '../Value/Value';
import { Base } from '../Base/Base';
import Tape from '../Tape/Tape';
import { Application } from '../Application/Application';
import { Answer } from '../Answer/Answer';

function Main() {
  return (
    <main>
      <Welcome />
      <Description />
      <Value />
      <Base />
      <Tape />
      <Application />
      <Answer />
    </main>
  );
}

export default Main;
