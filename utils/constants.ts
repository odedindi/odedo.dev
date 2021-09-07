export const isDev = process.env.NODE_ENV === 'development';

const baseUrlDev = process.env.NEXT_DEV_ROOT_URL;
const baseUrlProd = process.env.NEXT_PUBLIC_ROOT_URL;
export const baseUrl = isDev ? baseUrlDev : baseUrlProd;
