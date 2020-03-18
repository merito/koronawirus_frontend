import React from 'react'
import NavBar from '../components/NavBar'
import { LanguageContext } from '../utils/TranslationsProvider'
// import {
//   getInfectedNumber,
//   getDeathsNumber,
//   getCuredNumber,
// } from '../data'
import Text from '../components/Text'

const languages = ['pl', 'en']

const NavBarContainer = () => {
  const [language, setLanguage] = React.useContext(LanguageContext)
  const [infectedNumber, setInfectedNumber] = React.useState()
  const [deathsNumber, setDeathsNumber] = React.useState()
  const [curedNumber, setCuredNumber] = React.useState()

  const links = [
    { label: <Text id='infoPage.title' />, url: '/info' },
    { label: <Text id='contributing' />, url: '/contributing'}
  ]

  React.useEffect(() => {
    // setInfectedNumber(getInfectedNumber())
    // setDeathsNumber(getDeathsNumber())
    // setCuredNumber(13)
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
    />
  )
}

export default NavBarContainer
