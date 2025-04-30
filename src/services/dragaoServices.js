import axios from 'axios';

const apiUrl = 'http://localhost:3000/dragoes';

export const getDragao = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar os dados:', error);
    throw error;
  }
};