(function() {
  /* Список минимизированных изображений */
  var imagesList = document.getElementsByClassName('portfolio-details__images-list')[0];
  /* Раскрытое изображение */
  var fullImage = document.getElementsByClassName('portfolio-details__full-image')[0].getElementsByTagName('img')[0];
  
  imagesList.onclick = function(e) {
    var target = e.target;
    
    while (target != this) {
      
      if (target.nodeName == 'A') {
        changeFullImage(target.href, target.title);
        return false;
      }
      
      target = target.parentNode;
    }
  }
  
  /* Из ссылки на уменьшенное изображение берет аргументы href и title передавая их увеличенному изображению) */
  function changeFullImage(href, title) {
    fullImage.src = href;
    fullImage.alt = title;
  }
 }())