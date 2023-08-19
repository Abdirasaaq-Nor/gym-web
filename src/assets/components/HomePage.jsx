import hero from "../images/men.png";
import Cards from "../components/Cards";
import About_us_  from "../components/About_us_";

function HomePage() {
  return (
    <div className="md:ml-10">
      <section>
        <div className="main mt-20 ml-10 flex justify-between">
          <div className="left">
            <h1 className=" text-white text-[30px] w-[300px] md:text-6xl md:w-[500px]">
              READY TO TRAINs{" "}
              <span className="text-[#FF0000] pt-10 ">YOUR BODY</span>
            </h1>
            <p className="text-white md:w-[360px] py-6">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Obcaecati ratione in temporibus harum dignissimos.
            </p>
            <button
              className="mt-10 bg-transparent border border-red-600 
            text-white w-44 h-14 rounded-md hover:border-red-400 transition"
            >
              join Now
            </button>
            {/* experince matter section */}
            <div className="flex mt-[60px] ml-0">
              {/* ... */}
              <div className="main1 flex flex-col ">
                <h1 className="text-red-500 text-3xl">20+</h1>
                <h3 className="text-white">Years of Experience</h3>
              </div>
              <span className="w-[2px] h-[200] bg-red-400 ml-[10px]"></span>
              <div className="main1 flex flex-col mx-6">
                <h1 className="text-red-500 text-3xl">15k+</h1>
                <h3 className="text-white">Members join</h3>
              </div>
              <span className="w-[2px] h-[200] bg-red-400"></span>
              <div className="main1 flex flex-col mx-6">
                <h1 className="text-red-500 text-3xl">14+</h1>
                <h3 className="text-white">Happy memebers</h3>
              </div>
            </div>
          </div>
          <div className="right mr-[200px]">
            <img className="h-[580px] ipads" src={hero} alt="" />
          </div>
          {/* button mesha ku jiray hori */}
        </div>
      </section>

      {/* ......... wny you choose */}
      <section className="why_choose mt-[40px] md:mt-[60px]  mb-[70px]">
        <div className="main">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-white text-[30px] md:text-5xl">
              WHY <span className="text-red-500">CHOOSE US</span>
            </h1>
            <p className="medium_ md:w-[400px] lg:w-[400px] pt-4 text-center text-[13px] text-gray-200">
              Gym workouts offer a versatile and customisable experience,
              allowing everyone to set specific fitness goals.
            </p>
          </div>

          {/* ...card  */}
        </div>
      </section>

      {/*  Cards*/}
      <Cards />
      {/* about us */}
      <About_us_ />
    </div>
  );
}
export default HomePage;
