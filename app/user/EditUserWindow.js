import Button from '../base/components/Button';
import Form from '../base/components/Form';
import AddWindow from '../base/components/AddWindow';
import Component from '../base/components/Component';
import UserForm from './UserForm';

export default class EditUserWindow extends Component{

  constructor(options) {
    super(options);
    var _this = this;

    var userForm = new UserForm({
      data: options.data,
      onSaveSuccess: options.onSaveSuccess
    });

    var jqxOptions = {
      width: 430,
      height: 430,
    };

    this.window = new AddWindow({
      title: 'Edit User',
      content: userForm,
      onSave: function(){
        userForm.validate();
      },
      onCancel: function(){
        _this.window.close();
      },
      jqxOptions: jqxOptions
    });

  }

  render(container) {
    var _this = this;
    this.window.render(container);
  }

  open(){
    this.window.open();
  }
}
