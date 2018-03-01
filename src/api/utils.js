export const getApiUrl = () => {
  const env = process.env.NODE_ENV;
  if (env === 'development') {
    return process.env.API_URL;
  } else {
    return '/path/to/api/prod';
  }
};