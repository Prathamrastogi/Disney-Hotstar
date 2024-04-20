import MainSection from "../components/MainSection";
import React, { useState, useEffect } from "react";
import { Card } from "../components/Explore";
import { Link } from "react-router-dom";

function Shows() {
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
              icon: "/showicon.png",
              video:
                "/Anupama _ America Mein Anupama Basaayegi Apni Nayi Duniya.mp4",
              smallText: "Drama | Common-Man Struggles | Family Friendly  ",
              info: " After a gruelling separation from Anuj, strong-willed Anupama moves to America. Enduring pain but embracing life, will she be able to fulfil her dreams",
            }}
          />

          <div className="ml-28 bg-[#0f0f0ffd]">
            <br />
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
}

export default Shows;
