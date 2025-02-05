import { Button } from './Button/Button';
import style from './Footer.module.css';

function Footer() {
  // return <footer className="container text-red-200">Footer</footer>;
  return (
    <footer className={style.container}>
      <h3>Footer</h3>
      <Button>Musanin duymesin</Button>
    </footer>
  );
}

export default Footer;
