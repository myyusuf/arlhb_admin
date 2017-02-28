import Button from '../base/components/Button';
import Form from '../base/components/Form';
import AddWindow from '../base/components/AddWindow';
import Component from '../base/components/Component';
import TextBox from '../base/components/TextBox';
import TextArea from '../base/components/TextArea';
import Label from '../base/components/Label';
import AuthoritiesTree from '../main/components/AuthoritiesTree';

export default class LocationForm extends Component{

  constructor(options) {
    super(options);
    var _this = this;

    var location = {};

    if(options.data){
      location = options.data;
    }
    this.onValidationSuccess = options.onValidationSuccess;

    var nameTextBox = new TextBox({
      value: location.name,
      jqxOptions:{
        height: 25,
        width: 270
      }
    });
    var addressTextBox = new TextBox({
      value: location.address,
      jqxOptions:{
        height: 25,
        width: 270
      }
    });
    var telpTextBox = new TextBox({
      value: location.telp,
      jqxOptions:{
        height: 25,
        width: 270
      }
    });

    var formItems = [
      {
        name: 'name',
        label: 'Name',
        content: nameTextBox,
        validation:{
          type: 'TEXTBOX',
          rule: 'required'
        }
      },
      {
        name: 'address',
        label: 'Address',
        content: addressTextBox
      },
      {
        name: 'telp',
        label: 'Contact No.',
        content: telpTextBox
      }
    ];
    var formOptions = {
      items: formItems,
      labelColumnWidth: '120px',
      onValidationSuccess: function(formValue){
        console.log(formValue);
        if(_this.onValidationSuccess){
          _this.onValidationSuccess(formValue);
        }
      }
    }

    this.form = new Form(formOptions);

  }

  render(container) {
    this.form.render(container);
  }

  validate(){
    this.form.validate();
  }
}
