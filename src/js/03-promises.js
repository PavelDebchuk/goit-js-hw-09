//В HTML есть разметка формы, в поля которой пользователь будет вводить первую задержку в миллисекундах, шаг увеличения задержки 
//для каждого промиса после первого и количество промисов которое необходимо создать.
//
const startPromise = document.querySelector('[type=submit]');

startPromise.addEventListener('click', newCreatePromise);
function newCreatePromise(){
  createPromise(2, 1500)
  .then(({ position, delay }) => {
    console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    console.log(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}


//Напиши скрипт, который при сабмите формы вызывает функцию createPromise(position, delay) столько раз,
//сколько ввели в поле amount. При каждом вызове передай ей номер создаваемого промиса (position) и задержку учитывая введенную пользователем первую задержку (delay) и шаг (step).

const createPromise = (position, delay) => {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
          resolve('promise виполнился успешно');
        } else {
        // Reject
          reject('error')
        }
    }, delay);
  })
}


// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });



//Значением промиса должен быть объект, в котором будут свойства position и delay со значениями одноименных параметров. Используй начальный код функции для выбора того, что нужно сделать с промисом - выполнить или отклонить.


// const promise = new Promise((resole, reject) => {
//   const calFulfill = Math.random() > 0.5;
//   setTimeout(() => {
//     if(calFulfill){
//       resole('promise виполнился успешно')
//     }
//     reject('promise отклонен, ошибка');
//   }, 1000);
// })

// promise.then(
//   result => {
//   console.log(`✅ ${result}`);
// },
// error => {
//   console.log(`❌ ${error}`);
// }
// );