import React from 'react'
import './women.css'
import Itemcard from '../components/itemcard';
import img1 from './images/air-force-1-07-shoes.png';
import img2 from './images/air-max-sc-shoes.png';
import img3 from './images/NIke sprtswear phoenix.png';
import img4 from './images/court-legacy-lift-shoes.png';
import img5 from './images/sportswear-boxy-t-shirt.png';
import img6 from './images/sportswear essential.png';
import Hero_video from '../components/Hero_video';

export default function women() {
 
    const item = [{ name: 'Air Force',price:'9695.00',link:'https://www.nike.com/in/t/air-force-1-07-shoes-BP8qPK/FQ7626-100',category:"Women's shoes" ,image: img1 },
    { name: 'Air Max',price:'8595.00',link:'https://www.nike.com/in/t/air-max-sc-shoes-gMGhP8/FJ3242-100',category:"Women's shoes", image: img2 },
    { name: 'Sportswear Phoenix Fleece',price:'3799.00',link:'https://www.nike.com/in/t/sportswear-phoenix-fleece-cropped-v-neck-top-LbgS6N/FN3652-208',category:"Women's Cropped V-Neck Top", image: img3 },
    { name: 'Court legacy lift',price:'7495.00',link:'https://www.nike.com/in/t/court-legacy-lift-shoes-Rwtb5P/FJ1986-600',category:"Women's shoes", image: img4 },
    { name: 'Nike Sportswear',price:'2695.00',link:'https://www.nike.com/in/t/sportswear-long-sleeve-t-shirt-QkVp5r/FV3994-657',category:"Women's Boxy T-Shirt", image: img5 },
    { name: 'Sportswear Essential',price:'4295.00',link:'https://www.nike.com/in/t/zoom-vomero-5-shoes-CrW9xf/FJ1915-200',category:"Women's Mid-Rise Trousers ", image: img6 },
  ];
  return (
    <>
    <h1>Women</h1>
    <Hero_video/>
     <div className='items'>
     <Itemcard item={item}/>
      </div>
    </>
   
  )
}
