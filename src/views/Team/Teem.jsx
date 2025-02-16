import { Flex } from "antd";
import styles from "./Teem.module.scss";

const leadLink = 'https://www.instagram.com/hraputski/'
const orgLink = 'https://www.instagram.com/sereda_weddings/'

const Team = () => {
    const navToOrg = () => {
        window.open(orgLink, '_blank');
    }

    const navToLead = () => {
        window.open(leadLink, '_blank');
    }



    return <div className={'view'}>
        <Flex className={styles.container}>
            <h3>Наша команда</h3>
            <Flex className={styles.item}>
                <p>Ведущий</p>
                <p style={{position: 'relative'}}>
                    Андрей Храпуцкий / <span onClick={navToLead} className={styles.link}>hraputski</span>
                    <img className={styles.pointerToLead} src={'other/pointerToLead.png'} alt="arrow"/>
                </p>
            </Flex>
            <Flex className={styles.item}>
                <p>Организатор</p>
                <p style={{position: 'relative'}}>
                    Леся Середа / <span onClick={navToOrg} className={styles.link}>sereda<span
                    className={styles.separator}>_</span>weddings</span>
                    <img className={styles.pointerToOrg} src={'other/pointerToOrg.png'} alt="arrow"/>
                </p>
            </Flex>
        </Flex>
        <img width={'100%'} src={'other/withLove.png'} alt="withLove"/>
    </div>
}

export default Team;
