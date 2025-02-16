import { Flex } from "antd";
import styles from './TargetDate.module.scss'
import BigSticker from "@/components/BigSticker/BigSticker.jsx";

const TargetDate = () => {

    return (
        <BigSticker>
            <Flex gap={20} justify="center" style={{padding: '11px 0 30px 0'}}>
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
                        <img width={42} src={'other/heart.png'} alt={''}/>
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
        </BigSticker>

    )
}
export default TargetDate;