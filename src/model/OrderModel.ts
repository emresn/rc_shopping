import { PersonModel } from './PersonModel';
import { ProductCountModel } from './ProductCountModel';
import { TrackModel } from './TrackModel';

export type OrderModel = {
  id: string;
  orderNo: string;
  sender: PersonModel;
  receiver: PersonModel;
  createdAt: Date;
  updatedAt?: Date;
  products: ProductCountModel[];
  isActive: boolean;
  isOnDelivery: boolean;
  isPreparing: boolean;
  isCompleted: boolean;
  track?: TrackModel;
  vat: number;
  totalPrice: number;
  paymentMethod?: string;
  isPaid: boolean;
};
