// External Libraries
import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  PropsWithChildren
} from 'react'
import { ThemeProvider } from 'styled-components'

// Types
import { Mode, ThemeContext } from './types'

// Styles
import { DARK_THEME, LIGHT_THEME } from '@globals/theme'

const AppThemeContext = createContext<ThemeContext | null>(null)

const AppThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  // States
  const [mode, setMode] = useState<Mode>()

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Mode

    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    if (savedTheme && Object.values(Mode).includes(savedTheme)) {
      changeTheme(savedTheme)
    } else if (prefersDark) changeTheme(Mode.Dark)
    else changeTheme(Mode.Light)
  }, [])

  // Functions
  function toggleTheme() {
    const newMode = mode === Mode.Light ? Mode.Dark : Mode.Light
    changeTheme(newMode)
  }

  function changeTheme(mode: Mode) {
    setMode(mode)
    localStorage.setItem('theme', mode)
  }

  if (!mode) return null

  return (
    <AppThemeContext value={{ mode, toggleTheme }}>
      <ThemeProvider theme={mode === Mode.Light ? LIGHT_THEME : DARK_THEME}>
        {children}
      </ThemeProvider>
    </AppThemeContext>
  )
}

function useAppTheme(): ThemeContext {
  const context = useContext(AppThemeContext)

  if (!context) throw new Error('useAppTheme must be within a ContextProvider')
  else return context
}

export { AppThemeProvider, useAppTheme }
