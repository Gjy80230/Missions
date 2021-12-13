getJSON.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET", "/5.json")
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const object = JSON.parse(request.response)
            myName.textContent = object.name
        }
    }
    request.send()
    console.log(request.response)
    setTimeout(()=>{
        console.log(request.response)
    },3000)
}
















getXML.onclick = ()=>{
    const request = new XMLHttpRequest()
    request.open("GET", "4.xml")
    request.onreadystatechange = ()=>{
        if(request.readyState === 4 && request.status === 200){
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
        
    }
    request.send()
}

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
    request.open("GET", "/style.css")   //readyState = 1
    request.onreadystatechange = ()=>{
        if(request.readyState === 4){
            if(request.status <= 200 && request.status < 300){
                console.log('下载完成')
                // // console.log('request.response')
                // // console.log(request.response)
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }else{
                alert('加载 CSS 失败')
            }          
        }
    }
    request.send()  //readyState = 2
}