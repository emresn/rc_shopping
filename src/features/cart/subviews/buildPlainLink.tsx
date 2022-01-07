import Link from 'next/link';

import { ProductCountModel } from '@/model/ProductCountModel';

export function buildPlainLink(
  item: ProductCountModel,
  label: string,
  isColored?: boolean
) {
  return (
    <Link href={`../products/p/${item.product.key}`}>
      <a>
        <span className={`${isColored ? 'text-primary-500' : ''}`}>
          {label}
        </span>
      </a>
    </Link>
  );
}
