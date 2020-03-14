import React from 'react'
import NavBar from '../components/NavBar'
import { LanguageContext } from '../utils/TranslationsProvider'
import {
  getInfectedNumber,
  getDeathsNumber,
  getLastUpdate,
  getCuredNumber,
} from '../data'

const languages = ['pl', 'en']

const NavBarContainer = () => {
  const [language, setLanguage] = React.useContext(LanguageContext)
  const [infectedNumber, setInfectedNumber] = React.useState()
  const [deathsNumber, setDeathsNumber] = React.useState()
  const [curedNumber, setCuredNumber] = React.useState()
  const [lastUpdate, setLastUpdate] = React.useState()

  const links = [
    { label: 'Informacje', url: '/info' },
  ]

  React.useEffect(() => {
    setInfectedNumber(getInfectedNumber())
    setDeathsNumber(getDeathsNumber())
    setLastUpdate(getLastUpdate())
    setCuredNumber(13)
  }, [])

  return (
    <NavBar
      links={links}
      language={language}
      languages={languages}
      setLanguage={setLanguage}
      infectedNumber={infectedNumber}
      deathsNumber={deathsNumber}
      curedNumber={curedNumber}
      lastUpdate={lastUpdate}
    />
  )
}

export default NavBarContainer
