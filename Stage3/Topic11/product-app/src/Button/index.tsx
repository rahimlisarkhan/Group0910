import React from 'react';
import { ButtonSize } from './type';

type ButtonProps = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  style?: React.CSSProperties;
  size?: ButtonSize;
};

function Button(props: ButtonProps) {
  return (
    <button
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.className}
      style={props.style}
    >
      {props.loading && <span className="loader">...</span>}
      {props.title}
    </button>
  );
}

export default Button;
