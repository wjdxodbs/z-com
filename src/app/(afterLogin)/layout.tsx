import React, { ReactNode } from "react";
import styles from "./layout.module.css";
import Link from "next/link";
import Image from "next/image";
import zLogo from "../../../public/zlogo.png";
import NavMenu from "./_component/NavMenu";
import { LogoutButton } from "./_component/LogoutButton";
import TrendSection from "./_component/TrendSection";
import FollowRecommend from "./_component/FollowRecommend";
import RightSearchZone from "./_component/RightSearchZone";
import RQProvider from "./_component/RQProvider";

const AfterLoginLayout = ({
  children,
  modal,
}: Readonly<{ children: React.ReactNode; modal: ReactNode }>) => {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}>
          <div className={styles.leftSectionFixed}>
            <Link href="/home" className={styles.logo}>
              <div className={styles.logoPill}>
                <Image src={zLogo} alt="z.com로고" width={40} height={40} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={styles.postButton}>
                게시하기
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <RQProvider>
        <div className={styles.rightSectionWrapper}>
          <div className={styles.rightSectionInner}>
            <main className={styles.main}>{children}</main>
            <section className={styles.rightSection}>
              <RightSearchZone />
              <TrendSection />
              <div className={styles.followRecommend}>
                <h3>팔로우 추천</h3>
                <FollowRecommend />
                <FollowRecommend />
                <FollowRecommend />
              </div>
            </section>
          </div>
        </div>
        {modal}
      </RQProvider>
    </div>
  );
};

export default AfterLoginLayout;
