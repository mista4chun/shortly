import Illustration from "./assets/images/illustration-working.svg";
import Buttons from "./Buttons";

function HeroSection() {
  return (
    <>
      <section
        id="Hero"
        className="container mx-auto mb-40 mt-24 md:mt-8 flex max-w-6xl flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between md:space-x-12 md:space-y-0"
      >
        <div className="text-center md:text-left">
          <h1 className="max-w-xl text-center text-5xl font-semibold md:text-left md:text-6xl">
            More than just shorter links
          </h1>
          <p className="text-grayishViolet text-md mx-auto mb-7 mt-2 max-w-sm px-12 text-center sm:text-sm md:mx-0 md:px-0 md:text-left">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>

          <Buttons className="w-40">Get Started</Buttons>
        </div>

        <img
          src={Illustration}
          alt="working"
          className="ml-20 w-[39rem] md:ml-0"
        />
      </section>
    
    </>
  );
}

export default HeroSection;
