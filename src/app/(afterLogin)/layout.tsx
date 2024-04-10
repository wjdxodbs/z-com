import React from "react";

const AfterLoginLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div>
      애프터 로그인 레이아웃 <div>{children}</div>
    </div>
  );
};

export default AfterLoginLayout;
