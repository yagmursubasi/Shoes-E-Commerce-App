import { type FC } from "react";
import useUser from "../../hooks/useUser";
import { Navigate } from "react-router-dom";

import Layout from "../layout";
import Loader from "../loader";

interface ProtectedProps {
  allowedRole?: "admin" | "user";
}

const Protected: FC<ProtectedProps> = ({ allowedRole }) => {
  const { user, isLoading, isAuthenticated } = useUser();
  //sadece oturumu açık olan kullanıcıların girmesine izin ver
  if (!isAuthenticated) return <Navigate to="/login" />;
  //oturumu açıksa ve role özel bir sayfa değilse girişine izin ver
  if (isAuthenticated && !allowedRole)
    return (
      <div>
        <Layout />
      </div>
    );
  //oturumu açık ve role özel bir sayfaysa kullanıcı yüklenene kadar loader göster
  if (allowedRole && isLoading) return <Loader />;
  // oturumu açık ve  kullanıcının rolü izin verilen role eşitse girişine izin ver
  if (user?.role === allowedRole) {
    return (
      <div>
        <Layout />
      </div>
    );
  }
  //oturumu açık ama kullanıcının rolü izin verilen role eşit değilse ana sayfaya yönlendir
  return <Navigate to="/" />;
};

export default Protected;
