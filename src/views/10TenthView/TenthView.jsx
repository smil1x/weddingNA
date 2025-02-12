import { Flex } from "antd";
import styles from "./TenthView.module.scss";

const TenthView = () => {
    return <div className={'view'}>
        <Flex className={styles.container} vertical align='center'>
            <h3>Анкета гостя</h3>
            <p>Просим тебя подтвердить свое присутствие
                и заполнить анкету гостя до 1 апреля 2025</p>
        </Flex>
    </div>
}

export default TenthView