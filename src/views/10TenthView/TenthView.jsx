import { Button, ConfigProvider, Flex, Form, message, Select } from "antd";
import styles from "./TenthView.module.scss";
import Input from "antd/es/input/Input.js";
import { useState } from "react";
import EditableSelect from "@/components/EditableSelect/EditableSelect.jsx";

const nmPs = 'Имя и фамилия'
const phPs = 'Телефон для связи'
const alPs = 'Пожелания по меню и аллергии'
const pOnePs = 'Имя и фамилия спутника(цы)'

const TenthView = () => {
    const [messageApi, contextHolder] = message.useMessage();


    const [namePs, setNamePs] = useState(nmPs);
    const [phonePs, setPhonePs] = useState(phPs);
    const [allergensPs, setAllergensPs] = useState(alPs);
    const [plusOnePs, setPlusOnePs] = useState(pOnePs);

    const [plusOne, setPusOne] = useState(false);
    const [champagne, setChampagne] = useState(false);
    const [whiteWine, setWhiteWine] = useState(false);
    const [redWine, setRedWine] = useState(false);

    const [form] = Form.useForm();
    const onSend = async () => {

        try {

            await form.validateFields()
            const values = form.getFieldsValue()
            console.log(values)
            messageApi.success({content: 'Данные отправлены'})
            form.resetFields()

        } catch (e) {
            messageApi.error({content: 'Обязательные поля не заполнены'})
            console.error(e)
        }
    }

    const onFormChang = (changedValues) => {
        if (changedValues.length > 1) return;
        const changedField = changedValues[0].name[0];
        const changedValue = changedValues[0].value;

        if(changedField === 'plusOne') {
            setPusOne(changedValue === 'Да')
        }

        if(changedField === 'alcohol') {
            if(changedValue.filter(v => v === 'Шампанское').length > 0) {
                setChampagne(true)
            } else {
                setChampagne(false)
                form.setFieldValue('champagne', null)
            }

            if(changedValue.filter(v => v === 'Красное вино').length > 0) {
                setRedWine(true)
            } else {
                setRedWine(false)
                form.setFieldValue('redWine', null)
            }

            if(changedValue.filter(v => v === 'Белое вино').length > 0) {
                setWhiteWine(true)
            } else {
                setWhiteWine(false)
                form.setFieldValue('whiteWine', null)
            }
        }
    }


    return <div className={'view'}>
        {contextHolder}
        <Flex className={styles.container} vertical align='center'>
            <h3>Анкета гостя</h3>
            <p style={{margin: '20px 0 0 0'}}>Просим тебя подтвердить свое присутствие
                и заполнить анкету гостя до 1 апреля 2025</p>
            <p style={{margin: '0 0 20px 0', fontSize: 12}}>(анкета заполняется индивидуально для каждого гостя)</p>
            <ConfigProvider
                theme={{
                    token: {
                        colorBorder: '#60824C',
                        colorError: '#EB4C42FF',
                        colorText: '#2C2C2C',
                        fontSize: 16,
                        borderRadius: 0,
                        colorPrimary: '#60824C',
                        fontFamily: 'Palatino',
                        colorBorderError: '#EB4C42FF'
                    },
                    components: {
                        Input: {
                            activeBg: 'transparent',
                            addonBg: 'transparent',
                            hoverBg: 'transparent',
                            colorBgContainer: 'transparent',
                            colorPrimary: "#60824C",
                            controlHeight: 40,
                            textAlign: 'center',
                            colorTextPlaceholder: '#D4D4BFFF'
                        },
                        Select: {
                            colorTextPlaceholder: '#D4D4BFFF',
                            colorBgContainer: 'transparent',
                            colorPrimary: "#60824C",
                            controlItemBgActive: "#D4D4BFFF",
                            colorBgElevated: "#F8F1E1",
                            controlHeight: 40,
                            optionSelectedFontWeight: 500
                        }
                    }
                }}
            >
                <Form layout='vertical' form={form} style={{width: '335px', textAlign: 'center'}} onFieldsChange={onFormChang}>
                    <Form.Item name='name' rules={[{required: true, message: ''}]}>
                        <Input
                            onFocus={() => setNamePs('')}
                            onBlur={() => setNamePs(nmPs)}
                            placeholder={namePs}
                        />
                    </Form.Item>
                    <Form.Item name='phone' rules={[{required: true, message: ''}]}>
                        <Input
                            onFocus={() => setPhonePs('')}
                            onBlur={() => setPhonePs(phPs)}
                            placeholder={phonePs}
                        />
                    </Form.Item>
                    <EditableSelect
                        placeholder={'Предпочтения по алкоголю'}
                        form={form}
                        options={
                            [
                                {label: "Шампанское", value: "Шампанское"},
                                {label: "Белое вино", value: "Белое вино"},
                                {label: "Красное вино", value: "Красное вино"},
                                {label: "Водка", value: "Водка"},
                                {label: "Виски", value: "Виски"},
                                {label: "Коньяк", value: "Коньяк"},
                                {label: "Не пью", value: "Не пью"},
                            ]}
                    />
                    {champagne && <Form.Item name = 'champagne'>
                        <Select
                            placeholder={'Тип шампанского'}
                            options={
                                [
                                    {label: "Полусладкое", value: "Полусладкое"},
                                    {label: "Полусухое", value: "Полусухое"},
                                    {label: "Сухое", value: "Сухое"},
                                    {label: "Брют", value: "Брют"},
                                ]}
                        />
                    </Form.Item>}
                    {whiteWine && <Form.Item name = 'whiteWine'>
                        <Select
                            placeholder={'Тип белого вина'}
                            options={
                                [
                                    {label: "Полусладкое", value: "Полусладкое"},
                                    {label: "Полусухое", value: "Полусухое"},
                                    {label: "Сухое", value: "Сухое"},
                                ]}
                        />
                    </Form.Item>}
                    {redWine && <Form.Item name = 'redWine'>
                        <Select
                            placeholder={'Тип красного вина'}
                            options={
                                [
                                    {label: "Полусладкое", value: "Полусладкое"},
                                    {label: "Полусухое", value: "Полусухое"},
                                    {label: "Сухое", value: "Сухое"},
                                ]}
                        />
                    </Form.Item>}
                    <Form.Item name='allergens'>
                        <Input
                            onFocus={() => setAllergensPs('')}
                            onBlur={() => setAllergensPs(alPs)}
                            placeholder={allergensPs}
                        />
                    </Form.Item>
                    <Form.Item name = 'plusOne' rules={[{required: true, message: ''}]}>
                        <Select
                            placeholder={'Присутствие +1'}
                            options={
                                [
                                    {label: "Да", value: "Да"},
                                    {label: "Нет", value: "Нет"},
                                ]}
                        />
                    </Form.Item>
                    {plusOne && <Form.Item name='plusOneName' rules={[{required: plusOne, message: ''}]}>
                        <Input
                            onFocus={() => setPlusOnePs('')}
                            onBlur={() => setPlusOnePs(pOnePs)}
                            placeholder={plusOnePs}
                        />
                    </Form.Item>}
                    <Form.Item name = 'transferTo' rules={[{required: true, message: ''}]}>
                        <Select
                            placeholder={'Трансфер туда'}
                            options={
                                [
                                    {label: "Нужен трансфер из Новополоцка", value: "Нужен трансфер из Новополоцка"},
                                    {label: "Нужен трансфер из Минска", value: "Нужен трансфер из Минска"},
                                    {label: "Траснфер не нужен", value: "Траснфер не нужен"},
                                ]}
                        />
                    </Form.Item>
                    <Form.Item name = 'transferFrom' rules={[{required: true, message: ''}]}>
                        <Select
                            placeholder={'Трансфер обратно'}
                            options={
                                [
                                    {label: "Нужен трансфер в Новополоцк", value: "Нужен трансфер в Новополоцк"},
                                    {label: "Нужен трансфер в Минск", value: "Нужен трансфер в Минск"},
                                    {label: "Траснфер не нужен", value: "Траснфер не нужен"},
                                ]
                            }/>
                    </Form.Item>
                    <Form.Item name= 'secondDay' rules={[{required: true, message: ''}]}>
                        <Select
                            placeholder={'Планируете посетить 2-й день свадьбы?'}
                            options={
                                [
                                    {label: "Приду на 2-й день", value: "Приду на 2-й день"},
                                    {label: "Не приду на 2-й день", value: "Не приду на 2-й день"},
                                ]}
                        />
                    </Form.Item>
                </Form>
                <Button style = {{width: 220, height: 40, color: '#F8F1E1', fontSize: 14}} type='primary' onClick={onSend}>
                    Отправить
                </Button>
            </ConfigProvider>
        </Flex>
    </div>
}

export default TenthView