(function () {
  /* Массив элементов li */
  var sliderItem = document.getElementsByClassName('slider__item'),
    sliderItemWidth = sliderItem[0].offsetWidth; // Нынешняя ширина одного слайда

  /* Текущая и максимальная длина прокрутки слайдера */
  var maxScrollWidth = (sliderItem.length - 1) * sliderItem[0].offsetWidth + 4; // Без добавления 4 криво работает
  maxScrollWidth = -maxScrollWidth;
  var currentScrollWidth = 0;

  document.getElementsByClassName('slider')[0].onclick = function (e) {
    var target = e.target;

    while (target != this) {

      if (target.classList.contains('slider__button_left')) {
        // Перед перелистыванием нужно убедится, не менялся ли размер окна(для избежания багов при смене ориентации на смартфоне, например)
        if (currentScrollWidth % (sliderItem[0].offsetWidth + 4) == 0 || currentScrollWidth == 0) {
          if (currentScrollWidth < 0) { // Перелистывание если с размерами все в порядке
            currentScrollWidth = currentScrollWidth + sliderItem[0].offsetWidth + 4;
            this.getElementsByClassName('slider__list')[0].style.marginLeft = currentScrollWidth + 'px';
          }
        } else { // Если размер окна изменился
          currentScrollWidth = 0;
          this.getElementsByClassName('slider__list')[0].style.marginLeft = 0; // Возврат к стартовой точке
          maxScrollWidth = (sliderItem.length - 1) * sliderItem[0].offsetWidth + 4;
          maxScrollWidth = -maxScrollWidth; // Перерасчет максимальной ширины прокрутки
        }
      }

      if (target.classList.contains('slider__button_right')) {
        // Перед перелистыванием нужно убедится, не менялся ли размер окна(для избежания багов при смене ориентации на смартфоне, например)
        if (currentScrollWidth % (sliderItem[0].offsetWidth + 4) == 0 || currentScrollWidth == 0) {
          if (currentScrollWidth > maxScrollWidth) { // Перелистывание если с размерами все в порядке
            currentScrollWidth = currentScrollWidth - sliderItem[0].offsetWidth - 4;
            this.getElementsByClassName('slider__list')[0].style.marginLeft = currentScrollWidth + 'px';
          }
        } else { // Если размер окна изменился
          currentScrollWidth = 0;
          this.getElementsByClassName('slider__list')[0].style.marginLeft = 0; // Возврат к исходной точке
          maxScrollWidth = (sliderItem.length - 1) * sliderItem[0].offsetWidth + 4;
          maxScrollWidth = -maxScrollWidth; // Перерасчет максимальной ширины прокрутки
        }
      }

      target = target.parentNode; // Чтобы функция не повесила всю страницу
    }
  }

  addEventListener('resize', function () {
    let currentItem = Math.floor((-(currentScrollWidth) + 4) / sliderItemWidth); // Вычисления номера слайда отображаемого на экране
    
    if (currentItem > 0) { // Если это не самый первый слайд, то идет перерасчет ширины прокрути для новой ширины окна браузера
      currentScrollWidth = sliderItem[0].offsetWidth * currentItem + 4;
      currentScrollWidth = -currentScrollWidth;
    } else {
      currentScrollWidth = 0;
    }
    
    document.getElementsByClassName('slider__list')[0].style.marginLeft = currentScrollWidth + 'px'; // Возврат к стартовой точке
    maxScrollWidth = (sliderItem.length - 1) * sliderItem[0].offsetWidth + 4;
    maxScrollWidth = -maxScrollWidth; // Перерасчет максимальной ширины прокрутки
    sliderItemWidth = sliderItem[0].offsetWidth; // Запоминаем новую текущую ширину одного слайда
  })
}())
