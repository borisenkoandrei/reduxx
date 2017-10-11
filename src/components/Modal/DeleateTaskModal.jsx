import React from "react";
import { Card, Button } from 'antd';

function deleateTaskModal({hide, ok}){

    return(
        <Card title="Удаление задачи" bordered={false} style={{ width: 300 }}>
            <div className="delete-modal_title">
                Вы уверены что хотите удалить задачу?
            </div>
            <div className="delete-modal_buttons">
                <Button onClick={ok}>OK</Button>
                <Button onClick={hide}>CANCEL</Button>
            </div>
      </Card>
    )

}

export default deleateTaskModal