import { Button } from './Button/Button';
import style from './Header.module.css';

function Header() {
  console.log('style', style);

  return (
    <header className={style.container}>
      <h2>Logo</h2>
      <Button>Semanin duymesi</Button>
    </header>
  );
}

export default Header;
