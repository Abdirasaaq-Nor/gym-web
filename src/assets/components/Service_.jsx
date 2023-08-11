import { useEffect } from "react";
import img2 from "../images/img2.avif";
function Service_() {
  useEffect(() => {
    const heroSection = document.querySelector(".img2");
    heroSection.style.backgroundImage = `url(${img2})`;
    return () => {
      heroSection.style.backgroundImage = null;
    };
  }, []);

  return (
    <div>
      <section className="img2">
      <div className="">
        <h1 className="text-white">welcome to service</h1>
      </div>

      </section>
    </div>
  );
}
export default Service_;
