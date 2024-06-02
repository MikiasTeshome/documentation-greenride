import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Green RIDE</span>,
  project: {
    link: 'https://github.com/MikiasTeshome/documentation-greenride',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/MikiasTeshome/documentation-greenride',
  footer: {
    text: 'Gre  en Ride Docs',
  },
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'Et-or', text: 'ኦሮሚኛ' },
    { locale: 'Et-am', text: 'አማርኛaaa' },
    { locale: 'Et-or', text: 'Oromiffa' },
    // { locale: 'ar-SA', text: 'العربية', direction: 'rtl' }
  ]
}

export default config
