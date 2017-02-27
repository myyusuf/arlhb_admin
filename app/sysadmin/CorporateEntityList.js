import Component from '../base/components/Component';
import TreeGrid from '../base/components/TreeGrid';
import SearchHeader from '../main/components/SearchHeader';

export default class CorporateEntityList extends Component{

  constructor(options) {
    super(options);

    var _this = this;

    var source = {
        dataType: "json",
        dataFields: [
          { name: 'corpEntityId', type: 'int' },
          { name: 'corpEntityParentId', type: 'int' },
          { name: 'corpEntityName', type: 'string' },
        ],
        hierarchy: {
          keyDataField: { name: 'corpEntityId' },
          parentDataField: { name: 'corpEntityParentId' }
        },
        id: "corpEntityId",
        url: "/corporate_entities"
    };

    var onSearch = function(data) {
      data['searchTxt'] = _this.searchTxt;
      return data;
    }

    var jqxOptions = {
        width: '100%',
        height: '100%',
        // pageable: true,
        filterable: true,
        theme: 'metro',
        columns: [
          { text: 'Corporate Entity Name', datafield: 'corpEntityName' },
        ],
        groups: []
    }

    this.treeGrid = new TreeGrid({
      source: source,
      onSearch: onSearch,
      jqxOptions: jqxOptions
    });
  }

  render(container) {
    this.treeGrid.render(container);
  }

  refresh(){
    this.treeGrid.refresh();
  }

  filter(value){
    this.searchTxt = value;
    this.treeGrid.refresh();
  }
}
