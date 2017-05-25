import React from 'react'
const btn_ok = require('../../assets/SAO_Icons_v3.300/4_Buttons/Yes.png');
const btn_cancel = require('../../assets/SAO_Icons_v3.300/4_Buttons/No.png');
export default props => (
    <div className="modal">
        <div className="modal-header">
            {props.title}
        </div>
        <div className="modal-body">
            {props.message}
        </div>
        <div className="modal-footer">
            <div className="btn btn-ok">
            </div>
            <div className="btn btn-cancel">
            </div>
            <div className="clearfix"></div>
        </div>
    </div>
)