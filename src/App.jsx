import "./App.css";
import React, { useState, useEffect } from "react";
import MainSection from "./components/MainSection";
import { Card } from "./components/Explore";
import { Link } from "react-router-dom";

const App = () => {
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
              icon: "/mainicon.png",
              video:
                "/12th Fail Official Teaser _ Vidhu Vinod Chopra _ In Cinemas Worldwide 27th October 2023.mp4",
              smallText: "Biopic | Common-Man Struggles | UnderDog  ",
              info: "Every fight begins with a failure! Braving against the odds, Manoj Kumar Sharma puts it all on the line to crack the nation’s much sought-after exam: UPSC.",
            }}
          />

          <div className="ml-28 bg-[#0f0f0ffd]">
            <br />

            <div>
              <div>
                <h5 className="text-xl font-semibold text-slate-200 flex justify-between pr-10">
                  <span>Latest Releases</span>
                  <Link to="/latest-release" className="text-lg">
                    View More &#62;
                  </Link>
                </h5>

                <div>
                  <div className="mt-3 flex gap-2 over">
                    {[1, 1, 1, 1, 1, 1, 1, 1].map((a, i) => {
                      return (
                        <div key={i}>
                          <Card {...{ i, path: "latest" }} />
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
            <div>
              <div>
                <h5 className="text-xl font-semibold text-slate-200 flex justify-between pr-10">
                  <span>Newly Added</span>
                  <Link to="/newly-added" className="text-lg">
                    View More &#62;
                  </Link>
                </h5>

                <div>
                  <div className="mt-3 flex gap-2 over">
                    {[1, 1, 1, 1, 1, 1, 1, 1].map((a, i) => {
                      return (
                        <div key={i}>
                          <Card {...{ i, path: "newly-added" }} />
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
            <div>
              <div>
                <h5 className="text-xl font-semibold text-slate-200 flex justify-between pr-10">
                  <span>Top 10 in India - Hindi</span>
                  <Link to="/top-10" className="text-lg">
                    View More &#62;
                  </Link>
                </h5>

                <div>
                  <div className="mt-3 flex gap-2 over">
                    {[1, 1, 1, 1, 1, 1, 1, 1].map((a, i) => {
                      return (
                        <div key={i}>
                          <Card {...{ i, path: "top10" }} />
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
            <div>
              <div>
                <h5 className="text-xl font-semibold text-slate-200 flex justify-between pr-10">
                  <span>StarPlus Shows</span>
                  <Link to="/star-plus-shows" className="text-lg">
                    View More &#62;
                  </Link>
                </h5>

                <div>
                  <div className="mt-3 flex gap-2 over">
                    {[1, 1, 1, 1, 1, 1, 1, 1].map((a, i) => {
                      return (
                        <div key={i}>
                          <Card {...{ i, path: "star-plus-shows" }} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <br />
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
};
export default App;
