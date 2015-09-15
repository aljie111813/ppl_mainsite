angular.module('mainSiteModule').controller('AboutController', ['$scope', 'AboutFactory', aboutController]);

function aboutController($scope, AboutFactory) {
    $scope.pplCommittees = AboutFactory.getCommittees();
    $scope.devTeamMembers = AboutFactory.getDevTeamMembers();


    setTimeout(function () {
        var canvas = document.getElementById('animatedCanvas');
        console.log(canvas);
        var ctx = canvas.getContext("2d");




        function resizeCanvas() {
            canvas.style.width = window.innerWidth-30  + "px";
            W = canvas.style.width;
            // artifical delay so innerHeight is correct
            setTimeout(function () {
                canvas.style.height = (window.innerHeight) + "px";
                H = canvas.style.height;

                setInterval(drawDots, 100);
            }, 20);
        };

        // Webkit/Blink will fire this on load, but Gecko doesn't.
        window.onresize = resizeCanvas;

        // So we fire it manually...


        var requestAnimationFrame = (function (callback) {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
        })();

        var W = window.innerWidth;
        var H = window.innerHeight;

        canvas.width = W;
        canvas.height = H;

        function drawDots() {
            for (var i = 0 ; i < 100; i++) {
                ctx.fillStyle = i % 2 === 0 ? "#6d8cc1" : "pink";
                ctx.beginPath();
                ctx.arc(Math.ceil(Math.random() * W), Math.ceil(Math.random() * H), 10, 0, 2 * Math.PI);
                //ctx.stroke();
                ctx.fill();
            }
        }

        //setInterval(drawDots, 100);


        //var mp = 50; //max particles
        //var particles = [];
        //for (var i = 0; i < mp; i++) {
        //    particles.push({
        //        x: Math.random() * W, //x-coordinate
        //        y: Math.random() * H, //y-coordinate
        //        r: Math.random() * 4 + 3, //radius
        //        d: Math.random() * mp //density
        //    })
        //}

        //Lets draw the flakes
        //function draw() {
        //ctx.clearRect(0, 0, W, H);

        //ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ////ctx.beginPath();
        ////for (var i = 0; i < mp; i++) {
        //    var p = particles[i];
        //    //ctx.moveTo(p.x, p.y);
        //    //ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);

        //    ctx.fillStyle = "rgb(0, 38, 58)";
        //    ctx.arcTo(150, 150, 150, 250,90);
        ////}
        //ctx.fill();
        ////update();



        //var pplLogo = {
        //    path: new Path2D(),
        //    x: 850,
        //    y: 175,
        //    draw: function () {

        //        this.path.arcWidth = 150;
        //        this.path.strokeStyle = 'red';
        //        this.path.arc(this.x, this.y, 140, 0.5, Math.PI, true);
        //        this.path.moveTo(this.x + 90, this.y - 90 );
        //        this.path.arc(this.x, this.y - 50, 100, 320, Math.PI - 0.25, false);
        //        this.path.moveTo(this.x + 90, this.y - 120);
        //        this.path.arc(this.x, this.y - 20, 60, 0, Math.PI , true);

        //        return this.path;
        //    }
        //};
        //ctx.stroke(pplLogo.draw());

        //var path = new Path2D();
        //path.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
        //path.moveTo(110, 75);
        //path.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
        //path.moveTo(65, 65);
        //path.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
        //path.moveTo(95, 65);
        ////path.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
        //var canvasWidth = 250;
        //var canvasHeight = H;
        ////var ctx = canvas.getContext("2d");
        //var canvasData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);


        //// That's how you define the value of a pixel //
        //function drawPixel(x, y, r, g, b, a) {
        //    var index = (x + y * canvasWidth) * 4;

        //    canvasData.data[index + 0] = r;
        //    canvasData.data[index + 1] = g;
        //    canvasData.data[index + 2] = b;
        //    canvasData.data[index + 3] = a;
        //}

        //// That's how you update the canvas, so that your //
        //// modification are taken in consideration //
        //function updateCanvas() {
        //    ctx.putImageData(canvasData, 0, 0);
        //}

        //drawPixel(250, 250, 255, 255, 0, 255);
        //drawPixel(270, 270, 255, 255, 0, 255);
        //drawPixel(290, 290, 255, 255, 0, 255);
        //updateCanvas();

        ////}

        ////Function to move the snowflakes
        ////angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the flakes
        //var angle = 0;
        //function update() {
        //    angle += 0.01;
        //    for (var i = 0; i < mp; i++) {
        //        var p = particles[i];
        //        //Updating X and Y coordinates
        //        //We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
        //        //Every particle has its own density which can be used to make the downward movement different for each flake
        //        //Lets make it more random by adding in the radius
        //        p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
        //        p.x += Math.sin(angle) * 2;

        //        //Sending flakes back from the top when it exits
        //        //Lets make it a bit more organic and let flakes enter from the left and right also.
        //        if (p.x > W + 5 || p.x < -5 || p.y > H) {
        //            if (i % 3 > 0) //66.67% of the flakes
        //            {
        //                particles[i] = { x: Math.random() * W, y: -10, r: p.r, d: p.d };
        //            }
        //            else {
        //                //If the flake is exitting from the right
        //                if (Math.sin(angle) > 0) {
        //                    //Enter from the left
        //                    particles[i] = { x: -5, y: Math.random() * H, r: p.r, d: p.d };
        //                }
        //                else {
        //                    //Enter from the right
        //                    particles[i] = { x: W + 5, y: Math.random() * H, r: p.r, d: p.d };
        //                }
        //            }
        //        }
        //    }
        //}

        ////animation loop
        ////setInterval(draw, 33);
        ////draw(); 



    }, 200);
}