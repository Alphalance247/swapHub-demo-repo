import Container from "./common/container";
import SectionTwo from "./components/Landing/SectionTwo";
import SectionFour from "./components/Landing/SectionFour";
import Testimonies from "./components/Landing/Testimonies";
import FAQSection from "./components/Landing/FAQSection";
import Hero from "./components/Landing/hero";
import TrustedUsers from "./components/Landing/trustedUsers";
import GettingStarted from "./components/Landing/GettingStarted";
import JoinUs from "./components/Landing/JoinUs";

export default function Home() {
  return (
    <Container>
      {/* <section className="px-4">
        <div>
          <Input placeholder="default" />
        </div>

        <div className="mt-6">
          <Input
            className="bg-[url('/assets/icons/commonIcons/search.svg')]  bg-no-repeat text-base bg-[15px_13px] bg-[length:20px_20px]"
            variant="primary"
            placeholder="Search"
          />
        </div>

        <div className="mt-6 relative">
          <Input variant="tertiary" placeholder="Password" />

          <span
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
          >
            {showpassword ? (
              <AiFillEye size={20} />
            ) : (
              <AiFillEyeInvisible size={20} />
            )}
          </span>
        </div>
      </section> */}

      <Hero />

      <TrustedUsers />
      <SectionTwo />
      <GettingStarted />
      <SectionFour />
      <Testimonies />
      <FAQSection />
      <JoinUs />
    </Container>
  );
}
