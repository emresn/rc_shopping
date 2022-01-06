import { productRequestEnums } from '@/enums/productRequestEnums';

export type RequestOptions = {
  sort?: string;
  direction?: string;
  limit?: string;
  offset?: string;
  category?: string;
};

export function optionFromCategoryName(categoryName: string) {
  const option: RequestOptions = {
    sort: productRequestEnums.created,
    direction: productRequestEnums.desc,
    category: categoryName,
  };

  return option;
}
