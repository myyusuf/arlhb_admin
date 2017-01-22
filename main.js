import { getMenuData } from './app/base/ApplicationData';
import NavigationBar from "./app/base/components/NavigationBar";
import Splitter from "./app/base/components/Splitter";
import Tree from "./app/base/components/Tree";
import Menu from "./app/base/components/Menu";
import Tabs from "./app/base/components/Tabs";
import Button from "./app/base/components/Button";
import UserList from "./app/user/UserList";
import RoleList from "./app/user/RoleList";

var splitter = new Splitter();
splitter.render($('#content-inside'));

var data = [
  {
    label: "Security",
    expanded: true,
    items: [
      {
        id: 'role_list',
        label: "Roles",
        selected: true
      }
    ]
  },
  {
    label: "Report",
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
    if(item.id == 'role_list'){
      tabs.add(item.id, item.label, roleList);
    }
   }

  }
});

var menu = new Menu({data: getMenuData()});
menu.render($('#top-menu'));

var userList = new UserList();
var roleList = new RoleList();

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
    id: 'role_list',
    title: 'Roles',
    content: roleList
  }
]);

tabs.render($('#right-content'));
