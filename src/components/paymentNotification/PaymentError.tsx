import { useEffect } from "react";

function PaymentError() {
    useEffect(() => {
        const timer = setTimeout(() => {
            window.location.href = '/'; // Chuyển hướng sang trang home sau 3 giây
        }, 3000);

        return () => clearTimeout(timer); // Xóa timeout khi component unmount
    }, []);
    return (
        <div className="main-container-payment">
            <div className="check-container error">
                <div className="check-background">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 21L81 81M81 21L21 90" stroke="red" strokeWidth="500" />
                    </svg>
                </div>
                <div className="check-shadow"></div>
            </div>
        </div>
    )
}

export default PaymentError