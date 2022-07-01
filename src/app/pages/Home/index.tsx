import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { messages } from './messages';

export function Home() {
  const { t, i18n } = useTranslation();
  console.log(process.env.NODE_ENV);
  console.log(process.env.API_URL);
  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{t(messages.welcome())}</title>
        <meta name='description' content='Home page' />
      </Helmet>
      <main>
        <h2>{t(messages.welcome())}</h2>
      </main>
      <nav>
        <Link to='/abc'>About</Link>
      </nav>
    </>
  );
}
