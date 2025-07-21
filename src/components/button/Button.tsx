
import styles from "./Button.module.scss";
export default function Button({onClick, enabled = true, children} : {onClick: () => void | null, enabled: boolean, children: React.ReactNode}) {
  return <button disabled={!enabled} onClick={onClick} className={styles.button}>{children}</button>;
}

