import logo from "./logo.svg";
import "./App.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Navbar from "./component/navbar";
import Carousel from "./component/carousel";
import Footer from "./component/footer";
// import { useInView } from "framer-motion";
import { useRef } from "react";
// import Component from "./component/iseng";

function App() {
  const [ref, inView] = useInView({
    threshold: 0.5, // The element will be considered in view when 50% of it is visible
  });

  return (
    <div className="App">
      <Navbar />
      {/* section1 */}
      <div className="h-full w-full relative">
        <img
          className="block h-[700px] w-full"
          src="https://www.tiarahana.com/wp-content/uploads/2023/05/Mask-group-7-1-scaled.jpg"
          alt=""
        />
        <div
          // style={{
          //   position: "absolute",
          //   top: "50%",
          //   left: "350px",
          //   // transform: "translate(-50%, -50%)",
          // }}
          className="absolute top-[250px] left-[150px]"
        >
          <h1 className="text-left thead">
            Access A New <br />
            Class Of Assets
          </h1>
          <h2 className="text-left tcon">
            Invest In Indonesia's Most Spectacular
            <br />5 Star Resort-Hotel Properties
          </h2>
        </div>
      </div>
      {/* section 2 */}
      <div className="h-full w-full relative">
        <img
          className="block h-[700px] w-full"
          src="https://www.tiarahana.com/wp-content/uploads/2023/07/Mask-group.jpg"
          alt=""
        />
        <div
          // style={{
          //   position: "absolute",
          //   top: "50%",
          //   left: "350px",
          //   // transform: "translate(-50%, -50%)",
          // }}
          className="absolute top-[250px] right-[150px]"
        >
          <h1 className="text-left thead2">
            The fastest growing property
            <br />
            investment in Indonesia captivates
            <br />
            new and seasoned investors
          </h1>
          <h2 className="text-left tcon2">
            A highly-exclusive class of assets: 5 star Luxury Resort
            <br /> Properties, designed beautifully and
            <br /> strategically located in some of the World`s
            <br /> favourite travel destinations, offers investors
            <br /> an excellent combination of promising rental returns
            <br /> and elevated vacation experiences, all within one property.
          </h2>
        </div>
      </div>
      {/* section3 */}
      <div className="h-full w-full relative">
        <img
          className="block h-[700px] w-full"
          src="https://www.tiarahana.com/wp-content/uploads/2023/07/Mask-group-2.jpg"
          alt=""
        />
        <div
          ref={ref}
          // style={{
          //   position: "absolute",
          //   top: "50%",
          //   left: "350px",
          //   // transform: "translate(-50%, -50%)",
          // }}
          className="absolute top-[250px] left-[150px]"
        >
          <h1 className="text-left thead2">
            Once exclusively reserved
            <br />
            for the elite, now you too have
            <br />
            the flexibility to invest in it
          </h1>
          <div className="button1">
            <a href="">Our Investment Concept</a>
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="h-full w-full relative">
        <img
          className="block h-[700px] w-full"
          src="https://www.tiarahana.com/wp-content/uploads/2023/07/Mask-group-3.jpg"
          alt=""
        />
        <div
          // style={{
          //   position: "absolute",
          //   top: "50%",
          //   left: "350px",
          //   // transform: "translate(-50%, -50%)",
          // }}
          className="absolute top-[250px] right-[150px]"
        >
          <h1 className="text-left thead2">
            With over 11 years in the industry,
            <br /> we design our investments to be effortless,
            <br /> lucrative and secure
          </h1>
          <h2 className="text-left tcon2">
            Tiara Hana combines our deep understanding of luxury
            <br /> resort demands, strong partnerships with management <br />
            experts, and co-developing spectacular design that
            <br /> fetches some of the highest room rates and deliver the
            exceptional vacation
            <br /> experiences.
          </h2>

          <div className="button1">
            <a href="">About Us</a>
          </div>
        </div>
      </div>
      {/* section 5 */}
      <Carousel />
      {/* section 6 */}
      <div className="h-full w-full relative">
        <img
          className="block h-[700px] w-full"
          src="https://www.tiarahana.com/wp-content/uploads/2023/07/Mask-group-1.jpg"
          alt=""
        />
        <motion.div
          ref={ref}
          initial={{ opacity: 0, x: 50 }} // Initial animation state (invisible and moved right by 50px)
          animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }} // Final animation state (visible and in position)
          transition={{ duration: 0.8 }} // Animation duration
          className="absolute top-[250px] right-[150px]"
        >
          {/* Your existing content */}
          <h1 className="text-left thead2">Read our Customers Stories</h1>
          <h2 className="text-left tcon2">
            Discover the stories of our customers on how we make their <br />
            dreams come true. One luxury resort villa at a time,
            <br /> we create their dream property portfolio, enriching their
            lifestyles and the lives of their families.
          </h2>

          <div className="button1">
            <a href="">Read Testimonials</a>
          </div>
        </motion.div>
      </div>
      {/* section 7 */}
      <div className="flex mx-20">
        <div className="sec6 ml-32">
          <img
            src="https://www.tiarahana.com/wp-content/uploads/2023/07/shirley-violetta-34@2x.png"
            alt=""
          />
        </div>
        <div className="sec6r basis-1/2">
          <h1 className="text-left !text-black thead2">
            Discover Your Opportunities Of
            <br />
            Investing In 5 Star Resort-Hotels
          </h1>
          <div className="button2">
            <a href="">Whatsapp Us</a>
          </div>
        </div>
      </div>
      {/* section 8 */}
      <div>
        <img
          src="https://www.tiarahana.com/wp-content/uploads/2023/07/Groups-534322.jpg"
          alt=""
        />
      </div>
      <Footer />
      {/* <Component/> */}
    </div>
  );
}

export default App;
