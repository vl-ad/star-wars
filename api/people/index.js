import { PEOPLE_URL } from '@constants/urls';

export const getPeople = async () => {
  try {
    const response = await fetch(PEOPLE_URL);
    return await response.json();
  } catch (err) {
    return Error(err);
  }
};

export const getPerson = async ({ id }) => {
  try {
    const response = await fetch(`${PEOPLE_URL}/${id}`);
    return await response.json();
  } catch (err) {
    return Error(err);
  }
};
