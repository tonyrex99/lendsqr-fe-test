"use client";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { adminLogin } from "@/lib/utils/login";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

const LoginForm: FC<Props> = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    if (data) {
      adminLogin(data);
      setLoading(true);
      setTimeout(() => {
        reset();
        router.push("/dashboard"); // Navigate to dashboard
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <section className="">
      <div className="login-header">
        <h1>Welcome!</h1>
        <p>Enter details to login.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email && errors.email.type === "required" && (
            <span role="alert" className="input-error">
              Please enter your email
            </span>
          )}
        </div>

        <div>
          <div className="input-password">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />
            <p
              className="password-visible"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "HIDE" : "SHOW"}
            </p>
          </div>

          {errors.password && errors.password.type === "required" && (
            <span role="alert" className="input-error">
              Please enter your password
            </span>
          )}
        </div>

        <p>FORGOT PASSWORD?</p>

        <button type="submit">{loading ? "Loading..." : "LOG IN"}</button>
      </form>
    </section>
  );
};

export default LoginForm;
