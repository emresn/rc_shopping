import { productsLimit } from '@/constants/productConstants';
import { productRequestEnums } from '@/enums/productRequestEnums';
import { RequestOptions } from '@/model/RequestOptions';

export const initialRequestOptions: RequestOptions = {
  sort: productRequestEnums.created,
  direction: productRequestEnums.desc,
  limit: productsLimit,
};

export const allProductsRequestOptions: RequestOptions = {
  sort: productRequestEnums.created,
  direction: productRequestEnums.desc,
};
