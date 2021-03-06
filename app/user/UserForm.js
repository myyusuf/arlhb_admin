import Button from '../base/components/Button';
import Form from '../base/components/Form';
import AddWindow from '../base/components/AddWindow';
import Component from '../base/components/Component';
import TextBox from '../base/components/TextBox';
import TextArea from '../base/components/TextArea';
import Label from '../base/components/Label';
import RoleComboBox from './RoleComboBox';
import BranchComboBox from './BranchComboBox';
import LocationComboBox from './LocationComboBox';

export default class UserForm extends Component{

  constructor(options) {
    super(options);
    var _this = this;

    var user = {};

    if(options.data){
      user = options.data;
    }
    this.onValidationSuccess = options.onValidationSuccess;

    var idLabel = new Label({
      text: user.employeeId,
      jqxOptions:{
        height: 25,
        width: 270
      }
    });

    var nameLabel = new Label({
      text: user.firstName,
      jqxOptions:{
        height: 25,
        width: 270
      }
    });

    var addressLabel = new Label({
      text: user.address ? user.address : '-',
      jqxOptions:{
        height: 25,
        width: 270
      }
    });

    var emailLabel = new Label({
      text: user.email ? user.email : '-',
      jqxOptions:{
        height: 25,
        width: 270
      }
    });

    var mobile1Label = new Label({
      text: user.mobilePhoneNumber ? user.mobilePhoneNumber : '-',
      jqxOptions:{
        height: 25,
        width: 270
      }
    });

    var roleComboBox = new RoleComboBox({
      value: user.role? user.role.roleId : null,
      jqxOptions:{
        height: 25,
        width: 270
      }
    });

    var branchComboBox = new BranchComboBox({
      value: user.branch? user.branch.corpEntityId : null,
      jqxOptions:{
        height: 25,
        width: 270
      }
    });

    var locationComboBox = new LocationComboBox({
      value: user.location? user.location.locationId : null,
      jqxOptions:{
        height: 25,
        width: 270
      }
    });

    var formItems = [
      {
        name: 'id',
        label: 'ID',
        content: idLabel
      },
      {
        name: 'name',
        label: 'Name',
        content: nameLabel
      },
      {
        name: 'address',
        label: 'Address',
        content: addressLabel
      },
      {
        name: 'email',
        label: 'Email',
        content: emailLabel
      },
      {
        name: 'mobile1',
        label: 'HP No',
        content: mobile1Label
      },
      {
        name: 'role',
        label: 'Role',
        content: roleComboBox,
        validation:{
          type: 'COMBOBOX',
          rule: 'required'
        }
      },
      {
        name: 'branch',
        label: 'Branch',
        content: branchComboBox,
        validation:{
          type: 'COMBOBOX',
          rule: 'required'
        }
      },
      {
        name: 'location',
        label: 'Location',
        content: locationComboBox,
        validation:{
          type: 'COMBOBOX',
          rule: 'required'
        }
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
