import { Flex } from "antd";
import styles from "./FirstView.module.scss";

const FirstView = () => {
    return <Flex className={styles.container} >
        <div className={styles.photo}>
            <div className={styles.content}>
                <span className={styles.header}>невероятная история любви</span>
                <Flex vertical justify={'center'} align={'center'} className={styles.footer}>
                    <h3>Аня & Никита</h3>
                    <p>15.05.2025</p>
                </Flex>
            </div>
        </div>
    </Flex>
}

export default FirstView