import { ConfigProvider, Flex } from "antd";
import FirstView from "./views/FirstView/FirstView.jsx";
import './index.scss'
import SecondView from "@/views/SecondView/SecondView.jsx";
import ThirdView from "@/views/ThirdView/ThirdView.jsx";
import FourthView from "@/views/FourthView/FourthView.jsx";
import FifthView from "@/views/FifthView/FifthView.jsx";
import SixthView from "@/views/SixthView/SixthView.jsx";

function App() {

    return (
        <ConfigProvider
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
            </Flex>
        </ConfigProvider>

    )
}

export default App
