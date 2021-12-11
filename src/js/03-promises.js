// //В HTML есть разметка формы, в поля которой пользователь будет вводить первую задержку в миллисекундах, шаг увеличения задержки 
// //для каждого промиса после первого и количество промисов которое необходимо создать.
// //




const startPromise = document.querySelector('[type=submit]');

startPromise.addEventListener('click', onSubmitCreatePromise);
function onSubmitCreatePromise(event){
  event.preventDefault();

  let delay = document.querySelector("[name=delay]").value;
  let step = document.querySelector("[name=step]").value;
  let amount = document.querySelector("[name=amount]").value;

      const createPromise = (position, step) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3; 
    
      if (shouldResolve) {
        // Fulfill
          resolve({position, step});          
      }
        // Reject
          reject({position, step});
      
  
      
  })
}


  for(let i = 1; i <= amount; i += 1){
   setTimeout(() => {
      position = i;
      resalt = i * step;
  
  createPromise(position, step)
    .then(({ position, step }) => {

      console.log(`✅ Fulfilled promise ${position} in ${resalt} ms`);
    })
    .catch(({ position, step }) => {
      console.log(`❌ Rejected promise  ${position} in ${resalt} ms`);
    })
    }, delay);
  }
}
  