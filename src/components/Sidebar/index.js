import React from 'react';
import './index.scss';

import paperLogo from '../../assets/svgs/paperlogowhite.svg';
import layerOrnament from '../../assets/images/layer-ornament.png';
import data from './data';
import SidebarMenu from '../SidebarMenu';

const Sidebar = () => {
  const menus = data.map((menu, index) => (
    <SidebarMenu key={index} title={menu.title} logo={menu.logo} />
  ));

  return (
    <div>
      <div className="sidebar-fill"></div>
      <div className="sidebar-component">
        <div className="sidebar-container">
          <img
            className="layer-ornament"
            src={layerOrnament}
            alt="paper-logo"
          />
          <img className="paper-logo" src={paperLogo} alt="paper-logo" />
          {menus}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
