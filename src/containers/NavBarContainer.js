import React from 'react'
import { withRouter } from 'react-router-dom'
import api from '../api'
import NavBar from '../components/NavBar'
import { LanguageContext } from '../utils/TranslationsProvider'

const languages = ['pl', 'en']

const NavBarContainer = ({ setSearchResults, history }) => {
  const [language, setLanguage] = React.useContext(LanguageContext)

  const onSearch = async phrase => {
    if (phrase) {
      const { data: { points } } = await api.post('search_points', { phrase })
      setSearchResults(points)
      history.push('/search')
    } else {
      history.push('/')
    }
  }

  const links = [
    { label: 'Informacje', url: '/info' },
  ]

  return (
    <NavBar
      onSearch={phrase => onSearch(phrase)}
      links={links}
      language={language}
      languages={languages}
      setLanguage={setLanguage}
    />
  )
}

export default withRouter(NavBarContainer)
