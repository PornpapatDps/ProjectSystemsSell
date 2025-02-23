
import brand1 from '../../assets/SA/f1.png'
import brand2 from '../../assets/SA/f2.png'
import brand3 from '../../assets/SA/f3.png'
import brand4 from '../../assets/SA/Yamato.png'
import brand5 from '../../assets/SA/RedB.png'

const Partner = () => {
  return (
    <div className='py-8 mt-24 hidden md:block bg-gray-200
    dark:bg-white/10'>
      <div className="container">
        <div className="grid grid-cols-5 gap-3 place-items-center
        opacity-50">
          <img src={brand1} alt="brand" className='w-[80px] dark:invert'/>
          <img src={brand4} alt="brand" className='w-[80px] dark:invert'/>
          <img src={brand3} alt="brand" className='w-[80px] dark:invert'/>
          <img src={brand5} alt="brand" className='w-[80px] dark:invert'/>
          <img src={brand2} alt="brand" className='w-[80px] dark:invert'/>
          
        </div>
      </div>
    </div>
  )
}

export default Partner
