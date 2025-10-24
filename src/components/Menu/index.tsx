import styles from './styles.module.css';
import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light'

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nexTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nexTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);

    return () => {
      console.log('Componente atualizado');
      
    }
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <h1>{theme}</h1>
      <a
        className={styles.menuLink}
        href="#"
        aria-label='Ir para a Home'
        title='Ir para a Home'>
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label='Ver Histórico'
        title='Ver Histórico'>
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label='Configurações'
        title='Configurações'>
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href="#"
        aria-label='Alterar tema'
        title='Alterar tema'
        onClick={handleThemeChange}>
        <SunIcon />
      </a>
    </nav>
  )
}
