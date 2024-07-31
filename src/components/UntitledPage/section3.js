import React from 'react';

function renderSection3(props) {
  return (
    <section className="flex flex-col">
      <div
        className="tn:mt-[50px] tn:mr-0 tn:mb-[45px] tn:ml-[3.68%] flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat w-[1195.050048828125px] max-w-[85%] mt-[61px] mb-[45px] ml-[3.68%]"
        style={{ '--src': `url(${'/assets/49cfcc26d609851f998e68c911138652.png'})` }}>
        <div className="md:mt-[25px] md:mx-auto md:mb-[62px] tn:mt-[25px] tn:mx-auto tn:mb-[50px] flex flex-col w-[639px] relative max-w-[85%] mt-[25px] mb-[62px] ml-[10.71%]">
          <div className="flex flex-col gap-y-[39px] relative">
            <h1 className="md:text-[32px] md:items-start xxs:text-[30px] font-bold text-[36px] leading-[1.2] font-Montserrat text-white">
              ABOUT US
            </h1>

            <div
              className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat rounded-[40px] relative"
              style={{ '--src': `url(${'/assets/f407465ac93f17e89b266cae93e1998e.png'})` }}>
              <img
                className="w-[613px] h-[187px] aspect-[3.28] absolute left-[95px] bottom-[-62px]"
                src={'/assets/ce6ade3012b17390b31b4744cd9f82f3.png'}
                alt="alt text"
              />
              <h2 className="md:mt-[41px] md:mx-8 md:mb-14 md:items-start xs:mt-[41px] xs:mx-4 xs:mb-14 xxs:mt-[41px] xxs:mx-auto xxs:mb-14 tn:mt-[41px] tn:mx-auto tn:mb-[50px] relative mt-[41px] mr-8 mb-14 ml-[33px]">
                <span className="font-semibold text-[24px] leading-[2.05] font-Montserrat text-black md:text-[22px] xxs:text-[20px]">
                  <span className="font-semibold text-white">CNOT Perform</span>
                  <span className="text-white"> revolutionizes sports training through </span>
                  <span className="font-semibold text-[rgb(255,153,254)]">Artificial Intelligence</span>
                  <span className="text-[rgb(255,153,254)]">.</span>
                  <span className="text-[rgb(164,246,249)]">
                    {' '}
                    <br />
                  </span>
                  <span className="text-white">
                    Track your performance in real time. <br />
                    Analyze your data to identify strengths and weaknesses.
                    <br />
                    Receive personalized advice, and prevent injuries.
                  </span>
                </span>
              </h2>
            </div>
          </div>

          <div className="w-[543px] absolute right-[-517.0000305175781px] top-[-155px]">
            <img
              className="w-[543px] h-[744px] translate-x-[-50%] translate-y-[0] absolute left-1/2 top-0"
              src={'/assets/002db2a2e1b9edef28d103d6e495ea00.png'}
              alt="alt text"
            />
            <img
              className="w-[813px] h-[813px] absolute right-[-456px] bottom-[-1151.0000610351562px]"
              src={'/assets/6ec7e159b410b4d41ab466dc3c4aa2a4.png'}
              alt="alt text"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection3;
