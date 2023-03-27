import { useTranslation } from 'react-i18next'

import UsaFlag from '../../../assets/images/usa.svg'
import BrFlag from '../../../assets/images/brazil.svg'

const I18n = () => {
  const { i18n } = useTranslation()

  function handleChangeLanguage (language: string) {
    i18n.changeLanguage(language)
  }

  // const selectedLanguage = i18n.language
  return (
    <div>
      <img
        src={UsaFlag}
        onClick={() => handleChangeLanguage('en-Us')}
      />
      <img
        src={BrFlag}
        onClick={() => handleChangeLanguage('pt-BR')}
      />
    </div>
  )
}

export default I18n
