document.querySelectorAll('[data-slider]').forEach(function(slider){
    var track = slider.querySelector('.slider-track');
    var slides = track.querySelectorAll('img');
    var dotsWrap = slider.querySelector('.slider-dots');
    var current = 0;

    slides.forEach(function(_, i){
      var dot = document.createElement('div');
      dot.className = 'dot' + (i === 0 ? ' active' : '');
      dot.addEventListener('click', function(){ goTo(i); });
      dotsWrap.appendChild(dot);
    });
    var dots = dotsWrap.querySelectorAll('.dot');

    function goTo(i){
      current = (i + slides.length) % slides.length;
      track.style.transform = 'translateX(-' + (current * 100) + '%)';
      dots.forEach(function(d, idx){ d.classList.toggle('active', idx === current); });
    }

    slider.querySelector('.slider-prev').addEventListener('click', function(){ goTo(current - 1); });
    slider.querySelector('.slider-next').addEventListener('click', function(){ goTo(current + 1); });
  });
