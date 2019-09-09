(function () {

    class Menu {
        constructor(id) {
            this.obj = document.querySelector(id);
            this.mobailButton = this.obj.querySelector('.mobail-button');
            this.mobMenuMob = this.obj.querySelector('.mob-menu-mob');
            this.s1 = this.obj.querySelector('.s1');
            this.s2 = this.obj.querySelector('.s2');
            this.s3 = this.obj.querySelector('.s3');
            this.controllEvents();
            this.fleg = 0;
        }

        controllEvents() {
            this.mobailButton.addEventListener('click', this.eventMenu.bind(this));
            this.obj.addEventListener('click', this.eventClick.bind(this));
            window.addEventListener('resize',this.resize.bind(this));
        }

        resize(){
            this.fleg = 0;
            this.closedMenu();
        }

        eventClick(e) {
            e.preventDefault();

            let arr = this.obj.querySelectorAll('.bottom-line');
            let arrLI = this.obj.querySelectorAll('.nav-ul li');

            if(e.target.querySelector('.title-linck') !== null){
                for (let s = 0; s < arrLI.length; s++) {
                    arrLI[s].className = '';
                }

                for (let i = 0; i < arr.length; i++) {
                    arr[i].className = 'bottom-line';
                }

                e.target.querySelector('.bottom-line').className = 'active-span bottom-line';
                e.target.parentElement.className = 'active-fon';
            }

        }


        eventMenu() {
            if (this.fleg == 0) {
                this.fleg = 1;
                this.openMenu();
            } else {
                this.fleg = 0;
                this.closedMenu()
            }
        }

        openMenu(){
            this.mobMenuMob.style.transform = 'translateZ(' + 0 + 'px) translateX(' + 0 + 'px)';
            this.s2.style.opacity = '0';
            this.s1.style.transform = 'rotate(' + 45 + 'deg) translateY(' + 8 + 'px) translateX(' + 8 + 'px)';
            this.s3.style.transform = 'rotate(' + -45 + 'deg) translateY(-' + 8 + 'px) translateX(' + 8 + 'px)';
        }

        closedMenu(){
            this.mobMenuMob.style.transform = 'translateZ(' + 0 + 'px) translateX(-' + 301 + 'px)';
            this.s2.style.opacity = '1';
            this.s1.style.transform = 'rotate(' + 0 + 'deg) translateY(' + 0 + 'px) translateX(' + 0 + 'px)';
            this.s3.style.transform = 'rotate(' + 0 + 'deg) translateY(' + 0 + 'px) translateX(' + 0 + 'px)';
        }
    }

    let menu = new Menu('#nav');


}());

