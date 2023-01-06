import MasterLayout from "@layouts/masterLayout";
import { Button, Space } from "antd";
import { BiArrowBack, VscLocation } from "react-icons/all";

const home = () => (
  <MasterLayout>
    <Space>
      <BiArrowBack className="text-[28px]" />
      <h2 className="font-medium text-[28px]">N5: Tiếng Nhật hằng ngày</h2>
      <Button className="flex btn-location">
        <img className="icon-location" src="image/image-17.png"/> Lộ trình
      </Button>
    </Space>
  </MasterLayout>
);
export default home;
