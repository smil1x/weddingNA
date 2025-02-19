import { Flex } from "antd";
import styles from "./SecondView.module.scss";
import TargetDate from "@/components/TargetDate/TargetDate.jsx";

const SecondView = () => {
    return (
        <div className={'view'}>
            <Flex style={{zIndex: 20}} >
                <div className={styles.content}>
                    <h3>Дорогой гость!</h3>
                    <p className={styles.text}>С огромной радостью приглашаем тебя на самое главное торжество в нашей жизни: нашу свадьбу!
                        Если ты получил данное приглашение,
                        то очень дорог для нас и мы будем невероятно рады видеть тебя на празднике нашей любви!
                    </p>
                    <TargetDate/>
                    <div style={{width:'100%', position:'relative'}}>
                        <img className={styles.homestead} src={'other/homestead.png'} alt={''}/>
                        <img className={styles.homesteadLogo} src={'other/homestead-logo.png'} alt={''}/>
                    </div>
                </div>
            </Flex>
        </div>

    )
}

export default SecondView;