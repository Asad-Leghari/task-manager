import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const base = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 1000,
});

export const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  timeout: 1000,
});

// Add Authorization header dynamically
client.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Add a response interceptor to the *client*
client.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res = await base.post("auth/refresh/", {
          refresh: localStorage.getItem("refresh"),
        });

        const newAccess = res.data.access;
        localStorage.setItem("access", newAccess);

        // Update Authorization header
        if (originalRequest.headers) {
          originalRequest.headers["Authorization"] = `Bearer ${newAccess}`;
        }

        return client(originalRequest); // Retry original request
      } catch (refreshError) {
        console.error("Token refresh failed", refreshError);
        // Optional: redirect to login or handle logout
      }
    }

    return Promise.reject(error);
  }
);
