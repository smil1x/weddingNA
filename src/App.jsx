import { Button, ConfigProvider, Flex, Modal } from "antd";
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
import { useEffect, useState } from "react";
import styles from './App.module.scss'
import { useParams } from "react-router-dom";
import { getBrowser, getGuest, getOS } from "./utils/index.js";


function AppWrapper() {
    const [guest, setGuest] = useState({});
    const [showVideo, setShowVideo] = useState(false);
    const { id } = useParams();

    const postInfo = async (data) => {

        try {
            const userInfo = {
                device: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? "Mobile" : "Desktop",
                os: getOS(),
                browser: getBrowser(),
                referrer: document.referrer || "Прямой заход"
            };

            const location = await fetch("https://ipwho.is/")
                .then(response => response.json())

            const formData = new URLSearchParams();

            formData.append("entry.813407084", data.systemName || ''); //Системное имя
            formData.append("entry.330166079", location.country || '');
            formData.append("entry.1968317996", location.city || '');
            formData.append("entry.1999043297", userInfo.device || '');
            formData.append("entry.162721837", userInfo.os || '');
            formData.append("entry.2058170891", userInfo.browser || '');
            formData.append("entry.794485388", userInfo.referrer);

            await fetch("https://docs.google.com/forms/d/e/1FAIpQLSe-PTjUxxxqdLHhTkPYc4zAPV4GsYj3tJGLE-ua4wE3NiDWoA/formResponse", {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: formData.toString()
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const data = getGuest(id);
        setGuest(data);
        postInfo(data)

        if(data.id) {
            setShowVideo(true)
        }
    }, [id]);


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
                    },
                    Modal: {
                        contentBg: '#F8F1E1',
                        footerBg: '#F8F1E1',
                        headerBg: '#F8F1E1'
                    },
                }
            }}
        >

            <Flex vertical justify={'center'} align={'center'}
                  style={{width: '100%', height: '100%', backgroundColor: '#e9e9e9'}}>
                <div className={'view'}>
                    <img className={styles.line1} src={'lines/line1.png'} alt=''/>
                    <img className={styles.line2} src={'lines/line2.png'} alt=''/>
                    <img className={styles.line3} src={'lines/line3.png'} alt=''/>
                    <img className={styles.line4} src={'lines/line3.png'} alt=''/>
                    <img className={styles.line5} src={'lines/line5.png'} alt=''/>
                    <img className={styles.line6} src={'lines/line6.png'} alt=''/>
                    <img className={styles.line7} src={'lines/line6.png'} alt=''/>
                    <img className={styles.line8} src={'lines/line8.png'} alt=''/>
                    <FirstView/>
                    <SecondView/>
                    <ThirdView/>
                    <FourthView/>
                </div>
                <div className={'view'}>
                    <img className={styles.line8} src={'lines/line8.png'} alt=''/>
                    <FifthView/>
                </div>
                <div className={'view'}>
                    <SixthView/>
                </div>
                <div className={'view'}>
                    <img className={styles.line9} src={'lines/line9.png'} alt=''/>
                    <img className={styles.line10} src={'lines/line9.png'} alt=''/>
                    <img className={styles.line11} src={'lines/line11.png'} alt=''/>
                    <img className={styles.line13} src={'lines/line13.png'} alt=''/>
                    <img className={styles.line14} src={'lines/line14.png'} alt=''/>
                    <img className={styles.line15} src={'lines/line15.png'} alt=''/>
                    <img className={styles.line16} src={'lines/line16.png'} alt=''/>
                    <SeventhView/>
                    <EighthView/>
                    <NinthView/>
                    <TenthView/>
                    <CounterView/>
                    <Team/>
                </div>


            </Flex>
            <Modal
                className={'customModal'}
                open={showVideo}
                closable={false}
                footer={null}
                destroyOnClose
            >
                <Flex vertical align={'center'}>
                    <img className={'modal-line'} src={'other/modal-line.png'} alt={''}/>
                    <h3>{guest.greeting}</h3>
                    <iframe className={'iframe'}
                            src={guest.link}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

                    </iframe>
                    <Button
                        onClick={() => setShowVideo(false)}
                        style={{width: 220, height: 40, marginTop: 20, marginBottom: 40}}
                    >
                        Узнать детали
                    </Button>
                </Flex>
            </Modal>
        </ConfigProvider>

    )
}

export default AppWrapper