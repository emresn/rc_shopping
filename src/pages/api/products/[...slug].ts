import type { NextApiHandler } from 'next';

import { productRequestEnums } from '@/enums/productRequestEnums';
import { fetchProducts } from '@/features/product/productAPI';
import { RequestOptions } from '@/model/RequestOptions';

const productsHandler: NextApiHandler = async (req, res) => {
  const { slug } = req.query;

  const options: RequestOptions = {
    sort: productRequestEnums.created,
    direction: productRequestEnums.desc,
  };
  for (let index = 0; index < slug.length; index++) {
    switch (slug[index].split('&')[0]) {
      case productRequestEnums.sort:
        options.sort = slug[index].split('&')[1];
        break;
      case productRequestEnums.direction:
        options.direction = slug[index].split('&')[1];
        break;
      case productRequestEnums.limit:
        options.limit = slug[index].split('&')[1];
        break;
      case productRequestEnums.category:
        options.category = slug[index].split('&')[1];
        break;
      case productRequestEnums.offset:
        options.offset = slug[index].split('&')[1];
        break;
      default:
        break;
    }
  }
  // http://localhost:3000/api/products/sort&created_at/limit&10/offset&10
  const responseData = await fetchProducts(req, res, options);
  res.json({ data: responseData });
};

export default productsHandler;
