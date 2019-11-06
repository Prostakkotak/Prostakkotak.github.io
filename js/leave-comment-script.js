(function () {

  var leaveCommentSend = document.getElementById('leave-comment__send');
  var comments = document.getElementById('comments');
  var leaveCommentInputList = document.getElementsByClassName('leave-comment__input');

  var nameInput = document.getElementById('leave-comment__name');
  var emailInput = document.getElementById('leave-comment__email');
  var websiteInput = document.getElementById('leave-comment__website');
  var messageInput = document.getElementById('leave-comment__message');


  leaveCommentSend.onclick = function () {

    /* Текст для заглавия комментария */
    var newCommentName = document.createElement('span');
    newCommentName.className = 'comments__name';
    var newCommentEmail = document.createElement('span');
    newCommentEmail.className = 'comments__email';
    var newCommentWebsite = document.createElement('a');
    newCommentWebsite.className = 'comments__website';

    /* блок заглавия комментария */
    var newCommentHeading = document.createElement('div');
    newCommentHeading.className = 'comments__heading';
    newCommentHeading.appendChild(newCommentName);
    newCommentHeading.appendChild(newCommentEmail);
    newCommentHeading.appendChild(newCommentWebsite);

    /* Текст комментария */
    var newCommentText = document.createElement('div');
    newCommentText.className = 'comments__text';

    /* Блок всего комментария */
    var newComment = document.createElement('li');
    newComment.className = 'comments__item';
    newComment.appendChild(newCommentHeading);
    newComment.appendChild(newCommentText);

    /* Добавляем введенные данные из полей формы к созданным DOM элементам */
    newCommentName.appendChild(document.createTextNode(nameInput.value));
    newCommentEmail.appendChild(document.createTextNode(emailInput.value));
    newCommentWebsite.appendChild(document.createTextNode(websiteInput.value));
    newCommentWebsite.href = websiteInput.value;
    newCommentWebsite.target = '_blank';
    newCommentText.appendChild(document.createTextNode(messageInput.value));

    if (newCommentName.textContent != '' && newCommentEmail.textContent != '' && newCommentWebsite.textContent != '' && newCommentText.textContent != '') {
      /* Очистка введенных значений в поля формы */
      nameInput.value = '';
      emailInput.value = '';
      websiteInput.value = '';
      messageInput.value = '';

      /* Добавляем комментарий с данными из формы */
      comments.appendChild(newComment);

    } else if (true) {

      for (let i = 0; i <= leaveCommentInputList.length - 1; i++) {
        if (leaveCommentInputList[i].value == '') {
          leaveCommentInputList[i].style.borderColor = 'red';
        }
      }

      if (messageInput.value == '') {
        messageInput.style.borderColor = 'red';
      }

      setTimeout(function () {
        for (var i = 0; i <= leaveCommentInputList.length - 1; i++) {
          leaveCommentInputList[i].style.borderColor = '';
        }
      }, 3000)

      setTimeout(function () {
        messageInput.style.borderColor = '';
      }, 3000)
    }
  }

}())
