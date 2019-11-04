'use strict';
//main.mjs

import {Canvas} from './canvas.mjs';
import {$, animate} from './nQuery.mjs';
import {Circle} from './shape.mjs';

let object = [];
let startStop;
const MILLISECS = 10;

let canvas = Object.create(Canvas);
canvas.init('myCanvas', '#000');

let circle = Object.create(Circle);
circle.init(canvas, 25, 375, 16, 0, Math.PI * 2, 'red', false);
object.push(circle);

animate(object, startStop, MILLISECS);