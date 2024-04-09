import { useEffect } from "react";
import useGlobalState from "../store/products";
//import Store from "../pages/Store";
import ListProducts from "./listStore/ListProducts";

const Menu = () => {
  const { products, fetchProducts } = useGlobalState();

  useEffect(() => {
    fetchProducts(); // Llama a fetchProducts al montar el componente
  }, []);

  return (
    <>
      <section>
        <article className="bg-[#043E52] h-[790px] ">
          <h3 className="text-4xl justify-center flex py-8  text-white ">
            Recetas
          </h3>
          <div className=" sm:flex mx-auto justify-center gap-10 ">
            {products.map((product) => (
              <div key={product.id}>{product?.gallery?.[0]}</div>
            ))}
            <img
              className="h-[300px] sm:h-[550px] object-contain sm:pb-14 mx-auto  sm:mx-0  mb-9"
              src="/images/chicken.png"
              alt=""
            />
            <img
              className="h-[300px] object-contain  sm:h-[550px] sm:pb-14 mx-auto sm:mx-0 "
              src="/images/res.png"
              alt=""
            />
          </div>
          <a className="text-2xl justify-center mx-auto flex border-4 w-44 text-white py-3 px-4 rounded-xl" href="/listproducts">Comprar</a>
        </article>
      </section>
      <div style={{ display: 'none' }}>
        <ListProducts products={products} />
      </div>
    </>
  );
};

export default Menu;
