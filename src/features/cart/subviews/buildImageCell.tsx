import NextImage from '@/components/NextImage';

import { thumbnailResize } from '@/constants/imageResizeRules';
import { generateResizeImageHref } from '@/helpers/generateResizeImageHref';
import { ProductCountModel } from '@/model/ProductCountModel';

interface Props {
  item: ProductCountModel;
}
const BuildImageCell = ({ item }: Props) => {
  return (
    <div className='overflow-hidden w-full h-full'>
      {item.product.images && (
        <NextImage
          useSkeleton
          priority
          className='h-full group-hover:brightness-90'
          width='140'
          height='140'
          blurClassName='bg-gray-300'
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
