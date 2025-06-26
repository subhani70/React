import React from 'react'

const ExpandingCards = () => {
    let [activeIndex, setActiveIndex] = React.useState(0);
    let handleActiveIndex = (index) => {
        setActiveIndex(index);
    }
    let cards = [
        {
            title: "Explore the world",
            imgurl: "https://picsum.photos/id/237/200/300"
        },
        {
            title: "Explore the world",
            imgurl: "https://picsum.photos/id/236/200/300"
        },
        {
            title: "Explore the world",
            imgurl: "https://picsum.photos/id/235/200/300"
        },
        {
            title: "Explore the world",
            imgurl: "https://picsum.photos/id/234/200/300"
        },
        {
            title: "Explore the world",
            imgurl: "https://picsum.photos/id/233/200/300"
        },
    ]

    return (
        <>
            <section className='container'>
                {
                    cards.map((cards, i) => {
                        let { title, imgurl } = cards;
                        return (
                            <>
                                <div key={i}
                                    className={`card ${activeIndex === i ? "active" : ""}`}
                                    onClick={() => {
                                        handleActiveIndex(i);
                                    }}
                                    style={{ backgroundImage: `url(${imgurl})` }}
                                >
                                    <h1 style={{ opacity: activeIndex === i ? 1 : 0 }}>{title}</h1>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </>)
}

export default ExpandingCards