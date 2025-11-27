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
  const [displayTimeLeft, setDisplayTimeLeft] = useState(2);
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

  const [showRoadBlock, setShowRoadBlock] = useState(false);

  useEffect(()=>{
    const hasSeen = sessionStorage.getItem('roadblock_seen');
    if(!hasSeen){
      window.scroll(false)
      setShowRoadBlock(true);
      sessionStorage.setItem('roadblock_seen','true');
    }
  })

  useEffect(() => {
    if (showRoadBlock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [showRoadBlock]);
  return (
    <>
    {showRoadBlock &&
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
            
          </div>
        </div>
      </div>
    </div>}
    </>
  );
};

export default RoadBlock;
