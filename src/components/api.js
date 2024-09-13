import axios from "axios";

export const countriesApi = async (api) => {
  try {
    const response = await axios.get(api);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// export const popularMovie =async () => {

// }
