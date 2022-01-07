interface CartViewProps {
  rowClass: string;
}

export const BuildHeadersRow = ({ rowClass }: CartViewProps) => {
  return (
    <div className={`${rowClass}`}>
      <div className='w-2/12'></div>
      <h4 className='w-2/12'>Product</h4>
      <h4 className='w-3/12 text-center'>Details</h4>
      <h4 className='w-3/12 text-center'>Quantity</h4>
      <h4 className='w-1/12 text-center'>Unit Price</h4>
      <h4 className='w-1/12 text-right'>Total Price</h4>
    </div>
  );
};
