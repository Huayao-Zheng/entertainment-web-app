import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { BiMoon, BiSun } from 'react-icons/bi';
import useAuth from '../hook/useAuth';
import { useDarkMode } from '../hook/useDarkMode';

interface Inputs {
  email: string;
  password: string;
  repeatPassword: string;
}

const Login = () => {
  const [login, setLogin] = useState(true);
  const { signIn, signUp, authError } = useAuth();
  const [darkMode, setDarkMode] = useDarkMode();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<Inputs>();

  console.log({ errors });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (login) {
      await signIn(data.email, data.password);
    } else {
      if (data.password === data.repeatPassword) {
        await signUp(data.email, data.password);
      } else {
        setError('repeatPassword', {
          message: "Repeat password doesn't match",
        });
      }
    }
  };

  return (
    <>
      <Head>
        <title>Entertainment-Login</title>
        <link rel="icon" href="/static/favicon.ico" />
      </Head>

      <div
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-[5%] right-[10%] z-50 flex cursor-pointer"
      >
        {darkMode ? (
          <BiSun className="text-xl text-[white]" />
        ) : (
          <BiMoon className="text-xl text-[black]" />
        )}
      </div>

      <div className="bg-black relative flex h-screen w-screen">
        <main className="fixed left-0 top-[8%] w-screen px-6">
          <img src="/logo.svg" alt="logo" className="mx-auto" />

          <form
            className="mx-auto mt-14 max-w-[400px] space-y-8 rounded-xl bg-[white]/80 py-10 px-6 text-base font-light dark:bg-semiDarkBlue"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-4xl text-[black] dark:text-[white]">
              {login ? 'Login' : 'Sign Up'}
            </h1>

            <div className="space-y-4">
              {/* email */}
              <label className="relative inline-block w-full">
                <input
                  type="email"
                  placeholder="Email address"
                  {...register('email', {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                  className="input-style"
                />
                {/* error message */}
                {errors.email && <p className="input-errors">Can't be empty</p>}
              </label>

              {/* password */}
              <label className="relative inline-block w-full">
                <input
                  type="Password"
                  {...register('password', {
                    required: true,
                    maxLength: 80,
                  })}
                  placeholder="Password"
                  className="input-style"
                />
                {/* error message */}
                {errors.password && (
                  <p className="input-errors">Can't be empty</p>
                )}
              </label>

              {/* repeat password */}
              {!login && (
                <label className="relative inline-block w-full">
                  <input
                    type="Password"
                    {...register('repeatPassword', { required: true })}
                    placeholder="Repeat Password"
                    className="input-style"
                  />
                  {/* error message */}
                  {errors.repeatPassword?.message === '' && (
                    <p className="input-errors">Can't be empty</p>
                  )}

                  {!!errors.repeatPassword?.message &&
                    errors.repeatPassword.message.length > 0 && (
                      <p className="input-errors">
                        {errors.repeatPassword?.message}
                      </p>
                    )}
                </label>
              )}
            </div>

            <button
              className="w-full rounded bg-primaryRed py-3 text-[white] transition-all hover:bg-semiDarkBlue dark:hover:bg-[white] dark:hover:text-semiDarkBlue"
              type="submit"
            >
              {login ? 'Login to your account' : 'Create an account'}
            </button>

            <div className="dark:text-[white]">
              {login ? "Don't have an account?" : 'Already have an account?'}

              <span
                className="ml-2 cursor-pointer text-primaryRed hover:underline"
                onClick={() => setLogin(!login)}
              >
                {login ? 'Sign Up' : 'Login'}
              </span>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default Login;
