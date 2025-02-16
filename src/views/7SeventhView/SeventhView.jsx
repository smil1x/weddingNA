import styles from "./SeventhView.module.scss";

const SeventhView = () => {
    return (
        <div style={{height: 'auto', position: 'relative'}}>
            <img width={'100%'} style={{display: 'block'}} src={'other/dym.png'} alt=""/>
            <p className={styles.dym}>“В легких тает дым, и над заливом,<br/> Запомни ты меня таким,<br/>
                таким счастливым”</p>
        </div>
    )
}

export default SeventhView
