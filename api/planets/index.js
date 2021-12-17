import { PLANET_URL } from '@constants/urls';

export const getPlanets = async () => {
  try {
    const response = await fetch(PLANET_URL);
    return await response.json();
  } catch (err) {
    return Error(err);
  }
};

export const getPlanet = async ({ id, url = `${PLANET_URL}/${id}` }) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    return Error(err);
  }
};
