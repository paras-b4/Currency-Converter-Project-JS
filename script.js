const url="https://api.fastforex.io/fetch-one?from=USD&to=INR&api_key=0c47a248ad-646f08b395-sttkyk"
api_key="0c47a248ad-646f08b395-sttkyk" // you need to chnage it in every 7 days 
const dropdowns=document.querySelectorAll(".dropdown select")

for(let select of dropdowns)
{
    for(currcode in countryList)
    {
        //  console.log(currcode,countryList[currcode])
        let newoption=document.createElement("option")
        newoption.innerText=currcode
        newoption.value=currcode
        if(select.name==='from' && currcode==='USD')
        {
            newoption.selected="selected"
        }
        else if(select.name==='to' && currcode==='INR')
            {
                newoption.selected="selected"
            }
        select.append(newoption)

    }
    select.addEventListener('change',(evnt)=>
    {
        updateflag(evnt.target)
    })
}

const updateflag=(element)=>
{
    let currcode=element.value
    let countrycode=countryList[currcode]
    console.log(countrycode)
    let newSrc=`https://flagsapi.com/${countrycode}/flat/64.png`
    let img=element.parentElement.querySelector(".select-container img")
    img.src=newSrc

}
const btn=document.querySelector("button")
btn.addEventListener('click',async (evt)=>{
    evt.preventDefault()
    let input=document.querySelector(".amount input")
    
    if(input.value===''|| input.value<1)
    {
        input.value=1
    }
    console.log(input.value)
const fromcurr=document.querySelector(".from select")
const Tocurr=document.querySelector(".to select")
const msg=document.querySelector(".msg")
console.log(fromcurr.value,Tocurr.value)
    const URL=`https://api.fastforex.io/fetch-one?from=${fromcurr.value}&to=${Tocurr.value}&api_key=0c47a248ad-646f08b395-sttkyk`
    let response=await fetch(URL)
    let data=await response.json()
    // let finalAmount=input*data
    let rate =data.result[Tocurr.value]
    let finalAmount=input.value *rate
    
    console.log(finalAmount)
    
    msg.innerText=`${input.value} ${fromcurr.value} = ${finalAmount}  ${Tocurr.value}`
   
})
let body=document.querySelector("body")
let i=document.createElement("h2")
console.log(i)
i.style.backgroundColor="black"
i.style.color="white"
i.style.height="1 vh"
i.style.textAlign="center"
i.style.position='center'
i.innerText="Developer Paras yadav"
body.before(i)