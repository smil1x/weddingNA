import { Flex } from "antd";
import styles from "./FifthView.module.scss";
import classNames from "classnames";
import { planTime } from "@/constants/constatnts.js";
import Sticker from "@/components/Sticker/Sticker.jsx";

const FifthView = () => {
    return (
        <div className={classNames('view', styles.container)}>
            <h3>Тайминг</h3>
            <Flex align='center' style={{width: '100%', marginBottom: 10}}>
                <Flex className={styles.firstHalf}>
                    <PlanItem time={planTime.npDeparture}>
                        <p className={styles.title}>Выезд из г. Новополоцк</p>
                    </PlanItem>
                    <PlanItem time={planTime.minskDeparture}>
                        <p className={styles.title}>Выезд из г. Минск</p>
                    </PlanItem>
                    <PlanItem time={planTime.accommodation}>
                        <p className={styles.title}>Расселение.<br/> Сбор гостей на площадке</p>
                    </PlanItem>
                </Flex>
                <Flex vertical gap={40} style={{marginLeft: 80}}>
                    <Sticker src={'other/sticker1.png'} deg={7}/>
                    <Sticker src={'other/sticker2.png'} deg={9}/>
                </Flex>
            </Flex>
            <Flex align='center'>
                <Flex vertical>
                    <Sticker src={'other/sticker3.png'} deg={-9}/>
                </Flex>
                <Flex className={styles.secondHalf}>
                    <PlanItem time={planTime.ceremony}>
                        <p className={styles.title}>Церемония</p>
                    </PlanItem>
                    <PlanItem time={planTime.banquet}>
                        <p className={styles.title}>Банкет</p>
                    </PlanItem>
                    <PlanItem time={planTime.end}>
                        <p className={styles.title}>Завершение банкета.<br/>Выезд домой</p>
                    </PlanItem>
                </Flex>
            </Flex>
        </div>
    )
}

export default FifthView

// eslint-disable-next-line react/prop-types
const PlanItem = ({time, children}) => {
    return <Flex vertical style={{width: 'auto'}}>
        <p className={styles.time}>{time}</p>
        {children}
    </Flex>
}