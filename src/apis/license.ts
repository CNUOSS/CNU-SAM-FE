import axios from 'axios';

export const getLicenseListAPI = `/licenses/search?`;

export const createLicenseListAPI = async () => {
  const { data } = await axios.post(`/licenses`);
  return data;
};

export const deleteLicenseList = async () => {
  const { data } = await axios.delete(`/license/id`);
  return data;
};
