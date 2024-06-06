import { paymentPlanId } from "../constants/interface.tsx";
import axiosClient from "./axiosClient.ts";

const upstashService = {
  register: async (param: object) => {
    const url = "/api-v1/auth/register";
    return await axiosClient.post(url, param);
  },

  login: async (param: object) => {
    const url = "/api-v1/auth/login";
    return await axiosClient.post(url, param);
  },
  loginGG: async (body: object) => {
    const url = "/api-v1/auth/login-with-google";
    return await axiosClient.post(url, body);
  },
  getProfileUser: async (isLoggedIn: string) => {
    const url = "/api-v1/auth/me";
    return await axiosClient.get(url, {
      headers: { Authorization: `Bearer ${isLoggedIn}` },
    });
  },
  get_subscription_jwt: async (id: string, access_token: string) => {
    const url = `/api-v1/subscription/get-subscription-jwt-token/${id}`;
    return await axiosClient.get(url, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
  },
  plan: async (access_token: string) => {
    const url = "/api-v1/plan/";
    return await axiosClient.get(url, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
  },
  paymentPlan: async ({
    productId,
    quanityProduct,
    access_token,
  }: paymentPlanId) => {
    const url = `/api-v1/payment/checkout/${productId}/${quanityProduct}`;
    return await axiosClient.get(url, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
  },
  paymentHistory: async (access_token: string) => {
    const url = "/api-v1/payment-history/";
    return await axiosClient.get(url, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
  },
  createRedis: async (subscriptionID: Number) => {
    const url = `/api-v1/redis?subscriptionID=${subscriptionID}`;
    return await axiosClient.post(url);
  },
  createSubscription: async (access_token: string) => {
    const url = "/api-v1/subscription/";
    return await axiosClient.get(url, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
  },
  getRedisSwaggerJson: async () => {
    const url = "/get-redis-swagger-json";
    return await axiosClient.get(url);
  },
  getSubscriptionById: async (id: string, access_token: string) => {
    const url = `/api-v1/subscription/${id}`;
    return await axiosClient.get(url, {
      headers: { Authorization: `Bearer ${access_token}` },
    });
  },
  unSubscriptionById: async (id: string, accessToken: string) => {
    const url = `/api-v1/subscription/unsubscription/${id}`;
    return await axiosClient.post(url, null, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  },
  createTable: async (jwtSubscription: string, body: any) => {
    const url = `/api-v1/postgres/create-table/`;
    return await axiosClient.post(url, body, {
      headers: { Authorization: `Bearer ${jwtSubscription}` },
    });
  },
  createColumnTable: async (
    jwtSubscription: string,
    tableNameFirst: string,
    body: any
  ) => {
    const url = `/api-v1/postgres/update-table-colums/${tableNameFirst}`;
    return await axiosClient.post(url, body, {
      headers: { Authorization: `Bearer ${jwtSubscription}` },
    });
  },
  getTableName: async (jwtSubscription: string) => {
    const url = "/api-v1/postgres/tables";
    return await axiosClient.get(url, {
      headers: { Authorization: `Bearer ${jwtSubscription}` },
    });
  },
  getColumnByTableName: async (name: string, jwtSubscription: string) => {
    const url = `/api-v1/postgres/columns/${name}`;
    return await axiosClient.get(url, {
      headers: { Authorization: `Bearer ${jwtSubscription}` },
    });
  },
  deleteTable: async (name: string, jwtSubscription: string) => {
    const url = `/api-v1/postgres/drop-table/${name}`;
    return await axiosClient.post(url, null, {
      headers: { Authorization: `Bearer ${jwtSubscription}` },
    });
  },
  deleteColumn: async (
    tableNameFirst: string,
    columnName: string,
    jwtSubscription: string
  ) => {
    const url = `/api-v1/postgres/drop-column/${tableNameFirst}/${columnName}`;
    return await axiosClient.post(url, null, {
      headers: { Authorization: `Bearer ${jwtSubscription}` },
    });
  },
};

export default upstashService;
