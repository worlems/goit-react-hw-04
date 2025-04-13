import styles from "./LoadMoreBtn.module.css";

function LoadMoreBtn({ onClick }) {
  return (
    <div className={styles.wrapper}>
      <button onClick={onClick} className={styles.button}>
        Load more
      </button>
    </div>
  );
}

export default LoadMoreBtn;
