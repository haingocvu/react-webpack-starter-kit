import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export function Sandbox() {
  const { i18n } = useTranslation();
  return (
    <>
      <Helmet htmlAttributes={{ lang: i18n.language }}>
        <meta name='description' content='Sandbox page' />
      </Helmet>
    </>
  );
}
