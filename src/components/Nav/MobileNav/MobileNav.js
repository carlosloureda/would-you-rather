import React from "react";
import { Button, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import NavLogo from "../NavLogo";
import UserInfo from "../UserInfo";
import MainNav from "../MainNav";

import "./MobileNav.scss";

import { users } from "../../../api/api";

const MobileNav = () => {
  const [visible, setVisible] = React.useState(false);

  const onOpenDrawer = () => setVisible(true);
  const onCloseDrawer = () => setVisible(false);

  return (
    <nav className="mobile-nav">
      <NavLogo />
      <div>
        <Button type="primary" onClick={onOpenDrawer}>
          <MenuOutlined />
        </Button>
        <Drawer
          title={<UserInfo user={users["alicethomas"]} isMobile={true} />}
          placement="right"
          closable={false}
          onClose={onCloseDrawer}
          visible={visible}
          drawerStyle={{ backgroundColor: "#001529" }}
        >
          <MainNav mode={"vertical"} />
        </Drawer>
      </div>
    </nav>
  );
};

export default MobileNav;
