const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('span');
const icon = document.querySelector('.fas');

dragArea.addEventListener('dragover', () => {
  dragArea.classList.add('active');
  icon.classList.add('fa-file-upload');
  icon.classList.remove('fa-file-image');
  dragText.textContent = 'Release here';
});

dragArea.addEventListener('dragleave', () => {
  dragArea.classList.remove('active');
  icon.classList.add('fa-file-image');
  icon.classList.remove('fa-file-upload');
  dragText.textContent = 'Drag and drop here';
});