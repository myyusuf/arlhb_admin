import React from 'react';
import ReactDOM from 'react-dom';

//import JqxMenu from 'jqwidgets-framework/jqwidgets-react/react_jqxmenu.js';
//import JqxCheckBox from 'jqwidgets-framework/jqwidgets-react/react_jqxcheckbox.js';

import MainMenu from './MainMenu';

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

        if (this.state.menuId == 51) {
            page = <div>Active Sessions</div>;
        } else {
            page = <div>No Page</div>;
        }

        return (
            <div style={{}}>
                <MainMenu onMenuClick={onMenuClick}/>
                <div>{page}</div>

            </div>
        )
    }
}
