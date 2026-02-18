import { useState, useEffect } from 'react'

const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollDirection, setScrollDirection] = useState('up')

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScroll = () => {
      const currentScrollY = window.pageYOffset

      // Set position
      setScrollPosition(currentScrollY)

      // Set isScrolled
      setIsScrolled(currentScrollY > 50)

      // Set direction
      setScrollDirection(
        currentScrollY > lastScrollY ? 'down' : 'up'
      )

      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', updateScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateScroll)
    }
  }, [])

  return { scrollPosition, isScrolled, scrollDirection }
}

export default useScrollPosition