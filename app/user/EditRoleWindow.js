import { guid } from '../base/Utils';
import Button from '../base/components/Button';
import Form from '../base/components/Form';
import EditWindow from '../base/components/EditWindow';
import TextBox from '../base/components/TextBox';
import TextArea from '../base/components/TextArea';
import Label from '../base/components/Label';

export default class EditRoleWindow {

  constructor(options) {

    var _this = this;

    this.id = guid();

    var role = options.data;
    this.onSaveSuccess = options.onSaveSuccess;

    var roleIdTextBox = new TextBox({value: role.roleId, height: 25, width: '90%'});
    var roleNameTextBox = new TextBox({value: role.roleName, height: 25, width: '90%'});

    var formItems = [
      {
        name: 'roleId',
        label: 'Role ID',
        content: roleIdTextBox,
        validation:{
          type: 'TEXTBOX',
          rule: 'required'
        }
      },
      {
        name: 'roleName',
        label: 'Role Name',
        content: roleNameTextBox,
        validation:{
          type: 'TEXTBOX',
          rule: 'required'
        }
      }
    ];
    var formOptions = {
      items: formItems,
      labelColumnWidth: '120px',
      onValidationSuccess: function(formValue){
        $.ajax({
              method: "PUT",
              url: "/roles/" + role.roleId,
              data: JSON.stringify(formValue),
              beforeSend: function(xhr){
                xhr.setRequestHeader('Accept', 'application/json');
                xhr.setRequestHeader('Content-Type', 'application/json');
              }
            }).done(function() {
                $("#successNotification").jqxNotification("open");
                _this.window.close();
                if(_this.onSaveSuccess){
                  _this.onSaveSuccess();
                }
            }).fail(function( jqXHR, textStatus, errorThrown) {
                var errorMessage = 'Proses gagal. Status : ' + jqXHR.status + ' [' + jqXHR.statusText + '] : ' + jqXHR.responseText;
                $("#errorNotification").html('<div>' + errorMessage + '</div>');
                $("#errorNotification").jqxNotification("open");
            });
      }
    }

    var form = new Form(formOptions);

    this.window = new EditWindow({
      width: 340,
      height: 180,
      title: 'Edit Role',
      content: form,
      onSave: function(){
        form.validate();
      },
      onCancel: function(){
        _this.window.close();
      },
      onDelete: function(){
        var r = confirm("Proses hapus data akan dilakukan!");
        if (r == true) {
          $.ajax({
                method: "DELETE",
                url: "/roles/" + role.roleId,
                data: { }
              }).done(function() {
                $("#successNotification").jqxNotification("open");
                _this.window.close();
                if(_this.onSaveSuccess){
                  _this.onSaveSuccess();
                }
              }).fail(function() {
                var errorMessage = 'Proses gagal. Status : ' + jqXHR.status + ' [' + jqXHR.statusText + '] : ' + jqXHR.responseText;
                $("#errorNotification").html('<div>' + errorMessage + '</div>');
                $("#errorNotification").jqxNotification("open");
              });
        }
      }
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
