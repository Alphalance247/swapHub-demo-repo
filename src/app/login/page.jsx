import Icon from "next/image";
import Logo from "next/image";
import Image from "next/image";
import Button from "../common/Button";

const Login = () => {
  return (
    <section className="bg-[#F5F5F5] h-screen md:h-auto">
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
                Welcome Back to Swaphub!
              </h1>
              <p className="text-[#B5B5B5] font-[450] text-sm self-stretch md:text-base">
                Access your dashboard, manage your products & services, and
                connect with customers.
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
              Don`t have an account?{" "}
              <a
                className="text-[#005BD3] decoration-solid decoration-auto underline underline-offset-auto "
                href="#"
              >
                Sign up for free
              </a>
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

// "use client";
// import Button from "@/app/common/Button";
// import Input from "@/app/common/SearchInput";
// import { useState } from "react";
// import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
// import { useMemo } from "react";
// import { PostRequest } from "@/utils/helper";
// import { environmentUrl } from "@/env/env.local";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// const Login = () => {}
//   const [userData, setUserData] = useState({});
//   const [showpassword, setShowpassword] = useState(true);
//   const passwordRegex = useMemo(
//     () => new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$"),
//     []
//   );
//   const [error, setError] = useState({});
//   const [loading, setLoading] = useState(false);
//   const router = useRouter();
//   const [credentials, setCredentials] = useState({});

//   const handleChange = (e) => {
//     let { name, value } = e.target;
//     setError((prev) => ({ ...prev, [name]: "" }));

//     if (name === "password" && !passwordRegex.test(value)) {
//       setError((prev) => ({
//         ...prev,
//         [name]:
//           "Password must contain at least 8 characters and must must be alphanumeric.",
//       }));
//     }

//     setUserData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleError = ({ field, returnMessage }) => {
//     if (returnMessage) {
//       return error[field];
//     } else {
//       return error[field] ? "border-red-600 border-[1px]" : "";
//     }
//   };

//   const handleUserLogin = async (e) => {
//     e.preventDefault();

//     for (let key in error) {
//       if (error[key]) {
//         return;
//       }
//     }
//     setLoading(true);

//     await axios
//       .post(`${environmentUrl.baseUrl}${environmentUrl.loginUrl}`, {
//         ...userData,
//       })
//       .then((res) => {
//         if (res.status >= 200 && res.status < 300) {
//           toast.success(
//             "Registration successful, kindly check your mailbox for confirmation"
//           );
//           router.push("/");
//           setUserData((prev) => ({}));
//           setLoading(false);
//         } else {
//           toast.error("Registration failed");
//           // handleNetworkError(response?.data?.details);
//           console.log("Network Error");
//           setLoading(false);
//         }
//       })
//       .catch((error) => {
//         if (error.isAxiosError) {
//           if (error.response) {
//             // If server responded with a status code for a request
//             console.log("Data ", error.response.data);
//             console.log("Status ", error.response.status);
//             toast.error(`Registration failed ${error.response.status}`);
//             console.log("Headers ", error.response.headers);
//             console.log("Network ", error.isAxiosError);
//             // console.log(error.is)
//           } else if (error.request) {
//             // Client made a request but response is not received
//             toast.error(`Registration failed ${error.request}`);
//           } else {
//             // Other case
//             console.log(
//               "[Network Error]: No Response Received At",
//               error.message
//             );
//             toast.error(
//               `[Network Error]: No Response Received At ${error.request}`
//             );
//           }
//         }
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   return (
//     <section className="px-4 pt-8 pb-80">
//       <form action="" onSubmit={handleUserLogin}>
//         <div className="flex flex-col gap-y-4 mb-8">
//           <div>
//             <div className="mb-[4px]">
//               <label
//                 htmlFor="email__address"
//                 className="text-[#303030] text-sm font-semibold mb-2"
//               >
//                 Email Address/Phone Number
//               </label>
//             </div>

//             <Input
//               id="email__address"
//               name="email"
//               text="email"
//               placeholder="Enter email address"
//               value={userData.email || ""}
//               onChange={handleChange}
//               className={`${handleError("email", true)}`}
//             />
//           </div>

//           <div className="relative">
//             <div className="mb-[4px]">
//               <label
//                 htmlFor="password"
//                 className="text-[#303030] text-sm font-semibold"
//               >
//                 Password
//               </label>
//             </div>

//             <div>
//               <Input
//                 name="password"
//                 text={showpassword ? "text" : "password"}
//                 id="password"
//                 placeholder="Enter password"
//                 value={userData.password || ""}
//                 onChange={handleChange}
//                 className={`${handleError({
//                   field: "password",
//                   returnMessage: false,
//                 })}`}
//                 autoComplete="false"
//               />
//               <span
//                 onClick={() => setShowpassword((prevState) => !prevState)}
//                 className="absolute right-3 top-[70%] transform -translate-y-1/2 cursor-pointer text-gray-500"
//               >
//                 {showpassword ? (
//                   <AiFillEye size={20} />
//                 ) : (
//                   <AiFillEyeInvisible size={20} />
//                 )}
//               </span>
//             </div>
//           </div>
//           {handleError({
//             field: "password",
//             returnMessage: true,
//           }) && (
//             <span className="text-red-600 text-xs mt-[-8px]">
//               {handleError({
//                 field: "password",
//                 returnMessage: true,
//               })}
//             </span>
//           )}
//         </div>

//         <Button type="submit">
//           {loading ? "Loading....." : "Create Account"}
//         </Button>
//       </form>
//     </section>
//   );
// };

// import bgimage from "../../../public/assets/image/swapimage.png"

export default Login;
