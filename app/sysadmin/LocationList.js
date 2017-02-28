import Component from '../base/components/Component';
import DataGrid from '../base/components/DataGrid';
import SearchHeader from '../main/components/SearchHeader';

export default class LocationList extends Component{

  constructor(options) {
    super(options);

    var _this = this;

    var source = {
        datatype: "json",
        datafields: [
          { name: 'locationId', type: 'int' },
          { name: 'name', type: 'string' },
          { name: 'city'},
          { name: 'cityName', map: 'city>name', type: 'string' },
          { name: 'address', type: 'string' },
          { name: 'telp', type: 'string' },
          { name: 'branch'},
          { name: 'subBranchName', map: 'branch>name', type: 'string' },
        ],
        id: "locationId",
        url: "/locations"
    };

    var onSearch = function(data) {
      data['searchTxt'] = _this.searchTxt;
      return data;
    }

    var onEditButtonClick = function(value){
      if(options.onEditButtonClick){
        options.onEditButtonClick(value);
      }
    }

    var jqxOptions = {
        width: '100%',
        height: '100%',
        rowsheight: 40,
        pageable: true,
        altrows: true,
        theme: 'metro',
        virtualmode: true,
        rendergridrows: function (params) {
                    return params.data;
                },
        columns: [
          { text: 'Id', datafield: 'locationId' },
          { text: 'Location Name', datafield: 'name' },
          { text: 'Address', datafield: 'address' },
          { text: 'Contact No', datafield: 'telp' },
          {
            text: 'Actions',
            datafield: 'actions',
            width: '30%',
            createwidget: function (row, column, value, htmlElement) {

                var rowIndex = $('<input type="hidden" value="" class="myRowIndex"/>');
                rowIndex.val(row.boundindex);
                rowIndex.appendTo(htmlElement);

                var table = $('<table style="height: 100%; width: 100%; text-align: center;"></table>');
                var tr = $('<tr></tr>');
                var td = $('<td style="width: 50%;"></td>');
                table.appendTo(htmlElement);
                tr.appendTo(table);
                td.appendTo(tr);

                td = $('<td></td>');
                td.appendTo(tr);
                var button = $("<div style='margin: 5px;'>" + "Edit" + "</div>");
                button.appendTo(td);
                button.jqxButton({ theme:'light', template: "success", width: 70 });

                button.click(function (event) {
                    var rowIndexVal = $(htmlElement).find(':input.myRowIndex').val();
                    var rowdata = _this.dataGrid.getDataRow(rowIndexVal);
                    onEditButtonClick(rowdata);
                });

                td = $('<td style="width: 50%;"></td>');
                td.appendTo(tr);
            },
            initwidget: function (row, column, value, htmlElement) {
              var rowIndexVal = $(htmlElement).find(':input.myRowIndex');
              rowIndexVal.val(row);
            }
          }
        ],
        groups: []
    }

    this.dataGrid = new DataGrid({
      source: source,
      onSearch: onSearch,
      jqxOptions: jqxOptions
    });
  }

  render(container) {
    this.dataGrid.render(container);
  }

  refresh(){
    this.dataGrid.refresh();
  }

  filter(value){
    this.searchTxt = value;
    this.dataGrid.refresh();
  }
}
