import React from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { useTranslation } from "react-i18next";
import { GlobalState } from '../contexts/Context';

const languages = [
	{
		value: 'en',
		label: 'English',
	},
	{
		value: 'gr',
		label: 'Ελληνικα',
	}
]

// used to change the current language
const LanguageSelector = () => {
  const { i18n } = useTranslation()
  const { state: { currentLanguage }, dispatch } = GlobalState()

  // if l is different than the saved language in the global state
  //  change the language and save it to global state
  // if not, do nothing
  const changeLocale = (event) => {
    const l = event.target.value
    if (currentLanguage !== l) {
      dispatch({
        type: 'change_language',
        payload: { language: l}
      })
      i18n.changeLanguage(l);
    }
  }

	return <>
		<TextField
			id="standard-select-currency"
			select
			value={currentLanguage}
      placeholder="fff"
			onChange={changeLocale}
			variant="standard"
		>
			{languages.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</TextField>
	</>
}

export default LanguageSelector