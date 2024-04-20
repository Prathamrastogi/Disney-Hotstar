import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

export default function MainSection({ icon, image, video, smallText, info }) {
  return (
    <>
      <div>
        <div className="pl-28">
          <div className="relative">
            {image ? (
              <div
                className={`bg-fixed bg-no-repeat bg-cover h-[90vh]`}
                style={{
                  backgroundImage: `url(${image})`,
                }}
              ></div>
            ) : (
              <video autoPlay loop muted className="bg-vid">
                <source src={video} type="video/mp4" />
              </video>
            )}

            <div
              className="absolute top-0 left-0 h-full w-full pl-3"
              style={{
                boxShadow: "300px -70px 400px 80px #0a1a0a inset",
              }}
            >
              <br />
              <br />
              <br />
              {image ? (
                <>
                  <br />
                  <br />
                  <br />
                </>
              ) : (
                <></>
              )}

              <img src={icon}></img>

              <div className="text-stone-300 text-[1.1rem] mt-6">
                <div className="flex gap-2 justify-start items-center">
                  <span className="h-2 w-2 inline-grid rounded-full blink"></span>
                  <span className="block font-semibold text-white">
                    {smallText || "LIVE 4L ICC Men's Cricket World Cup"}
                  </span>
                </div>
                <br />

                <p className="w-[28rem]">
                  {info || (
                    <>
                      Watch Live stream of the ICC Men's Cricket World Cup
                      <br />
                      2023 warm-up match between Australia and
                      <br />
                      Netherlands
                    </>
                  )}
                </p>
                <br />
                <br />
                <button className="p-3 bg-[rgba(255,255,255,.2)] w-[26.4rem] rounded-lg flex justify-center items-center gap-3 font-bold tracking-wider text-white hover:scale-105 hover:bg-[rgba(255,255,255,.3)] transition-all">
                  <BsFillPlayFill className="text-3xl" />
                  <p>Watch Now</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
