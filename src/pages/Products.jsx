import { useEffect, useState } from "react";
import SingleProduct from "../components/SingleProduct";
import axios from "axios";
import Chip from "../components/Chip";

function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [chosenCategory, setChosenCategory] = useState("All");

  useEffect(() => {
    console.log("use effect working");
    const url =
      chosenCategory === "All"
        ? "https://dummyjson.com/products"
        : "https://dummyjson.com/products/categories";

    axios
      .get(url)
      .then((res) => {
        setProducts(res.data.products);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  }, []);

  useEffect(() => {
    const cat = "https://dummyjson.com/products/category-list";

    axios
      .get(cat)
      .then((res) => {
        console.log(res)
        setCategories(res.data);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        // setLoading(false);
      });
  }, []);

  return (
    <>
      <div>
        <h1 className={"text-3xl text-center"}>Products</h1>
      </div>
      <div  className="flex flex-wrap">
        {categories.map((data)=>(
          <Chip key={data.id} title={data.title} />
        ))}
      </div>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((data) => (
              <SingleProduct
                key={data.id}
                title={data.title}
                src={data.thumbnail}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Products;
