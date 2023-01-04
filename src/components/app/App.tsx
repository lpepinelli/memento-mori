import { useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../assets/styles/global'
import themes from '../../assets/styles/themes'
import { Circle } from '../Circle'
import { Home } from '../pages/home'

export function App () {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  const currentTheme = useMemo(() => {
    return themes[theme] || themes.dark
  }, [theme])

  const handleToggleTheme = () => {
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
