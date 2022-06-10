import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { messages } from './messages';

import NotFound from 'app/components/NotFound';

export function NotFoundPage() {
  const { t, i18n } = useTranslation();
  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <title>{t(messages[404]())}</title>
        <meta name='description' content={t(messages.notFoundPage())} />
      </Helmet>
      <NotFound />
      <Link to='/'>{t(messages.goBack())}</Link>
    </>
  );
}
