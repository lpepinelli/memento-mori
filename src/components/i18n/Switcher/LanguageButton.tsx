import { motion } from 'framer-motion'
import Brazil from './Brazil'
import Usa from './Usa'

type LanguageButtonProps = {
  action: () => void,
  type: 'Usa' | 'Br'
}

export default function LanguageButton ({ action, type }: LanguageButtonProps) {
  return (
    <motion.button
      className='languageTooltip'
      onClick={action}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 1.15 }}
      data-tooltip-content={type === 'Usa' ? 'English' : 'Português'}>
        {type === 'Usa' ? <Usa /> : <Brazil />}
    </motion.button>
  )
}
