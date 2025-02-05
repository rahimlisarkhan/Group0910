import style from './Button.module.css';

export function Button(props) {
  return <button className={style.button}>{props.children}</button>;
}
