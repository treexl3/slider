//! Ініціалізуємо Swiper
new Swiper('.image-slider', {
   //! Стрілки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   //! Навігація
   //! Булети, поточне положення, прогресбар
   pagination: {
      el: '.swiper-pagination',
      /* 
      //! Булети
      clickable: true,
      //! Динамічні булети
      dynamicBullets: true,
      //! Кастомні булети
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + '</span>';
      }, 
      */

      //! Фракції
      type: 'fraction',
      //!Кастомний вивід фракції
      renderFraction: function (currentClass, totalClass) {
         return 'Фото <span class="' + currentClass + '"></span>' +
            ' из ' +
            '<span class="' + totalClass + '"></span>';
      },

      /*      
      //! Прогресбар
      type: 'progressbar', 
      */
   },

   //! Скролл
   scrollbar: {
      el: '.swiper-scrollbar',
      //! Можливість перетаскувати скролл
      draggable: true,
   },

   //! Включення/відключення
   //! Перетаскування на ПК
   simulateTouch: true,
   //! Чутливість свайпа
   touchRatio: 1,
   //! Кут спрацювання свайпа/перетаскування
   touchAngle: 45,
   //! Курсор перетасування
   grabCursor: true,

   //! Переключення при кліку на слайд
   slideToClickedSlide: true,

   //! Навігація по хешу
   hashNavigation: {
      //! Відслідковувати стан
      watchState: true,
   },

   //! Управління клавіатурою
   keyboard: {
      //! Включити/виключити
      enabled: true,
      //! Включити/виключити
      //! тільки тоді коли слайдер
      //! в межах вьюпорта
      onlyInViewport: true,
      //! Включити/виключити
      //! управління клавішами
      //! PageUp, PageDown
      pageUpDown: true,
   },

   //! Управління колесом миші
   mousewheel: {
      //! Чутливість об'єкта на якому
      sensitivity: 1,
      //! буде спрацьовувати прокрутка мишею
      //eventsTarget: ".image-slider",
   },

   //! Авто-висота
   autoHeight: false,

   //! Кількість слайдів для показа
   slidesPerView: 3,

   //! Відключення функціонала
   //! якщо слайдів менше ніж потрібно
   watchOverflow: true,

   //! Відступ між слайдами 
   spaceBetween: 30,

   //! Кількість пролистуємих слайдів
   slidesPerGroup: 1,

   //! Активний слайд по центру 
   centeredSlides: false,

   //! Стартовий слайд
   initialSlide: 0,

   //! Мультирядність
   //slidesPerColumn: 1,

   //! Безкінченний слайдер
   loop: false,

   //! Кількість дублюючих слайдів
   loopedSlides: 0,

   //! Вільний режим
   freeMode: false,

   //! АВтопрокрутка
   /* 
   autoplay:{
   //! Пауза між прокруткою
      delay: 1500,
      //! Закінчити на останньому слайді
      stopOnLastSlide: false,
      //! Відключити після ручного переключення
      disableOnInteraction: false,
   },
   */

   //! Швидкість
   speed: 800,

   //! Вертикальний слайдер
   //direction: 'vertical',


   //! Ефекти переключення слайдів
   //! Гортання 
   effect: 'slide',


   //! Ефекти переключення слайдів
   //! Зміна прозорості 
   //effect: 'fade',

   //! Доповнення до fade
   /*
   fadeEffect: {
      //! Паралельна
      //! зміна прозорості
      crossFade: true,
   },
   */

   //! Ефекти переключення слайдів
   //! Переворот 
   //effect: 'flip',

   //! Доповнення до flip
   /*
   flipEffect: {
      //! Тінь
      slideShadows: true,
      //! Показ тільки активного слайда
      limitRotation: true,
   }, 
   */

   //! Ефекти переключення слайдів
   //! Переворот 
   //effect: 'coverflow',

   //! Доповнення до coverFlow

   /*    
   coverFlowEffect: {
   //! Кут
   rotate: 20,
   //! Накладання 
   stretch: 50,
   //! Тінь
   slideShadows: true,
   },
   */

   //! Брейк поінти (адаптив)
   /* 
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      },
   },
   */

   //! Відключити перед-загрузку картинок
   preloadImages: false,
   //! Lazy Loading
   //! (підгрузка картинок)
   lazy: {
      //! Підгружати на старті
      //! переключення слайда
      loadOnTransitionStart: false,
      //! Підгрузити попередню
      //! і наступну картинки
      loadPrevNext: false,
   },
   //! Відслідковування за видимими слайдами
   watchSlidesProgress: true,
   //! Додання класа видимим слайдам
   watchSlidesVisibility: true, 

   //! ЗУм картинок
   zoom: {
      //! Максимальне збільшування
      maxRatio: 5,
      //! Мінімальне збільшування
      minRatio: 1,
   }
});