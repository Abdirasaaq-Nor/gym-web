import img from '../images/img_rentangle.png'
import rect1 from '../images/img_rentangle1.png'
import rect2 from '../images/img_rentangle2.png'
function About_us_() {
  return (
    <div>
      <section>
        <div className="main mb-20 mt-[100px] md:mt-[290px] lg:mt-[290px] flex lg:justify-evenly flex-col lg:flex-row ">
          <div className="left_side">
            <h1 className="ipad_text  text-center md:text-left  text-[70px] text-white">
              WE HAVE A LOT OF <br />{" "}
              <span className="text-[#FF0000]">EXPERIENCE</span>
            </h1>
            <p className=" text-gray-100 text-[12px] w-[380px] md:mt-10 pl-8 pr-10 md:pr-0 md:pl-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              beatae in quae similique impedit et, possimus corporis repellat
              beatae in quae similique impedit et, possimus corporis repellat
              quaerat corrupti!
            </p>
            <p className=" text-gray-100 pt-6 text-[12px] w-[380px]  pl-8 pr-10 md:pr-0 md:pl-0">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima
              beatae in quae similique impedit et, possimus corporis repellat
              beatae in quae similique impedit et, possimus corporis repellat
              quaerat corrupti!
            </p>
            <button
              className="mt-10 ml-14 md:ml-0 bg-transparent border border-red-600 
            text-white w-44 h-14 rounded-md hover:border-red-400 transition"
            >
              About us
            </button>
          </div>

          <div className="right_side mt-20">
            <img
              className="relative  lg:top-[1%] lg:left-0 w-[300px] lg:w-auto ml-4"
              src={img}
              alt=""
            />
            <div className="main_image">
              <img
                className="hidden lg:block lg:absolute lg:top-[205%] lg:left-[56%]  w-[300px] lg:w-auto  -z-40 "
                src={rect1}
                alt=""
              />
            </div>
            <img
              className="hidden lg:block lg:relative bottom-[40%] left-16 w-[300px]  lg:w-auto -z-40"
              src={rect2}
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}
export default About_us_;
