function PriceCard({
  plan = "",
  features = "",
  amount = "",
  disadvantages = "",
}) {
  return (
    <div
      className="card"
      style={{ height: "450px", borderRadius: "20px", width: "300px" }}
    >
      <div className="card-body d-flex flex-column align-items-center justify-content-center">
        <div className="position-absolute top-0 mt-4 text-center">
          <h6 className="card-title">{plan}</h6>
          <p className="card-text">
            <h3>${amount}/month</h3>
          </p>
        </div>
        <div>
          {features ? (
            features.map((item, index) => (
              <div className="d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-check"
                  viewBox="0 0 16 16"
                >
                  <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                </svg>
                <h6 key={index}>{item}</h6>
              </div>
            ))
          ) : (
            <p>No features available</p>
          )}

          {disadvantages ? (
            disadvantages.map((item, index) => (
              <div className="d-flex align-items-center" style={{ opacity: '0.5',
                color: 'gray' }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
                <h6 key={index}>{item}</h6>
              </div>
            ))
          ) : (
            <p>No features available</p>
          )}
        </div>
        <a
          href="#"
          className="btn text-white position-absolute bottom-0 mb-4"
          style={{
            background:
              "linear-gradient(to right, rgba(3,102,231,1), rgba(49,172,252,1))",
            borderRadius: "40px",
            width: "250px",
          }}
        >
          Button
        </a>
      </div>
    </div>
  );
}
export default PriceCard;
