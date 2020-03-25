import { BillingItems } from './billingItem';

export class BillingData{

    billNumber:number;
    billDate:string;
    totalAmount:number;
    billingItems:BillingItems[]=[];

}