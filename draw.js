class station {
    constructor(x, y, radius, first_ang, sec_ang, station_name) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.first_ang = first_ang;
        this.sec_ang = sec_ang;
        this.station_name = station_name;
    }
    f_draw() {
        return this.line_draw();
    }
    f_text() {
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
var stationsData = [
    {
        x: 50,
        y: 50,
        radius: 5,
        first_ang: 360,
        sec_ang: 360,
        station_name: '12312'
    }
]

var stationsInstances = [ station ];

function generateStation() {
    return Station(x, y, radius, first_ang, sec_ang, station_name)
}
station.forEach(station => {
    stationsData.push(generateStation(station))
})
let i = 0;
while (i < stationsData.length) { 
    stationsData[i].f_draw();
    stationsData[i].f_text();
    i++;
}
function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        
        ctx.beginPath();
        //p1 = new station(50, 50, 5, 0, 360, "Каменная горка");
        p2 = new station(100, 100, 5, 0, 360, "Кунцаўшчына");
        p2.f_draw;
        p2.f_text;
        p3 = new station(150, 150, 5, 0, 360, "Спартыўная");
        p3.f_draw;
        p3.f_text;
        p4 = new station(200, 200, 5, 0, 360, "Пушкінская");
        p4.f_draw;
        p4.f_text;
        p5 = new station(250, 250, 5, 0, 360, "Маладзёжная");
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