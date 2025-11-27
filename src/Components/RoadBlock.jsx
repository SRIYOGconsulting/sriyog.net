import { useEffect, useState } from "react";

const RoadBlock = ({ onClose }) => {
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

  const month = monthNames[today.getMonth()];

  // Auto close after 20 seconds
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

  // Show close timer (10 sec)
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
  }, []);

  // If no image found → close
  const handleImageError = () => {
    onClose();
  };

  const [showRoadBlock, setShowRoadBlock] = useState(false);

  // Show only once per session + scroll to top
  useEffect(() => {
    const hasSeen = sessionStorage.getItem("roadblock_seen");

    if (!hasSeen) {
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

      setShowRoadBlock(true);
      sessionStorage.setItem("roadblock_seen", "true");
    }
  }, []);

  // Disable background scrolling when popup is active
  useEffect(() => {
    document.body.style.overflow = showRoadBlock ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showRoadBlock]);

  return (
    <>
      {showRoadBlock && (
        <div className="fixed inset-0 bg-[#D0D0D0] z-[9999] close">
          <div>
            <div>
              <div
                className="close"
                style={{
                  zIndex: 9999,
                  borderRadius: "2%",
                  height: "540px",
                  position: "absolute",
                  left: "500px",
                  top: "100px",
                  boxShadow: "1px 10px 10px grey",
                }}
              >
                <button
                  onClick={displayTimeLeft <= 0 ? onClose : undefined}
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
                    cursor: displayTimeLeft <= 0 ? "pointer" : "not-allowed",
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RoadBlock;
