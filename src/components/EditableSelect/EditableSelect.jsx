import { useEffect, useRef, useState } from "react";
import { Select, Flex, Button, Input, Divider, Form } from "antd";
import { PlusLg } from "react-bootstrap-icons";

const iPs = 'Другой напиток'

// eslint-disable-next-line react/prop-types
const EditableSelect = ({ placeholder, options = [], form}) => {

    const [selectOptions, setOptions] = useState([])
    const [newItem, setNewItem] = useState('');
    const [inputPs, setInputPs] = useState(iPs);

    const inputRef = useRef(null);

    const onNameChange = (event) => {
        setNewItem(event.target.value);
    };

    const addItem = (e) => {
        if(!newItem) return
        const fieldKey = `${newItem}_${selectOptions.length}`
        // eslint-disable-next-line react/prop-types
        const values = form.getFieldValue('alcohol');

        if(values) {
            // eslint-disable-next-line react/prop-types
            form.setFieldValue('alcohol', [...values, fieldKey])
        } else {
            // eslint-disable-next-line react/prop-types
            form.setFieldValue('alcohol',  [fieldKey])
        }

        setOptions((prev) => ([...prev, {label: newItem, value: fieldKey }]));
        e.preventDefault();
        setNewItem('')
    };

    useEffect(() => {
        setOptions(options)
    }, [options]);

    return (
            <Form.Item name= 'alcohol' rules={[{required: true, message: ''}]}>
                <Select
                    placeholder={placeholder}
                    mode={'multiple'}
                    showSearch={false}
                    options={selectOptions}
                    dropdownRender={(menu) => {
                        return (
                            <>
                                {menu}
                                <Divider style={{ margin: '8px 0', borderColor: '#60824C' }} />
                                <Flex style={{ padding: '0 8px 4px' }} gap={8} align={'center'}>
                                    <Input
                                        onFocus={() => setInputPs('')}
                                        onBlur={() => setInputPs(iPs)}
                                        style={{ textAlign: 'left' }}
                                        placeholder= {inputPs}
                                        ref={inputRef}
                                        value={newItem}
                                        onChange={onNameChange}
                                        onKeyDown={(e) => e.stopPropagation()}
                                    />
                                    <Button onClick={addItem}><PlusLg size={14}/></Button>
                                </Flex>
                            </>
                        )
                    }}
                />
            </Form.Item>
    )
}

export default EditableSelect;