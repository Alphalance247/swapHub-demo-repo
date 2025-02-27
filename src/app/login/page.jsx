import BgImage from "next/image";
import Icon from "next/image";
import Logo from "next/image";

const Login = () => {
  return (
    <>
      <section className="bg-[#F5F5F5] rounded-[40px] flex items-start flex-col px-[120px] pt-10 pb-[100px] w-[1440px] gap-16">
        <div className="flex items-center gap-[5.714]">
          <Logo
            src="/assets/image/logo.png"
            alt="swapHubLogo"
            width={37.154}
            height={34.286}
          />
          <p className="text-[#000] font-[Recoleta] font-bold text-center not-italic">
            swaphub
          </p>
        </div>

        <section className=" flex items-center gap-16">
          <div>
            <BgImage
              className="flex-1 self-stretch rounded-2xl "
              src="/assets/image/swapimg.png"
              alt="bgImage"
              width={648}
              height={552}
            />
          </div>
          <div className="bg-[#FFF] flex flex-col justify-center items-center p-10 gap-10 w-[488px] rounded-2xl">
            <div className="flex flex-col items-start self-stretch gap-2">
              <h1 className="text-[#303030] self-stretch font-bold font-[Recoleta] text-2xl not-italic">
                Welcome Back to Swaphub!
              </h1>
              <p className="text-[#B5B5B5] self-stretch font-[Inter] text-base font-[450px] not-italic">
                Access your dashboard, manage your products & services, and
                connect with customers.
              </p>
            </div>

            <div className="flex flex-col items-start gap-6 w-[400px]">
              <div className="flex flex-col items-center self-stretch gap-6">
                <div className="flex justify-center items-center px-3 py-2 bg-[#F1F1F1] rounded-3xl w-[200px] gap-2.5">
                  <Icon
                    src="/assets/image/Google Icon.png"
                    alt="google"
                    width={20}
                    height={20}
                  />
                  <p className=" text-[#303030] font-[Inter] w-[450px] text-sm not-italic">
                    Log In with Google
                  </p>
                </div>
                <div className="flex justify-center items-center gap-4 self-stretch">
                  <hr className="h-[1px] w-[174.5px] text-[#B5B5B5]" />
                  <p className="font-[Inter] not-italic font-[450px] text-[16px] leading-4">
                    Or
                  </p>{" "}
                  <hr className="h-1 w-44" />
                </div>
              </div>

              <form action="">
                <div className="flex w-[400px] flex-col items-start">
                  <label className="font-[Inter] font-[450px] text-[16px] leading-5 text-[#303030]">
                    Email Address
                  </label>
                  <input
                    className="flex items-center self-stretch p-3 border-[0.5px] border-solid border-[#8A8A8A]"
                    typeof="email"
                    placeholder="Enter your email adddress"
                  />
                </div>
                <div className="flex w-[400px] flex-col items-start">
                  <label className="font-[Inter] font-[450px] text-[16px] leading-5 text-[#303030]">
                    Password
                  </label>
                  <input
                    className="flex items-center self-stretch p-3 border-[0.5px] border-solid border-[#8A8A8A]"
                    typeof="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="flex items-center self-stretch justify-center py-3 px-4 gap-[10px] rounded-md bg-[#121212] border-[1px] border-solid border-[#121212]">
                  <button
                    typeof="submit"
                    className="text-[#FFF] text-center font-[Inter] text-[16px] leading-5 font-medium not-italic"
                  >
                    Create account
                  </button>
                </div>
              </form>
              <p className="self-stretch font-[Inter] font-[450px] text-sm ">
                Don't have an account?{" "}
                <a
                  className="text-[#005BD3] decoration-solid decoration-auto underline underline-offset-auto "
                  href="#"
                >
                  Sign up for free
                </a>
              </p>
            </div>
          </div>
        </section>
      </section>
    </>
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
