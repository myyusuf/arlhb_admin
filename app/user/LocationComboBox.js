import Component from '../base/components/Component';
import ComboBox from "../base/components/ComboBox";

export default class LocationComboBox extends Component{

  constructor(options) {
    super(options);

    if(options == undefined){
      options = {};
    }

    var jqxOptions = {
      displayMember: "locationId",
      valueMember: "name",
      placeHolder: 'Select Location',
      selectionMode: 'dropDownList',
      width: 220,
      height: 25
    };

    this.comboBox = new ComboBox({
      url: '/locations',
      jqxOptions: jqxOptions,
      clearSelectionEnabled: true,
      value: options.value,
      onChange: function(value){
        if(options.onChange){
          options.onChange(value);
        }
      }
    });

  }

  getId(){
    return this.comboBox.getId();
  }

  render(container){
    this.comboBox.render(container);
  }

  getValue(){
    return this.comboBox.getValue();
  }

}
