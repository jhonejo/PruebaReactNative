import {baseApi} from '../../config/api/baseApi';
import {Products} from '../../domain/entities/products';

export const getProducts = async (): Promise<Products[]> => {
  try {
    const url = '/bp/products';

    const {data} = await baseApi.get(url, {
      headers: {
        authorId: '0997127883',
      },
    });

    return data;
  } catch (error) {
    throw new Error('No se pudo obtener los productos');
  }
};
