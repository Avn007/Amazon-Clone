import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/1500x600_Hero-Tall_p._CB404993995_.jpg" alt="" />
        
            {/* Product id, title, price, rating, image */}
            <div className="home_row">
            <Product 
                    id={12345} 
                    title="Intel Core i3-9100F 9th Gen Desktop Processor 4 Core Up to 4.2 GHz LGA1151 300 Series 65W (Discrete Graphics Required)" 
                    price={6999} 
                    rating={5} 
                    image="https://images-eu.ssl-images-amazon.com/images/I/71gS%2BAnkfAL._AC_UL270_SR270,270_.jpg" 
            />

            <Product 
                    id={12346} 
                    title="Gigabyte GP-B700H 700W ATX12V SLI CrossFire 80 PLUS BRONZE Certified Modular Active PFC Power Supply" 
                    price={5899} 
                    rating={4} 
                    image="https://m.media-amazon.com/images/I/6101On8CV0L._AC_UY327_FMwebp_QL65_.jpg" 
            />
            </div>

            <div className="home_row">
            <Product 
                    id={12345} 
                    title="Intel Core i3-9100F 9th Gen Desktop Processor 4 Core Up to 4.2 GHz LGA1151 300 Series 65W (Discrete Graphics Required)" 
                    price={6999} 
                    rating={5} 
                    image="https://images-eu.ssl-images-amazon.com/images/I/71gS%2BAnkfAL._AC_UL270_SR270,270_.jpg" 
            />

            <Product 
                    id={12346} 
                    title="Gigabyte GP-B700H 700W ATX12V SLI CrossFire 80 PLUS BRONZE Certified Modular Active PFC Power Supply" 
                    price={5899} 
                    rating={4} 
                    image="https://m.media-amazon.com/images/I/6101On8CV0L._AC_UY327_FMwebp_QL65_.jpg" 
            />

            <Product 
                    id={12345} 
                    title="Intel Core i3-9100F 9th Gen Desktop Processor 4 Core Up to 4.2 GHz LGA1151 300 Series 65W (Discrete Graphics Required)" 
                    price={6999} 
                    rating={5} 
                    image="https://images-eu.ssl-images-amazon.com/images/I/71gS%2BAnkfAL._AC_UL270_SR270,270_.jpg" 
            />
            </div>

            <div className="home_row">
            <Product 
                    id={12345} 
                    title="Intel Core i3-9100F 9th Gen Desktop Processor 4 Core Up to 4.2 GHz LGA1151 300 Series 65W (Discrete Graphics Required)" 
                    price={6999} 
                    rating={5} 
                    image="https://images-eu.ssl-images-amazon.com/images/I/71gS%2BAnkfAL._AC_UL270_SR270,270_.jpg" 
            />
            </div>

        </div>
    )
}

export default Home
