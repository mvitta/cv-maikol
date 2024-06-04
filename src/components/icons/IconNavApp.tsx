import styles from '@/components/icons/IconNavApp.module.css'

export default function IconNavApp() {
  return (
    <div className={`${styles.btn} ${styles.notActive}`}>
      <span className={styles.item}></span>
      <span className={styles.item}></span>
      <span className={styles.item}></span>
    </div>
  )
}
