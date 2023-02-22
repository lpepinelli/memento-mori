import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../assets/styles/global'
import { PagesProvider } from '../../context/pagesContext'
import useTheme from '../../hooks/useTheme'
import { Circle } from '../Circle'
import Pages from '../Pages'

export function App () {
  const { currentTheme, handleToggleTheme } = useTheme()

  return (
    <ThemeProvider theme={currentTheme}>
      <PagesProvider>
        <GlobalStyle />
        <Circle onToggleTheme={handleToggleTheme}/>
        <Pages />
      </PagesProvider>
    </ThemeProvider>
  )
}
