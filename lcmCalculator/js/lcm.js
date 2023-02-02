let cont = document.getElementById("cont") 
const lcmfunc = (num)=>{
        cont.innerHTML = "";
        let divNum = 1;
        let lcm = [];
        while(true){
                divNum++;
                while(num % divNum == 0){
                	    cont.innerHTML = cont.innerHTML + `
                                <div class="lcm">
                                        <p class="division">${divNum}</p>
                                        <p class="divisor">${num}</p>
                                </div>
                        `   
                        num = num/divNum
                        lcm.push(divNum)
                     
                }       
                if(num == 1) {
                        break;
                }
                
        }
        return lcm
        
}

let l = lcmfunc(50)
console.log(l)

let lcmNum = document.getElementById("lcm");
let calcBTN = document.getElementById("calc");

calcBTN.addEventListener("click",(e)=>{
	e.preventDefault()
    let num = lcmNum.value;
    lcmfunc(num)
    cont.innerHTML = cont.innerHTML + `
    	    <div class="lcm">
            		<p class="division"></p>
                    <p class="divisor">1</p>
            </div>
   `
})
