import React from 'react';

import Sankey from '../components/sankey';

import styles from './index.module.css';
import data from './data';
import formatWeight from '../utils/format-weight';

const App = () => {
  return (
    <div className={styles.container}>
      <Sankey data={data} tooltipFormat={formatWeight} />
    </div>
  );
};

export default App;
