import NextImage from '@/components/NextImage';

import { thumbnailResize } from '@/constants/imageResizeRules';
import { generateResizeImageHref } from '@/helpers/generateResizeImageHref';
import { ProductCountModel } from '@/model/ProductCountModel';

interface Props {
  item: ProductCountModel;
}
const BuildImageCell = ({ item }: Props) => {
  return (
    <div className=''>
      {item.product.images && (
        <NextImage
          useSkeleton
          className='group-hover:brightness-90'
          width='150'
          height='150'
          alt={item.product.images[0].id}
          src={generateResizeImageHref(
            item.product.images[0].href,
            thumbnailResize
          )}
        ></NextImage>
      )}
    </div>
  );
};
export default BuildImageCell;
