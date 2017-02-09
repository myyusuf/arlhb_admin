import Button from '../base/components/Button';
import Form from '../base/components/Form';
import AddWindow from '../base/components/AddWindow';
import Component from '../base/components/Component';
import TextBox from '../base/components/TextBox';
import TextArea from '../base/components/TextArea';
import Label from '../base/components/Label';

export default class AddRoleWindow extends Component{

  constructor(options) {
    super(options);
    var _this = this;

    var role = options.data;
    this.onSaveSuccess = options.onSaveSuccess;

    var roleIdTextBox = new TextBox({height: 25, width: '90%'});
    var roleNameTextBox = new TextBox({height: 25, width: '90%'});

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
              method: "POST",
              url: "/roles",
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

    var jqxOptions = {
      width: 340,
      height: 180,
    };

    this.window = new AddWindow({
      title: 'Add Role',
      content: form,
      onSave: function(){
        form.validate();
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
