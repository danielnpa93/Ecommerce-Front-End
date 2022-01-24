const ecommerceApi = process.env.REACT_APP_API_ECOMMERCE;

export const urls = {
  LOGIN: `${ecommerceApi}/api/v1/auth/login`,
  ASYNC_GET_ORDER_LIST: `${ecommerceApi}/api/v1/order`,
  ASYNC_CREATE_USER: `${ecommerceApi}/api/v1/user/create`,
  ASYNC_GET_DELIVERY_TEAM_LIST: `${ecommerceApi}/api/v1/deliveryteam`,
};
