import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsWildcards
    zIndex: Record<ZIndexWildcards, number>
    padding: Record<PaddingWildcard, string>
    borderRadius: Record<RadiusWildcard, string>
  }

  export type PaddingWildcard =
    | 'p1'
    | 'p2'
    | 'p3'
    | 'p4'
    | 'p5'
    | 'p6'
    | 'p7'
    | 'p8'

  export type RadiusWildcard = 'button' | 'input' | 'modal' | 'none'

  export type ZIndexWildcards = 'modal' | 'modal-backdrop'

  export interface ColorsWildcards {
    primary: string
    secondary: string

    skeleton: string
    scrollbar: string

    text: {
      primary: string
      secondary: string
      error: string
      success: string
    }

    background: {
      default: string
    }

    button: {
      label: string
      background: string
      emptyBackground: string
      activeBackground: string
    }

    border: {
      default: string
      active: string
      error: string
    }

    toast: {
      info: string
      error: string
      warning: string
      success: string
    }
  }
}
