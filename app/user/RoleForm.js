import Button from '../base/components/Button';
import Form from '../base/components/Form';
import AddWindow from '../base/components/AddWindow';
import Component from '../base/components/Component';
import TextBox from '../base/components/TextBox';
import TextArea from '../base/components/TextArea';
import Label from '../base/components/Label';
import CheckBoxTree from '../base/components/CheckBoxTree';

export default class RoleForm extends Component{

  constructor(options) {
    super(options);
    var _this = this;

    var role = options.data;
    this.onSaveSuccess = options.onSaveSuccess;

    var roleNameTextBox = new TextBox({
      jqxOptions:{
        height: 25,
        width: 270
      }
    });
    var roleDescriptionTextArea = new TextArea({
      jqxOptions:{
        height: 70,
        width: 275
      }
    });

    var data = [
      { label: "Item 1", expanded: true, items: [
            { label: "Item 1.1" },
            { label: "Item 1.2", selected: true }
        ]
      }
    ];
    var checkBoxTree = new CheckBoxTree({
      data: data,
      jqxOptions:{
        height: 200,
        width: 275
      }
    });

    var formItems = [
      {
        name: 'roleName',
        label: 'Role Name',
        content: roleNameTextBox,
        validation:{
          type: 'TEXTBOX',
          rule: 'required'
        }
      },
      {
        name: 'roleDescription',
        label: 'Role Description',
        content: roleDescriptionTextArea,
        validation:{
          type: 'TEXTBOX',
          rule: 'required'
        }
      },
      {
        name: 'authorities',
        label: 'Authorities',
        content: checkBoxTree
      }
    ];
    var formOptions = {
      items: formItems,
      labelColumnWidth: '120px',
      onValidationSuccess: function(formValue){

        console.log(formValue);
        // $.ajax({
        //       method: "POST",
        //       url: "/roles",
        //       data: JSON.stringify(formValue),
        //       beforeSend: function(xhr){
        //         xhr.setRequestHeader('Accept', 'application/json');
        //         xhr.setRequestHeader('Content-Type', 'application/json');
        //       }
        //     }).done(function() {
        //         $("#successNotification").jqxNotification("open");
        //         _this.window.close();
        //         if(_this.onSaveSuccess){
        //           _this.onSaveSuccess();
        //         }
        //     }).fail(function( jqXHR, textStatus, errorThrown) {
        //         var errorMessage = 'Proses gagal. Status : ' + jqXHR.status + ' [' + jqXHR.statusText + '] : ' + jqXHR.responseText;
        //         $("#errorNotification").html('<div>' + errorMessage + '</div>');
        //         $("#errorNotification").jqxNotification("open");
        //     });
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
