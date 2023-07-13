import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import AuthForm from "../components/auth/auth-form";

function AuthPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return <AuthForm />;
}

export default AuthPage;
