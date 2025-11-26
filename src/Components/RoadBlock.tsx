import { useEffect, useState } from "react";

const RoadBlock = ({ onClose }:any) => {
  const today = new Date();

  const day = today.getDate();
  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
    "default",
  ];
  const monthIndex = today.getMonth();
  const month = monthNames[monthIndex];

  // Code for forceful closing timer
  const [timeLeft, setTimeLeft] = useState(20);
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onClose();
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onClose]);

  // Code for display timer
  const [displayTimeLeft, setDisplayTimeLeft] = useState(10);
  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [onClose]);

  // When no image is matched
  const handleImageError = () => {
    onClose(); // then close after setting fallback
  };
  return (
    <div>
      <div>
        <div>
          <div
            className="close"
            style={{
              borderRadius: "2%",
              height: "540px",
              position: "absolute",
              left: "450px",
              top: "100px",
              boxShadow: "1px 10px 10px grey",
            }}
          >
            {/* <button
              onClick={onClose}
              style={{
                backgroundColor: "red",
                borderRadius: "50%",
                border: "0px",
                width: "40px",
                height: "40px",
                textAlign: "center",
                alignContent: "center",
                position: "absolute",
                color: "white",
                top: "-10px",
                right: "-10px",
                display: displayTimeLeft === 0 ? "block" : "none",
              }}
            >
              X
            </button> */}
            <button
              onClick={displayTimeLeft <= 0 ? onClose : displayTimeLeft}
              style={{
                backgroundColor: "#055d59",
                borderRadius: "50%",
                border: "0px",
                width: "40px",
                height: "40px",
                textAlign: "center",
                alignContent: "center",
                position: "absolute",
                color: "white",
                top: "-10px",
                right: "-10px",
                fontSize: "20px",
                fontWeight: "bold",
                // display: displayTimeLeft === 0 ? "block" : "none",
              }}
            >
              {displayTimeLeft <= 0 ? "X" : displayTimeLeft}
            </button>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={`/roadblock/${month}/${day}.jpg`}
                onError={(e) => {
                  const originalSrc = e.currentTarget.src;

                  e.currentTarget.onerror = null;

                  if (!originalSrc.includes("default.jpg")) {
                    e.currentTarget.src = "/roadblock/default.jpg";
                  } else {
                    handleImageError();
                  }
                }}
                className="img-fluid rounded"
                style={{
                  borderRadius: "3%",
                  objectFit: "contain",
                  height: "550px",
                  width: "550px",
                }}
                alt="Advertisement"
              />
            </a>
            {/* <p
              style={{
                position: "absolute",
                top: "-10px",
                right: "5px",
                backgroundColor: "red",
                padding: "5px 10px",
                color: "white",
                borderRadius: "50px",
                display: displayTimeLeft === 0 ? "none" : "block",
              }}
            >
              Closing in {displayTimeLeft}
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadBlock;
