import {form} from './forms/form.js';
// import {username} from './forms/form.js';
import {feedback} from './forms/form.js';

const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(username.value); optional, because form already has elements with #id that we can refer to from its event listener
    console.log (form.username.value); // as above
    //form validation:
    const usernameInput = form.username.value;
    
    
    if (usernamePattern.test(usernameInput)) {
        //feedback good info
        feedback.textContent = 'The username supplied is valid.';
    } else {
        // feedback help info
        feedback.textContent = 'The username must containt 6 to 12 letters only.';
    }
});

// testing RegEx example
const username = 'Giorgio';
const pattern = /^[a-zA-Z]{6,}$/;

let result = pattern.test(username); // returns boolean true or false.
result = username.search(pattern); // does the check but returns an integer (for the position where the match was found). -1 if no match.


//live feedback
form.username.addEventListener('keyup', e => {
    // console.log(e.target.value, form.username.value); // both can be used to obtain the keyboard input value
    if (usernamePattern.test(e.target.value)){
        form.username.setAttribute('class', 'success');
    } else {
        form.username.setAttribute('class', 'error');
    }
});
