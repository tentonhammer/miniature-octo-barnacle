import { Button } from '../components/Button';
import styles from './app.module.scss';

function App() {
  const { layout } = styles;
  console.log(layout);

  return (
    <div className={layout}>
      <Button />
    </div>
  );
}

export default App;
