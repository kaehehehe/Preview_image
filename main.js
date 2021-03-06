const dragArea = document.querySelector('.drag-area');
const dragText = document.querySelector('span');
const icon = document.querySelector('.fas');
const button = document.querySelector('button');
const input = document.querySelector('input');

let file;

dragArea.addEventListener('dragover', (e) => {
  e.preventDefault();
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

dragArea.addEventListener('drop', (e) => {
  e.preventDefault();
  file = e.dataTransfer.files[0];
  showImage();
});

button.addEventListener('click', () => {
  input.click();
});

input.addEventListener('change', function() {
  file = this.files[0];
  showImage();
});

function showImage() {
  const fileType = file.type;
  const validExtensions = ['image/jpeg', 'image/peg', 'image/png'];
  if (validExtensions.includes(fileType)) {
    const fileReader = new FileReader();
      fileReader.onload = () => {
      const fileURL = fileReader.result;
      const imgTag = `<img src="${fileURL}" alt="">`;
      dragArea.innerHTML = imgTag;
      dragArea.classList.remove('active');
      dragArea.classList.add('drop');
    }
    fileReader.readAsDataURL(file);
  } else {
    alert('This is not image file!');
    dragArea.classList.remove('active');
  }
}