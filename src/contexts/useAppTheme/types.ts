export enum Mode {
  Dark = 'dark',
  Light = 'light'
}

export interface ThemeContext {
  mode: Mode
  toggleTheme: () => void
}
