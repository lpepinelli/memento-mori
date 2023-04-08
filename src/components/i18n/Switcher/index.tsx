import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FlagsContainer, SwitcherContainer, SwitcherButton } from './styles'
import { MdOutlineTranslate } from 'react-icons/md'
import { useTheme } from 'styled-components'
import { AnimatePresence } from 'framer-motion'
import { Tooltip } from 'react-tooltip'
import LanguageButton from './LanguageButton'

export default function Switcher () {
  const theme = useTheme()
  const { i18n } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  function handleChangeLanguage (language: string) {
    i18n.changeLanguage(language)
  }

  useEffect(() => {
    console.log(isOpen)
  }, [isOpen])

  // const selectedLanguage = i18n.language
  return (
    <SwitcherContainer>
      <SwitcherButton
        onClick={() => setIsOpen(prev => !prev)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 1.15 }}>
          <MdOutlineTranslate
            color={theme.colors.title}
            size={18}
            style={{ marginLeft: 5 }} />
      </SwitcherButton>
      <AnimatePresence>
        {isOpen
          ? <FlagsContainer
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ opacity: 0 }}
              key='flag-presence'>
                <LanguageButton action={() => handleChangeLanguage('en-Us')} type='Usa'/>
                <LanguageButton action={() => handleChangeLanguage('pt-Br')} type='Br'/>
            </FlagsContainer>
          : <></>}
      </AnimatePresence>
      <Tooltip anchorSelect=".languageTooltip" />
    </SwitcherContainer>
  )
}
