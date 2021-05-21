import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://i.ytimg.com/vi/iJo2TnxAWgU/maxresdefault.jpg" alt=""/>

                <div className="home__row">
                    <Product 
                    id="12321341"
                    title='The Lean Startup: How Constant Innoation Creates Radically Successful Businesses Paperback' 
                    price={29.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg'
                    rating={5}/>
                    <Product 
                    id="49538094"
                    title="Kenwood kMix Stand Mixer for Baking,
                    Stylish Kitchen Mixer with K-beater, Dough Hook 
                    and Whisk, 5 Litre Glass Bowl"
                    price={239.0}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/61r0Y3Tlq9L._AC_SL1500_.jpg"/>
                </div>
                <div className="home__row">
                    <Product
                    id="4983858"
                    title="Samsung My Galaxy Watch Active 2 (Stainless Steel)"
                    price={199.99}
                    image='https://images.samsung.com/is/image/samsung/my-galaxy-watch-active2-stainless-steel-r830-sm-r830nsdaxme-rperspectivegold-thumb-190538182?$320_320_PNG$'
                    rating={5}/>
                    
                    <Product
                    id="23445938"
                    title='Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric' 
                    price={98.99}
                    image='https://myer-media.com.au/wcsstore/MyerCatalogAssetStore/images/55/552/5828/100/3/740778400/740778400_1_720x928.jpg'
                    rating={5}/>
                    
                    <Product 
                    id="43254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-pro-12-select-wifi-silver-202003_GEO_MY_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583551136167"/>
                </div>
                <div className="home__row">
                    <Product
                    id="4983858"
                    title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                    price={199.99}
                    image='https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SL1000_.jpg'
                    rating={5}/>
                </div>

            </div>
        </div>
    )
}

export default Home
