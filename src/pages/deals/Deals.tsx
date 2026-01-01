import { useEffect, useState } from 'react';
import SiteBlock from '../../features/block/SiteBlock';
import SiteTitle from '../../features/title/SiteTitle';
import './ui/Deals.css';
import type { ProductPageSection } from '../../entities/product/model/ProductType';
import ProductDao from '../../entities/section/api/ProductDao';
//  name: string;
//     location: string;
//     price: string;
//    date: string;
//    duration: string;
//    description: string;
//    descriptionFull: string;
//    tourists: string;
//    departure: string;
//    includes: Array<string>;
//     imageUrl: Array<string>;
//     slug:string|undefined
function ProductCard({ item }: { item: ProductPageSection }) {
    return (
        <SiteBlock width="100%" height="250px">
            <div className="row-container" style={{ margin: "20px" }}>
                   <img style ={{width:"269px", height:"210px", marginTop:"20px", borderRadius:"24px",  objectFit: "cover"}} src = {item.imageUrl[0]}/>
                   <div className = "column-container" style={{ margin: "20px" }}>
                    <h3 style = {{fontWeight:"600"}}><strong>{item.name}</strong></h3>
                    <h4 style = {{color:"#808080"}}>{item.location}</h4>
                    <h4 style = {{color:"#808080",marginTop:"-12px"}}>{item.date}</h4>
<div className="stars">
    {Array.from({ length: 5 }).map((_, i) => (
        <div className="star" key={i}>
            <img src="/img/rating.png" alt="star" />
            <div
                className="star-fill"
                style={{
                    width:
                        item.rating >= i + 1
                            ? "100%"
                            : item.rating > i
                            ? `${(item.rating - i) * 100}%`
                            : "0%"
                }}
            />
        </div>
    ))}
</div>
                    <h4 style = {{color:"#18150E"}}>{item.rating}</h4>
                    <h4 style = {{color:"#18150E"}}>{item.description}</h4>
                    <h4 style = {{color:"#808080", position:"absolute", bottom:"0"}}>{item.departure}</h4>
                    
                   </div>
            </div>
        </SiteBlock>
    );
}




export default function Deals() {
    const [products, setProducts] = useState<ProductPageSection[]>([]);

    useEffect(() => {
        ProductDao.getProducts()
            .then(setProducts)
            .catch(console.error);
    }, []);

    return (
        <div className="block" style={{ marginTop: "0", paddingTop: "180px" }}>
            <SiteTitle title="We’re flying tomorrow!" subtitle="HOT DEALS" />
            <h3 style={{ color: "#808080", marginTop: "20px" }}>
                Book now — the best destinations at a great price.
                <strong> Limited seats, maximum discounts.</strong>
            </h3>

            <div>
                {products.map((item, index) => (
                    <ProductCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
}
