import React from 'react';

function renderSection7(props) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col border-solid border-[rgba(255,255,255,0.498)] border-t-[1px] border-r-[0px] border-b-[0px] border-l-[0px] w-full max-w-[1440px] mt-[33px] mx-auto">
        <div className="md:flex-col md:items-center md:gap-y-[30px] tn:mt-10 tn:mx-auto tn:mb-[50px] w-[1080px] flex justify-between gap-x-2.5 max-w-[85%] mt-10 mx-auto mb-20">
          <div className="md:w-full md:min-w-[unset] xxs:flex-col xxs:items-center xxs:gap-y-[30px] w-[630px] flex justify-between gap-x-2.5 min-w-0">
            <div className="xxs:w-full xxs:min-w-[unset] xxs:m-0 w-[127px] flex flex-col items-center gap-y-px min-w-0 mb-[57px]">
              <h1 className="md:text-[36px] md:items-start xxs:text-[32px] font-semibold text-[40px] leading-[1.22] font-Montserrat text-white">
                CNOT
              </h1>
              <h2 className="md:text-[22px] md:items-start xxs:text-[20px] font-medium text-[24px] leading-[1.2] font-Montserrat text-white">
                PERFORM
              </h2>
            </div>

            <div className="xxs:w-full xxs:min-w-[unset] w-[154px] flex flex-col min-w-0">
              <div className="font-bold text-[14px] leading-[1.21] font-Montserrat text-white">Get Help</div>
              <div className="font-normal text-[14px] leading-[1.21] font-Montserrat text-white mt-5">Contact Us</div>
              <div className="font-normal text-[14px] leading-[1.21] font-Montserrat text-white mt-2.5">
                Terms and Conditions
              </div>
              <div className="font-normal text-[14px] leading-[1.21] font-Montserrat text-white mt-2.5">
                Cookie Policy
              </div>
              <div className="font-normal text-[14px] leading-[1.21] font-Montserrat text-white mt-2.5">
                Privacy Policy
              </div>
            </div>

            <div className="xxs:w-full xxs:min-w-[unset] xxs:m-0 w-[149px] flex flex-col min-w-0 mb-[54px]">
              <div className="font-bold text-[14px] leading-[1.21] font-Montserrat text-white">About Cnot Perform</div>
              <div className="font-normal text-[14px] leading-[1.21] font-Montserrat text-white mt-5">News</div>
              <div className="font-normal text-[14px] leading-[1.21] font-Montserrat text-white mt-2.5">Events</div>
            </div>
          </div>

          <div className="md:w-full md:min-w-[unset] md:m-0 xs:gap-x-4 tn:gap-x-2 w-[156px] flex gap-x-5 min-w-0 mb-[111px]">
            <img className="w-6 h-6 object-cover" src={'/assets/dcd5fa079328ddf852a2708d910e28db.svg'} alt="alt text" />
            <img className="w-6 h-6 object-cover" src={'/assets/f53d6239ffd5d43982db47c8faa8410b.svg'} alt="alt text" />
            <img className="w-6 h-6 object-cover" src={'/assets/3642d162a814e6ba5209d57e05f6b7f2.svg'} alt="alt text" />
            <img className="w-6 h-6 object-cover" src={'/assets/48e466cba82ea461b39fa5f963f11d70.svg'} alt="alt text" />
          </div>
        </div>
      </div>

      <div className="tn:mt-[50px] tn:mx-auto tn:mb-0 flex flex-col border-solid border-[rgba(255,255,255,0.498)] border-t-[1px] border-r-[0px] border-b-[0px] border-l-[0px] w-full max-w-[1440px] mt-[73px] mx-auto">
        <div className="md:flex-col md:items-center md:gap-y-[30px] w-[1080px] flex justify-between gap-x-2.5 max-w-[85%] my-5 mx-auto">
          <div className="md:w-full md:min-w-[unset] xs:flex-col xs:items-center xs:gap-y-[30px] w-[442px] flex justify-between gap-x-2.5 min-w-0">
            <div className="xs:w-full xs:min-w-[unset] tn:gap-x-2 w-[87px] flex gap-x-2.5 min-w-0">
              <img
                className="w-6 h-6 object-cover"
                src={'/assets/f50ff28410f91dd9d27044ce0d97863b.svg'}
                alt="alt text"
              />
              <div className="font-bold text-[14px] leading-[1.21] font-Montserrat text-white mt-1 mb-[3px]">
                Tunisie
              </div>
            </div>

            <div className="xs:w-full xs:m-0 font-normal text-[14px] leading-[1.21] font-Montserrat text-white tracking-[-0.2px] mt-1 mb-[3px]">
              © 2024 Cnot Perform, Inc. All Rights Reserved
            </div>
          </div>

          <div className="md:w-full md:min-w-[unset] md:m-0 xs:gap-x-4 tn:gap-x-2 w-[273px] flex gap-x-5 min-w-0 mt-1 mb-[3px]">
            <div className="font-normal text-[14px] leading-[1.21] font-Montserrat text-white">Guides</div>
            <div className="font-normal text-[14px] leading-[1.21] font-Montserrat text-white">Terms of Sale</div>
            <div className="font-normal text-[14px] leading-[1.21] font-Montserrat text-white">Terms of Use</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection7;
