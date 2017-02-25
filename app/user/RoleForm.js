import Button from '../base/components/Button';
import Form from '../base/components/Form';
import AddWindow from '../base/components/AddWindow';
import Component from '../base/components/Component';
import TextBox from '../base/components/TextBox';
import TextArea from '../base/components/TextArea';
import Label from '../base/components/Label';
import AuthoritiesTree from '../main/components/AuthoritiesTree';

export default class RoleForm extends Component{

  constructor(options) {
    super(options);
    var _this = this;

    var role = {};

    if(options.data){
      role = options.data;
    }
    this.onValidationSuccess = options.onValidationSuccess;

    var roleNameTextBox = new TextBox({
      value: role.roleName,
      jqxOptions:{
        height: 25,
        width: 270
      }
    });
    var roleDescriptionTextArea = new TextArea({
      value: role.description,
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
    var checkBoxTree = new AuthoritiesTree({
      onDataLoaded: function(data){

        if(role.roleId){
          var url = "/role_task_actions/" + role.roleId;
          $.ajax({
            method: "GET",
            url: url,
            data: {}
          }).done(function(data) {
              var taskActionIds = [];
              for(var i=0; i<data.length; i++){
                taskActionIds.push(data[i].taskActionId);
              }
              checkBoxTree.setValue(taskActionIds);
          }).fail(function() {
            var errorMessage = 'Proses gagal';
            $("#errorNotification").html('<div>' + errorMessage + '</div>');
            $("#errorNotification").jqxNotification("open");
          });
        }

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
        name: 'description',
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
