import { Button, Flex } from "antd";
import classNames from "classnames";
import styles from "./ThirdView.module.scss";
import { locationLink } from "@/constants/constatnts.js";

const ThirdView = () => {
    const navToMap = () => {
        window.open(locationLink, '_blank');
    }


    return (
        <Flex className={classNames('view', styles.container)}>
            <h3>Локация</h3>
            <p className={styles.location}>
                Усадебно-парковый комплекс Богдановичей “Двор Стайки”.
                Беларусь, Минская область,
                Вилейский район, д. Стайки.<br/>
                Расстояние от Новополоцка — 200 км.
                Расстояние от Минска - 68 км.
            </p>
            <Button onClick={navToMap} style={{padding: '11px 41px', height: 'auto'}}>
                Посмотреть на карте
            </Button>
            <p className={styles.locationApologies}>Хотим заранее уточнить, что на нашей локации
                не предусмотрено проживание. Мы приносим извинения за возможные неудобства
                и благодарим тебя за понимание. Чтобы сделать твой день максимально комфортным,
                мы организовали трансфер из Новополоцка
                и Минска до локации, а также обратно.
                Ты можешь воспользоваться трансфером
                по желанию, указав это в анкете.</p>
        </Flex>
    )
}

export default ThirdView