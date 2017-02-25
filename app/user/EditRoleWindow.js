import Button from '../base/components/Button';
import Form from '../base/components/Form';
import AddWindow from '../base/components/AddWindow';
import Component from '../base/components/Component';
import RoleForm from './RoleForm';
import RestService from '../base/service/RestService';

export default class EditRoleWindow extends Component{

  constructor(options) {
    super(options);
    var _this = this;

    var roleForm = new RoleForm({
      data: options.data,
      onValidationSuccess: function(formValue){
        RestService.put({
          url: '/roles/' + options.data.roleId,
          data: formValue,
          onSuccess: function(){
            if(options.onSaveSuccess){
              options.onSaveSuccess();
            }
            _this.window.close();
          }
        }, $("input[name='_csrf']").val());
      }
    });

    var jqxOptions = {
      width: 430,
      height: 450,
    };

    this.window = new AddWindow({
      title: 'Edit Role',
      content: roleForm,
      onSave: function(){
        roleForm.validate();
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
