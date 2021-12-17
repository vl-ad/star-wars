import { PEOPLE_TYPE, PLANETS_TYPE, STARSHIPS_TYPE } from '@constants/types';

export const BASE_URL = 'https://www.swapi.tech/api';

export const PEOPLE_URL = `${BASE_URL}/${PEOPLE_TYPE}`;
export const PLANET_URL = `${BASE_URL}/${PLANETS_TYPE}`;
export const STARSHIPS_URL = `${BASE_URL}/${STARSHIPS_TYPE}`;
