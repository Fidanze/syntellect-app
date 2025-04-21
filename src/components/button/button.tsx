import { FC, ReactNode } from 'react'
import './styles.css';

interface ButtonProps {
  onClick?: () => void
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ onClick, children }) => {
  return <button
    onClick={onClick}
  >
    {children}
  </button>
};

export default Button;
