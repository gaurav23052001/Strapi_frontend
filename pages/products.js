import React from 'react';
import axios from "axios";
import Link from 'next/link';
import Navbar from '../components/navbar'

const products = (props) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
        <div className="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      {props.Products.map((item)=>{
        return (
      <div key={item.attributes.slug} className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-100 p-6 rounded-lg">
          <img className="h-96 rounded m-auto mb-8" src={item.attributes.Image && item.attributes.Image.data && item.attributes.Image.data[0].attributes.url} alt="content"/>
          <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.catagory}</h3>
          <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.Tittle}</h2>
          <div className=" bg-red-800 bg-purple-800 bg-green-800"></div>
          <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-800`}></button>
          <p className="leading-relaxed text-base"> {item.attributes.Discripation}</p>
          <Link href={`/product/${item.attributes.slug}`}><button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy Now</button></Link>
        </div>
      </div>
      )
    })}
    </div>
  </div>
</section>
    </div>
  )
}

export async function getServerSideProps() {
  let headers = {"Authorization": "bearer f8713dddc041d2b85a642d8788a52ccff01aa08d51198fcf2d77be2c936ee583e4b341b4e10ea3e51034649518e8d27054d23a1695754b998703dd02a6e2793799d8efef519294ec655cd67fd696056868322d40078f905b30aec9f2cf4872216f74b3e7d4b2c79f278681e61ec1b60f51f61dd09e2aa35477d6d579f2715d6d" };

const res = await axios.get('http://127.0.0.1:1337/api/products',{ headers });


  const Products =res.data.data;

  return {
    props: {
      Products,
    },
  };
}



export default products
