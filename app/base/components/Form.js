import Component from "./Component";

export default class Form extends Component{

  constructor(options) {
    super(options);
    this.items = options.items;
    this.onValidationSuccess = options.onValidationSuccess;
    this.labelColumnWidth = options.labelColumnWidth;
    this.contentColumnWidth = options.contentColumnWidth;
  }

  renderItems(container){
    var form = $('<form></form>');
    form.appendTo(container);
    var table = $('<table style="width: 100%;"></table>');
    table.appendTo(form);
    for(var i=0; i<this.items.length; i++){
      var tr = $('<tr></tr>');
      tr.appendTo(table);

      var td = $('<td></td>');
      td.appendTo(tr);
      td.css('padding-top', '5px');
      td.css('padding-bottom', '5px');
      if(this.labelColumnWidth){
        td.css('width', this.labelColumnWidth);
      }

      var label = $('<span>' + this.items[i].label +'</span>');
      label.appendTo(td);

      td = $('<td></td>');
      td.appendTo(tr);
      td.css('padding-top', '3px');
      td.css('padding-bottom', '3px');
      if(this.contentColumnWidth){
        td.css('width', this.contentColumnWidth);
      }

      this.items[i].content.render(td);
    }

    this.form = form;

  }

  render(container) {

    var _this = this;

    this.renderItems(container);

    this.formItems = [];
    var validationRules = [];

    for(var i=0; i<this.items.length; i++){
      this.formItems.push({
        name: this.items[i].name,
        content: this.items[i].content
      });

      var content = this.items[i].content;
      var contentId = content.getId();

      var itemValidation = this.items[i].validation;
      if(itemValidation){
        if(itemValidation.type == 'COMBOBOX'){
          if(itemValidation.rule == 'required'){

            //---Closure
            (function f() {

              var closureContent = content;
              validationRules.push(
                {
                  input: '#' + contentId,
                  message: 'Required',
                  action: 'select', rule: function(input){
                    var value = closureContent.getValue();
                    if(value == null || value == ''){
                      return false;
                    }else{
                      return true;
                    }
                  }
                }
              );

            })();
            //----------

          }
        }else{
          if(itemValidation.rule == 'required'){
            validationRules.push(
              { input: '#' + contentId, message: 'Wajib diisi', action: 'keyup, blur', rule: 'required' }
            );
          }
        }
      }
    }

    this.form.jqxValidator({
      rules: validationRules
    });

    this.form.on('validationSuccess', function () {
      if(_this.onValidationSuccess){
        var formValues = {};
        for(var i=0; i<_this.formItems.length; i++){
          formValues[_this.formItems[i].name] = _this.formItems[i].content.getValue();
        }
        _this.onValidationSuccess(formValues);
      }
    });
  }

  validate(){
    this.form.jqxValidator('validate');
  }
}
