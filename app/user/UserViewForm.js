import Button from '../base/components/Button';
import Form from '../base/components/Form';
import AddWindow from '../base/components/AddWindow';
import Component from '../base/components/Component';
import TextBox from '../base/components/TextBox';
import TextArea from '../base/components/TextArea';
import Label from '../base/components/Label';

export default class UserViewForm extends Component{

  constructor(options) {
    super(options);
    var _this = this;

    var user = {};

    if(options.data){
      user = options.data;
    }
    this.onSaveSuccess = options.onSaveSuccess;

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

    var roleLabel = new Label({
      text: user.role? user.role.roleName : '-',
      jqxOptions:{
        height: 25,
        width: 270
      }
    });

    var branchLabel = new Label({
      text: user.branch? user.branch.branchName : '-',
      jqxOptions:{
        height: 25,
        width: 270
      }
    });

    var locationLabel = new Label({
      text: user.location? user.location.locationName : '-',
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
        content: roleLabel
      },
      {
        name: 'branch',
        label: 'Branch',
        content: branchLabel
      },
      {
        name: 'location',
        label: 'Location',
        content: locationLabel
      }
    ];
    var formOptions = {
      items: formItems,
      labelColumnWidth: '120px',
      onValidationSuccess: function(formValue){
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
