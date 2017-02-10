import Button from '../base/components/Button';
import Form from '../base/components/Form';
import AddWindow from '../base/components/AddWindow';
import Component from '../base/components/Component';
import RoleForm from './RoleForm';

export default class AddRoleWindow extends Component{

  constructor(options) {
    super(options);
    var _this = this;

    this.onSaveSuccess = options.onSaveSuccess;

    var roleForm = new RoleForm({
      onValidationSuccess: function(formValue){
        $.ajax({
              method: "POST",
              url: "/roles",
              data: JSON.stringify(formValue),
              beforeSend: function(xhr){
                xhr.setRequestHeader('Accept', 'application/json');
                xhr.setRequestHeader('Content-Type', 'application/json');
              }
            }).done(function() {
                $("#successNotification").jqxNotification("open");
                // _this.window.close();
                if(_this.onSaveSuccess){
                  _this.onSaveSuccess();
                }
            }).fail(function( jqXHR, textStatus, errorThrown) {
                var errorMessage = 'Proses gagal. Status : ' + jqXHR.status + ' [' + jqXHR.statusText + '] : ' + jqXHR.responseText;
                $("#errorNotification").html('<div>' + errorMessage + '</div>');
                $("#errorNotification").jqxNotification("open");
            });
      }
    });

    var jqxOptions = {
      width: 430,
      height: 430,
    };

    this.window = new AddWindow({
      title: 'Add Role',
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
