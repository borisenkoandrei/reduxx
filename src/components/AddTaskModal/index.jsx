
import React from 'react';
import Input from './ModalInput'
import Acsessories from '../AddAcsessories/index';

import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
const { MonthPicker, RangePicker } = DatePicker;

function Modal({open}){
    if(!open){
        return null;
    }

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    return(
        <div className='new-task-modal'>
            <Input label="Работа: " id="work" />
            <Input label="Стоимость: " id="cost" />
            <Acsessories />
            <DatePicker onChange={onChange} />
        </div>
    )

}

export default Modal;