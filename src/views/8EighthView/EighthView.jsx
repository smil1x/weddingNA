import { Flex } from "antd";
import styles from "./EighthView.module.scss";
import classNames from "classnames";

const EighthView = () => {
    return <Flex className={classNames('view', styles.container)} vertical align='center'>
        <h3>Пожелания</h3>
        <Flex vertical gap={10} style={{paddingBottom: 60}}>
            <p>Пожалуйста, не дари нам цветы, мы не успеем<br/> насладиться их красотой до отъезда.</p>
            <p>Вместо них возьми бутылку твоего любимого<br/> алкогольного напитка с пожеланием на какой<br/> повод нам
                ее открыть.</p>
            <p>Мы очень ценим твою заботу и внимание и будем рады любому подарку!<br/>
                Не важно, в какой конверт ты его упакуешь :)</p>
        </Flex>
    </Flex>

}

export default EighthView