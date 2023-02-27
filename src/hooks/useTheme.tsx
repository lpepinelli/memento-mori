import { useMemo } from 'react'
import themes from '../assets/styles/themes'
import useLocalState from './useLocalState'

export default function useTheme () {
  const [theme, setTheme] = useLocalState<'dark' | 'light'>('theme', 'light')

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  function handleToggleTheme () {
    // setTheme(prevState => {
    //   const theme = prevState === 'dark' ? 'light' : 'dark'
    //   localStorage.setItem('theme', JSON.stringify(theme))
    //   return theme
    // })
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
  }

  return {
    currentTheme,
    handleToggleTheme
  }
}
