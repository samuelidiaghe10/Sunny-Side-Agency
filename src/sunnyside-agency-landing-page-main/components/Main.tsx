import transform from "../images/desktop/image-transform.jpg";
import standout from "../images/desktop/image-stand-out.jpg";
import graphicDesign from "../images/desktop/image-graphic-design.jpg";
import photography from "../images/desktop/image-photography.jpg";
import graphicDesignMobile from "../images/mobile/image-graphic-design.jpg";
import photographyMobile from "../images/mobile/image-photography.jpg";

export const Main = () => {
  return (
    <main className="flex flex-col">
      <section className="lg:grid flex flex-col-reverse  lg:grid-cols-2">
        <div className="flex lg:items-start items-center   flex-col p-7 md:p-24 gap-7">
          <h1 className="lg:text-5xl text-4xl text-center font-bold fraunces text-Very-dark-desaturated-blue">
            Transform your brand
          </h1>

          <p className="text-xl lg:text-start text-center text-Grayish-blue">
            We are full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>

          <div>
            <a
              className="hover:underline fraunces font-semibold underline-offset-0 decoration-4 decoration-Yellow"
              href=""
            >
              LEARN MORE
            </a>
          </div>
        </div>

        <div className="">
          <img src={transform} className="w-full h-full" alt="" />
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div>
          <img src={standout} className="w-full h-full" alt="" />
        </div>

        <div className="flex flex-col p-7 lg:items-start items-center md:p-24 gap-7">
          <h1 className="lg:text-5xl text-4xl text-center lg:text-start font-bold fraunces text-Very-dark-desaturated-blue">
            Stand out to the right audience
          </h1>

          <p className="text-xl text-center lg:text-start text-Grayish-blue">
            Using a collaborative formulaof designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>

          <div className="">
            <a
              className="hover:underline fraunces font-semibold underline-offset-0 decoration-4  decoration-Soft-red"
              href=""
            >
              LEARN MORE
            </a>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="flex items-end">
          <div className="relative">
            <img src={graphicDesignMobile} className="md:hidden" alt="" />
            <img
              src={graphicDesign}
              className="md:inline hidden w-screen"
              alt=""
            />
          </div>

          <div className="flex text-Dark-desaturated-cyan-(graphic-design-text) flex-col md:px-36 pb-10 px-5 lg:w-6/12 absolute items-center  gap-10">
            <h1 className="text-3xl fraunces text-center font-bold">
              Graphic Design
            </h1>

            <p className="text-lg text-center font-medium">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients'
              attention.
            </p>
          </div>
        </div>

        <div className="flex items-end">
          <div className="relative ">
            <img src={photographyMobile} className="md:hidden" alt="" />
            <img
              src={photography}
              className="md:inline hidden w-screen"
              alt=""
            />
          </div>

          <div
            className="flex flex-col text-Dark-blue-(photography-text) md:px-36 
          pb-10 px-5 lg:w-6/12 gap-10 items-center absolute"
          >
            <h1 className="text-3xl font-bold fraunces">Photography</h1>

            <p className="text-lg text-center font-medium">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
