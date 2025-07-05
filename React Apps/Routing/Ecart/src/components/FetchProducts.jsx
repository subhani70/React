import { Fragment, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import Loader from "./Loader";

let FetchProducts = () => {
    let [products, SetProducts] = useState([]);
    let getProducts = async () => {
        let data = await fetch("https://fakestoreapi.com/products")
        let result = await data.json()
        console.log(result);
        SetProducts(result)
    }
    useEffect(() => {
        getProducts()
    }, [])
    return <>
        <section className=" overflow-y-scroll h-[calc(100vh-75px)] flex gap-5 flex-wrap justify-center mt-3">
            {products.length > 0 ?
                products.map((product, index) => {
                    let { id, image, category } = product
                    return <Fragment key={index}>
                        <article className="flex gap-3 flex-col items-center justify-center h-auto w-[250px] border p-3">
                            <img src={image} className="h-[200px] w-[70%]" alt="" />
                            <Link to={`/products/${id}`} state={product} className="bg-amber-400 rounded-[6px] px-5 py-1">View More</Link>

                        </article>

                    </Fragment>

                }) : <Loader />
            }
        </section>
    </>
}
export default FetchProducts