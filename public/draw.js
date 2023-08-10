var stationsData = [
    {
        id: 1,
        x: 50,
        y: 50,
        radius: 3,
        name: 'Каменная горка',
        trainLineId: 1,
        titlePosition: 'right'
    },
    {
        id: 2,
        x: 100,
        y: 100,
        radius: 3,
        name: 'Кунцевщина',
        trainLineId: 1,
        titlePosition: 'right'
    },
    {
        id: 3,
        x: 150,
        y: 150,
        radius: 3,
        name: 'Спортивная',
        trainLineId: 2,
        titlePosition: 'right'
    },
    {
        id: 4,
        x: 200,
        y: 200,
        radius: 3,
        name: 'Пушкинская',
        trainLineId: 1,
        titlePosition: 'right',
    },
    {
        id: 5,
        x: 250,
        y: 250,
        radius: 3,
        name: 'Молодёжная',
        trainLineId: 1,
        titlePosition: 'right',
    },
    {
        id: 6,
        x: 300,
        y: 300,
        radius: 3,
        name: 'Фрунзенская',
        trainLineId: 1,
        titlePosition: 'right'
    },
    {
        id: 8,
        x: 300,
        y: 320,
        radius: 3,
        name: 'Юбилейная площадь',
        trainLineId: 3,
        titlePosition: 'left'
    },
    {
        id: 7,
        x: 350,
        y: 350,
        radius: 3,
        name: 'Немига',
        trainLineId: 1,
        titlePosition: 'right',
    },
    {
        id: 9,
        x: 400,
        y: 400,
        radius: 3,
        name: 'Октябрьская',
        trainLineId: 1,
        titlePosition: 'right',
    },
    {
        id: 10,
        x: 450,
        y: 450,
        radius: 3,
        name: 'Первомайская',
        trainLineId: 1,
        titlePosition: 'right',
    },
    {
        id: 11,
        x: 300,
        y: 370,
        radius: 3,
        name: 'Площадь франтишка Богушевича',
        titlePosition: 'left',
        trainLineId: 3
    },
    {
        id: 12,
        x: 385,
        y: 415,
        radius: 3,
        name: 'Купаловская',
        titlePosition: 'left',
        trainLineId: 2,
    },
    {
        id: 13,
        x: 350,
        y: 450,
        radius: 3,
        name: 'Площадь Ленина',
        titlePosition: 'left',
        trainLineId: 2
    },
    {
        id: 14,
        x: 335,
        y: 465,
        radius: 3,
        name: 'Вокзальная',
        titlePosition: 'left',
        trainLineId: 3
    }
];

var trainLines = [
    {
        id: 1,
        name: 'Красная ветка',
        color: '#FF0000'
    },
    {
        id: 2,
        name: 'Синяя ветка',
        color: '#0000FF'
    },
    {
        id: 3,
        name: 'Зеленая ветка',
        color: '#00FF00'
    }
];

class Station {
    constructor(id, x, y, radius, name, trainLineId, titlePosition) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.name = name;
        this.trainLineId = trainLineId;
        this.titlePosition = titlePosition;
    }

    renderConnectionLineText() {
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.font = "12px serif";
        ctx.fillStyle = "Black";
        if (this.titlePosition == 'right') {
            ctx.fillText(this.name, this.x + 25, this.y - 10);
        } else {
            ctx.fillText(this.name, this.x - 200, this.y - 10);
        }
        ctx.stroke();
    }
    renderConnectionLineRect() {
        var ctx = canvas.getContext("2d");

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius + 3, 0, 2 * Math.PI);

        ctx.lineWidth = 3;
        ctx.strokeStyle = '#000000';
        ctx.stroke();

        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = '#FFFFFF';
        ctx.fill();

    }
}


class ConnectionLine {
    constructor(firstStation, secondStation, type) {
        this.firstStation = firstStation;
        this.secondStation = secondStation;
        this.type = type;
    }

    render() {
        var ctx = canvas.getContext('2d');
        ctx.beginPath();
        var color = null;
        var lineWidth = null;

        if (this.firstStation.trainLineId == this.secondStation.trainLineId) {
            console.log(this.firstStation)
            var trainLine = trainLines.filter(t => t.id == this.firstStation.trainLineId)[0];
            color = trainLine.color;
            lineWidth = 10;
        } else {
            if (this.type == 'transition') {
                lineWidth = 15;
                color = '#808080';
            }
        }

        ctx.moveTo(this.firstStation.x, this.firstStation.y);
        ctx.lineTo(this.secondStation.x, this.secondStation.y);
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth;
        ctx.stroke();

        if (this.type == 'transition') {
            ctx.moveTo(this.firstStation.x, this.firstStation.y);
            ctx.lineTo(this.secondStation.x, this.secondStation.y);
            ctx.strokeStyle = '#808080';
            ctx.lineWidth = 5;
            ctx.stroke();
        }

    }
}

var stationsInstances = [];
var connectionLinesInstances = [];

function generateStationInstance(stationObj) {
    const { id, x, y, radius, name, trainLineId, titlePosition } = stationObj;
    return new Station(id, x, y, radius, name, trainLineId, titlePosition);
}

function draw() {
    var canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");

        ctx.beginPath();



        var connections = [
            { from: 1, to: 2, type: 'default' },
            { from: 2, to: 3, type: 'default' },
            { from: 3, to: 4, type: 'default' },
            { from: 4, to: 5, type: 'default' },
            { from: 5, to: 6, type: 'default' },
            { from: 6, to: 7, type: 'default' },
            { from: 6, to: 8, type: 'transition' },
            { from: 8, to: 11, type: 'default' },
            { from: 7, to: 9, type: 'default' },
            { from: 9, to: 10, type: 'default' },
            { from: 9, to: 12, type: 'transition' },
            { from: 12, to: 13, type: 'default' },
            { from: 13, to: 14, type: 'transition' },
            { from: 11, to: 14, type: 'default' },
        ]

        stationsData.forEach(station => {
            stationsInstances.push(generateStationInstance(station))
        });



        connections.forEach(connection => {
            var fromStation = stationsInstances.filter(s => s.id == connection.from)[0];
            var toStation = stationsInstances.filter(s => s.id == connection.to)[0];

            connectionLinesInstances.push(new ConnectionLine(fromStation, toStation, connection.type));
        });

        connectionLinesInstances.forEach(connectionLineInstance => {
            connectionLineInstance.render();
        });

        stationsInstances.forEach(stationInstance => {
            stationInstance.renderConnectionLineRect();
            stationInstance.renderConnectionLineText();
        })
    }
}