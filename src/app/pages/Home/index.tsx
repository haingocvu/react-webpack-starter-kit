import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { messages } from './messages';
import { useGetPokemonByNameQuery } from 'services/rtkApi/endpoints/getPokemonByName';

export function Home() {
  const { t, i18n } = useTranslation();
  const { isLoading, data, isError } = useGetPokemonByNameQuery('bulbasaur');
  console.log(process.env.NODE_ENV);
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
