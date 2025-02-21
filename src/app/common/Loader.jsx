import { ColorRing, Hourglass } from "react-loader-spinner";

const Loader = () => {
  return (
    <div>
      {/* <ColorRing
        visible={true}
        height="20"
        width="20"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
      /> */}
      <Hourglass
        visible={true}
        height="25"
        width="80"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["white"]}
      />
    </div>
  );
};

export default Loader;
