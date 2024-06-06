import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

function PaymentSuccess() {
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type") || "";
  const lowercaseType = type?.toLowerCase();
  useEffect(() => {
    if (!type) return;
    const timer = setTimeout(() => {
      window.location.href = `/${lowercaseType}`; 
    }, 3000);
    return () => clearTimeout(timer); 
  }, []);
  return (
    <div className="main-container-payment">
      <div className="check-container">
        <div className="check-background">
          <svg
            viewBox="0 0 65 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 25L27.3077 44L58.5 7"
              stroke="white"
              strokeWidth="13"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="check-shadow"></div>
      </div>
    </div>
  );
}

export default PaymentSuccess;
