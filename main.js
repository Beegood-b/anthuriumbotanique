const btnLat = document.querySelector(".btn-lat");
const btnRus = document.querySelector(".btn-rus");
const col1 = document.querySelector(".main__col1");
const col2 = document.querySelector(".main__col2");

// Устанавливаем второй блок скрытым по умолчанию
col2.classList.add('hidden');

btnLat.addEventListener('click', () => {
  col2.classList.add('hidden');  // скрыть первый блок
  col1.classList.remove('hidden');  // показать второй блок
});

btnRus.addEventListener('click', () => {
  col1.classList.add('hidden');  // скрыть второй блок
  col2.classList.remove('hidden');  // показать первый блок
});

// Intersection observer 

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hide");
hiddenElements.forEach((el) => observer.observe(el));
