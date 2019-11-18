$(document).ready(function(){
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
});