import { BASE_PATH } from './constants';

export const getAssetUrl = (...paths: string[]) => [BASE_PATH, ...paths].join('');
