import Recognition from "./assets/images/icon-brand-recognition.svg";
import Records from "./assets/images/icon-detailed-records.svg";
import Fully from "./assets/images/icon-fully-customizable.svg";
import Box from "./Box";

function Stats() {
  return (
    <>
      <div className="container mx-auto mt-14 max-w-6xl text-center">
        <h2 className="text-2xl font-semibold">Advanced Statistics</h2>
        <p className="mx-auto mt-3 max-w-sm text-sm text-grayishViolet">
          Track how your links are performing across the web with our advance
          statistics dashboard
        </p>
      </div>

      <div className="container mx-auto mt-5 flex w-full max-w-xs flex-col items-center justify-center space-y-24 md:mt-20 md:max-w-6xl md:flex-row md:space-x-8 md:space-y-0">
        {/* horizontal line */}
        <div className="absolute mt-12 hidden h-2 w-full max-w-4xl bg-cyan md:block"></div>

        {/* Vertical line */}
        <div className="absolute h-[32rem] w-2 bg-cyan md:hidden"></div>

        <Box>
          <img
            src={Recognition}
            alt="brand"
            className="relative -top-11 mx-auto rounded-full bg-darkViolet p-5 md:mx-0"
          />
          <h3 className="-mt-3 pb-3 text-2xl font-semibold">
            Brand Recognition
          </h3>
          <p className="pb-7 text-grayishViolet">
            Boost your brand's recognition with each clicks.Generic links don't
            mean a thing. Branded links help instil confidence in your content
          </p>
        </Box>
        <Box className="md:top-12">
          <img
            src={Records}
            alt="records"
            className="relative -top-11 mx-auto rounded-full bg-darkViolet p-5 md:mx-0"
          />
          <h3 className="-mt-3 pb-3 text-2xl font-semibold">
            Detailed Records
          </h3>
          <p className="pb-7 text-grayishViolet">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </Box>
        <Box className="md:top-24">
          <img
            src={Fully}
            alt="fully"
            className="relative -top-11 mx-auto rounded-full bg-darkViolet p-5 md:mx-0"
          />
          <h3 className="-mt-3 pb-3 text-2xl font-semibold">
            Fully Customizable
          </h3>
          <p className="pb-7 text-grayishViolet">
            Improve brand awareness and content discoverability through
            Customizable links. supercharging audience engagement.
          </p>
        </Box>
      </div>
    </>
  );
}

export default Stats;
