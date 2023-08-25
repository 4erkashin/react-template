import { clsx } from 'clsx';

import styles from './App.module.css';

export const App = () => (
  <div className={clsx(styles.appWrapper)}>
    <header className={styles.appHeader}>header</header>
    <main className={styles.appMain}>
      <aside className={styles.appSidebar}>left sidebar</aside>
      <section className={styles.appSectionCenter}>
        <ul className={styles.folders}>
          <li className={styles.folder}>Folder 1</li>
          <li className={styles.folder}>Folder 2</li>
          <li className={styles.folder}>Folder 3</li>
        </ul>
      </section>
      <nav className={styles.appSidebar}>right menu</nav>
    </main>
    <footer className={styles.appFooter}>footer</footer>
  </div>
);
