import React from 'react';
import './Men.css';
import Itemcard from '../components/itemcard';
import img1 from './images/jumbo-shoes.png';
import img2 from './images/jumpman-shoes.png';
import img3 from './images/pullover-hoodie.png';
import img4 from './images/sb-skate-jumper.png';
import img5 from './images/sportswear-long-sleeve-t-shirt.png';
import img6 from './images/zoom-shoes.png';
import Hero_video from '../components/Hero_video';


const Men=()=>{
    const item = [{ name: 'Jumbo Shoes',price:'10795.00',link:'https://www.nike.com/in/t/air-dunk-jumbo-shoes-wc8JrQ/DV0821-002',category:"Men's shoes" ,image: img1 },
    { name: 'Jumpman Shoes',price:'11495.00',link:'https://www.nike.com/in/t/jumpman-mvp-shoes-JV1HCs/DZ4475-107',category:"Mens's shoes", image: img2 },
    { name: 'Pullover Hoodie',price:'3999.00',link:'https://www.nike.com/in/t/jordan-brooklyn-fleece-pullover-hoodie-pftwK5/FN4545-133',category:"Men's Pullover Hoodie ", image: img3 },
    { name: 'SB Skate Jumper',price:'7495.00',link:'https://www.nike.com/in/t/sb-skate-jumper-R2xZ3c/FN2574-227',category:"Men's Skate Jumper ", image: img4 },
    { name: 'Sportswear Long Sleeve T-Shirt',price:'1595.00',link:'https://www.nike.com/in/t/sportswear-long-sleeve-t-shirt-QkVp5r/FV3994-657',category:"Men's Long Sleeve T-Shirt ", image: img5 },
    { name: 'Zoom Shoes',price:'14995.00',link:'https://www.nike.com/in/t/zoom-vomero-5-shoes-CrW9xf/FJ1915-200',category:"Men's shoes ", image: img6 },
  ];
    return(
        <>
        <h1>Men</h1>
        <Hero_video/>
        <div className="items">

            
            <Itemcard item={item}/>
        </div>
         
       
        </>
    )
}
export default Men;