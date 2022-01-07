interface CartViewProps {
  rowClass: string;
}

export const BuildHeadersRow = ({ rowClass }: CartViewProps) => {
  return (
    <div className={`${rowClass} text-sm sm:text-lg font-bold `}>
      <div className='w-2/12'></div>
      <span className='w-2/12'>Product</span>
      <span className='hidden w-3/12 text-center sm:block'>Details</span>
      <span className='w-3/12 text-center'>Quantity</span>
      <span className='w-1/12 text-center'>Unit Price</span>
      <span className='w-1/12 text-right'>Total Price</span>
    </div>
  );
};
