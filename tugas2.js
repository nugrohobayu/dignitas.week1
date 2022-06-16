function capital(str){
    return str.replace (/\w\S*/g,
    function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
}

text = "dignitas bka is the coolest academy";
console.log(capital(text));

function back(numbers){
    return numbers.toString().split('').reverse().join('');
}

numbers = 9876549;
console.log(back(numbers));

// function konversi(){

//     let uang = "USD";

//     if(uang == "USD"){
// 		hasil = input*13500;
// 	}
// 	else if(uang == "SGD"){
// 		hasil = input*9900;
// 	}
// 	else if(uang == "AUD"){
// 		hasil = input*10400;
// 	}
// 	else if(uang == "EURO"){
// 		hasil = input*15900;
// 	}
// 	else if(hitunguang == "CNY"){
// 		hasil = input*2000;
// 	}
// 	else{
// 		hasil = 0;
// 	}

// }

// console.log()

function konversi(mata_uang, idr){
	
	if(mata_uang == "USD"){
		konv = idr*14000;
	} else if(mata_uang == "YEN"){
		konv = idr*1;
	} else if(mata_uang == "YUAN"){
		konv = idr*1;
	} else if (mata_uang == "Ringgit"){

	} else{
		konv = idr;
	}
}

konversi("USD", 1);
//console.log(`1 USD setara dengan Rp. konversi()`);