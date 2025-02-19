import styles from './NinthView.module.scss'
import { Flex } from "antd";
import Sticker from "@/components/Sticker/Sticker.jsx";
import classNames from "classnames";

const NinthView = () => {
    return <div className={classNames('view', styles.container)}>
        <h3>Второй день свадьбы</h3>
        <p style={{width: '335px'}}>
            Свадьба будет продолжаться 16 мая, мы будем<br/> рады видеть тебя на неформальном празднике<br/>
            в Новополоцке. Атмосфера будет легкой<br/>
            и непринужденной, дресс-код — свободный.<br/> Место и время мы уточним чуть позже,<br/>
            но уже сейчас хотим сказать, что второй день —<br/>
            это пространство для творчества!<br/>
            Приветствуются любые идеи, включая<br/> организацию необычных конкурсов.<br/>
            Если у тебя есть креативные задумки, смело<br/> воплощай их в жизнь.<br/> Будем ждать тебя, чтобы продолжить<br/>
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