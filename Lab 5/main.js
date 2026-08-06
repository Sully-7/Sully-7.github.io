// Functionality for showing/hiding the comments section with keyboard focus support

const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.addEventListener('click', () => {
  const isHidden = commentWrapper.style.display === 'none';
  if (isHidden) {
    showHideBtn.textContent = 'Hide comments';
    showHideBtn.setAttribute('aria-expanded', 'true');
    commentWrapper.style.display = 'block';
  } else {
    showHideBtn.textContent = 'Show comments';
    showHideBtn.setAttribute('aria-expanded', 'false');
    commentWrapper.style.display = 'none';
  }
});

// Functionality for adding a new comment via the comments form

const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  submitComment();
});

function submitComment() {
  const nameValue = nameField.value.trim();
  const commentValue = commentField.value.trim();

  if (nameValue === '' || commentValue === '') {
    return;
  }

  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  namePara.textContent = nameValue;
  commentPara.textContent = commentValue;

  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  list.appendChild(listItem);

  nameField.value = '';
  commentField.value = '';
}