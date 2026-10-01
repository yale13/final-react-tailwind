import { useEffect, useState } from "react";

function App() {
  const [product,setProduct] = useState([])
  const [search,setSearch] = useState("")
  useEffect(()=>{
    const fetchProduct = async()=>{
      const res = await fetch('https://dummyjson.com/products?select=thumbnail,title,price')
      const data = await res.json()
      setProduct(data.products)
    }
    fetchProduct()
  },[])
  const filterProduct = product.filter((p)=>p.title.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>

      <h1 className="flex justify-center items-center text-red-500 p-20 text-3xl font-bold">Product List</h1>

      <div className="flex justify-center items-center">
        <input type="text" placeholder="Search by title..." onChange={(e)=>setSearch(e.target.value)} className="w-[50%] p-3 rounded-md border-1"/>
      </div>

      <div className="grid grid-cols-4 w-full p-20 gap-3">
        {
          filterProduct.map((p)=>(
            <div key={p.id} className="bg-white border-1 border-gray-500 w-full h-96 rounded-md shadow-md hover:scale-105 hover:bg-gray-200 transition-all duration-300">
              <img src={p.thumbnail} alt="" className="w-full h-68 object-contain p-3"/>
              <h2 className="px-5">{p.title}</h2>
              <p className="p-5">${p.price}</p>
            </div>
          ))
        }
      </div>

    </div>
  )
}

export default App;
