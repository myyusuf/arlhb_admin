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
