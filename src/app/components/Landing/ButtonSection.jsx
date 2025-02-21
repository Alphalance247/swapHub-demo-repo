import PrimaryButton from "../../common/PrimaryButton";
import SecondaryButton from "../../common/SecondaryButton";

export default function ButtonGroup() {
  return (
    <div className="flex gap-4">
      <PrimaryButton text="Create a free account" onClick={() => alert("Sign Up")} />
      <SecondaryButton text="Get inTouch" onClick={() => alert("Contact Us")} />
    </div>
  );
}
