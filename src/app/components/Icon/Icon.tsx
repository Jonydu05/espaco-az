import { ReactNode } from 'react';
import style from './Icon.module.scss';

interface Props {
  children: ReactNode;
  classIcon?: string;
}

export default function Icon({ children, classIcon }: Props) {
  return <span className={`${style['material-symbols-rounded']} ${classIcon}`}>{children}</span>;
}
