import img1 from '../../../assets/SA/10.png';



const KnowFish2 = () => {
  return (
    <div>
       <div className="flex flex-col-3  md:flex-row items-center p-20 font-[Kanit]  justify-center bg-gray-200 dark:bg-gray-800 dark:text-white ">
        
        {/* รูปภาพอยู่ทางซ้าย */}
        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6 ">
          <img src={img1} alt="Fish" className="w-full md:w-600 h-auto object-cover" />
        </div>
        
        {/* ข้อมูลอยู่ทางขวา */}
        <div className="text-black dark:text-white">
          <h1 className="text-7xl font-semibold mb-2">ปลาซิวเพชรน้อย </h1>
          <p className="text-4xl mb-4">ชื่อวิทยาศาสตร์: Sundadanio axelrodi</p>
          <p className="text-3xl mb-4">ถิ่นกำเนิด: อินโดนีเซีย</p>
          <p className="text-3xl mb-4 font-bold">ลักษณะเด่นปลาซิวเพชรน้อย</p>
          <ul className="text-2xl">
            <li>ขนาดโตเต็มที่ประมาณ 2.5-3 ซม.</li>
            <li>ลำตัวสีฟ้าสดใส มีเงาสะท้อนเป็นประกาย</li>
            <li>ครีบมีสีแดงอ่อนหรือส้ม</li>
            <li></li>
          </ul>
          <br/>
          <p className="text-3xl mb-4 font-bold">การเลี้ยงปลาซิวเพชรน้อย</p>
          <ul className="text-2xl">
            <li>✔  ขนาดตู้ปลา: 10 แกลลอนขึ้นไป</li>
            <li>✔ อุณหภูมิ: 23-27°C</li>
            <li>✔ ค่า pH: 5.5-7.0</li>
            <li>✔ อาหาร: อาหารเม็ดจิ๋ว, อาหารแช่แข็ง, ไรแดง</li>
            <li>✔ การเลี้ยงรวม: อยู่ร่วมกับกุ้งแคระ, Tetra, Guppy</li>
            </ul>
            </div>
            </div>   
    </div>
  )
}

export default KnowFish2
