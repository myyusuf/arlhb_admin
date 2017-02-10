import Component from '../base/components/Component';
import ComboBox from "../base/components/ComboBox";

export default class BranchComboBox extends Component{

  constructor(options) {
    super(options);

    if(options == undefined){
      options = {};
    }

    var jqxOptions = {
      displayMember: "branchId",
      valueMember: "name",
      placeHolder: 'Select Branch',
      selectionMode: 'dropDownList',
      width: 220,
      height: 25
    };

    this.comboBox = new ComboBox({
      url: '/branches',
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
