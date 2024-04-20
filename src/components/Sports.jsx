import MainSection from "../components/MainSection";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Sports() {
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1000) {
        setShowContent(false);
      } else {
        setShowContent(true);
      }
    };

    // Initial check
    handleResize();

    // Listen to window resize events
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {showContent ? (
        <>
          <MainSection
            {...{
              icon: "/matchlogo.png",
              video: "/Guard of Honour for our WPL Champions _ RCB Unbox.mp4",
              smallText: "IPL | Thriller | Live Event  ",
              info: "Every fight begins with a failure! Braving against the odds, Manoj Kumar Sharma puts it all on the line to crack the nation’s much sought-after exam: UPSC.",
            }}
          />

          <div className="ml-28 bg-[#0f0f0ffd]">
            <br />
            <div>
              <div>
                <h5 className="text-xl font-semibold text-slate-200 flex justify-between pr-10">
                  <span>Popular Sports</span>
                  <Link to="/sports-popular" className="text-lg">
                    View More &#62;
                  </Link>
                </h5>

                <div>
                  <div className="mt-3 flex gap-2  over">
                    {[1, 1, 1, 1, 1, 1, 1, 1].map((a, i) => {
                      return (
                        <div key={i}>
                          <div className="h-36 w-64 rounded relative overflow-hidden hover:scale-[1.1] z-10 transition-all">
                            <img
                              src={`/sports/popular/${i}.png`}
                              alt="Sports"
                              className="h-full w-full"
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------------------------------------------ */}
            <br />
            {/* ------------------------------------------------------------ */}
          </div>
        </>
      ) : (
        <div className="errorw">
          <h1> Screen too small</h1>
          <p>
            {" "}
            Please resize your screen to view the content or Switch to Request
            Desktop Website.
          </p>
        </div>
      )}
    </>
  );
}

export default Sports;
