import React from 'react';

function renderSection5(props) {
  return (
    <section className="flex flex-col relative">
      <div className="tn:mt-[50px] tn:mx-auto tn:mb-[49px] w-[1080px] flex flex-col items-center gap-y-4 relative max-w-[85%] mt-[62px] mx-auto mb-[49px]">
        <div className="flex flex-col w-full relative">
          <img
            className="w-[328px] h-[309px] absolute left-[-305px] top-[-62px]"
            src={'/assets/a2023dd2d59c45c3e9733cf57e01884e.svg'}
            alt="alt text"
          />

          <div className="flex flex-col gap-y-[39px] relative">
            <h1 className="md:text-[32px] md:items-start xxs:text-[30px] font-bold text-[36px] leading-[1.2] font-Montserrat text-white">
              What Do We Offer
            </h1>

            <div className="md:grid-cols-[repeat(2,_minmax(0,_1fr))] sm:grid-cols-[repeat(1,_minmax(0,_1fr))] grid grid-cols-[repeat(3,_minmax(0,_1fr))] content-start gap-y-[30px] gap-x-[30px]">
              <div
                className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat rounded-[40px] relative row-span-1 column-span-1"
                style={{ '--src': `url(${'/assets/415de0db956e61ca0fa3a3e0f224eeda.png'})` }}>
                <div className="md:w-[85%] md:mt-[29px] md:mr-0 md:mb-[150px] md:ml-[23px] sm:mt-[29px] sm:mx-auto sm:mb-[150px] xs:mt-[29px] xs:mx-auto xs:mb-20 tn:mt-[29px] tn:mx-auto tn:mb-[50px] flex flex-col bg-[rgb(245,248,255)] rounded-[9px] w-11 relative max-w-[85%] mt-[29px] mb-[179px] ml-[23px]">
                  <img
                    className="tn:my-2.5 tn:mx-2 w-6 h-6 object-cover m-2.5"
                    src={'/assets/50c0723da218864c4df5d2a34f15a6cf.svg'}
                    alt="alt text"
                  />
                </div>

                <div className="w-[294px] translate-x-[-50%] translate-y-[0] flex flex-col items-center gap-y-[18px] absolute left-1/2 top-[93px]">
                  <h3 className="md:text-[18px] md:items-start xxs:text-[16px] font-semibold text-[20px] leading-[1.2] font-Montserrat text-white">
                    Live Performance Tracking
                  </h3>
                  <p className="font-normal text-[14px] leading-normal font-Montserrat text-[rgb(182,184,198)]">
                    Step up your game with our platform that gives athletes real-time performance tracking!
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat rounded-[40px] row-span-1 column-span-1"
                style={{ '--src': `url(${'/assets/415de0db956e61ca0fa3a3e0f224eeda.png'})` }}>
                <div className="xs:mt-[29px] xs:mx-4 xs:mb-[54px] tn:mt-[29px] tn:mx-2 tn:mb-[50px] flex flex-col mt-[29px] mx-[23px] mb-[54px]">
                  <div className="flex flex-col bg-[rgb(245,248,255)] rounded-[9px] w-11 max-w-[85%]">
                    <img
                      className="tn:my-2.5 tn:mx-2 w-6 h-6 object-cover m-2.5"
                      src={'/assets/50c0723da218864c4df5d2a34f15a6cf.svg'}
                      alt="alt text"
                    />
                  </div>

                  <h3 className="md:text-[18px] md:items-start xxs:text-[16px] font-semibold text-[20px] leading-[1.2] font-Montserrat text-white mt-5">
                    Data Analysis
                  </h3>
                  <p className="font-normal text-[14px] leading-normal font-Montserrat text-[rgb(182,184,198)] mt-[18px]">{`Harnessing AI for data analysis to pinpoint athletes' strengths and weaknesses for optimized performance.`}</p>
                </div>
              </div>

              <div
                className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat rounded-[40px] row-span-1 column-span-1"
                style={{ '--src': `url(${'/assets/415de0db956e61ca0fa3a3e0f224eeda.png'})` }}>
                <div className="xs:mt-[29px] xs:mx-4 xs:mb-[33px] tn:mt-[29px] tn:mx-2 tn:mb-[33px] flex flex-col mt-[29px] mx-[23px] mb-[33px]">
                  <div className="flex flex-col bg-[rgb(245,248,255)] rounded-[9px] w-11 max-w-[85%]">
                    <img
                      className="tn:my-2.5 tn:mx-2 w-6 h-6 object-cover m-2.5"
                      src={'/assets/50c0723da218864c4df5d2a34f15a6cf.svg'}
                      alt="alt text"
                    />
                  </div>

                  <h3 className="md:text-[18px] md:items-start xxs:text-[16px] tn:mt-5 tn:mr-2 tn:mb-0 tn:ml-0 font-semibold text-[20px] leading-[1.2] font-Montserrat text-white mt-5 mr-[11px]">
                    Personalized Coaching Tips
                  </h3>
                  <p className="font-normal text-[14px] leading-normal font-Montserrat text-[rgb(182,184,198)] mt-[18px]">
                    From concept to launch, we create stunning, user-centric websites that elevate your brand and engage
                    your audience.
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat rounded-[40px] row-span-1 column-span-1"
                style={{ '--src': `url(${'/assets/415de0db956e61ca0fa3a3e0f224eeda.png'})` }}>
                <div className="xs:mt-[29px] xs:mx-4 xs:mb-[33px] tn:mt-[29px] tn:mx-2 tn:mb-[33px] flex flex-col mt-[29px] mx-[23px] mb-[33px]">
                  <div className="flex flex-col bg-[rgb(245,248,255)] rounded-[9px] w-11 max-w-[85%]">
                    <img
                      className="tn:my-2.5 tn:mx-2 w-6 h-6 object-cover m-2.5"
                      src={'/assets/50c0723da218864c4df5d2a34f15a6cf.svg'}
                      alt="alt text"
                    />
                  </div>

                  <h3 className="md:text-[18px] md:items-start xxs:text-[16px] font-semibold text-[20px] leading-[1.2] font-Montserrat text-white mt-5">
                    Injury Prevention
                  </h3>
                  <p className="font-normal text-[14px] leading-normal font-Montserrat text-[rgb(182,184,198)] mt-[18px]">
                    From concept to launch, we create stunning, user-centric websites that elevate your brand and engage
                    your audience.
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat rounded-[40px] row-span-1 column-span-1"
                style={{ '--src': `url(${'/assets/415de0db956e61ca0fa3a3e0f224eeda.png'})` }}>
                <div className="xs:mt-[29px] xs:mx-4 xs:mb-[33px] tn:mt-[29px] tn:mx-2 tn:mb-[33px] flex flex-col mt-[29px] mx-[23px] mb-[33px]">
                  <div className="flex flex-col bg-[rgb(245,248,255)] rounded-[9px] w-11 max-w-[85%]">
                    <img
                      className="tn:my-2.5 tn:mx-2 w-6 h-6 object-cover m-2.5"
                      src={'/assets/50c0723da218864c4df5d2a34f15a6cf.svg'}
                      alt="alt text"
                    />
                  </div>

                  <h3 className="md:text-[18px] md:items-start xxs:text-[16px] font-semibold text-[20px] leading-[1.2] font-Montserrat text-white mt-5">
                    Web Design
                  </h3>
                  <p className="font-normal text-[14px] leading-normal font-Montserrat text-[rgb(182,184,198)] mt-[18px]">
                    From concept to launch, we create stunning, user-centric websites that elevate your brand and engage
                    your audience.
                  </p>
                </div>
              </div>

              <div
                className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat rounded-[40px] row-span-1 column-span-1"
                style={{ '--src': `url(${'/assets/415de0db956e61ca0fa3a3e0f224eeda.png'})` }}>
                <div className="xs:mt-[29px] xs:mx-4 xs:mb-[33px] tn:mt-[29px] tn:mx-2 tn:mb-[33px] flex flex-col mt-[29px] mx-[23px] mb-[33px]">
                  <div className="flex flex-col bg-[rgb(245,248,255)] rounded-[9px] w-11 max-w-[85%]">
                    <img
                      className="tn:my-2.5 tn:mx-2 w-6 h-6 object-cover m-2.5"
                      src={'/assets/50c0723da218864c4df5d2a34f15a6cf.svg'}
                      alt="alt text"
                    />
                  </div>

                  <h3 className="md:text-[18px] md:items-start xxs:text-[16px] font-semibold text-[20px] leading-[1.2] font-Montserrat text-white mt-5">
                    Web Design
                  </h3>
                  <p className="font-normal text-[14px] leading-normal font-Montserrat text-[rgb(182,184,198)] mt-[18px]">
                    From concept to launch, we create stunning, user-centric websites that elevate your brand and engage
                    your audience.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <img
            className="w-[1078px] h-[1078px] absolute right-[-761px] top-[-601px]"
            src={'/assets/2607aea5f18271d9822401108b91f768.png'}
            alt="alt text"
          />
        </div>

        <div className="xs:gap-x-4 tn:gap-x-2 w-[76.0250015258789px] flex gap-x-5 max-w-[85%]">
          <img className="w-4 h-4 object-cover" src={'/assets/b401a58966bbffd64cc44d9251ea30bf.svg'} alt="alt text" />
          <img
            className="w-2.5 h-2.5 object-cover my-[3px]"
            src={'/assets/72bb962e8d02e88a32fccb149de95180.svg'}
            alt="alt text"
          />
          <img
            className="w-2.5 h-2.5 object-cover my-[3px]"
            src={'/assets/72bb962e8d02e88a32fccb149de95180.svg'}
            alt="alt text"
          />
        </div>
      </div>

      <img
        className="w-[1078px] h-[1078px] absolute right-[-739px] top-[-604px]"
        src={'/assets/8f7a50619aa8c9e2f728e8255e6e7ef9.svg'}
        alt="alt text"
      />
    </section>
  );
}

export default renderSection5;
