import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import { useTranslation } from "react-i18next";

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

const LanguageSelector = () => {
  const { i18n } = useTranslation()

	const [locale, setLocale] = useState('en');

  const changeLocale = (event) => {
    const l = event.target.value
    if (locale !== l) {
      setLocale(l)
      i18n.changeLanguage(l);
    }
  }

	return <>

		<TextField
			id="standard-select-currency"
			select
			value={locale}
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