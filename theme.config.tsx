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
    text: 'Green Ride Docs',
  },
  search: {
    placeholder: 'Search...',
  },
  i18n: [
    { locale: 'en-US', text: 'English' },
    { locale: 'or', text: 'Oromiffa' },
    { locale: 'am', text: 'አማርኛaaa' },
  
    // { locale: 'ar-SA', text: 'العربية', direction: 'rtl' }
  ]
}

export default config
