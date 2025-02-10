// External Libraries
import React, { useMemo } from 'react'

// Hooks
import { useTypography } from './context'
import { useAppTheme } from '@contexts/useAppTheme'

// Utils
import { getVariants } from './config'
import { getPlaceholder } from './utils/getPlaceholder'

// Types
import { PixelTypeProps } from './types'

// Styles
import { Container } from './styles'

export const Typography: React.FC<PixelTypeProps> = props => {
  // Hooks
  const { mode } = useAppTheme()
  const { loading } = useTypography()

  // Constants
  const {
    variant,
    children,
    isLoading,
    skeletonPlaceholder = 10,
    ...rest
  } = props

  const loadingPlaceholder = useMemo(
    () => getPlaceholder(skeletonPlaceholder),
    [skeletonPlaceholder]
  )

  const customConfig = rest
  const defaultConfig = getVariants(mode)[variant]

  return (
    <Container
      {...{
        $isLoading: isLoading !== undefined ? isLoading : loading,
        ...defaultConfig,
        ...customConfig
      }}
    >
      {loading ? loadingPlaceholder : children}
    </Container>
  )
}
