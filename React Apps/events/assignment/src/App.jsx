import React from 'react';
import Expandin2 from './components/Expanding2';
import Expanding3 from './components/Expanding3';
import ExpandingFastFurious from './components/ExpandingFastFurious';

const ExpandingCards = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  };

  const cards = [
  {
    title: 'Majestic Mountains',
    imgurl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Serene Lake',
    imgurl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Mystic Forest',
    imgurl: 'https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Golden Desert',
    imgurl: 'https://images.unsplash.com/photo-1700837586652-2a827b0aa7c5?q=80&w=1330&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Ocean Breeze',
    imgurl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
  },
];


  return (
    <>
    <section className="h-[500px] w-[80vw] mx-auto my-12 flex">
      {cards.map((card, i) => {
        const { title, imgurl } = card;
        return (
          <div
            key={i}
            onClick={() => handleActiveIndex(i)}
            className={`relative rounded-2xl mx-[3px] h-full bg-center bg-cover bg-no-repeat transition-all duration-700 ease-in-out cursor-pointer ${
              activeIndex === i ? 'flex-[5]' : 'flex-[0.5] '
            }`}
            style={{ backgroundImage: `url(${imgurl})` }}
          >
            <h1
              className={`absolute bottom-4 left-4 text-white text-xl font-bold transition-opacity duration-500 ${
                activeIndex === i ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {title}
            </h1>
          </div>
        );
      })}
    </section>
      <Expandin2/>
      <Expanding3/>
      <ExpandingFastFurious/>

    </>
  );

  
};

export default ExpandingCards;
