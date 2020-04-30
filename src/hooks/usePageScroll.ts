import { useEffect } from 'react'

export const usePageScroll = (): void => {
  useEffect(() => {
    const page = document.getElementById('page')
    if (page) page.scrollTop = 0
  }, [])
}
