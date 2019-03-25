import styles from './index.css';


export default function () {

  console.log("hhhhhh");
  let demo = '';

  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/pages/index.js</code> and save to reload.</li>
        <li>
          <a href="https://umijs.org/guide/getting-started.html">
            开始学习
          </a>
        </li>
      </ul>
    </div>
  );
}
