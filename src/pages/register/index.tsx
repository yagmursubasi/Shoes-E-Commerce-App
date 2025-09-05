import type { FC, FormEvent } from "react";
import { Link } from "react-router-dom";
import Input from "../../components/input";
import type { RegisterData } from "../../types";
import useAuth from "../../hooks/useAuth";

const Register: FC = () => {
  const { register } = useAuth();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    register.mutate(userData as unknown as RegisterData);
  };
  return (
    <>
      <div className="flex min-h-screen flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="/logo.svg"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Hesabını Oluştur
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <Input label="Ad" name="firstName" type="type" />
            <Input label="Soyad" name="lastName" type="type" />
            <Input label="Email" name="email" type="type" />
            <Input label="Şifre" name="password" type="password" />

            <div>
              <button
                disabled={register.isPending}
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
              >
                Kayıt Ol
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Hesabın var mı?
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500 ps-2 cursor-pointer"
            >
              Giriş Yap
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
