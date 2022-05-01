import { useEffect, useState } from 'react';

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if ('theme' in localStorage) {
      if (localStorage.theme === 'dark' && darkMode === false) {
        setDarkMode(true);
      }
      if (localStorage.theme === 'light' && darkMode === true) {
        setDarkMode(false);
      }
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [darkMode]);

  return [darkMode, setDarkMode] as const;
};
