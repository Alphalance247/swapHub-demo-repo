import Register from "../components/auth/register";
import Link from "next/link";

const SignUp = () => {
  return (
    <div className="px-4 pt-8 pb-80 h-lvh">
      <div className="text-center mb-8">
        <p className="mb-[22px] text-2xl text-[#4A4A4A]">Logo</p>
        <p className="text-[#333333B2] font-semibold text-2xl">Welcome!</p>
        <p className="text-[#333333B2] text-sm mt-4">
          Glad to be part of our customer..
        </p>
      </div>

      <Register />

      <div className="text-center mt-8">
        <p className="text-[#333333B2] mb-8 font-medium text-sm">
          Already have an account?
          <Link href="/">
            <span className="text-[#020B30] underline underline-offset-4">
              {" "}
              Login
            </span>
          </Link>
        </p>
      </div>

      <div className="flex items-center gap-x-3 justify-center">
        <hr className="w-[30%] h-[1px] bg-[#E3E3E3]" />
        <p className="color-[#000000B2] text-xs"> Or Register with </p>
        <hr className="w-[30%] h-[1px] bg-[#E3E3E3]" />
      </div>
    </div>
  );
};

export default SignUp;
