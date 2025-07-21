'use client'
import styles from "./page.module.scss";
import Button from "@/components/button/Button";

export default function Home() {
  // redirect to the dashboard page
  // irrespective of the user's authentication status

  return (
    <div className={styles.page}>
      <h1>Welcome to the Auth App!</h1>
      <h5>Please click on the following link to proceed to the authentication page.</h5>

      <Button enabled={true} onClick={() => { window.location.href = "/auth"; }}>Go To Authentication Page</Button>
    </div>
  );
}
