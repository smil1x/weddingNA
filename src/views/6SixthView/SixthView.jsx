import { Collapse, ConfigProvider, Flex } from "antd";
import styles from "./SixthView.module.scss";
import { DashLg, PlusLg } from "react-bootstrap-icons";


const SixthView = () => {

    const collapseIcon = (e) => {

        return e.isActive ? <DashLg size={18} style={{strokeWidth: 1, stroke: '#60824C'}}/> :
            <PlusLg size={18} style={{strokeWidth: 1, stroke: '#60824C'}}/>
    }

    const items = [
        {
            key: '1',
            label: 'Одежда',
            children: <div>
                <p>Предлагаем отдать предпочтение вечерним<br/> нарядам в пастельных или черных тонах,
                    избегая<br/> слишком
                    ярких цветов и белого.<br/>
                    Для девушек: Цветовая палитра – молочный,<br/> оттенки бежевого, нежно-желтый,<br/>
                    зелёный, черный.<br/>
                    Для мужчин: Костюмы, предпочтительно<br/>
                    черного цвета</p>
                    <Flex style={{width:'100%', margin: '10px 0 0 0'}} align='center' justify='center' gap={15}>
                        <div className={styles.color} style={{ border: '1px #FFFFFF solid', backgroundColor: '#F6EFDC' }}/>
                        <div className={styles.color} style={{backgroundColor: '#F1DFB1'}}/>
                        <div className={styles.color} style={{backgroundColor: '#C79C8B'}}/>
                        <div className={styles.color} style={{backgroundColor: '#2E4626'}}/>
                        <div className={styles.color} style={{backgroundColor: '#000000'}}/>
                    </Flex>
            </div>,
        },
        {
            key: '2',
            label: 'Макияж',
            children: <p>Дорогие девушки! Мы с нетерпением ждем<br/> встречи с вами на нашем особенном дне.<br/>
                Обращаем ваше внимание, что на месте<br/> проведения торжества не будет возможности<br/> воспользоваться
                услугами визажиста и стилиста.<br/>
                Поэтому мы рекомендуем вам подготовить<br/> макияж и прическу заранее, до трансфера<br/>
                на локацию. Мы уверены, что вы будете<br/> неотразимы и добавите еще больше красоты<br/>
                и радости в этот день.</p>,
        },
        {
            key: '3',
            label: 'Важно',
            children: <p>Пожалуйста, обрати внимание, что на нашем<br/> торжестве действует дресс-код.
                Мы просим<br/> воздержаться от кроссовок, маек и шорт.<br/> Благодарим за понимание и надеемся, что
                ты<br/>
                поддержишь
                атмосферу нашего праздника своим<br/> элегантным внешним видом!
            </p>,
        },
        {
            key: '4',
            label: 'Подготовка на месте',
            children: <p>Если тебе удобнее, ты можешь взять праздничные<br/> наряды с собой, а не надевать их
                сразу.<br/>
                На месте будет доступен утюг (хотя он всего один,<br/> поэтому, пожалуйста, учитывай это).<br/> Перед
                началом
                торжества у тебя будет<br/>
                примерно 30 минут, чтобы спокойно<br/>
                переодеться и подготовиться.</p>,
        },
    ];


    return (
        <div className={'view'}>
            <Flex vertical className={styles.container}>
                <h3>Дресс-код</h3>
                <p className={styles.desc}>Дорогой гость, нам будет очень приятно,<br/>
                    если ты поддержишь стиль и цвет нашей свадьбы<br/>
                    в своем наряде.</p>
                <ConfigProvider
                    theme={{
                        token: {
                            colorTextHeading: '#60824C',
                        },
                        components: {
                            Collapse: {
                                headerPadding: 5,
                                contentPadding: 0,
                                textAlign: 'start',
                            },
                        },
                    }}
                >
                    <Collapse
                        className={styles.collapse}
                        items={items}
                        ghost
                        expandIcon={collapseIcon}
                        expandIconPosition = 'end'
                    />
                </ConfigProvider>
            </Flex>
        </div>
    )
}

export default SixthView;