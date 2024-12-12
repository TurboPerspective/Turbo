import { Component } from 'react';

import styles from './Turbo.module.css';

export class Turbo extends Component<{}> {
  override render() {
    return (
      <div className={styles['container']}>
        <p>Welcome to Turbo!</p>
      </div>
    );
  }
}

export default Turbo;
