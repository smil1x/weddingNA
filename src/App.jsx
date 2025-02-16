import { App, ConfigProvider, Flex } from "antd";

import './index.scss'
import FirstView from "@/views/1FirstView/FirstView.jsx";
import SecondView from "@/views/2SecondView/SecondView.jsx";
import ThirdView from "@/views/3ThirdView/ThirdView.jsx";
import FourthView from "@/views/4FourthView/FourthView.jsx";
import FifthView from "@/views/5FifthView/FifthView.jsx";
import SixthView from "@/views/6SixthView/SixthView.jsx";
import SeventhView from "@/views/7SeventhView/SeventhView.jsx";
import EighthView from "@/views/8EighthView/EighthView.jsx";
import NinthView from "@/views/9NinthView/NinthView.jsx";
import TenthView from "@/views/10TenthView/TenthView.jsx";
import CounterView from "@/views/CounterView/CounterView.jsx";
import Team from "@/views/Team/Teem.jsx";


function AppWrapper() {

    return (
        <ConfigProvider
            message={{
                duration: 3,
                maxCount: 3,
            }}
            theme={{
                token: {
                    fontFamily: 'Palatino',
                    colorPrimary: '#F8F1E1'
                },
                components: {
                    Button: {
                        borderColorDisabled: 'transparent',
                        colorBgContainer: '#60824C',
                        colorText: '#F8F1E1',
                        fontSize: '14px',
                        borderRadius: 0,
                    }
                }
            }}
        >

            <Flex vertical justify={'center'} align={'center'}
                  style={{width: '100%', height: '100%', backgroundColor: '#e9e9e9'}}>
                <FirstView/>
                <SecondView/>
                <ThirdView/>
                <FourthView/>
                <FifthView/>
                <SixthView/>
                <SeventhView/>
                <EighthView/>
                <NinthView/>
                <TenthView/>
                <CounterView/>
                <Team/>
            </Flex>

        </ConfigProvider>

    )
}

export default AppWrapper
