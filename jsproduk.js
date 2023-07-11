document.addEventListener('DOMContentLoaded', function() {
  const decrementBtn = document.querySelector('.decrement');
  const incrementBtn = document.querySelector('.increment');
  const counterInput = document.querySelector('.counter');

  decrementBtn.addEventListener('click', function() {
    decrementCounter();
  });

  incrementBtn.addEventListener('click', function() {
    incrementCounter();
  });

  function decrementCounter() {
    let value = parseInt(counterInput.value);
    if (value > 0) {
      value--;
      counterInput.value = value;
    }
  }

  function incrementCounter() {
    let value = parseInt(counterInput.value);
    value++;
    counterInput.value = value;
  }
});
