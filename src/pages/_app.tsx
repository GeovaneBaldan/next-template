// External Libraries
import type { AppProps } from 'next/app'

// Providers
import { AppThemeProvider } from '@contexts/useAppTheme'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
    </AppThemeProvider>
  )
}
