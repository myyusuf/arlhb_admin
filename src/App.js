import React from 'react';
import ReactDOM from 'react-dom';

//import JqxMenu from 'jqwidgets-framework/jqwidgets-react/react_jqxmenu.js';
//import JqxCheckBox from 'jqwidgets-framework/jqwidgets-react/react_jqxcheckbox.js';

import MainMenu from './MainMenu';


export default class App extends React.Component {
    componentDidMount() {

    }

    render() {

        var onMenuClick = function(e){
            console.log('Mantap..');
        }

        return (
            <div style={{ height: '300px' }}>
                <MainMenu onMenuClick={onMenuClick}/>
            </div>
        )
    }
}
