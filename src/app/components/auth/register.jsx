"use client";
import Button from "@/app/common/Button";
import Input from "@/app/common/SearchInput";
import { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useMemo } from "react";

const Register = () => {
  const [userData, setUserData] = useState({});
  const [showpassword, setShowpassword] = useState(true);
  const [showConfirmpassword, setShowConfirmpassword] = useState(true);
  const passwordRegex = useMemo(
    () => new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$"),
    []
  );
  const [error, setError] = useState({});

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

  const handleUserRegistration = (e) => {
    e.preventDefault();
    for (let key in error) {
      if (error[key]) {
        return;
      }
    }
    alert("working");
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
              name="email__address"
              text="email"
              placeholder="Enter email address"
              value={userData.email__address || ""}
              onChange={handleChange}
              className={`${handleError("email__address", true)}`}
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

        <Button>Create Account</Button>
      </form>
    </div>
  );
};

export default Register;
