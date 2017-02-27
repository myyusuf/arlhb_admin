import Component from '../base/components/Component';
import Button from '../base/components/Button';
import TextArea from '../base/components/TextArea';
import SingleRowForm from '../base/components/SingleRowForm';
import ConfirmationWindow from '../base/components/ConfirmationWindow';

export default class UserBlockWindow extends Component{

  constructor(options) {
    super(options);
    var _this = this;

    var descriptionTextArea = new TextArea({
      jqxOptions:{
        height: 70,
        width: 275
      }
    });

    var reasonCaption = 'Please specify a reason why you want <br/> to block customer <b>' +
    (options.data? options.data.firstName : '') + '</b>?';

    var formItems = [
      {
        name: 'description',
        label: reasonCaption,
        content: descriptionTextArea,
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
        RestService.put({
          url: '/user_block/' + options.data.employeeId,
          data: formValue,
          onSuccess: function(){
            if(options.onSaveSuccess){
              options.onSaveSuccess();
            }
            _this.window.close();
          }
        }, $("input[name='_csrf']").val());
      }
    }

    var form = new SingleRowForm(formOptions);

    var jqxOptions = {
      width: 299,
      height: 214,
    };

    this.window = new ConfirmationWindow({
      title: 'Confirm User Block/Unblock',
      saveButtonTitle: 'Confirm Blocking',
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
