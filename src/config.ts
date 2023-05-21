export const isDev = import.meta.env.DEV;
export const isProd = import.meta.env.PROD;

export const CONFIG = {
    PLAY_GROUND_IFRAME_URL: isProd
        ? 'https://react-transformer-playground.web.app/'
        : 'http://localhost:5174/'
}