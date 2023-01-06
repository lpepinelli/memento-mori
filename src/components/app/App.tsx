import { useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../assets/styles/global'
import themes from '../../assets/styles/themes'
import { Circle } from '../Circle'
import { Home } from '../pages/home'

export function App () {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  const handleToggleTheme = () => {
    // setTheme(prevState => {
    //   const theme = prevState === 'dark' ? 'light' : 'dark'
    //   localStorage.setItem('theme', JSON.stringify(theme))
    //   return theme
    // })
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark')
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Circle action={handleToggleTheme}/>
      <Home />
    </ThemeProvider>
  )
}
