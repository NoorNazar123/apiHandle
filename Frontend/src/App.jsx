import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {

  // const [products, error, loading] = custamQuairy('/api/products?search=' + search);

  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch]= useState("");

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        setError(false);
        const res = await axios.get("/api/products?search=" + search, {
          signal: controller.signal,
        });
        setTimeout(() => {
          setProducts(res.data);
          setLoading(false);
        }, 3000); // Simulate 3 seconds of loading
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('Request cancellled', error.message)
          return
        } 
        setLoading(true)
        setTimeout(() => {
          console.log(`Backend Error: ${error}`);
          setError(true); 
          setLoading(false);
        }, 3000); // Simulate 3 seconds of loading
      }
    })();

    // cleaning all previus request
    return () => {
      controller.abort();
    }
  }, [search]);


  if (loading) {
    return (
      <div className="w-full min-h-screen bg-black flex justify-center items-center">
        <h1 className="animation font-[900] text-7xl leading-[45px] text-white">loading....</h1>
      </div>
    ); 
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
        <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFEZVc54aQ3YLQ_pF-miK-lzxqvwp340H-Hg&usqp=CAU" 
        alt="Error" 
        className="max-w-full h-[20rem] rounded-3xl" />
        <h1 className="mt-8 text-2xl font-bold text-white">Oops! Something went wrong.</h1>
      </div>
    );
  }

  return (
    <div className=" w-full bg-gray-700 flex justify-center items-center min-h-screen">
      <div className=" w-[90%] ">
        <section className="text-center my-6 text-white">
          <h2 className=" text-5xl md:text-7xl font-[900] leading-[1.75rem] tracking-[2px] ">
            Fruit List {products.length}
          </h2>
          <input
          className="w-[90%] rounded-3xl p-[20px] m-[10px] outline-none text-gray-800   "
          type="text" 
          placeholder="Search..."
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          />
      
           
        </section>
        <div className="md:p-10 w-[100%] mx-auto md:flex flex-wrap gap-2">
          {products &&
            products.map((product) => (
              <div key={product.id} className=" w-[95%] md:w-[30%] p-4 mx-auto shadow-2xl my-4 rounded-md ">
                <div className="w-[95%] mx-auto py-2 flex justify-between px-2">
                  <h1 className="text-2xl font-[600] text-gray-200">
                    {product.name}
                  </h1>
                  <p className="text-2xl font-[600] text-gray-200">
                    ${product.price}
                  </p>
                </div>
                <div className="w-[95%] rounded-lg object-cover overflow-hidden mx-auto bg-green-400">
                  <img
                    className=" rounded-lg w-full bg-cover h-[300px] hover:scale-110 duration-500"
                    src={product.img}
                    alt={product.name}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
//custumQuairy 
// const custamQuairy = (urlPath) => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);


//   useEffect(() => {
//     (async () => {
//       try {
//         setError(false);
//         setLoading(true);
//         const res = await axios.get(urlPath);
//         setTimeout(() => {
//           setProducts(res.data);
//           setLoading(false);
//         }, 3000); // Simulate 3 seconds of loading
//       } catch (error) {
//         setLoading(true)
//         setTimeout(() => {
//           console.log(`Backend Error: ${error}`);
//           setError(true); 
//           setLoading(false);
//         }, 3000); // Simulate 3 seconds of loading
//       }
//     })();
//   }, []);
  
//   return [products,error,loading]
// }