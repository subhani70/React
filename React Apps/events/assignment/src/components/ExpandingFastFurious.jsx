import React, { useState } from 'react';

const ExpandingFastFurious = () => {
  const [index, setIndex] = useState(0);

  const cards = [
    {
      title: 'Dominic Toretto',
      imgurl: 'https://static.wikia.nocookie.net/30b410c2-6c76-4458-847b-ce969e5be839/scale-to-width-down/800',
    },
    {
      title: 'Brian O\'Conner',
      imgurl: 'https://static1.moviewebimages.com/wordpress/wp-content/uploads/article/a3UHFy06inDJ5RDLAjGP0vAypNemxx.jpg',
    },
    {
      title: 'Letty Ortiz',
      imgurl: 'https://cdn.mos.cms.futurecdn.net/CEbGCjX55UKwkDau6iExbf.jpg',
    },
    {
      title: 'Roman Pearce',
      imgurl: 'https://static0.srcdn.com/wordpress/wp-content/uploads/2022/03/Tyrese-Gibson-Roman-Pearce-Fast-and-Furious-9.jpg',
    },
    {
      title: 'Han Lue',
      imgurl: 'https://images2.alphacoders.com/114/1149634.jpg',
    },
  ];

  return (
    <section className="h-[500px] w-[80vw] mx-auto my-12 flex">
      {cards.map((e, i) => (
        <div
          key={i}
          onClick={() => setIndex(i)}
          className={`relative m-2 rounded-2xl transition-all duration-700 bg-center bg-cover bg-no-repeat ${
            index === i ? 'flex-[5]' : 'flex-[0.5]'
          }`}
          style={{ backgroundImage: `url(${e.imgurl})` }}
        >
          <h1 className="text-2xl text-white absolute left-3 bottom-3 font-medium px-2 rounded">
           { index===i? e.title :""}
          </h1>
        </div>
      ))}
    </section>
  );
};

export default ExpandingFastFurious;
