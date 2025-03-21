
import Category3 from "../Category/Category";
import Category4 from "../Category/Category2";



const AboutFish = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 dark:text-white p-5 w-full overflow-hidden font-[Kanit]">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        🐟 ความรู้เกี่ยวกับปลาสวยงาม
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-center mb-10">
        ปลาสวยงามเป็นสัตว์เลี้ยงยอดนิยมที่ช่วยเพิ่มความสวยงามให้กับตู้ไม้น้ำ 
        แต่ละชนิดมีเอกลักษณ์เฉพาะตัว และความต้องการในการดูแลที่แตกต่างกัน
      </p>

      <Category3/>
      <Category4/>
      
    </div>
    
    
  );
};

export default AboutFish;
