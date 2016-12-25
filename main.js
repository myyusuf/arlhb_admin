import { getMenuData } from './app/base/ApplicationData';
import NavigationBar from "./app/base/components/NavigationBar";
import Splitter from "./app/base/components/Splitter";
import Tree from "./app/base/components/Tree";
import Menu from "./app/base/components/Menu";
import Tabs from "./app/base/components/Tabs";
import Button from "./app/base/components/Button";
import UserList from "./app/user/UserList";

var splitter = new Splitter();
splitter.render($('#content-inside'));

var data = [
  {
    label: "User",
    expanded: true,
    items: [
      {
        id: 'user_list',
        label: "Daftar User",
        selected: true
      }
    ]
  },
  {
    label: "Laporan",
    expanded: true,
    items: [
      {
        id: 'report1',
        label: "Report 1"
      }
    ]
  }
];

var tree = new Tree({
  data: data,
  onClick: function(item){

   if(!tabs.selectTabByTitle(item.label)){
    if(item.id == 'user_list'){
      tabs.add(item.id, item.label, userList);
    }
   }

  }
});

var userList = new UserList();

var navigationBar = new NavigationBar([{
  title: 'Application',
  content: tree
}, {
  title: 'Settings'
}]);
navigationBar.render($('#left-content'));

// var workspaceView = new WorkspaceView();

var tabs = new Tabs([
  {
    id: 'user_list',
    title: 'Daftar User',
    content: userList
  }
]);

tabs.render($('#right-content'));
