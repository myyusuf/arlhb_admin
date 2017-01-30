import React from 'react';

import RoleList from './RoleList';
import RoleEdit from './RoleEdit';

export default class RolePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            openEditWindow: false
        };
    }
    componentDidMount() {}

    render() {

        let _this = this;

        let editWindow = null;
        if (this.state.openEditWindow) {
            editWindow = <RoleEdit></RoleEdit>;
        }

        let onDoubleClick = function(e) {
            _this.refs.roleEdit.open();
        }

        return (
            <div style={{
                height: '100%'
            }}>
                <RoleList onDoubleClick={onDoubleClick}/>
                <div><RoleEdit ref='roleEdit'></RoleEdit></div>
            </div>

        )
    }
}
