var send = document.getElementById('send');
// console.log(send);
var parent = document.getElementById('content-items');

send.addEventListener('click', function() {
/*
    原生js

    var li = document.createElement('li'),
        divPic = document.createElement('div'),
        img = document.createElement('img'),
        divMessage = document.createElement('div'),
        pName = document.createElement('p'),
        pDetail = document.createElement('p'),
        divTime = document.createElement('div'),
        span = document.createElement('span');
    var pNameTxt = document.createTextNode('小李'),
        pDetailTxt = document.createTextNode('吃饭啦'),
        spanTxt = document.createTextNode('下午5:20');

    li.setAttribute('class', 'content-item');
    divPic.setAttribute('class', 'left-pic');
    img.setAttribute('src', './images/user.jpg');
    divMessage.setAttribute('class', 'message');
    pName.setAttribute('class', 'name');
    pDetail.setAttribute('class', 'detail');
    divTime.setAttribute('class', 'time');

    divPic.appendChild(img);
    pName.appendChild(pNameTxt);
    pDetail.appendChild(pDetailTxt);
    divMessage.appendChild(pName);
    divMessage.appendChild(pDetail);
    span.appendChild(spanTxt);
    divTime.appendChild(span);
    li.appendChild(divPic);
    li.appendChild(divMessage);
    li.appendChild(divTime);
    parent.appendChild(li);
 */

 var html = $('<li class="content-item">' +
                '<div class="left-pic">' +
                    '<img src="./images/user.jpg" alt="">' +
                '</div>' +
                '<div class="message">' +
                    '<p class="name">小吴</p>' +
                    '<p class="detail">测试测试测试测试测试</p>' +
                '</div>' +
                '<div class="time"><span>下午1:20</span></div>' +
            '</li>');
html.appendTo(parent);

})