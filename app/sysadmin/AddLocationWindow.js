import Button from '../base/components/Button';
import Form from '../base/components/Form';
import AddWindow from '../base/components/AddWindow';
import Component from '../base/components/Component';
import RestService from '../base/service/RestService';
import LocationForm from './LocationForm';

export default class AddLocationWindow extends Component{

  constructor(options) {
    super(options);
    var _this = this;

    this.onSaveSuccess = options.onSaveSuccess;

    var locationForm = new LocationForm({
      onValidationSuccess: function(formValue){
        RestService.post({
          url: '/locations',
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
      height: 430,
    };

    this.window = new AddWindow({
      title: 'Add Location',
      content: locationForm,
      onSave: function(){
        locationForm.validate();
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
