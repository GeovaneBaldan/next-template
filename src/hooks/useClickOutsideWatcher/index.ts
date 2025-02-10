import { RefObject, useEffect } from 'react'

export function useClickOutsideWatcher(
  ref: RefObject<HTMLElement | null>,
  onClickOutside: VoidFunction,
  isDisabled = false
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (event.target && !ref?.current?.contains(event.target as Node)) {
        onClickOutside()
      }
    }

    if (!isDisabled) document.addEventListener('mousedown', handleClickOutside)

    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [ref, isDisabled])
}
