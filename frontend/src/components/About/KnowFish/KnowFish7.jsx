import img1 from '../../../assets/SA/15.png';



const KnowFish7 = () => {
  return (
    <div>
       <div className="flex flex-col-3  md:flex-row items-center p-20 font-[Kanit]  justify-center bg-gray-200 dark:bg-gray-800 dark:text-white ">
        
        {/* รูปภาพอยู่ทางซ้าย */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 ">
          <img src={img1} alt="Fish" className="w-full md:w-600 h-auto object-cover" />
        </div>
        
        {/* ข้อมูลอยู่ทางขวา */}
        <div className="text-black dark:text-white">
          <h1 className="text-7xl font-semibold mb-2">ปลาคาดินัลเผือก </h1>
          <p className="text-4xl mb-4">ชื่อวิทยาศาสตร์: Albino Cardinal Tetra</p>
          <p className="text-3xl mb-4">ถิ่นกำเนิด: -</p>
          <p className="text-3xl mb-4 font-bold">ลักษณะเด่นปลาคาดินัลเผือก</p>
          <ul className="text-2xl">
            <li>ลักษณะเหมือน ปลาคาดินัล แต่มีสีเผือก</li>
            <li>ดวงตาแดงและลำตัวมีแถบสีซีดกว่าปกติ</li>
            <li>ต้องการน้ำสะอาดและแสงพอเหมาะ</li>
            <li></li>
          </ul>
          <br/>
          <p className="text-3xl mb-4 font-bold">การเลี้ยงปลาคาดินัลเผือก</p>
          <ul className="text-2xl">
            <li>✔  ขนาดตู้ปลา: 10-15 แกลลอนขึ้นไป</li>
            <li>✔ อุณหภูมิ: 24-28°C</li>
            <li>✔ ค่า pH: 6.0-7.5</li>
            <li>✔ อาหาร: อาหารเม็ด, อาหารแช่แข็ง, <br/>หนอนแดง, ไรแดง</li>
            <li>✔ การเลี้ยงรวม: อยู่ร่วมกับ <br/>Tetra, Guppy, กุ้งแคระ, หอยน้ำจืด</li>
            </ul>
            </div>
            </div>   
    </div>
  )
}

export default KnowFish7
