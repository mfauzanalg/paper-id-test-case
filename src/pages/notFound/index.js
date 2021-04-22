import './index.scss';

import paperLogo from '../../assets/svgs/paperlogowhite.svg';
import notFound from '../../assets/svgs/404_green.svg';

const NotFound = () => {
  return (
    <div className="not-found-page-container">
      <div className="not-found-container">
        <img src={notFound} alt="" className="not-found" />
      </div>
      <img className="paper-logo" src={paperLogo} alt="paper-logo" />
    </div>
  );
};

export default NotFound;
