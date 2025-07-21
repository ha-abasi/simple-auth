import styles from "./Button.module.scss";
export default function Button({link, children} : {link: string, children: React.ReactNode}) {
  return <a href={link} className={styles.button}>{children}</a>;
}

