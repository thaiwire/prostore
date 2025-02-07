const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage =  async () => {
  await delay(1000);
  return (
    <div>
      <h1>PROSTORE</h1>
      
    </div>
  );
};
export default Homepage;