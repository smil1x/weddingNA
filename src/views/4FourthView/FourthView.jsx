import styles from './FourthView.module.scss';

const FourthView = () => {
    return (
        <div className={'view'}>
            <div style={{height:'auto', position:'relative'}}>
                <img width={'100%'} src={'other/spb-waw.png'} alt=""/>
                <d className={styles.spbWaw}>Питер - Варшава</d>
            </div>
        </div>
    )
}

export default FourthView