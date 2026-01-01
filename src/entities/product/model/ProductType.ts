type ProductPageSection = {
    name: string;
    location: string;
    price: string;
   date: string;
   duration: string;
   rating:number;
   description: string;
   descriptionFull: string;
   tourists: string;
   departure: string;
   includes: Array<string>;
    imageUrl: Array<string>;
    slug:string|undefined
}
export type{ProductPageSection}