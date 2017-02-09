import { getMenuData } from './app/base/ApplicationData';
import MainMenu from "./app/main/components/MainMenu";
import RolePage from "./app/user/RolePage";
import UserPage from "./app/user/UserPage";
import ActiveSessionPage from "./app/user/ActiveSessionPage";

var rolePage = new RolePage({});
var userPage = new UserPage({});
var activeSessionPaga = new ActiveSessionPage({});
var mainMenu = new MainMenu({
  onClick: function(e){
    $('#content').empty();
    if(e == 1){
      rolePage.render($('#content'));
    }else if(e == 2){
      userPage.render($('#content'));
    }else if(e == 3){
      activeSessionPaga.render($('#content'));
    }

  }
});

mainMenu.render($('#top-menu'));
