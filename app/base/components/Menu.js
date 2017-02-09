import {
  guid
} from '../Utils';

import Component from "./Component";

export default class Menu extends Component{

  constructor(options) {

    super(options);

    this.data = options.data;
    this.onClick = options.onClick;

    var source = {
       datatype: "json",
       datafields: [
           { name: 'id' },
           { name: 'parentid' },
           { name: 'text' },
           { name: 'subMenuWidth' }
       ],
       id: 'id',
       localdata: this.data
     };

    var dataAdapter = new $.jqx.dataAdapter(source);
    dataAdapter.dataBind();

    this.records = dataAdapter.getRecordsHierarchy('id', 'parentid', 'items', [{ name: 'text', map: 'label'}]);
    this.jqxOptions['source'] = this.records;

  }

  render(container) {

    var _this = this;

    var menuContainer = $('<div></div>');
    menuContainer.appendTo(container);

    menuContainer.jqxMenu(this.jqxOptions);

    menuContainer.on('itemclick',function (event)
    {
        var args = event.args;
        if(_this.onClick){
          _this.onClick(args.id);
        }
    });
  }
}
