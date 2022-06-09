import React from 'react';
import clsx from 'clsx';
import { Helmet } from 'react-helmet-async';

import styles from './styles.css';

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404</title>
      </Helmet>
      <div className={clsx(styles.red, styles.lg)}>NotFound page</div>
    </>
  );
}

export default NotFound;
