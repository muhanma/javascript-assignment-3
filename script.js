// Do your work in this file.
//--Do your work in this file.--//
//--1. Fork this repo.--//
//--2. Only code inside the file named script.js. No editing any other files--//

//--3. Create a div element with a class name of "view" and append it to the document body.

var view = document.createElement("div");
view.className = "view";
document.body.appendChild(view);

//--4. Create a div element with a class name of "grass" and append it to the previously created "view" div from step 3.
var grass = document.createElement("div");
grass.className = "grass";
view.appendChild(grass);

//--5. Create a div element with a class name of "sun" and append it to the previously created "view" div from step 3.
var sun = document.createElement("div");
sun.className = "sun";
view.appendChild(sun);

//--6. The div classes will be "ray-1", "ray-2", "ray-3", "ray-4", and "ray-5". 
var rayN = 1;
while (rayN <= 5) {
    var ray = document.createElement("div");
    ray.className = "ray-"+rayN;
    sun.appendChild(ray);
    rayN++;
}
//--7.Create a div element with a class name of "mountain" and append it to the previously created "view" div from step 3.
var mountain = document.createElement("div");
mountain.className = "mountain";
view.appendChild(mountain);
//--8.Create a div element with a class name of "top" and append it to the previously created "mountain" div from 
var Top = document.createElement("div");
Top.className = 'mountain-top';    
mountain.appendChild(Top);

//--9.do while, mountain cap
var cap = 0;
do {
    var mountainCap = document.createElement("div");
    mountainCap.className = 'mountain-cap-' + (cap + 1);    
    Top.appendChild(mountainCap);
    cap ++;
} while (cap <= 3);
