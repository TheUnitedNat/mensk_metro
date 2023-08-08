class st_first_line {
    constructor(x, y, radius, first_ang, sec_ang, station_name) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.first_ang = first_ang;
        this.sec_ang = sec_ang;
        this.station_name = station_name;
    }
    get f_draw() {
        return this.line_draw();
    }
    get f_text() {
        return this.line_text();
    }
    line_text() {
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.font = "12px serif";
        ctx.fillStyle = "Black";
        ctx.fillText(this.station_name, this.x+25, this.y+2);
        ctx.stroke();
    }
    line_draw() {
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.first_ang, this.sec_ang);
        ctx.fillStyle = "#FF140A";
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius+3, this.first_ang, this.sec_ang);
        ctx.fillStyle = "#FFFFFF";
        ctx.stroke();

    }
}
function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        
        ctx.beginPath();
        p1 = new st_first_line(50, 50, 5, 0, 360, "Каменная горка");
        p1.f_draw;
        p1.f_text;
        p2 = new st_first_line(100, 100, 5, 0, 360, "Кунцаўшчына");
        p2.f_draw;
        p2  .f_text;
        p3 = new st_first_line(150, 150, 5, 0, 360, "Спартыўная");
        p3.f_draw;
        p3.f_text;
        p4 = new st_first_line(200, 200, 5, 0, 360, "Пушкінская");
        p4.f_draw;
        p4.f_text;
        p5 = new st_first_line(250, 250, 5, 0, 360, "Маладзёжная");
        p5.f_draw;
        p5.f_text;
        
        ctx.beginPath();
        ctx.strokeStyle = "#FF140A";
        ctx.lineWidth = 3;
        ctx.moveTo(50, 50);
        ctx.lineTo(250, 250);
        ctx.stroke();
    }
}