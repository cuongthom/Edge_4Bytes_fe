import { useEffect, useState } from "react";
import { ACCESS_TOKEN_KEY } from "../../constants";
import DetailLoading from "./DetailLoading";

function LoadingPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const searchParams = new URLSearchParams(window.location.search);
  const accessToken = searchParams.get("access_token");

  useEffect(() => {
    setLoading(true);
    if (!accessToken) return;
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    const timer = setTimeout(() => {
      window.location.href = "/"; // Chuyển hướng sang trang home sau 3 giây
    }, 2000);
    return () => clearTimeout(timer); // Xóa timeout khi component unmount
  }, []);

  return loading && <DetailLoading />;
}

export default LoadingPage;
