import { useEffect, useState } from 'react';
import styles from './btnToggle.module.scss';

type Theme = 'light_mode' | 'dark_mode';

export default function ButtonToggle() {
  const [theme, setTheme] = useState<Theme>('light_mode');

  const handleClick = () => {
    const newTheme: Theme = theme === 'light_mode' ? 'dark_mode' : 'light_mode';
    setTheme(newTheme);
  };

  useEffect(() => {
    const currentTheme: Theme | null = localStorage.getItem('theme') as Theme;
    if (currentTheme) setTheme(currentTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      className={`${styles['btn-toggle']} ${theme}`}
      onClick={handleClick}
      aria-label={`Ativar o modo ${
        theme == 'light_mode' ? 'escuro' : 'claro'
      }`}>
      <span className="icon">
        {theme == 'dark_mode' ? 'light_mode' : 'dark_mode'}
      </span>
    </button>
  );
}
