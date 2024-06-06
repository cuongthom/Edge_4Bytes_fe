
import LoadingPage from "../components/loading/LoadingPage";
import PaymentError from "../components/paymentNotification/PaymentError";
import PaymentSuccess from "../components/paymentNotification/PaymentSuccess";
import HomePage from "../pages/home/HomePage";
import LoginPage from "../pages/login/LoginPage";
import PricingVectorPage from "../pages/pricing/PricingVectorPage";



const publicRoutes = {
  home: {
    path: '/',
    component: HomePage,
    requiredLogin: true,
  },
  login: {
    path: '/login',
    component: LoginPage,
    requiredLogin: false,
  },
  pricingVector: {
    path: '/pricing/vector',
    component: PricingVectorPage,
    requiredLogin: true,
    getPath: (type: string) => `/pricing/vector?type=${type}`,
  },
  paymentError: {
    path: '/error',
    component: PaymentError,
    requiredLogin: true,
  },

  paymentSuccess: {
    path: '/success',
    component: PaymentSuccess,
    requiredLogin: true,
    getPath: (type: string) => `/success?type=${type}`,
  },
  loginGithub: {
    path: '/github-login-success',
    component: LoadingPage,
    requiredLogin: true,
  },
}
export default publicRoutes;
