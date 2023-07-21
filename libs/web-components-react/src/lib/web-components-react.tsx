import styles from './web-components-react.module.scss';

/* eslint-disable-next-line */
export interface WebComponentsReactProps {}

export function WebComponentsReact(props: WebComponentsReactProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebComponentsReact!</h1>
    </div>
  );
}

export default WebComponentsReact;
