import React from 'react'
import './kid.css'
import Itemcard from '../components/itemcard';
import img1 from './Images/acg-older-t-shirt.png';
import img2 from './Images/fleece-older-sweatshirt.png';
import img3 from './Images/older-training-t-shirt.png';
import img4 from './Images/sportswear-older-t-shirt.png';
import img5 from './Images/sportswear-older-t-shirt2.png';
import img6 from './Images/tech-fleece-older.png';
import Hero_video from '../components/Hero_video';

export default function women() {
 
    const item = [{ name: 'Nike ACG',price:'1795.00',link:'https://www.nike.com/in/t/acg-older-t-shirt-shCvL8/FN9677-104',category:"Older Kids' T-Shirt" ,image: img1 },
    { name: 'Nike Sportswear Club Fleece',price:'1995.00',link:'https://www.nike.com/in/t/sportswear-club-fleece-older-sweatshirt-vdmWsx/FD3006-700',category:"Older Kids' Sweatshirt", image: img2 },
    { name: 'Nike Dri-FIT Legend',price:'895.00',link:'https://www.nike.com/in/t/dri-fit-legend-older-training-t-shirt-GQGRGv/DX9537-657',category:"Older Kids' Training T-Shirt", image: img3 },
    { name: 'Nike Sportswear',price:'1295.00',link:'https://www.nike.com/in/t/sportswear-older-t-shirt-SDMXZb/FN9639-100',category:"Older Kids' T-Shir", image: img4 },
    { name: 'Nike Sportswear',price:'1295.00',link:'https://www.nike.com/in/t/sportswear-older-t-shirt-hMW468/FN9685-208',category:"Older Kids' (Girls') T-Shirt", image: img5 },
    { name: 'SNike Tech Fleece',price:'5895.00',link:'https://www.nike.com/in/t/tech-fleece-older-camo-hoodie-56FgKp/FN9118-010',category:"Older Kids' (Boys') Camo Full-Zip Hoodie", image: img6 },
  ];
  return (
    <>
        <h1>Kid</h1>
        <Hero_video/>
     <div className='items'>
     <Itemcard item={item}/>
      </div>
    </>
   
  )
}