import React from 'react'
import Heading from '../Shared/Heading'
import Img1 from '../../assets/SA/1.png'
const BlogData = [
    {
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        date: "2021-12-31",
        image: Img1,
    },
    {
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        date: "2021-12-31",
        image: Img1,
    },
    {
        title: "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
        date: "2021-12-31",
        image: Img1,
    },
]
const Blogs = () => {
  return (
    <div className='my-12'>
      <div className="container">
        {/* Header sections */}
        <Heading title="Recent News"
        subtitle="Explore Our Blogs"/>
        {/* Blog section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        gap-6 gap-y-8 sm:gap-4 md:gap-7  '>
        {/* Blog card */}
        {
        BlogData.map((data) => (
            <div key={data.title} className='bg-white
            dark:bg-gray-900 '>
                {/* image section */}
                <div className='overflow-hidden rounded-2xl mb-2'>
                    <img src={data.image} alt=""
                    className='w-full h-[220px] object-cover rounded-2xl
                    hover:scale-105 duration-500'
                    />
                </div>
                    {/* content section */}
                    <div>
                        <p className='space-y-2'>{data.published}</p>
                        <p className='font-bold line-clamp-1'>{data.title}</p>
                        <p className='line-clamp-2 text-sm text-gray-600
                        dark:text-gray-400'>{data.subtitle}</p>
                    </div>
            </div>
        ))}
        </div>
      </div>
    </div>
  )
}
export default Blogs