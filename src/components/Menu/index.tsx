import styles from './styles.module.css';
import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

type AvailableThemes = 'dark' | 'light'

export function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>('dark');

  const nextThemeIcon = {
    dark: <SunIcon/>,
    light: <MoonIcon/>
  }

  function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nexTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nexTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
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
        {nextThemeIcon[theme]}
      </a>
    </nav>
  )
}
