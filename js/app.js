function isWebp(){
    function testWebP(callback) {

        var webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height == 2);
        };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        
        testWebP(function (support) {
        
        if (support == true) {
            document.querySelector('body').classList.add('webp');
        }else{
            document.querySelector('body').classList.add('no-webp');
        }
    });
}

isWebp();


$(document).ready(function(){

    function countdown(dateEnd) {
        var timer, days, hours, minutes, seconds;
      
        dateEnd = new Date(dateEnd);
        dateEnd = dateEnd.getTime();
      
        if (isNaN(dateEnd)) {
          return;
        }
      
        timer = setInterval(calculate, 1000);
      
        function calculate() {
          var dateStart = new Date();
          var dateStart = new Date(dateStart.getUTCFullYear(),
            dateStart.getUTCMonth(),
            dateStart.getUTCDate(),
            dateStart.getUTCHours(),
            dateStart.getUTCMinutes(),
            dateStart.getUTCSeconds());
          var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)
      
          if (timeRemaining >= 0) {
            days = parseInt(timeRemaining / 86400);
            timeRemaining = (timeRemaining % 86400);
            hours = parseInt(timeRemaining / 3600);
            timeRemaining = (timeRemaining % 3600);
            minutes = parseInt(timeRemaining / 60);
            timeRemaining = (timeRemaining % 60);
            seconds = parseInt(timeRemaining);
      
      
            document.getElementById("days").innerHTML = parseInt(days, 10);
            document.getElementById("hour").innerHTML = ("0" + hours).slice(-2);
            document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
            document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
    
          } else {
            return;
          }
        }
      
        function display(days, hours, minutes, seconds) {}
    }
      
    countdown ('10/31/2026 10:00:00 PM');

    $('.content__nav-menu ul li').click(function(){
      let allElementsLi = $('.content__nav-menu ul li');
      let allElementsContent = $('.content__wrapper2');
      for (let index = 0; index <= allElementsLi.length; index++) {
          allElementsLi.eq(index).removeClass('active');
          allElementsContent.eq(index).removeClass('active');
          allElementsContent.eq(index).removeAttr('style');
      }
      let thisData = $(this).data('content');
      $(this).addClass('active');
      $(`#data-content_${thisData}`).fadeIn();
      $(`#data-content_${thisData}`).addClass('active');
      if($.trim($(this).text()) == "Профиль"){
        $('.header__item p').hide();
        $('.header__item p').fadeIn();
        $('.header__item p').text("Ваш профиль");
      }else{
        $('.header__item p').hide();
        $('.header__item p').fadeIn();
        $('.header__item p').text($(this).text());
      }

      $('.triger svg').remove();
    });

    $('.content__other a').click(function(element){
      element.preventDefault();
      let allElementsLi = $('.content__nav-menu ul li');
      let allElementsContent = $('.content__wrapper2');
      for (let index = 0; index <= allElementsLi.length; index++) {
          allElementsLi.eq(index).removeClass('active');
          allElementsContent.eq(index).removeClass('active');
          allElementsContent.eq(index).removeAttr('style');
      }

      $(' <svg class="back" viewBox="0 0 16 24" width="16" height="24" style="display: block;"><g fill="none" fill-rule="evenodd"><path d="M0 0h16v24H0z"></path><path d="M4.706 7.706a1 1 0 010-1.412l.088-.088a.997.997 0 011.414.002l5.084 5.084a.998.998 0 010 1.416l-5.084 5.084a1.002 1.002 0 01-1.414.002l-.088-.088a.995.995 0 010-1.412L9 12 4.706 7.706z" fill="currentColor"></path></g></svg>').prependTo('.triger');
      $('.header__item p').hide();
      $('.header__item p').fadeIn();
      $('.header__item p').text('Магазин');
      let thisData = $(this).data('content');
      $(`#data-content_${thisData}`).fadeIn();
      $(`#data-content_${thisData}`).addClass('active');

    });

    $('.triger').on('click','svg',function(){
      $('.content__nav-menu ul li[data-content="1"]').addClass('active');
      let thisData = 1;
      $(`#data-content_3`).removeClass('active');
      $(`#data-content_3`).removeAttr('style');
      $(`#data-content_${thisData}`).fadeIn();
      $(`#data-content_${thisData}`).addClass('active');
      $('.header__item p').hide();
      $('.header__item p').fadeIn();
      $('.header__item p').text('Ваш профиль');
      $(this).remove();
    });

    $('.payment__btn').click(function(element){
      element.preventDefault();
      $('.modals').addClass('active');
      $('.modal-payment').animate({
        'margin-top': -120
      },200);
      $('.modal-payment').addClass('active');
    });

    $('.modal-payment__exit').click(function(){
      $('.modal-payment').animate({
        'margin-top': -1020
      },100);
      $(this).parent().parent().removeClass('active');
      setTimeout(() => {
        $('.modal-payment').removeClass('active');
      }, 300);
    });

    let $modal = $(".modal-payment");
    
    $(document).mouseup(function(e){
        if( ! $modal.is(e.target) && $modal.has(e.target).length === 0){
            if($modal.hasClass('active')){
                $('.modal-payment').animate({
                    'margin-top': -1000
                },100);
                $(".modals").removeClass('active');
                setTimeout(() => {
                  $('.modal-payment').removeClass('active');
                }, 300);
            }
        }
    });

    $('.payment__withdraw').click(function(element){
      element.preventDefault();
      $('.modals').addClass('active');
      $('.modal-withdraw').animate({
        'margin-top': -120
      },200);
      $('.modal-withdraw').addClass('active');
    });

    $('.modal-withdraw__exit').click(function(){
      $('.modal-withdraw').animate({
        'margin-top': -1020
      },100);
      $(this).parent().parent().removeClass('active');
      setTimeout(() => {
        $('.modal-withdraw').removeClass('active');
      }, 300);
    });

    let $modal2 = $(".modal-withdraw");
    
    $(document).mouseup(function(e){
        if( ! $modal2.is(e.target) && $modal2.has(e.target).length === 0){
            if($modal2.hasClass('active')){
                $('.modal-withdraw').animate({
                    'margin-top': -1000
                },100);
                $(".modals").removeClass('active');
                setTimeout(() => {
                  $('.modal-withdraw').removeClass('active');
                }, 300);
            }
        }
    });

    $('#form').submit(function(el){
      el.preventDefault();
      let select = $('select[name="wallet"]').val();
      let numWallet = $('input[name="number_wallet"]').val();
      let amount = $('input[name="amount"]').val();

      let validated = 0;

      if(typeof(select) != "undefined" && select != null && select != 'none'){
        validated++;
      }
      if(typeof(numWallet) != "undefined" && numWallet != null && numWallet != 'none'){
        validated++;
      }
      if(typeof(amount) != "undefined" && amount != null && amount != 'none'){
        validated++
      }

      if(validated == 3){
        if(amount < 400){
          alertify.message('<span>❌</span> Минимальная сумма вывода 400 ₽');
          return false;
        }else if(amount > 5000){
          alertify.message('<span>❌</span> Максимальная сумма вывода 5000 ₽');
          return false;
        }

        ///
        /*КОД ЕСЛИ ВСЁ УСПЕШНО!*/
        console.log('success');
        ///

      }else{
        alertify.message('<span>❌</span> ERROR');
        return false;
      }

    });

});