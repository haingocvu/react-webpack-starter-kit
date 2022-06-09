import React from 'react';
import clsx from 'clsx';

import styles from './styles.css';

function NotFound() {
  return <div className={clsx(styles.red, styles.lg)}>NotFound</div>;
}

export default NotFound;
