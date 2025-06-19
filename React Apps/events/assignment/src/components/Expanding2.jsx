import React from 'react';

const Expandin2 = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const cards = [
  {
    title: 'Iron Man',
    imgurl: 'https://images.ctfassets.net/3sjsytt3tkv5/48dw0Wqg1t7RMqLrtodjqL/d72b35dae2516fa64803f4de2ab8e30f/Avengers-_Endgame_-_Header_Image.jpeg',
  },
  {
    title: 'Captain America',
    imgurl:'https://variety.com/wp-content/uploads/2014/04/01-avengers-2012.jpg'
  },
  {
    title: 'Thor',
    imgurl:'https://static1.cbrimages.com/wordpress/wp-content/uploads/2024/08/untitled-19.jpg'
  },
  {
    title: 'Black Widow',
    imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCwq2qVE6FBDhEhAR0oCz_DXkUYCOJOq98Q&s',
  },
  {
    title: 'Hulk',
    imgurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq5IWNnAsWGk1I2eltnx4ZB11mmoBC4wAWyg&s',
  },
];


  return (
    <section className="h-[500px] w-[80vw] mx-auto my-12 flex">
      {cards.map((card, i) => (
        <div
          key={i}
          onClick={() => setActiveIndex(i)}
          className={`relative rounded-2xl mx-[3px] h-full bg-center bg-cover bg-no-repeat transition-all duration-700 ease-in-out cursor-pointer ${
            activeIndex === i ? 'flex-[5]' : 'flex-[0.5]'
          }`}
          style={{ backgroundImage: `url(${card.imgurl})` }}
        >
          <div className="absolute inset-0bg-opacity-30 rounded-2xl" />
          <h1
            className={`absolute bottom-4 left-4 text-white text-xl font-bold transition-opacity duration-500 ${
              activeIndex === i ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {card.title}
          </h1>
        </div>
      ))}
    </section>
  );
};

export default Expandin2;
