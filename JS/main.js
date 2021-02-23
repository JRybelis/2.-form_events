import {form} from './forms/form.js';
// import {username} from './forms/form.js';

form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(username.value); optional, because form already has elements with #id that we can refer to from its event listener
    console.log (form.username.value); // as above
});

