console.log('这是main.js')

getHTML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET", "/3.html")
    request.onload = ()=>{
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = ()=>{

    }
    request.send()
}
getJS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET", "/2.js")
    request.onload = ()=>{
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = ()=>{

    }
    request.send()
}
getCSS.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET", "/style.css")
    request.onload = ()=>{
        // console.log('request.response')
        // console.log(request.response)
        const style = document.createElement('style')
        style.innerHTML = request.response
        document.head.appendChild(style)

    }
    request.onerror = ()=>{
        console.log('失败')
    }
    request.send()
}