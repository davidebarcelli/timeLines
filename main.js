"use strict";

(function() {
	let lines = [];
	const   //fs = require("fs"),
		canvas = document.getElementById("mainCanvas"),
		ctx = canvas.getContext('2d'),
		w = canvas.width,
		h = canvas.height,
		lineProps = {
			width:2,
			padding:20
		},
		loadLines = () => {
			//temporary code to be replaced by loading a (some) text files
			lines.push({
				name:"test",
				events:[
					{name:"e1",date:new Date(2017,9,1),size:3},
					{name:"e3",date:new Date(1017,8,11),size:5},
					{name:"e4",date:new Date(1517,8,11),size:4},
					{name:"e2",date:new Date(1890,8,11),size:2},
				],
				color:"red"
			});

			lines.push({
				name:"boh",
				events:[
					{name:"e1",date:new Date(1317,9,1),size:3},
					{name:"e3",date:new Date(1667,8,11),size:2},
					{name:"e4",date:new Date(1517,8,11),size:4},
					{name:"e2",date:new Date(1890,8,11),size:4},
				],
				color:"blue"
			});
		},
		drawLines = () => {
			let py = 0;
			const   dates = lines.reduce( (acc,line) => acc.concat( line.events.map( (e) => e.date) ) ,[]),
				dMin = new Date(Math.min.apply(null,dates)),
				dMax = new Date(Math.max.apply(null,dates)),//assume nothing happened before Christ
				delta = dMax - dMin;
			const drawLine = (line) => {
				const drawEvents = () => {
					const drawEvent = (event) => {
						const p = w*(event.date-dMin)/delta,
							r = event.size;
						ctx.ellipse(p,py,r,r,0, 0, 2 * Math.PI);
						ctx.fillStyle = line.color;
						ctx.fill();
						ctx.lineWidth=1;
						ctx.strokeStyle="black";
						ctx.strokeText(event.name,p-3,py+10);
					};
					line.events.forEach(drawEvent);	
				};
				py += lineProps.padding;
				ctx.lineWidth=1;
				ctx.strokeText(line.name,0,py-lineProps.width);
				ctx.lineWidth = lineProps.width;	
				ctx.beginPath();
				ctx.moveTo(0,py);
				ctx.lineTo(w,py);
				ctx.closePath();
				ctx.strokeStyle = line.color;
				ctx.stroke();
				drawEvents();
				py += lineProps.padding + lineProps.width;
			};
			lines.forEach(drawLine);
		};
	loadLines();
	drawLines();
}());
