// External Libraries
import { DefaultTheme } from 'styled-components'

// Utils
import { Z_INDEX_WILDCARDS } from './zIndex'
import { PADDING_WILDCARDS } from './padding'
import { RADIUS_WILDCARDS } from './borderRadius'
import { DARK_THEME_COLORS, LIGHT_THEME_COLORS } from './colors'

// Types
import { Mode } from '@contexts/useAppTheme/types'

export const LIGHT_THEME: DefaultTheme = {
  colors: LIGHT_THEME_COLORS,
  padding: PADDING_WILDCARDS,
  borderRadius: RADIUS_WILDCARDS,
  zIndex: Z_INDEX_WILDCARDS
}

export const DARK_THEME: DefaultTheme = {
  colors: DARK_THEME_COLORS,
  padding: PADDING_WILDCARDS,
  borderRadius: RADIUS_WILDCARDS,
  zIndex: Z_INDEX_WILDCARDS
}

export const theme: Record<Mode, DefaultTheme> = {
  [Mode.Light]: LIGHT_THEME,
  [Mode.Dark]: DARK_THEME
}
