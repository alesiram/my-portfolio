import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';


export default function ThemeButton( {mode, setMode}) {
    const isDark = mode === 'dark';

  return (
    <IconButton
      aria-label="toggle theme"
      color="inherit"
      onClick={() => setMode(isDark ? 'light' : 'dark')}
    >
      {isDark ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
