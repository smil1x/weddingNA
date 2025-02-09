import styles from './FourthView.module.scss';

const FourthView = () => {
    return (
        <div className={'view'}>
            <div style={{height:'auto', position:'relative'}}>
                <img width={'100%'} src={'other/spb-waw.png'} alt=""/>
                <p className={styles.spbWaw}>Питер - Варшава</p>
            </div>
        </div>
    )
}

export default FourthView