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
            children: <p>Предлагаем отдать предпочтение вечерним нарядам в пастельных или черных тонах,
                вместо ярких цветов и белого.
                Мужчинам предлагаем остановиться на костюмах, предпочтительно черного цвета.</p>,
        },
        {
            key: '2',
            label: 'Макияж',
            children: <p>Дорогие девушки! Мы с нетерпением ждем встречи с вами на нашем особенном дне.
                Обращаем ваше внимание, что на месте проведения торжества не будет возможности воспользоваться услугами визажиста и стилиста.
                Поэтому мы рекомендуем вам подготовить макияж и прическу заранее, до трансфера
                на локацию. Мы уверены, что вы будете неотразимы и добавите еще больше красоты
                и радости в этот день.</p>,
        },
        {
            key: '3',
            label: 'Важно',
            children: <p>Пожалуйста, обрати внимание, что на нашем торжестве действует дресс-код.
                Мы просим воздержаться от кроссовок, маек и шорт. Благодарим за понимание и надеемся, что ты поддержишь атмосферу нашего праздника своим элегантным внешним видом!
            </p>,
        },
        {
            key: '4',
            label: 'Важно',
            children: <p>Если тебе удобнее, ты можешь взять праздничные наряды с собой, а не надевать их сразу.
                На месте будет доступен утюг (хотя он всего один, поэтому, пожалуйста, учитывай это). Перед началом торжества у тебя будет
                примерно 30 минут, чтобы спокойно
                переодеться и подготовиться.</p>,
        },
    ];


    return (
        <div className={'view'}>
            <Flex vertical className={styles.container}>
                <h3>Дресс-код</h3>
                <p className={styles.desc}>Дорогой гость, нам будет очень приятно,
                    если ты поддержишь стиль и цвет нашей свадьбы
                    в своем наряде.</p>
                <ConfigProvider
                    theme={{
                        token: {
                            colorTextHeading: '#60824C',
                        },
                        components: {
                            Collapse: {
                                headerPadding: 0,
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