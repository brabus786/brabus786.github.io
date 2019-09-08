(function(){

class Menu{
    constructor(id){
        this.obj = document.querySelector(id);
        this.mobailButton = this.obj.querySelector('.mobail-button');
        this.mobMenuMob = this.obj.querySelector('.mob-menu-mob');
        this.controllEvents();
        this.fleg = 0;
    }

    controllEvents(){
        this.mobailButton.addEventListener('click',this.eventMenu.bind(this));
    }

    eventMenu(){
        if (this.fleg == 0){
            this.fleg = 1;
            this.openMenu();
        }else {
            this.fleg = 0;
            this.closedMenu()
        }
        console.log(this.fleg);
    }

    openMenu(){
        this.mobMenuMob.style.transform = ' translateX(' + 0 + 'px)';
    }

    closedMenu(){
        this.mobMenuMob.style.transform = ' translateX(-' + 220 + 'px)';
    }
}
let menu = new Menu('#nav');


}());

