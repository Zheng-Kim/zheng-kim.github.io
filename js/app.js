let nav = document.querySelector(".container_nav");
let nav_anchor = document.querySelectorAll("div nav ul li a");

// console.log(nav_anchor);

console.log(nav);
window.addEventListener("scroll", (e) => { 

    if (window.pageYOffset != 0) {
        nav.style = "background-color:rgba(25,55,125,0.75);";
        nav_anchor.forEach((n) => {
            n.style = "color:#B3C5F5;";
        });
    }
    else { 
        nav.style = "";
       nav_anchor.forEach((n) => {
            n.style = "";
        });
    }

});

// // // // // // // // // // console.log("目前正在學習javascript喔");
// // // // // // // // // // console.log("目前正在學習java喔");
// // // // // // // // // // alert("歡迎進入js文件");
// // // // // // // // // // let x = prompt("請輸入您的姓名");
// // // // // // // // // // alert("歡迎您" + x);
// // // // // // // // // // console.log(x);
// // // // // // // // // // alert("a");
// // // // // // // // // // // let num = 3.15945949;
// // // // // // // // // // // num = num.toFixed(3);
// // // // // // // // // // // alert(num);

// // // // // // // // // // let str = "My name is AAAA";
// // // // // // // // // // console.log(str.split("A"));
// // // // // // // // // console.log(4 != "4"); // false
// // // // // // // // // console.log(4 !== "4"); // true

// // // // // // // // // // let x = true, y = true;
// // // // // // // // // // if (x && y) {
// // // // // // // // // //     console.log("yes");
// // // // // // // // // // }
// // // // // // // // // // else {
// // // // // // // // // //     console.log("no");
// // // // // // // // // // }
// // // // // // // // // let x = true;
// // // // // // // // // if (x ) {
// // // // // // // // //     console.log("yes");
// // // // // // // // // }
// // // // // // // // // else {
// // // // // // // // //     console.log("no");
// // // // // // // // // }

// // // // // // // // // console.log(typeof x)
// // // // // // // // let friends = ["Amy", "Kevin", "Cathy"];

// // // // // // // // function addFriend(name,age) {

// // // // // // // // 	console.log("新增一位朋友");
// // // // // // // // 	console.log("歡迎新朋友" + name +"，他本身已經"+age+"歲");
// // // // // // // // 	friends.push(name);
// // // // // // // // }

// // // // // // // // addFriend("Lebron",17); //呼叫函式
// // // // // // // // console.log(friends);

// // // // // // // function celToFah(cel) {
// // // // // // // 	let cel = prompt("請輸入攝氏溫度");

// // // // // // // 	let fah = cel * 1.8 + 32;

// // // // // // // 	return fah;

// // // // // // // // }
// // // // // // // // let input = prompt("請輸入攝氏溫度");
// // // // // // // // let output=celToFah(input);
// // // // // // // // alert("華氏溫度為" + output);

// // // // // // // let Kien = {
// // // // // // // 	// properties
// // // // // // // 	height: 175,
// // // // // // // 	weight: 70,
// // // // // // // 	age: 23,
// // // // // // // 	zodiac_sign: "Leo",
// // // // // // // 	//method
// // // // // // // 	sayHi() {
// // // // // // // 		console.log("Hi");
// // // // // // // 	},
// // // // // // // 	Doing(doing) {
// // // // // // // 		console.log("Kein is "+doing);
// // // // // // // 	},
// // // // // // // 	sayAge() {
// // // // // // // 		console.log("Kien is " + this.age + " years old");
// // // // // // // 	}

// // // // // // // };

// // // // // // // console.log(Kien["height"]);
// // // // // // // console.log(Kien.Doing("Running"));
// // // // // // // console.log(Kien.sayAge());

// // // // // // for ( let i = 0;  i <= 10;   i++) {

	
	
// // // // // // 	console.log(i);

// // // // // // 	if (i == 5) {
// // // // // // 		continue;
// // // // // // 	}
	


// // // // // // }

// // // // // // // let i = 0

// // // // // // // while (i <= 10) {
	
// // // // // // // 	console.log(i);
	
// // // // // // // 	i++;
// // // // // // // // }

// // // // // // let answer = Math.floor(Math.random() * 100);
// // // // // // console.log(answer);
// // // // // // let n1 = 0, n2 = 100;

// // // // // // while (true) {

// // // // // // 	let scope = alert("從" + n1 + "到" + n2);
// // // // // // 	let guess = prompt("請輸入猜測數字:");
	
// // // // // // 	if (guess < n1 || guess > n2) {
// // // // // // 		console.log("請猜測正確範圍內的值")
// // // // // // 		continue;
// // // // // // 	}
	
	
// // // // // // 	if (guess == answer) {
// // // // // // 		alert("恭喜答對!答案為" + guess)
// // // // // // 		break;
// // // // // // 	}

// // // // // // 	else if (guess > answer) {
// // // // // // 		n2 = guess;
// // // // // // 	}
// // // // // // 	else if (guess < answer) {
		
