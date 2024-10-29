import { deleteUSer } from "./functions.js"

let tbody = document.querySelector('.tbody') as HTMLTableSectionElement
let DeleteCheckBtn = document.querySelector('.DeleteCheckBtn') as HTMLButtonElement

let api = 'https://670e5f763e71518616543f31.mockapi.io/exam'

interface Ielement{
    name:string ,
    img: string,
    description:string ,
    category:string ,
    price:number ,
    qty:number ,
    status:boolean,
    id: number,
}

let arr:number[]= []

export function get(data:Ielement[]):void {
    tbody.innerHTML = ""
    data.forEach((el) => {

        let tr = document.createElement("tr")

        let checkTD=document.createElement('td')

        let check = document.createElement('input')
        check.type = 'checkbox'
        check.onclick = () => {
            if (check.checked) {
                arr.push(el.id)
                console.log(arr);
            } else {
                arr = arr.filter((id) => id != el.id)
            }
            DeleteCheckBtn.onclick = () => {
                arr.forEach((id) => {
                    deleteUSer(id.toString())
                    arr = []
                })
            }
        }

        let id=document.createElement('td')
        id.innerHTML=el.id.toString()

        let productTD=document.createElement('td')
        productTD.className="name"

        let img=document.createElement('img')
        img.src=el.img

        let nameDiv=document.createElement('div')

        let name=document.createElement('h3')
        name.innerHTML=el.name

        let desc=document.createElement('p')
        desc.innerHTML=el.description.slice(0,30)+" ..."

        let category=document.createElement("td")
        category.innerHTML=el.category

        let price=document.createElement('td')
        price.innerHTML="$"+el.price

        let qty=document.createElement('td')
        qty.innerHTML=el.qty.toString()

        let stTD=document.createElement('td')

        let status=document.createElement('p')
        status.innerHTML=el.status?"In stock":"Out of stock"
        if(el.status==true){
            status.className='green'
        }else{
            status.className='red'
        }

        let actionsTD=document.createElement('td')

        let delBtn=document.createElement('span')
        delBtn.style.color='red'
        delBtn.onclick=()=>{
            deleteUSer(el.id.toString())
        }
        delBtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">  <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" /></svg>`

        let editBtn=document.createElement('span')
        editBtn.onclick=()=>{
            localStorage.setItem("user",JSON.stringify(el))
            window.location.href='http://127.0.0.1:5501/addedit/h.html'
        }
        editBtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>`
    
        let infoBtn=document.createElement('span')
        infoBtn.onclick=()=>{
            localStorage.setItem("User",JSON.stringify(el))
            window.location.href='http://127.0.0.1:5501/info/h.html'
        }
        infoBtn.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /></svg>`
   



        checkTD.append(check)
        nameDiv.append(name,desc)
        productTD.append(img,nameDiv)
        stTD.append(status)
        actionsTD.append(infoBtn,editBtn,delBtn)
        tr.append(checkTD,id,productTD,category,price,qty,stTD,actionsTD)
        tbody.append(tr)
    })
}


let AddBtn=document.querySelector('.AddBtn') as HTMLInputElement
AddBtn.onclick=()=>{
    window.location.href='http://127.0.0.1:5501/addedit/h.html'
    localStorage.removeItem('user')
}

