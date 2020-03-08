import React from 'react'
import { withRouter } from 'react-router-dom'
import api from '../api'
import NavBar from '../components/NavBar'
import { LanguageContext } from '../utils/TranslationsProvider'

const languages = ['pl', 'en']

const NavBarContainer = ({ points, history }) => {
  const [language, setLanguage] = React.useContext(LanguageContext)


  const links = [
    { label: 'Informacje', url: '/info' },
  ]

  return (
    <NavBar
      points={points}
      links={links}
      language={language}
      languages={languages}
      setLanguage={setLanguage}
    />
  )
}

export default withRouter(NavBarContainer)
