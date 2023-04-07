import { useTranslation } from 'react-i18next'

import { FlagsContainer, SwitcherContainer } from './styles'
import Brazil from './Brazil'
import Usa from './Usa'
import { MdOutlineTranslate } from 'react-icons/md'
import { useTheme } from 'styled-components'

const Switcher = () => {
  const theme = useTheme()
  const { i18n } = useTranslation()

  function handleChangeLanguage (language: string) {
    i18n.changeLanguage(language)
  }

  // const selectedLanguage = i18n.language
  return (
    <SwitcherContainer>
      <MdOutlineTranslate color={theme.colors.title} style={{ marginLeft: 5 }} />

      <FlagsContainer
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        >
        <button onClick={() => handleChangeLanguage('en-Us')}>
          <Usa />
        </button>
        <button onClick={() => handleChangeLanguage('pt-BR')}>
          <Brazil />
        </button>
      </FlagsContainer>
    </SwitcherContainer>
  )
}

export default Switcher
