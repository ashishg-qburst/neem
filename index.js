import $ from "jquery";
import anime from 'animejs';
import style from './style.css';

var weeb = function weeb() {
  anime({
    targets: '#cssSelector .el',
    translateX: 250
  });
};

$(function () {
  $('#trigger').click(function (e) {
    e.preventDefault();
    weeb();
  });
});
