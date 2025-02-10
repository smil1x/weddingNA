import styles from "./Sticker.module.scss";

// eslint-disable-next-line react/prop-types
const Sticker = ({src, deg}) => {
    return (
        <div className={styles.container} style={{transform: `rotate(${deg}deg)`}}>
            <img src={src} width={81} alt="" />
            <img className={styles.sticker} src={'other/sticker.png'} alt="" />
        </div>
    )
}

export default Sticker