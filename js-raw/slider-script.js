(function () {
  /* Массив элементов li */
  var sliderItem = document.getElementsByClassName('slider__item'),
      sliderItemWidth = sliderItem[0].offsetWidth; // Нынешняя ширина одного слайда
  /* Список со слайдами */
  var sliderList = document.getElementById('slider__list');

  /* Текущая и максимальная длина прокрутки слайдера */
  var maxScrollWidth = (sliderItem.length - 1) * sliderItem[0].offsetWidth + 4; // Без добавления 4 криво работает
  maxScrollWidth = -maxScrollWidth;
  var currentScrollWidth = 0;

  document.getElementById('slider').onclick = function (e) {
    var target = e.target;

    while (target != this) {

      if (target == document.getElementById('slider__button_left')) {
          if (currentScrollWidth < 0) { // Перелистывание если с размерами все в порядке
            currentScrollWidth = currentScrollWidth + sliderItem[0].offsetWidth + 4;
            sliderList.style.marginLeft = currentScrollWidth + 'px';
          }
      }

      if (target == document.getElementById('slider__button_right')) {
        
          if (currentScrollWidth > maxScrollWidth) { // Перелистывание если с размерами все в порядке
            currentScrollWidth = currentScrollWidth - sliderItem[0].offsetWidth - 4;
            sliderList.style.marginLeft = currentScrollWidth + 'px';
          }
        
      }

      target = target.parentNode; // Чтобы функция не повесила всю страницу
    }
  }

  addEventListener('resize', function () {
    let currentItem = Math.floor((-(currentScrollWidth)) / sliderItemWidth); // Вычисления номера слайда отображаемого на экране
    
    if (currentItem > 0) { // Если это не самый первый слайд, то идет перерасчет ширины прокрути для новой ширины окна браузера
      currentScrollWidth = (sliderItem[0].offsetWidth + 4) * currentItem;
      currentScrollWidth = -currentScrollWidth;
    } else {
      currentScrollWidth = 0;
    }
    
    sliderList.style.marginLeft = currentScrollWidth + 'px'; // Возврат к стартовой точке
    maxScrollWidth = (sliderItem.length - 1) * sliderItem[0].offsetWidth + 4;
    maxScrollWidth = -maxScrollWidth; // Перерасчет максимальной ширины прокрутки
    sliderItemWidth = sliderItem[0].offsetWidth; // Запоминаем новую текущую ширину одного слайда
  })
}())
