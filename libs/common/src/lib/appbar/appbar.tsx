import styles from './appbar.module.css';

/* eslint-disable-next-line */
export interface AppbarProps {}

export function Appbar(props: AppbarProps) {
  return (
    <div className={styles['container']}>

      <h5>Welcome to Appbar!</h5>

      <h3>Wang and suha</h3>
    </div>
  );
}

export default Appbar;
