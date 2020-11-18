import styles from "./loader.module.css";

export default function Loader({isLoading}) {
  return isLoading ? (
    <div className={styles.container}>
      <div className={styles.loaderContent}>
        <img src="/loader.svg" />
        Loading...
      </div>
    </div>
  ) : (
    ""
  );
}
