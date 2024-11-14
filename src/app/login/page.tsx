import LoginForm from "@/components/login/LoginForm";
import "@/styles/login.scss";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lendsqr Admin Console: Login",
  description:
    "Sign up or log in to manage your loan and lending APIs with Lendsqr Admin Console",
  openGraph: {
    title: "Lendsqr Admin Console: Login",
    description:
      "Sign up or log in to manage your loan and lending APIs with Lendsqr Admin Console",
    images: [
      {
        url: "/images/lendsqr-logo.png",
        alt: "Lendsqr Logo",
      },
    ],
  },
};

const Login = () => {
  return (
    <section className="login">
      <div className="login-div">
        <section className="login-images">
          <Image
            // layout="responsive"
            src="/images/logo.svg"
            alt="logo"
            width={173.76}
            height={36}
            className="logo"
          />
          <div>
            <Image
              layout="responsive"
              src="/images/login-illus.svg"
              alt="illustration"
              width={800}
              height={800}
            />
          </div>
        </section>

        <section className="login-form">
          <Image
            //layout="responsive"
            src="/images/logo.svg"
            alt="logo"
            width={173.76}
            height={36}
            className="logo"
          />

          <LoginForm />
        </section>
      </div>
    </section>
  );
};

export default Login;
