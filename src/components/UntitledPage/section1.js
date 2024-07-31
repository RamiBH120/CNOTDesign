import React from 'react';

function renderSection1(props) {
  return (
    <section className="lg:flex-col lg:gap-y-[30px] border-solid border-[rgba(255,255,255,0.098)] border-t-[0px] border-r-[0px] border-b-[1px] border-l-[0px] flex items-center gap-x-[426px]">
      <div className="lg:w-full lg:min-w-[unset] md:my-0 md:mx-auto tn:flex-col tn:gap-y-[30px] tn:gap-x-2 w-[618px] flex justify-between items-center gap-x-2.5 min-w-0 max-w-[618px] ml-20">
        <div className="tn:w-full tn:min-w-[unset] w-[70px] flex flex-col min-w-0">
          <h3 className="md:text-[18px] md:items-start xxs:text-[16px] tn:mt-0 tn:mr-2 tn:mb-0 tn:ml-0 font-bold text-[20px] leading-[1.2] font-Montserrat text-white mr-2.5">
            CNOT
          </h3>
          <div className="font-black text-[13px] leading-[1.23] font-Montserrat text-white">PERFORM</div>
        </div>

        <div className="xxs:flex-col xxs:gap-y-[30px] tn:w-full tn:min-w-[unset] w-[488px] flex justify-between items-center gap-x-2.5 min-w-0">
          <div className="xxs:w-full xxs:min-w-[unset] flex flex-col border-solid border-[rgb(186,82,237)] border-t-[0px] border-r-[0px] border-b-2 border-l-[0px] w-[86px] min-w-0">
            <div className="xs:my-[30px] xs:mx-4 tn:my-[30px] tn:mx-2 flex justify-center font-semibold text-[14px] leading-[1.2] font-Montserrat text-[rgb(186,82,237)] text-center my-[30px] mx-5">
              HOME
            </div>
          </div>

          <div className="xxs:w-full font-semibold text-[14px] leading-[1.2] font-Montserrat text-white">ABOUT US</div>
          <div className="xxs:w-full font-semibold text-[14px] leading-[1.2] font-Montserrat text-white">SERVICES</div>
          <div className="xxs:w-full font-semibold text-[14px] leading-[1.2] font-Montserrat text-white">
            CONTACT US
          </div>
        </div>
      </div>

      <div className="lg:w-full lg:min-w-[unset] xs:gap-x-4 tn:gap-x-2 w-[316px] flex items-center gap-x-5 min-w-0 max-w-[316px]">
        <div className="font-semibold text-[14px] leading-[1.21] font-Montserrat text-white">SIGN IN</div>
        <button className="flex justify-center font-semibold text-[14px] leading-[1.21] font-Montserrat text-white text-center bg-[rgb(186,82,237)] rounded-[18.5px] pt-2.5 pr-[30px] pb-2.5 pl-[30px] min-w-[160px]">
          {/* TODO */}
          GET STARTED
        </button>
      </div>
    </section>
  );
}

export default renderSection1;