// // // // // // 		n1 = guess;
// // // // // // 	}
// // // // // // 	else  {  //輸入數字以外的內容
// // // // // // 		alert("請猜數字的值");
// // // // // // 	}
// // // // // // }

// // // // // // function findBiggest(arr) {
// // // // // // 	let biggestNumber = 0;
// // // // // // 	if (arr.length==0) {
// // // // // // 		return undefined;
// // // // // // 	}
// // // // // // 	for (let i = 0; i < arr.length; i++) {
// // // // // // 		if (arr[i] > biggestNumber) {
// // // // // // 			biggestNumber = arr[i];
// // // // // // 		}


// // // // // // 	}

	
// // // // // // 	return biggestNumber;
	
// // // // // // }

// // // // // // let c = findBiggest([]);
// // // // // // console.log(c);

// // // // // // let Kitty = {
// // // // // // 	sex : "Female",
// // // // // // 	walk(){
// // // // // // 		console.log("Kitty is walking");
// // // // // // 	}
// // // // // // }

// // // // // // let Kien = {
// // // // // // 	sex : "Male",
// // // // // // 	spouse : Kitty,
// // // // // // 	sayHi(){
// // // // // // 		console.log("Hi");
// // // // // // 	}
// // // // // // }



// // // // // // Kien.spouse.walk();

// // // // // // console.log(window.document);

// // // // // // let f = document.getElementById("first");
// // // // // // console.log(f);

// // // // // // let left = document.getElementsByClassName("left");
// // // // // // console.log(left);

// // // // // // let myh1 = document.querySelectorAll("#itsa_pic");
// // // // // // console.log(myh1);

// // // // // // // let allSection = document.querySelectorAll("section.left");
// // // // // // // console.log(allSection);

// // // // // // // let allSection02 = document.getElementsByClassName("left");
// // // // // // // console.log(allSection02);

// // // // // // let Kien = {

// // // // // //     sex: "male",

// // // // // //     name: "Cheng",

// // // // // //     //Function Declarion

// // // // // //     talk() {
// // // // // //         console.log(this.name + " is talking.");
// // // // // //         // console.log(this);
// // // // // //     },

// // // // // //     // Array Function Expression
// // // // // //     walk: () => {
// // // // // //         console.log(this.name + " is walking.");
// // // // // //         // console.log(this);
// // // // // //         //
// // // // // //     }
// // // // // // }




// // // // // // Kien.talk();
// // // // // // Kien.walk();


// // // // // // let luckyArray = [7, 14, 21];

// // // // // // luckyArray.forEach((n,index) =>{
// // // // // // //function()中一定要放個參數，代表array中的各個值 (注意! 非代表索引值)
// // // // // //     if (n > 20) {
// // // // // //         console.log(n);
// // // // // //         console.log(n + "索引值為:" + index);
// // // // // //     }
// // // // // // });

// // // // // let img_dom = document.querySelectorAll(".left");


// // // // // img_dom.forEach(
// // // // //     (value) => {
// // // // //         console.log(value);
// // // // //     }
// // // // // );

// // // // let _body = document.querySelector("body");

// // // // console.log(_body.children); // return HTML Collections

// // // // console.log(_body.childNodes); // return NodeList

// // // // console.log(_body.parentElement); // return 該物件的parent Element


// // // let _h1 = document.querySelector("h1");
// // // //不能使用SelectorAll來一次做修改

// // // _h1.innerHTML = "<mark>我好帥</mark>";

// // // _h1.innerText = "我好帥";

// // let _body = document.querySelector("body");

// let _h1 = document.createElement("h1");
// console.log(typeof _h1);
// _h1.innerHTML = "<mark>我好帥</mark>";

// // _body.appendChild(_h1);

// //  /**
// //   *
// //   *
// //   *
// //   */


// // let p = document.querySelector("p");

// // console.log(p);

// // p.classList.add("author_name");

// // p.classList.remove("class_red");

// let section = document.querySelector("section");

// let div = section.querySelectorAll("div");

// console.log(div);


// window.addEventListener("click", (e) => {

//     console.log(e);
//     console.log(typeof e);

// }
// );

// let button = document.querySelector("button");

// button.addEventListener("click", (e) => {

//     console.log(e.preventDefault);

// // });
// let button = document.querySelector("button");

// button.style.backgroundColor = "black";
// button.style.color = "white";

// button.style = "background-color:black; color:white;";

// button.style = "";

// let _h1 = document.querySelectorAll("h1");
// // 一次修改所有指定tag的方式:配合forEach做設定

// _h1.forEach((a) => {
    
//     a.innerHTML = "<mark>我好帥</mark>";  //差別在innerHTML => 可以加入HTML語法


// });
// let a = document.querySelector("div.a");
// let b = document.querySelector("div.b");

// a.addEventListener("click", (e) => {
    
//     alert("a callbackfuntion");

// });
// b.addEventListener("click", (e) => {

//     alert("b callbackfunction");
// });


let is_handsome = true;

localStorage.setItem("Kien's Face", JSON.stringify(is_handsome));

let face = JSON.parse(localStorage.getItem("Kien's Face"));

console.log(face);
console.log(typeof (face));



