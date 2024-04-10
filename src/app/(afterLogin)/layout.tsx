import React from "react";
import styles from "./layout.module.css";

const AfterLoginLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}></section>
      </header>
      <div className={styles.rightSectionWrapper}>
        <div className={styles.rightSectionInner}></div>
        <main className={styles.main}>{children}</main>
        <section className={styles.rightSection}></section>
      </div>
    </div>
  );
};

export default AfterLoginLayout;
