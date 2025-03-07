import Tabs from "../../common/TabButton";

export default function TabSection({ activeTab, setActiveTab }) {
  const tabItems = [
    "Create Your Hub",
    "Add Your Offerings",
    "Engage and Sell",
    "Expand Your Reach",
  ];

  return (
    <div className="flex justify-center mt-6 max-md:overflow-scroll max-md:pl-[21rem]">
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabItems} />
    </div>
  );
}
