import ProductList from "@/components/shared/product/product-list";

// const delay = (ms : any) => new Promise((resolve) =>  setTimeout(resolve,ms));
import sampleData from "@/db/sample-data";


const HomePage = async () => {
  // await delay(2000);
  console.log("sampleData", sampleData);
  return <>
  <ProductList data={sampleData.products} title="Newest Products" 
  limit={4} />
  </>;
}

export default HomePage;