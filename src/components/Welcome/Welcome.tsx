import './Welcome.css';
import { WelcomeButtons } from './WelcomeButtons';
import { WelcomeDescription } from './WelcomeDescription';
import { WelcomeTitle } from './WelcomeTitle';
export const Welcome = () => (
  <section className="welcome">
    <div className="welcome__wrapper">
      <WelcomeTitle />
      <WelcomeDescription />
      <WelcomeButtons />
    </div>
  </section>
);
