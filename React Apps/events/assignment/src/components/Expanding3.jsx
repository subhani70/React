import React, { useState } from 'react'

const Expanding3 = () => {
    let [index, setIndex] = useState(0);
const cards = [
  {
    title: 'Superman',
    imgurl: 'https://variety.com/wp-content/uploads/2016/07/justiceleague_photo.jpg',
  },
  {
    title: 'Batman',
    imgurl: 'https://images5.alphacoders.com/122/1226978.jpg',
  },
  {
    title: 'Wonder Woman',
    imgurl: 'https://variety.com/wp-content/uploads/2023/08/Screen-Shot-2023-08-10-at-3.43.28-PM.png',
  },
  {
    title: 'The Flash',
    imgurl: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/justice-league-the-flash.jpg?q=70&fit=contain&w=1200&h=628&dpr=1',
  },
  {
    title: 'Aquaman',
    imgurl: 'https://www.themarysue.com/wp-content/uploads/2018/12/Aquaman-featured.jpg?fit=1200%2C628',
  },
];

    return (
        <>
            <section className='h-[500px] w-[80vw] mx-auto my-12 flex'>
                {
                    cards.map((e, i) => {
                        return <div key={i}
                            onClick={() => setIndex(i)}
                            className={`relative m-2 rounded-2xl transition-all duration-700 bg-center bg-cover bg-no-repeat ${index===i?'flex-[5]':'flex-[0.5] '}`}
                            style={{backgroundImage:`url(${e.imgurl})`}}
                            >
                                <h1 className={'text-2xl text-white absolute left-3 bottom-3 font-bold'}>
                                  
                                  { index===i? e.title :""}
                                </h1>
                        </div>
                    })
                }

            </section>
        </>
    )
}

export default Expanding3