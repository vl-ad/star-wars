import { STARSHIPS_URL } from '@constants/urls';

export const getStarships = async () => {
  try {
    const response = await fetch(STARSHIPS_URL);
    return await response.json();
  } catch (err) {
    return Error(err);
  }
};

export const getStarship = async ({ id }) => {
  try {
    const response = await fetch(`${STARSHIPS_URL}/${id}`);
    return await response.json();
  } catch (err) {
    return Error(err);
  }
};
