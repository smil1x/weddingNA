import { Flex } from "antd";
import styles from "./SecondView.module.scss";
import TargetDate from "@/components/TargetDate/TargetDate.jsx";

const SecondView = () => {
    return (
        <Flex className={'view'} >
            <div className={styles.content}>
                <h3>Дорогой гость!</h3>
                <p>С огромной радостью приглашаем тебя на самое главное торжество в нашей жизни: нашу свадьбу!
                    Если ты получил данное приглашение,
                    то очень дорог для нас и мы будем невероятно рады видеть тебя на празднике нашей любви!
                </p>
                <TargetDate/>
            </div>
        </Flex>
    )
}

export default SecondView;