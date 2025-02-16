import styles from './NinthView.module.scss'
import { Flex } from "antd";
import Sticker from "@/components/Sticker/Sticker.jsx";
import classNames from "classnames";

const NinthView = () => {
    return <div className={classNames('view', styles.container)}>
        <h3>Второй день свадьбы</h3>
        <p>
            Свадьба будет продолжаться 16 мая, мы будем рады видеть тебя на неформальном празднике
            в Новополоцке. Атмосфера будет легкой
            и непринужденной, дресс-код — свободный. Место и время мы уточним чуть позже,
            но уже сейчас хотим сказать, что второй день —
            это пространство для творчества!
            Приветствуются любые идеи, включая организацию необычных конкурсов.
            Если у тебя есть креативные задумки, смело воплощай их в жизнь. Будем ждать тебя, чтобы продолжить
            праздник вместе!
        </p>
        <Flex className={styles.photos}>
            <div style={{marginRight: 80}}>
                <Sticker src={'other/sticker4.png'} deg={-9}/>
            </div>
            <div style={{marginTop: 25}}>
                <Sticker src={'other/sticker5.png'} deg={15}/>
            </div>
            <img className={styles.line12} src={'lines/line12.png'} alt=''/>
        </Flex>
    </div>
}

export default NinthView