import Category3 from "../Category/Category3";
import Category4 from "../Category/Category4";

const AboutShrimp = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-gray-900 dark:text-white p-5 font-[Kanit]">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800 dark:text-white">
        🦐 ความรู้เกี่ยวกับกุ้งแคระ
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl text-center mb-6">
        กุ้งแคระเป็นสัตว์น้ำยอดนิยมสำหรับตู้ไม้น้ำ มีหลากหลายสายพันธุ์ที่มีสีสันและลวดลายที่สวยงาม
        แต่ละชนิดมีเอกลักษณ์และความต้องการที่แตกต่างกัน
      </p>
      <Category3/>
      <Category4/>
      </div>
    
  );
};

export default AboutShrimp;
