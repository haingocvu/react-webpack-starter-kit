import React from 'react';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import styles from './styles.css';
import { messages } from './messages';

function NotFound() {
  const { t } = useTranslation();
  return (
    <>
      <div className={clsx(styles.red, styles.lg)}>
        {t(messages.notFoundPage())}
      </div>
    </>
  );
}

export default NotFound;
