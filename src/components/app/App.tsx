import { useMemo, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../assets/styles/global'
import themes from '../../assets/styles/themes'
import { Circle } from '../Circle'
import { Home } from '../pages/Home'
import { FirstQuestion } from '../pages/FirstQuestion'

export function App () {
  const [theme, setTheme] = useState<'dark' | 'light'>('light')
  const [currentPage, setCurrentPage] = useState(0)

  function handlePageChange (pageNumber: number) {
    setCurrentPage(pageNumber)
  }

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

  const pages = [
    <Home onPageChange={handlePageChange} key={1} />,
    <FirstQuestion key={2} />
  ]

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <Circle onToggleTheme={handleToggleTheme}/>
      {pages[currentPage]}
    </ThemeProvider>
  )
}
