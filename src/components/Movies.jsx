import MainSection from "../components/MainSection";
import React, { useState, useEffect } from "react";
import { Card } from "../components/Explore";
import { Link } from "react-router-dom";

function Movies() {
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
              icon: "/movieicon.png",
              video:
                "/Salaar Telugu Trailer _ Prabhas _ Prashanth Neel _ Prithviraj_Shruthi_Hombale Films_Vijay Kiragandur.mp4",
              smallText: "Action | Thriller | Power Struggle  ",
              info: "In the crime-infested Khansaar, Prince Varadha sets to ascend the throne. But a coup d'état is planned! And there’s only one man to help reclaim power: Deva.",
            }}
          />

          <div className="ml-28 bg-[#0f0f0ffd]">
            <br />
            <div>
              <div>
                <h5 className="text-xl font-semibold text-slate-200 flex justify-between pr-10">
                  <span>Family</span>
                  <Link to="/movies-family" className="text-lg">
                    View More &#62;
                  </Link>
                </h5>

                <div>
                  <div className="mt-3 flex gap-2 over">
                    {[1, 1, 1, 1, 1, 1, 1, 1].map((a, i) => {
                      return (
                        <div key={i}>
                          <Card {...{ i, path: "movies/family" }} />
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
                  <span>Thriller</span>
                  <Link to="/movies-thriller" className="text-lg">
                    View More &#62;
                  </Link>
                </h5>

                <div>
                  <div className="mt-3 flex gap-2">
                    {[1, 1, 1, 1, 1, 1, 1, 1].map((a, i) => {
                      return (
                        <div key={i}>
                          <Card {...{ i, path: "movies/thriller" }} />
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

export default Movies;
