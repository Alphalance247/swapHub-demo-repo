// import Register from "../components/auth/register";
// import Link from "next/link";

// const SignUp = () => {
//   return (
//     <div className="px-4 pt-8 pb-80">
//       <div className="text-center mb-8">
//         <p className="mb-[22px] text-2xl text-[#4A4A4A]">Logo</p>
//         <p className="text-[#333333B2] font-semibold text-2xl">Welcome!</p>
//         <p className="text-[#333333B2] text-sm mt-4">
//           Glad to be part of our customer..
//         </p>
//       </div>

//       <Register />

//       <div className="text-center mt-8">
//         <p className="text-[#333333B2] mb-8 font-medium text-sm">
//           Already have an account?
//           <Link href="/login">
//             <span className="text-[#020B30] underline underline-offset-4">
//               Login
//             </span>
//           </Link>
//         </p>
//       </div>

//       <div className="flex items-center gap-x-3 justify-center">
//         <hr className="w-[30%] h-[1px] bg-[#E3E3E3]" />
//         <p className="color-[#000000B2] text-xs"> Or Register with </p>
//         <hr className="w-[30%] h-[1px] bg-[#E3E3E3]" />
//       </div>
//     </div>
//   );
// };

// export default SignUp;

import Icon from "next/image";
import Logo from "next/image";
import Image from "next/image";
import Button from "../common/Button";

const Login = () => {
  return (
    <section className="bg-[#F5F5F5] md:h-auto">
      <div className="max-w-[1280px] py-10 px-6 mx-auto max-lg:px-4 max-lg:py-16 max-md:px-4 max-md:py-4">
        <div className=" bg-[white] mb-10 p-4 w-full rounded-lg md:mb-16 lg:bg-transparent lg:p-0">
          <Logo
            src="/assets/login/logo.svg"
            alt="swapHubLogo"
            width={180}
            height={40}
          />
        </div>

        <section className="grid md:grid-cols-2 xl:grid-cols-[55%auto] md:gap-8 lg:gap-16">
          <div className="hidden md:block">
            <Image
              src="/assets/image/swapimg.png"
              alt="bgImage"
              width={648}
              height={552}
              className="h-full w-fit object-cover rounded-xl "
            />
          </div>

          <div className="bg-[#FFF] flex flex-col gap-0 p-4 md:p-10 md:gap-10 rounded-2xl">
            <div className="flex flex-col mb-10 items-start self-stretch gap-2 md:mb-0">
              <h1 className="text-[#303030] text-xl self-stretch font-bold font-recoletaBold md:text-2xl ">
                Get Started with SwapHub
              </h1>
              <p className="text-[#B5B5B5] font-[450] text-sm self-stretch md:text-base">
                Create your free account in minutes and start selling, trading,
                or offering services with ease.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <div className="flex justify-center items-center px-3 py-2 bg-[#F1F1F1] rounded-3xl  gap-2.5 ">
                <Icon
                  src="/assets/image/Google Icon.png"
                  alt="google"
                  width={20}
                  height={20}
                />
                <p className=" text-[#303030] text-sm not-italic">
                  Log In with Google
                </p>
              </div>
              <div className="flex justify-center items-center gap-4 self-stretch">
                <hr className="h-[1px] w-full md:w-[174.5px] text-[#B5B5B5] " />
                <p className="font-[Inter] not-italic font-[450px] text-[16px] leading-4">
                  Or
                </p>{" "}
                <hr className="h-1 w-full md:w-44" />
              </div>
            </div>

            <form className="" action="">
              <div className=" my-3">
                <label className="text-base font-[450] text-[#303030] my-1">
                  Full Name
                </label>
                <input
                  className="w-full  p-3 border-[0.5px] border-solid border-[#8A8A8A] rounded-md"
                  type="text"
                  placeholder="Enter your full name"
                />
              </div>
              <div className=" my-3">
                <label className="text-base font-[450] text-[#303030] my-1">
                  Email Address
                </label>
                <input
                  className="w-full  p-3 border-[0.5px] border-solid border-[#8A8A8A] rounded-md"
                  type="email"
                  placeholder="Enter your email adddress"
                />
              </div>
              <div className="my-4">
                <label className="text-base font-[450]  text-[#303030] my-1">
                  Password
                </label>
                <input
                  className="w-full p-3 border-[0.5px] border-solid border-[#8A8A8A] rounded-md"
                  type="password"
                  placeholder="Enter your password"
                />
              </div>

              <Button variant={"secondary"} className={"w-full"}>
                Create account
              </Button>
            </form>
            <p className="text-sm font-[450] mt-3 text-[#616161] md:mt-0">
              Already on SwapHub?
              <a
                className="text-[#005BD3] decoration-solid decoration-auto underline underline-offset-4 "
                href="#"
              >
                {" "}
                Log in here
              </a>
            </p>

            <p className="mt-6 p-4 bg-[#F7F7F7] rounded-lg text-sm font-[450] md:mt-0">
              By clicking create account, I acknowledge that I have read and do
              hereby accept the terms and conditions in the Swaphub`s 
              <a
                className="text-[#005BD3] decoration-solid decoration-auto underline underline-offset-4 "
                href="#"
              >
                <span>Terms of service</span>
              </a>
              , and{" "}
              <a
                className="text-[#005BD3] decoration-solid decoration-auto underline underline-offset-4 "
                href="#"
              >
                <span> Privacy policy.</span>
              </a>{" "}
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Login;
