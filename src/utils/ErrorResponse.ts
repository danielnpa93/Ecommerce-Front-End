export const errorResponse = error => {
  return {
    message: error?.response?.data?.message || '',
    errors: error?.response?.data?.error || [],
    status: error?.response?.status,
  };
};
