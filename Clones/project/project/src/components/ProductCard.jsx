const ProductCard = ({ image, title, originalprice, discount }) => {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg hover:cursor-pointer transition-all p-4 flex flex-col items-center gap-y-4">
      {
        (discount==null)?'':<div className="w-full">
        <span className="border text-[12px] rounded-[7px] p-0.5 bg-[#FFF0E5] text-[#FF6900]">{discount}% off</span>
      </div>
      }
      <h2 className="mt-2 text-2xl font-medium">{title}</h2>
      {
        (originalprice==null)?'':<p className="text-[#191919] text-[18px] font-semibold">₹{Math.floor(originalprice-(originalprice*(discount/100)))} <strike className="text-[#757575] text-[14px]">₹{originalprice}</strike></p>
      }
      <div className="flex gap-4">
        <button className="bg-[#191919] hover:bg-[#3A3737] text-[#FFFFFF] py-[7.5px] px-[14px] rounded-[10px] text-[13px]">Buy Now</button>
        <button className="text-[#191919] hover:text-[#3A3737] bg-[#FFFFFF] py-[7.5px] px-[14px] rounded-[10px] text-[13px] border">Learn More</button>
      </div>
      <img src={image} alt={title} className="w-full h-48 object-contain" />
    </div>
  );
};

export default ProductCard;
// ₹