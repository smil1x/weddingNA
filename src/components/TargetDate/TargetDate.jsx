import { Flex } from "antd";
import styles from './TargetDate.module.scss'

const TargetDate = () => {

    return (
        <div className={styles.container}>
            <img className={styles.topTape} src={'other/top-tape.png'} alt={''}/>
            <Flex gap={20} justify="center">
                <Flex className={styles.item}>
                    <p>ПН</p>
                    <h3>12</h3>
                </Flex>
                <Flex className={styles.item}>
                    <p>ВТ</p>
                    <h3>13</h3>
                </Flex>
                <Flex className={styles.item}>
                    <p>СР</p>
                    <h3>14</h3>
                </Flex>
                <Flex className={styles.item}>
                    <p>ЧТ</p>
                    <h3>15</h3>
                    <Flex className={styles.heart}>
                        <img src={'other/heart.png'} alt={''}/>
                        <p>Май</p>
                    </Flex>
                </Flex>
                <Flex className={styles.item}>
                    <p>ПТ</p>
                    <h3>16</h3>
                </Flex>
                <Flex className={styles.item}>
                    <p>СБ</p>
                    <h3>17</h3>
                </Flex>
                <Flex className={styles.item}>
                    <p>ВС</p>
                    <h3>18</h3>
                </Flex>
            </Flex>
            <img className={styles.botTape} src={'other/bottom-tape.png'} alt={''}/>
        </div>

    )
}
export default TargetDate;