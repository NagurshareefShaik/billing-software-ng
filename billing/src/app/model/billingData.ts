import { BillingItems } from './billingItem';

export class BillingData{

    billNumber:number;
    billDate:string;
    billAmount:number;
    billingItems:BillingItems[]=[];

}