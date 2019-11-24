
//______________ Якоря ________ Anchor's __________//
$(document).ready(function(){
    //Анимация скролла
    $("#anchorBar").on("click","a", (event)=>{
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бlока с атрибута href
        let id  = event.target.getAttribute('href')

        //узнаем высоту от начала страницы до блока на который ссылается якорь
        let top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    //Гамбургер
    $('#Header-hamburger').on('click',(e)=>{
        $('#mb-menu').toggleClass("hidden");
        $('body').toggleClass("no-scroll");
    });
    $('.Header-nav-item--folder-rooms').on('click',(e)=>{
        e.stopPropagation()
        $('#mb-menu-rooms').toggleClass('hidden');
    });
    $('.Header-nav-item--folder-adventures').on('click',(e)=>{
        e.stopPropagation()
        $('#mb-menu-adventures').toggleClass('hidden');
    });
    $('.mb-Header-nav-folder-bck').on('click',(e)=>{
        e.stopPropagation()
        $('#mb-menu-adventures').addClass('hidden');
        $('#mb-menu-rooms').addClass('hidden');

    });
});


//____________   КАРТА 2гис   _______   MAP 2GIS    _______//
var map;
DG.then(function () {
    map = DG.map('map', {
        center: [42.877737, 74.59211],
        zoom: 15
    });
    DG.marker([42.877737, 74.59221]).addTo(map).bindPopup('Maker\'s bootcamp!');
});