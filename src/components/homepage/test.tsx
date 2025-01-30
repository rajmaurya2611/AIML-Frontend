import { Button, Col, Row } from "antd";
import Motion from "../../assets/images/homepage/motion.png";
import Base from "../../assets/images/homepage/base.png";
import { DoubleRightOutlined } from "@ant-design/icons";
import "../../styles/image.scss";

const Test = () => {
    return (
        <Row className="bg-gradient-to-r from-transparent to-[#E6F4FF] w-full flex flex-col md:flex-row ">
            {/* Left Section - Text */}
            <Col flex={4} className="pl-4 md:pl-20">
                <div className="text-[#363A45] text-2xl md:text-4xl lg:text-6xl font-semibold md:mt-40">
                    Empowering Future with
                    <div>
                     <span className="text-[#F91B1B]">AI Solutions</span>
                    </div>
                </div>

            </Col>

            {/* Right Section - Images */}
            <Col flex={1} className="flex justify-end pr-8 md:pr-20 relative">
                {/* Base Image (Behind) */}
                <img src={Base} alt="Robot" className="w-3/6 md:w-6/6 lg:w-6/6 pt-4" />

                {/* Motion Image (Above Base) */}
                <img
                    src={Motion}
                    alt="Robot"
                    className="animate-up-down absolute top-0 w-3/6 md:w-3/6 lg:w-6/6 pt-4 z-10"
                />
            </Col>
        </Row>
    );
};

export default Test;
