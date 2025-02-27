"use client";
import Button from "@/app/common/Button";
import Input from "@/app/common/SearchInput";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useMemo } from "react";
import { PostRequest } from "@/utils/helper";
import { environmentUrl } from "@/env/env.local";
import axios from "axios";
import toast from "react-hot-toast";

const Register = () => {
  const [userData, setUserData] = useState({});
  const [showpassword, setShowpassword] = useState(true);
  const [showConfirmpassword, setShowConfirmpassword] = useState(true);
  const passwordRegex = useMemo(
    () => new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$"),
    []
  );
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setError((prev) => ({ ...prev, [name]: "" }));

    if (name === "password" && !passwordRegex.test(value)) {
      setError((prev) => ({
        ...prev,
        [name]:
          "Password must contain at least 8 characters and must must be alphanumeric.",
      }));
    }
    if (name === "confirm_password" && value !== userData?.password) {
      setError((prev) => ({ ...prev, [name]: "Passwords don't match." }));
    }

    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleError = ({ field, returnMessage }) => {
    if (returnMessage) {
      return error[field];
    } else {
      return error[field] ? "border-red-600 border-[1px]" : "";
    }
  };

  const handleUserRegistration = async (e) => {
    e.preventDefault();

    for (let key in error) {
      if (error[key]) {
        return;
      }
    }
    setLoading(true);

    await axios
      .post(`${environmentUrl.baseUrl}${environmentUrl.registerUrl}`, {
        ...userData,
        first_name: "azeez",
        last_name: "lawal",
        phonenumber: "+1238140686688",
      })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          toast.success(
            "Registration successful, kindly check your mailbox for confirmation"
          );
          setUserData((prev) => ({}));
          setLoading(false);
        } else {
          toast.error("Registration failed");
          // handleNetworkError(response?.data?.details);
          console.log("Network Error");
          setLoading(false);
        }
      })
      .catch((error) => {
        if (error.isAxiosError) {
          if (error.response) {
            // If server responded with a status code for a request
            console.log("Data ", error.response.data);
            console.log("Status ", error.response.status);
            toast.error(`Registration failed ${error.response.status}`);
            console.log("Headers ", error.response.headers);
            console.log("Network ", error.isAxiosError);
            // console.log(error.is)
          } else if (error.request) {
            // Client made a request but response is not received
            toast.error(`Registration failed ${error.request}`);
          } else {
            // Other case
            console.log(
              "[Network Error]: No Response Received At",
              error.message
            );
            toast.error(
              `[Network Error]: No Response Received At ${error.request}`
            );
          }
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  console.log(userData);

  return (
    <div className="">
      <form action="" onSubmit={handleUserRegistration}>
        <div className="flex flex-col gap-y-4 mb-8">
          <div>
            <div className="mb-[4px]">
              <label
                htmlFor="email__address"
                className="text-[#303030] text-sm font-semibold mb-2"
              >
                Email Address/Phone Number
              </label>
            </div>

            <Input
              id="email__address"
              name="email"
              text="email"
              placeholder="Enter email address"
              value={userData.email || ""}
              onChange={handleChange}
              className={`${handleError("email", true)}`}
            />
          </div>

          <div className="relative">
            <div className="mb-[4px]">
              <label
                htmlFor="password"
                className="text-[#303030] text-sm font-semibold"
              >
                Password
              </label>
            </div>

            <div>
              <Input
                name="password"
                text={showpassword ? "text" : "password"}
                id="password"
                placeholder="Enter password"
                value={userData.password || ""}
                onChange={handleChange}
                className={`${handleError({
                  field: "password",
                  returnMessage: false,
                })}`}
                autoComplete="false"
              />
              <span
                onClick={() => setShowpassword((prevState) => !prevState)}
                className="absolute right-3 top-[70%] transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showpassword ? (
                  <AiFillEye size={20} />
                ) : (
                  <AiFillEyeInvisible size={20} />
                )}
              </span>
            </div>
          </div>

          {handleError({ field: "password", returnMessage: true }) && (
            <span className="text-red-600 text-xs mt-[-8px]">
              {handleError({ field: "password", returnMessage: true })}
            </span>
          )}

          <div className="relative">
            <div className="mb-[4px]">
              <label
                htmlFor="confirm_password"
                className="text-[#303030] text-sm font-semibold"
              >
                Confirm Password
              </label>
            </div>
            <div>
              <Input
                name="confirm_password"
                text={showConfirmpassword ? "text" : "password"}
                id="confirm_password"
                placeholder="Enter password"
                value={userData.confirm_password || ""}
                onChange={handleChange}
                className={`${handleError("confirm_password")}`}
                autoComplete="false"
              />
              <span
                onClick={() =>
                  setShowConfirmpassword((prevState) => !prevState)
                }
                className="absolute right-3 top-[70%] transform -translate-y-1/2 cursor-pointer text-gray-500"
              >
                {showConfirmpassword ? (
                  <AiFillEye size={20} />
                ) : (
                  <AiFillEyeInvisible size={20} />
                )}
              </span>
            </div>
          </div>
          {handleError({ field: "confirm_password", returnMessage: true }) && (
            <span className="text-red-600 text-xs mt-[-8px]">
              {handleError({ field: "confirm_password", returnMessage: true })}
            </span>
          )}
        </div>

        <Button type="submit" disabled={loading}>
          {loading ? "Loading....." : "Create Account"}
        </Button>
      </form>
    </div>
  );
};

export default Register;
