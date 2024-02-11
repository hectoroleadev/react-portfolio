export const getEnvVariables = () => {
  const BASE_URL = import.meta.env.BASE_URL || '';

  return {
    BASE_URL,
    STORAGE_URL: import.meta.env.VITE_STORAGE_URL,
  };
};
