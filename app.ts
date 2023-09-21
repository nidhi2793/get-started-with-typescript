const num1Element=document.getElementById('num1') as HTMLInputElement;
const num2Element=document.getElementById('num2') as HTMLInputElement;
const btn=document.querySelector('button')!;

const numResults: number[]=[];
const textResults: string[]=[];

type NumorString= number | string;



function add(num1:NumorString,num2:NumorString){
    if(typeof num1==='number' && typeof num2==='number'){
        return num1+num2
    }else if(typeof num1==='string' && typeof num2==='string'){
        return num1 +" "+num2
    }return num1+num2
   
}

function printResults(resultObj:{val:number;timestamp:Date}){
    console.log(resultObj.val)
}




btn.addEventListener('click',()=>{
    const num1=num1Element.value;
    const num2=num2Element.value;
    const result=add(+num1,+num2);
    console.log(result)
   const res= printResults({val:result as number,timestamp:new Date()})

})