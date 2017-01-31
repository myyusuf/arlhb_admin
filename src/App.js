import React from 'react';
import ReactDOM from 'react-dom';

import MainMenu from './MainMenu';
import RolePage from './usermgmt/RolePage';
import UserList from './usermgmt/UserList';

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            secondsElapsed: 0,
            menuId: 0
        };
    }
    componentDidMount() {}

    render() {
        var _this = this;
        var onMenuClick = function(e) {

            console.log(e.args.id);
            _this.setState((prevState) => ({
                secondsElapsed: prevState.secondsElapsed + 1,
                menuId: e.args.id
            }));
        }

        let page = null;

        if (this.state.menuId == 58) {
            page = <RolePage></RolePage>;
        }else if (this.state.menuId == 59) {
            page = <UserList></UserList>;
        } else {
            page = <div>No Page</div>;
        }

        return (
            <div style={{height: '100%'}}>
                <MainMenu onMenuClick={onMenuClick}/>
                <div style={{height: '100%'}}>{page}</div>

            </div>
        )
    }
}
