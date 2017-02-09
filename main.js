import { getMenuData } from './app/base/ApplicationData';
import MainMenu from "./app/main/components/MainMenu";
import RolePage from "./app/user/RolePage";
import UserPage from "./app/user/UserPage";

var rolePage = new RolePage({});
var userPage = new UserPage({});
var mainMenu = new MainMenu({
  onClick: function(e){
    $('#content').empty();
    if(e == 1){
      rolePage.render($('#content'));
    }else if(e == 2){
      userPage.render($('#content'));
    }

  }
});

mainMenu.render($('#top-menu'));
