import "./index.css";
import js_logo from './assets/js_logo.jpg'

console.log('Hello World!')

// Поддержка кода другими браузерами
// код, соответствующий стандарту ES6 (ECMAScript 2015), будет преобразован в стандарте ES5 (ECMAScript 2009)
// [1, 2, 3].map(n => n + 1)

// Плагин для работы с картинками
const img = document.createElement("img");
img.className = 'js-image'
img.src = js_logo;
document.body.append(img);