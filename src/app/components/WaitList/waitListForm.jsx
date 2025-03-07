"use client";
import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { environmentUrl } from "@/env/env.local";
import Loader from "@/app/common/Loader";

const WaitListForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  console.log(email);

  const hanldeChange = (e) => {
    setEmail(e.target.value);
  };

  const handleWaitListSubmission = (e) => {
    e.preventDefault();

    setLoading(true);
    axios
      .post(
        `${environmentUrl.baseUrl}${environmentUrl?.waitListUrl}`,
        { email },
        { timeout: 40000 }
      )
      .then((res) => {
        setLoading(false);
        if (res.status >= 200 && res.status < 300) {
          toast.success(
            `Thank you for subscribing! You'll receive exclusive updates relating to SwapHub`
          );
          setEmail("");
        } else {
          toast.error(
            "Unexpected response from server. Please try again or contact Admin"
          );
          setLoading(false);
          return;
        }
      })
      .catch((err) => {
        setLoading(false);
        let errMessage;

        // Handle timeout error
        if (err.code === "ECONNABORTED") {
          errMessage =
            "The request took too long. Please check your internet connection and try again.";
        }

        // Handle network error
        if (!err.response) {
          errMessage =
            "Network error. Please check your internet connection and try again.";
        }

        // Handle server-side error (response error)
        if (err.response) {
          if (err.response.status < 500) {
            errMessage =
              err?.response?.data?.error ||
              "Request failed, try again. || Try using another email address";
          } else {
            errMessage = "Server error. Please try again later.";
          }
        }

        toast.error(errMessage);
      });
  };

  return (
    <form action="" onSubmit={handleWaitListSubmission}>
      <div className="relative">
        <input
          type="email"
          name={email}
          value={email}
          required
          placeholder="enter your email address"
          onChange={hanldeChange}
          className="px-4 py-[15px] rounded-[10px] leading-tight w-[100%] border border-[#b5b5b5] outline-none block text-[black] max-sm:pl-2"
        />
        <button className="px-3 py-2 text-white bg-[#2f96f4] font-semibold rounded block absolute right-[8px] bottom-[10%] max-sm:right-[3px]">
          {loading ? <Loader /> : "Join the Waitlist"}
        </button>
      </div>
    </form>
  );
};

export default WaitListForm;
