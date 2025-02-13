import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './Productcard'

import Img1 from '../../assets/SA/1.png'
import Img2 from '../../assets/SA/2.png'
import Img3 from '../../assets/SA/3.png'
import Img4 from '../../assets/SA/4.png'
import Img5 from '../../assets/SA/9.png'
import Img6 from '../../assets/SA/10.png'
import Img7 from '../../assets/SA/11.png'
import Img8 from '../../assets/SA/12.png'

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Air Solo Bass",
        price: "$200",
        asoDelay: "2 days",
    },
    {
        id: 2,
        img: Img2,
        title: "Air Solo Bass",
        price: "$200",
        asoDelay: "2 days",
    },
    {
        id: 3,
        img: Img3,
        title: "Air Solo Bass",
        price: "$200",
        asoDelay: "2 days",
    },
    {
        id: 4,
        img: Img4,
        title: "Air Solo Bass",
        price: "$200",
        asoDelay: "2 days",
    },
]
const ProductsData2 = [
    {
        id: 1,
        img: Img5,
        title: "Air Solo Bass",
        price: "$200",
        asoDelay: "2 days",
    },
    {
        id: 2,
        img: Img6,
        title: "Air Solo Bass",
        price: "$200",
        asoDelay: "2 days",
    },
    {
        id: 3,
        img: Img7,
        title: "Air Solo Bass",
        price: "$200",
        asoDelay: "2 days",
    },
    {
        id: 4,
        img: Img8,
        title: "Air Solo Bass",
        price: "$200",
        asoDelay: "2 days",
    },
]

const Products = () => {
  return (
    <div>
      <div className="container">
        {/* Header sections */}
        <Heading title="Our Products"
        subtitle="Explore Our Products"/>
        {/* Body sections */}
        <ProductCard data={ProductsData} />
        <ProductCard data={ProductsData2} />
      </div>
    </div>
  )
}

export default Products
