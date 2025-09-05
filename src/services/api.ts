import axios from "axios";
import type {
  AuthResponse,
  LoginData,
  RegisterData,
  Shoe,
  ShoeData,
  User,
} from "../types";
const api = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
});

//her api isteği öncesinde localde token varsa header olarak ekle
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
//Eğer access token süresi dolmuşsa otomatik olarak refresh endpointine istek atıp access tokeni yenile
//api'den gelen her cevabı izle
api.interceptors.response.use(
  //başarılı cevapları direkt döndür
  (res) => res,
  //cevap olumsuzsa
  async (err) => {
    const originalRequest = err.config;
    //hata token kaynaklı ve bu istek daha önce yenilenmemişse
    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      //refresh endpointine istek at yeni tokeni al
      try {
        const res = await api.post<AuthResponse>("/auth/refresh");
        localStorage.setItem("accessToken", res.data.accessToken);
        //yenilenmiş token ile orijinal isteği tekrar et
        return api(originalRequest);
      } catch (error) {
        //access token yenilenmezse demek ki refresh tokenin de süresi dolmuş
        //kullanıcıyı login sayfasına yönlendir
        localStorage.removeItem("accessToken");
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }
  }
);

//auth endpoinds
export const authApi = {
  register: (data: RegisterData) =>
    api.post<AuthResponse>("/auth/register", data),
  login: (data: LoginData) => api.post<AuthResponse>("/auth/login", data),
  logout: () => api.post("/auth/logout"),
  getCurrentUser: () => api.get<{ user: User }>("/auth/me"),
};

//shoe endpoints
export const shoesApi = {
  getAll: () => api.get<Shoe[]>("/shoes"),
  getById: (id: string) => api.get<Shoe>(`/shoes/${id}`),
  create: (data: ShoeData) => api.post<Shoe>("/shoes", data),
  edit: (id: string, data: ShoeData) => api.put<Shoe>(`/shoes/${id}`, data),
  delete: (id: string) => api.delete(`/shoes/${id}`),
};
