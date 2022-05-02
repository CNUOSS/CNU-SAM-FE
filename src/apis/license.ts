import axios from 'axios';

export const getLicenseList = async () => {
  const { data } = await axios.get(`/licenses/search?`);
  return data;
};

export const createLicenseList = async () => {
  const { data } = await axios.post(`/licenses`);
  return data;
};

export const deleteLicenseList = async () => {
  const { data } = await axios.delete(`/license/id`);
  return data;
};
