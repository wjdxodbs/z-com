"use client";

import { useRouter } from "next/navigation";
import Main from "../_component/Main";

// import { redirect } from "next/navigation";

const Login = () => {
  // redirect("/i/flow/login");
  const router = useRouter();
  router.replace("/i/flow/login");

  return <Main />;
};

export default Login;
