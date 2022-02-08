import './app2.css'
import $ from 'jquery'

const $tabBar = $('#app2 .tab-bar') //找到id为app2下面名为tab-bar的class元素
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click', 'li', (e)=>{
    const $li = $(e.currentTarget)
    $li.addClass('selected')
       .siblings().removeClass('selected')
    const index = $li.index()
    $tabContent.children()
        .eq(index).addClass('active')
        .siblings().removeClass('active')
})

$tabBar.children().eq(0).trigger('click')