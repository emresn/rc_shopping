import { CategoryModel } from '@/model/CategortModel';

import { generateProductsApiLink } from './generateProductsApiLink';
import { generateRequestOptions } from './generateRequestOptions';

export function generateHrefFromCategoryModel(model: CategoryModel) {
  const options = generateRequestOptions(`category&${model.name}`);
  const href = generateProductsApiLink(options);

  return href;
}
