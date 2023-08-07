// for adding two numbers 
let introduction=document.querySelector('.introduction')
let back=document.querySelector('#back')
let all=document.querySelector('.all')
let intro=document.querySelector('#intro')
let nu1 = document.getElementById('one');
let nu2 = document.getElementById('two');
let ans = document.querySelector('.ans');
all.style.display="none"
intro.addEventListener('click',()=>{
  introduction.style.display="none";
  all.style.display='inline'
})
back.addEventListener('click',()=>{
    introduction.style.display="inline";
    all.style.display='none'
  })
  
function add() {
    let a = parseFloat(nu1.value) + parseFloat(nu2.value);
    ans.innerHTML = a;
}

// for fetching data 
let ans1 = document.querySelector('.ans1');
let poke=document.querySelector('#poke');
let bt=document.getElementById('sub');
let mov=document.querySelector('.mov')
bt.addEventListener('click',async()=>{
    const inpu=poke.value;
    ans1.innerHTML='';
    mov.innerHTML='';
    const response= await fetch(`https://pokeapi.co/api/v2/pokemon/${inpu}`);
    const data= await response.json();
    const mo=document.createElement('p')
    const mo1=document.createElement('p')

         mo.innerHTML=`name: ${data.name} <br> height:${data.height} <br> weight: ${data.weight}`
         ans1.appendChild(mo);
        document.querySelector('.image').src=data.sprites.other.dream_world.front_default;
       
        data.moves.map((e)=>{
            debugger;
            const mo1=document.createElement('p')
            mo1.innerHTML=e.move.name;
            mov.appendChild(mo1)
        })
        console.log(data)
   
 
})
// promise example
function pro() {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(3434)
        },9000)
    })
}
pro().then((result)=>{
    console.log(result);
})

// async example

async function yo(){
    function a(){
        return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(34)
        }, 3000);
    })}
    function b(){
        return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(65)
        },1000)
    })}

    let c=await a();
    let d=await b();
    console.log(c,d);
}
yo();


// star pattern 
const star=document.querySelector('.star');
const pat=10;
const btn=document.getElementById('btn');
const poo=document.getElementById('na');

btn.addEventListener('click',()=>{
  
    star.innerHTML=" ";
    const na=poo.value;
    console.log(na);
switch(na){
    case '1':
       
            let string='*';
            for(let i=0;i<pat;i++){
                debugger;
                for(let j=0;j<i;j++){
                 string+='*';
                }
                const p=document.createElement('p');
                 p.innerHTML=string;
                 star.appendChild(p);
            }
    
        break;

        case '2':
           
              
               
                for(let i=1;i<=pat;i++){
                    let string='';
                    for(let j=1;j<=11-1;j++){
                       
                     string+='*';
                    
                    }
                    const p=document.createElement('p');
                     p.innerHTML=string;
                     star.appendChild(p);
                }
            
            break ;

            case '3':
                
                  
                    for(let i=1;i<=pat;i++){
                        let string='';
                        for(let j=1;j<=pat-i;j++){
                         string+=' ';
                        }
                        for(let a=0;a<2*i-1;a++){
                            string+='*'
                        }
                        const p=document.createElement('p');
                         p.innerHTML=string;
                         star.appendChild(p);
                    }
             
                break;
                default:
                    const p=document.createElement('p');
                         p.innerHTML="Error";
                         star.appendChild(p); 
}

})