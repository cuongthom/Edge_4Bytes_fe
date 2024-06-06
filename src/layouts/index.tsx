import { Navigate, Route, Routes } from "react-router-dom";
import PublicLayout from "./PublicLayout";
import PrivateLayout from "./PrivateLayout";
import publicRoutes from "../routes/publicRoutes";
import privateRoutes from "../routes/privateRoutes";
import { ACCESS_TOKEN_KEY } from "../constants";
import NotFoundPage from "../pages/page_404/NotFoundPage";
import upstashService from "../services/upstashService";
import { useUserState } from "../states/user";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import DetailLoading from "../components/loading/DetailLoading";

function AppLayout() {
  const [loading, setLoading] = useState(true);
  const isLoggedIn = localStorage.getItem(ACCESS_TOKEN_KEY);
  const { onSetUser } = useUserState();
  useQuery({
    queryKey: ["profile-user"],
    queryFn: async () => {
      if (!isLoggedIn) return;
      const res = await upstashService.getProfileUser(isLoggedIn);
      onSetUser(res?.data);
      return res.data;
    },
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <DetailLoading />
  ) : (
    <Routes>
      <Route element={<PublicLayout />}>
        {Object.values(publicRoutes).map(
          ({ path, component: Component, requiredLogin }) => (
            <Route
              key={path}
              path={path}
              element={
                requiredLogin || !isLoggedIn ? (
                  <Component />
                ) : (
                  <Navigate to="/" />
                )
              }
            />
          )
        )}
      </Route>
      <Route element={<PrivateLayout />}>
        {Object.values(privateRoutes).map(
          ({ path, component: Component, requiredLogin }) => (
            <Route
              key={path}
              path={path}
              element={
                !requiredLogin || !!isLoggedIn ? (
                  <Component />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          )
        )}
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppLayout;
