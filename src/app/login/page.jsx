import BgImage from "next/image"
import Icon from "next/image"
import Logo from "next/image"


import toast from "react-hot-toast";

const Login = () => {
  const [userData, setUserData] = useState({});
  const [showpassword, setShowpassword] = useState(true);
  const passwordRegex = useMemo(
    () => new RegExp("^(?=.*[A-Za-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$"),
    []
  );
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [credentials, setCredentials] = useState({});

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

    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleError = ({ field, returnMessage }) => {
    if (returnMessage) {
      return error[field];
    } else {
      return error[field] ? "border-red-600 border-[1px]" : "";
    }
  };

  const handleUserLogin = async (e) => {
    e.preventDefault();

    for (let key in error) {
      if (error[key]) {
        return;
      }
    }
    setLoading(true);

    await axios
      .post(`/api/auth/login`, {
        ...userData,
      })
      .then((res) => {
        if (res.status >= 200 && res.status < 300) {
          const { fullname, message } = res?.data;
          toast.success(`"Welcome back ${fullname}`);
          console.log(fullname);
          router.push("/join-wait-list");
          setUserData((prev) => ({}));
          setLoading(false);
        } else {
          toast.error(
            `Registration failed An unexpected error occurred. ${res?.data?.statusmessage}`
          );
          // handleNetworkError(response?.data?.details);
          console.log("Network Error");
          setLoading(false);
        }
      })
      .catch((error) => {
        const errorMessage = error?.res?.statusmessage;
        if (error.isAxiosError) {
          if (error.res) {
            // If server responded with a status code for a request
            console.log("Data ", error.response.data);
            console.log("Status ", error.response.status);
            toast.error(
              `Registration failed An unexpected error occurred. ${errorMessage}`
            );
            console.log("Headers ", error.response.headers);
            console.log("Network ", error.isAxiosError);
            // console.log(error.is)
          } else if (error.request) {
            // Client made a request but response is not received
            toast.error(`Registration failed ${errorMessage}`);
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

  return (
    <section className="px-4 pt-8 pb-80">
      <form action="" onSubmit={handleUserLogin}>
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
          {handleError({
            field: "password",
            returnMessage: true,
          }) && (
            <span className="text-red-600 text-xs mt-[-8px]">
              {handleError({
                field: "password",
                returnMessage: true,
              })}
            </span>
          )}
        </div>

        <Button type="submit" disabled={loading}>
          {loading ? "Loading....." : "Create Account"}
        </Button>
      </form>
    </section>
  );
};

export default Login;
