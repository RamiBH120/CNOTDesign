import React from 'react';

function renderSection6(props) {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col w-[1081px] relative max-w-[85%] mt-[47px] mx-auto mb-[29px]">
        <img
          className="w-[430px] h-[424px] absolute right-[-366px] top-[-401px]"
          src={'/assets/5484fc25e4267ad85449008bfa817a50.svg'}
          alt="alt text"
        />

        <div className="flex flex-col gap-y-10 relative">
          <h1 className="md:text-[32px] md:items-start xxs:text-[30px] font-bold text-[36px] leading-[1.2] font-Montserrat text-white">
            CONTACT US
          </h1>

          <div
            className="flex flex-col bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat rounded-[40px] ml-px"
            style={{ '--src': `url(${'/assets/32d26e2d4c7df41c6ae5bab0b455a2a0.png'})` }}>
            <div className="sm:flex-col sm:gap-y-[30px] w-[93.98%] flex justify-between items-center gap-x-2.5 mx-auto">
              <div className="sm:w-full sm:min-w-[unset] flex flex-col w-[523px] relative min-w-0">
                <img
                  className="rounded-[40px_0px_0px_40px] w-full object-cover relative"
                  src={'/assets/546646b46f5ffa5d35954fa2316342c3.png'}
                  alt="alt text"
                />
                <img
                  className="w-[230px] h-[188px] absolute right-0 bottom-0"
                  src={'/assets/dd1a68d229ea63e94420bc482e549c9b.png'}
                  alt="alt text"
                />
              </div>

              <div className="sm:w-full sm:min-w-[unset] w-[426px] flex flex-col gap-y-5 min-w-0">
                <div className="tn:gap-x-2 flex gap-x-3.5">
                  <div className="flex flex-col bg-[rgba(255,255,255,0.047)] rounded-[5px] outline outline-[rgba(255,255,255,0.2)] outline-1 w-[206px] min-w-0">
                    <p className="sm:my-3 sm:mx-auto font-normal text-[15px] leading-[1.2] font-Montserrat text-[rgba(255,255,255,0.6)] tracking-[-0.15px] w-[82px] max-w-[85%] mt-3 mb-3 ml-3.5">
                      First Name
                    </p>
                  </div>

                  <div className="flex flex-col bg-[rgba(255,255,255,0.047)] rounded-[5px] outline outline-[rgba(255,255,255,0.2)] outline-1 w-[206px] min-w-0">
                    <p className="sm:my-3 sm:mx-auto font-normal text-[15px] leading-[1.2] font-Montserrat text-[rgba(255,255,255,0.6)] tracking-[-0.15px] w-20 max-w-[85%] mt-3 mb-3 ml-3.5">
                      Last Name
                    </p>
                  </div>
                </div>

                <div className="flex flex-col bg-[rgba(255,255,255,0.047)] rounded-[5px] outline outline-[rgba(255,255,255,0.2)] outline-1">
                  <p className="tn:mt-3 tn:mr-0 tn:mb-3 tn:ml-2 font-normal text-[15px] leading-[1.2] font-Montserrat text-[rgba(255,255,255,0.6)] tracking-[-0.15px] w-[43px] max-w-[85%] mt-3 mb-3 ml-3.5">
                    Email
                  </p>
                </div>

                <div className="flex flex-col bg-[rgba(255,255,255,0.047)] rounded-[5px] outline outline-[rgba(255,255,255,0.2)] outline-1">
                  <p className="tn:mt-3 tn:mr-0 tn:mb-3 tn:ml-2 font-normal text-[15px] leading-[1.2] font-Montserrat text-[rgba(255,255,255,0.6)] tracking-[-0.15px] w-[116px] max-w-[85%] mt-3 mb-3 ml-3.5">
                    Phone Number
                  </p>
                </div>

                <div className="flex flex-col bg-[rgba(255,255,255,0.047)] rounded-[5px] outline outline-[rgba(255,255,255,0.2)] outline-1">
                  <p className="md:mt-3 md:mr-0 md:mb-[150px] md:ml-3.5 xs:mt-3 xs:mr-0 xs:mb-20 xs:ml-3.5 tn:mt-3 tn:mr-0 tn:mb-[50px] tn:ml-2 font-normal text-[15px] leading-[1.2] font-Montserrat text-[rgba(255,255,255,0.6)] tracking-[-0.15px] w-[66px] max-w-[85%] mt-3 mb-[249px] ml-3.5">
                    Message
                  </p>
                </div>

                <button className="flex justify-center font-medium text-[15px] leading-[1.2] font-Montserrat text-white text-center tracking-[-0.15px] bg-[rgb(186,82,237)] rounded-[5px] pt-3 pr-2 pb-3 pl-2">
                  {/* TODO */}
                  Let’s Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default renderSection6;
