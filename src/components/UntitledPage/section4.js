import React from 'react';

function renderSection4(props) {
  return (
    <section className="flex flex-col relative">
      <img
        className="w-[1080px] h-[1297px] translate-x-[-50%] translate-y-[0] absolute left-1/2 top-[-44px]"
        src={'/assets/ad2bc131438e41c57a735281db9a880b.png'}
        alt="alt text"
      />

      <div
        className="md:mt-[150px] md:mx-auto md:mb-[53px] xs:mt-20 xs:mx-auto xs:mb-[53px] tn:my-[50px] tn:mx-auto flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat rounded-[10px] w-[1077.9749755859375px] relative max-w-[85%] mt-[1333px] mx-auto mb-[53px]"
        style={{ '--src': `url(${'/assets/733dc71b1118c8dd42dd8c3be3bbac1f.png'})` }}>
        <div className="flex flex-col relative">
          <div className="xs:gap-x-4 tn:gap-x-2 w-[1048px] translate-x-[0] translate-y-[-50%] flex gap-x-[30px] absolute left-[30px] top-1/2">
            <div className="tn:gap-y-[50px] w-[509px] flex flex-col gap-y-[55px] min-w-0 mt-[30px] mb-[50px]">
              <div className="flex flex-col gap-y-[15px]">
                <h1 className="md:text-[44px] md:items-start xxs:text-[36px] font-medium text-[48px] leading-[1.22] font-Montserrat text-white">
                  BECOME A MEMBER
                </h1>
                <h3 className="md:text-[18px] md:items-start xxs:text-[16px] font-normal text-[20px] leading-[0.6] font-Montserrat text-white">
                  Join us to improve your athletic performance <br />
                  and achieve your goals.
                </h3>
              </div>

              <button className="flex justify-center font-semibold text-[14px] leading-[1.21] font-Montserrat text-white text-center bg-[rgb(186,82,237)] rounded-[18.5px] w-[143px] pt-2.5 pr-[30px] pb-2.5 pl-[30px] max-w-full">
                {/* TODO */}
                Get Started
              </button>
            </div>

            <img
              className="w-[509px] object-cover min-w-0"
              src={'/assets/d9d1686eb4581915876986b4bc60b618.png'}
              alt="alt text"
            />
          </div>

          <img
            className="w-[339px] h-[270px] translate-x-[0] translate-y-[-50%] absolute right-[38.99998474121094px] top-1/2"
            src={'/assets/a4e84c4e86e8540d60e132a980a14b69.png'}
            alt="alt text"
          />
          <img
            className="w-full object-cover relative"
            src={'/assets/af2afb17942e01ef2edac79ba547aa66.png'}
            alt="alt text"
          />
          <img
            className="w-[813px] h-[813px] absolute left-[-526.0000152587891px] top-[-506px]"
            src={'/assets/4e0b21e2cb5b85f04a019a250644e122.png'}
            alt="alt text"
          />
        </div>
      </div>
    </section>
  );
}

export default renderSection4;
