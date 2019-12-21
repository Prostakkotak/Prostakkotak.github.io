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

  var shortList = document.getElementById('slider__short-list');

  for (let i = 0; i < sliderItem.length; i++) {
    let shortListItem = document.createElement('li');
    shortListItem.classList.add('slider__short-list-item');
    sliderItem[i].setAttribute('data-number', i);
    shortListItem.setAttribute('data-number', i);
    shortList.appendChild(shortListItem);
  }

  var shortListItems = shortList.getElementsByClassName('slider__short-list-item');
  shortListItems[0].classList.add('current');

  document.getElementById('slider').onclick = function (e) {
    var target = e.target;

    while (target != this) {

      if (target == document.getElementById('slider__button_left')) {
        if (currentScrollWidth < 0) { // Перелистывание если с размерами все в порядке
          currentScrollWidth = currentScrollWidth + sliderItem[0].offsetWidth + 4;
          sliderList.style.marginLeft = currentScrollWidth + 'px';

          let currentItem = Math.floor((-(currentScrollWidth)) / sliderItemWidth); // Вычисления номера слайда отображаемого на экране
          shortListItems[currentItem + 1].classList.remove('current');
          shortListItems[currentItem].classList.add('current');
        }
      }

      if (target == document.getElementById('slider__button_right')) {

        if (currentScrollWidth > maxScrollWidth) { // Перелистывание если с размерами все в порядке
          currentScrollWidth = currentScrollWidth - sliderItem[0].offsetWidth - 4;
          sliderList.style.marginLeft = currentScrollWidth + 'px';

          let currentItem = Math.floor((-(currentScrollWidth)) / sliderItemWidth); // Вычисления номера слайда отображаемого на экране
          if (currentItem == 0) {
            shortListItems[0].classList.remove('current');
          } else {
            shortListItems[currentItem - 1].classList.remove('current');
          }
          shortListItems[currentItem].classList.add('current');
        }

      }

      if (target.classList.contains('slider__short-list-item')) {
        let selectedItem = +(target.getAttribute('data-number')); // ВЫчисление номера указанного элемента по data-number
        if (selectedItem == 0) { // Если это первый элемент, то прокрутка сбрасывается
          currentScrollWidth = 0;
        } else { // Если не первый, то происходит расчет нужной прокрутки
          currentScrollWidth = selectedItem * (sliderItem[0].offsetWidth + 4);
          currentScrollWidth = -currentScrollWidth
        }

        sliderList.style.marginLeft = currentScrollWidth + 'px';
        
        /* Переназначение current на указанный элемент */
        shortList.getElementsByClassName('current')[0].classList.remove('current');
        target.classList.add('current');
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
