console.log('这是main.js')

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