import React from 'react';

function ActiveCar(props){
    if (props.add){
        return null;
    }

    return (
        <table>
            <tr>
                <td>Марка</td>
                <td></td>
            </tr>
            <tr>
                <td>Модель</td>
                <td></td>
            </tr>
            <tr>
                <td>Год</td>
                <td></td>
            </tr>
            <tr>
                <td>Объем двигалеля</td>
                <td></td>
            </tr>
            <tr>
                <td>Мощьность двигателя</td>
                <td></td>
            </tr>
            <tr>
                <td>VIN</td>
                <td></td>
            </tr>
        </table>
    )    
}

export default ActiveCar;
