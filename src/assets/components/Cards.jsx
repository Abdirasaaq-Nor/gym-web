function Cards() {
  return (
    <div>
      <div className="main_card grid grid-cols-1  md:grid-cols-2 gap-y-10 mt-20 mx-2">
        {/* card one  */}
        <div
          className="one border border-red-500 rounded-lg ml-4 md:ml-0 
        w-[300px] md:w-[440px] h-[200px] p-4 mt-4 md:mt-0 lg:w-[530px] lg:ml-[40px]"
        >
          <h1 className="text-white font-bold text-3xl">01</h1>
          <div className="py-6">
            <h1 className="text-red-500 ">Personal training</h1>
            <p className="text-zinc-400 pt-2 text-sm w-[300px] md:w-[400px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              voluptatibus eum blanditiis corporis animi culpa nobis sequi
              officiis placeat quisquam?
            </p>
          </div>
        </div>
        {/* card two  */}
        <div
          className="one border border-red-500 rounded-lg ml-4 md:ml-0
         w-[300px] md:w-[440px] h-[200px] p-4 mt-4 md:mt-0 lg:w-[500px] "
        >
          <h1 className="text-white font-bold text-3xl">02</h1>
          <div className="py-6">
            <h1 className="text-red-500 ">Personal training</h1>
            <p className="text-zinc-400 pt-2 text-sm w-[300px] md:w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              voluptatibus eum blanditiis corporis animi culpa nobis sequi
              officiis placeat quisquam?
            </p>
          </div>
        </div>
        {/* card three  */}
        <div
          className="one border border-red-500 rounded-lg ml-4 md:ml-0
         w-[300px] md:w-[440px] h-[200px] p-4 mt-4 md:mt-0 lg:w-[500px] lg:ml-[40px]"
        >
          <h1 className="text-white font-bold text-3xl">03</h1>
          <div className="py-6">
            <h1 className="text-red-500 ">Personal training</h1>
            <p className="text-zinc-400 pt-2 text-sm w-[300px] md:w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              voluptatibus eum blanditiis corporis animi culpa nobis sequi
              officiis placeat quisquam?
            </p>
          </div>
        </div>
        <div
          className="one border border-red-500 rounded-lg ml-4 md:ml-0
         w-[300px] md:w-[440px] h-[200px] p-4 mt-4 md:mt-0 lg:w-[500px]"
        >
          <h1 className="text-white font-bold text-3xl">04</h1>
          <div className="py-6">
            <h1 className="text-red-500 ">Personal training</h1>
            <p className="text-zinc-400 pt-2 text-sm w-[300px] md:w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              voluptatibus eum blanditiis corporis animi culpa nobis sequi
              officiis placeat quisquam?
            </p>
          </div>
        </div>

        {/* end cards */}
      </div>
    </div>
  );
}
export default Cards