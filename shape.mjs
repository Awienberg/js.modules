'use strict';
//shape.mjs

const Shape = {
    initinit(canvas, x, y, color) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.x = x;
        this.y = y;
        this.color = color;
    },

    draw() {
        this.context.beginPath();
        this.context.moveTo(this.x, this.y);
        this.context.rect(this.x, this.y, this.width, this.height);
        this.context.closePath();

        this.context.lineWidth = 2;
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.stroke();        
    },

    move() {
        this.x += 0;
        this.y += 0;
    }
};

const Circle = {
    init(canvas, x, y, r, startangle, endangle, color, dir, dx = 3, dy = 0) {
        this.r = r;
        this.startangle = startangle;
        this.endangle = endangle;
        this.direct = dir;
        this.dx = dx;
        this.dy = dy;
        this.initinit(canvas, x, y, color);
    },

    draw() {
        this.context.beginPath();
        this.context.moveTo(this.x, this.y);
        this.context.arc(this.x, this.y, this.r, this.startangle, this.endangle, this.direct);
        this.context.closePath();

        this.context.lineWidth = 2;
        this.context.fillStyle = this.color;
        this.context.fill();
    },        

    move() {
        this.x += this.dx;
        this.y += this.dy;

        if(this.x < 25){ //venstre øverste hjørne
            this.x = 25;
            this.dx = 0;
            this.dy = 3;
            this.color = 'green';

        }else if(this.x > this.canvas.getWidth() - 25){ //nederste højre hjørne
            this.x = this.canvas.getWidth() - 25;
            this.dy = -3;
            this.dx = 0;
            this.color = 'orange';
        
        }else if(this.y < 25){ //højre øverste hjørne
            this.dy = 0;
            this.dx = -3;
            this.color = 'yellow';
        
        }else if (this.y > this.canvas.getHeight() - 25) {  // nederste venstre hjørne
            this.dy = 0;
            this.dx = 3;
            this.color = 'red';
        }
    }
};
Object.setPrototypeOf( Circle, Shape );

export {Circle};