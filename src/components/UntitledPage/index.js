import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import renderSection1 from './section1';
import renderSection2 from './section2';
import renderSection3 from './section3';
import renderSection4 from './section4';
import renderSection5 from './section5';
import renderSection6 from './section6';
import renderSection7 from './section7';

function UntitledPage(props) {
  return (
    <main
      className={`untitled-page bg-[image:var(--src)] bg-[center_center] bg-cover bg-no-repeat flex flex-col overflow-hidden ${props.className ||
        ''}`}
      style={{ '--src': `url(${'/assets/e47cd8891a6f121dcf7f164e38fbabc3.png'})` }}>
      {renderSection1(props)}
      {renderSection2(props)}
      {renderSection3(props)}
      {renderSection4(props)}
      {renderSection5(props)}
      {renderSection6(props)}
      {renderSection7(props)}
    </main>
  );
}

UntitledPage.propTypes = {
  className: PropTypes.string
};

export default UntitledPage;
