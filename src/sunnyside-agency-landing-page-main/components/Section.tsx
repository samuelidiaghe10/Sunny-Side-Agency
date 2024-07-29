import avatar1 from "../images/image-emily.jpg";
import avatar2 from "../images/image-jennie.jpg";
import avatar3 from "../images/image-thomas.jpg";

export const Section = () => {
  return (
    <section className="flex flex-col py-28 items-center gap-20 p-4 md:p-16">
      <h1 className="lg:text-4xl text-2xl fraunces text-Grayish-blue">
        CLIENT TESTIMONIALS
      </h1>

      <div className="grid lg:grid-cols-3 md:px-28 lg:px-0 gap-14">
        <div className="flex flex-col items-center gap-10">
          <div>
            <img className="w-[40px] rounded-full" src={avatar1} alt="" />
          </div>

          <h3 className="text-xl text-Very-dark-desaturated-blue font-medium text-center">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </h3>

          <div className="flex flex-col items-center gap-1">
            <h5 className="text-2xl font-semibold fraunces">Emily R.</h5>
            <p className="text-lg text-Grayish-blue">Marketing Director</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <div>
            <img className="w-[40px] rounded-full" src={avatar3} alt="" />
          </div>

          <h3 className="text-xl text-Very-dark-desaturated-blue font-medium text-center">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </h3>

          <div className="flex flex-col items-center gap-1">
            <h5 className="text-2xl font-semibold fraunces">Thomas S.</h5>
            <p className="text-lg text-Grayish-blue">Chief Operating Officer</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-10">
          <div>
            <img className="w-[40px] rounded-full" src={avatar2} alt="" />
          </div>

          <h3 className="text-xl text-Very-dark-desaturated-blue font-medium text-center">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </h3>

          <div className="flex flex-col items-center gap-1">
            <h5 className="text-2xl font-semibold fraunces">Jennie F.</h5>
            <p className="text-lg text-Grayish-blue">Business Owner</p>
          </div>
        </div>
      </div>
    </section>
  );
};
