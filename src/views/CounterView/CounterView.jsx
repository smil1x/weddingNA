import { Flex } from "antd";
import styles from "./CounterView.module.scss";
import BigSticker from "@/components/BigSticker/BigSticker.jsx";
import { weddingDate } from "@/constants/constatnts.js";
import { useEffect, useState } from "react";

const calculateTimeLeft = () => {
    const difference = new Date(weddingDate) - new Date();
    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };
};

const CounterView = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);





    return <div className={'view'}>
       <Flex className={styles.container}>
           <h3>До свадьбы осталось</h3>
           <BigSticker key={timeLeft.seconds}>
               <Flex align='center' justify='center' style={{width: 240, padding: '5px 0'}}>
                   <Flex className={styles.item}>
                       <div className={styles.number}>{timeLeft.days}</div>
                       <div className={styles.label}>дней</div>
                   </Flex>
                   <Flex className={styles.item}>
                       <div className={styles.number}>{timeLeft.hours}</div>
                       <div className={styles.label}>часов</div>
                   </Flex>
                   <Flex className={styles.item}>
                       <div className={styles.number} key={timeLeft.minutes}>{timeLeft.minutes}</div>
                       <div className={styles.label}>минут</div>
                   </Flex>
                   <Flex className={styles.item} key={timeLeft.seconds}>
                       <div className={styles.number}>{timeLeft.seconds}</div>
                       <div className={styles.label}>секунд</div>
                   </Flex>
               </Flex>
           </BigSticker>
       </Flex>
    </div>
}

export default CounterView;