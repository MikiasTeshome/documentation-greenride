import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src="/logoblack.png" alt="Green RIDE" style={{ width: '50px', height: 'auto' }} />
      <span style={{ marginLeft: '8px' }}>Green RIDE</span>
    </div>
  ),
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
    { locale: 'am', text: 'አማርኛ' },
    // { locale: 'ar-SA', text: 'العربية', direction: 'rtl' }
  ]
};

export default config;
