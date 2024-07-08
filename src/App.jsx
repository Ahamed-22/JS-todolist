import PriceCard from "./Components/price";

function App() {
  const features = [
    "Single User",
    "50Gb Srorage",
    "Unlimited Public Project",
    "Community access",
  ];
  const disadvantages = [
    "unlimited Private Project",
    "Dedicated Phone Support",
    "Free subdomains",
    "Monthly Status Report",
  ];
  return (
    <div
      className="container mt-5 py-4 d-flex align-items-center justify-content-center"
      style={{
        background:
          "linear-gradient(to right, rgba(3,102,231,1), rgba(49,172,252,1))",
      }}
    >
      <div className="row mx-auto justify-content-center">
        <div className="col-lg-4">
          <PriceCard
            plan="Free"
            amount="0"
            features={features}
            disadvantages={disadvantages}
          />
        </div>
        <div className="col-lg-4">
          <PriceCard
            plan="Plus"
            amount="9"
            features={features}
            disadvantages={disadvantages}
          />
        </div>
        <div className="col-lg-4">
          <PriceCard
            plan="Pro"
            amount="49"
            features={features}
            disadvantages={disadvantages}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
