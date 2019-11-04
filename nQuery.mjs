'use strict';
//nQuery.mjs

const $ = function (foo) {
    return document.getElementById(foo);    // get element by id
}

/* arr: array of objects to be animated, must have move and draw
 * onoff: variable for suspending animation
 * delay: number of millisecs between displays
 * Canvas module with prep and clear
 */
    const animate = function(arr, onoff, delay) {
        onoff = setInterval(function() {
            if (arr.length < 1) {
                return;
            }
            arr[0].canvas.clear();
            arr[0].canvas.prep();
            for (let obj of arr) {
                obj.move();
                obj.draw();
            }
        }, delay);
    }

export {$, animate};