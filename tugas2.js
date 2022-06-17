
// FUNCTION MENGUBAH HURUF MENJADI KAPITAL
function capital(str){
    return str.replace (/\w\S*/g,
    function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
}

text = "dignitas bka is the coolest academy";
console.log(capital(text));







// FUNCTION MEMBALIKKAN URUTAN ANGKA
function back(numbers){
    return numbers.toString().split('').reverse().join('');
}
numbers = 9876549;
console.log(back(numbers));



//FUNCTION CONVERSI MATA UANG
function convert(name, nominal, to_convert){
	if (name == "USD"){
		if (to_convert == "IDR"){
			
		let result = nominal*14571;
		return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
		} else if(to_convert == "YEN"){
			let result = nominal*133;
			return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
		} else if(to_convert == "Chinese Yuan"){
			let result = nominal*6.68;
			return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
		} else if(to_convert == "Ringgit"){
			let result = nominal*4.48;
			return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
		}
	} else if(name == "IDR"){
		if(to_convert == "USD"){
				
		let result = nominal*0.000070;
		return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
		} else if(to_convert == "YEN"){
			let result = nominal*0.0092;
			return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
		} else if(to_convert == "Chinese Yuan"){
			let result = nominal*0.00046;
			return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
		} else if(to_convert == "Ringgit"){
			let result = nominal*0.00030;
			return `${nominal} ${name} setara dengan ${result} ${to_convert}`;

		}
	} else if(name == "YEN"){
		if(to_convert == "USD"){
				
			let result = nominal*0.0075;
			return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
			} else if(to_convert == "IDR"){
				let result = nominal*108.46;
				return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
			} else if(to_convert == "Chinese Yuan"){
				let result = nominal*0.050;
				return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
			} else if(to_convert == "Ringgit"){
				let result = nominal*0.033;
				return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
	
			}
		
	} else if(name == "Chinese Yuan"){
		if(to_convert == "USD"){
				
			let result = nominal*0.15;
			return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
			} else if(to_convert == "IDR"){
				let result = nominal*2167.27;
				return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
			} else if(to_convert == "YEN"){
				let result = nominal*19.95;
				return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
			} else if(to_convert == "Ringgit"){
				let result = nominal*0.66;
				return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
	
			}

	} else if(name == "Ringgit"){
		if(to_convert == "USD"){
			let result = nominal*0.23;
			return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
			} else if(to_convert == "IDR"){
				let result = nominal*3294.15;
				return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
			} else if(to_convert == "YEN"){
				let result = nominal*30.33;
				return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
			} else if(to_convert == "Chinese Yuan"){
				let result = nominal*1.52;
				return `${nominal} ${name} setara dengan ${result} ${to_convert}`;
	
			}

	}else{
		return "No Selected Currency";
	}
}
console.log(convert("USD", 10, "IDR"));
console.log(convert("USD", 10, "YEN"));
console.log(convert("USD", 10, "Chinese Yuan"));
console.log(convert("USD", 10, "Ringgit"));
