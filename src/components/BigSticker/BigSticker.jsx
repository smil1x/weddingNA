import styles from "./BigSticker.module.scss";

// eslint-disable-next-line react/prop-types
const BigSticker = ({children}) => {
    return <div className={styles.container}>
        <img className={styles.topTape} src={'other/top-tape.png'} alt={''}/>
        {children}
        <img className={styles.botTape} src={'other/bottom-tape.png'} alt={''}/>
    </div>
}

export default BigSticker