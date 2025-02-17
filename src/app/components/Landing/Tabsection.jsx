import Tabs from "../../common/TabButton";

export default function TabSection() {
  const tabItems = ["Create Your Hub", "Add Your Offerings", "Engage and Sell", "Expand Your Reach"];

  return (
    <div className="flex justify-center mt-6">
      <Tabs tabs={tabItems} />
    </div>
  );
}
