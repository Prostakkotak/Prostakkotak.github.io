(function () {
  /* Массив элементов li */
  var sliderItem = document.getElementsByClassName('slider__item');

  /* Длина одного элемента, текущая и максимальная длина прокрутки слайдера */
  var sliderItemWidth = sliderItem[0].offsetWidth + 4;
  var maxScrollWidth = (sliderItem.length - 1) * sliderItemWidth;
  maxScrollWidth = -maxScrollWidth;
  var currentScrollWidth = 0;


  document.getElementsByClassName('slider')[0].onclick = function (e) {
    var target = e.target;

    while (target != this) {

      if (target.classList.contains('slider__button_left')) {
        if (currentScrollWidth < 0) {
          currentScrollWidth = currentScrollWidth + sliderItemWidth;
          this.getElementsByClassName('slider__list')[0].style.marginLeft = currentScrollWidth + 'px';
        }

      }

      if (target.classList.contains('slider__button_right')) {
        if (currentScrollWidth > maxScrollWidth) {
          currentScrollWidth = currentScrollWidth - sliderItemWidth;
          this.getElementsByClassName('slider__list')[0].style.marginLeft = currentScrollWidth + 'px';
        }

      }

      target = target.parentNode; // Чтобы функция не повесила всю страницу
    }
  }
}())
