const bodyList = document.getElementById('body-list');
const hatList = document.getElementById('hat-list');
const accList = document.getElementById('acc-list');
const bgList = document.getElementById('bg-list');
const bottomList = document.getElementById('bottom-list');

var current_body = undefined;
var current_hat = undefined;
var current_acc = undefined;
var current_bg = undefined;
var current_bottom = undefined;

var selected_body = 2;
var selected_hat = 0;
var selected_acc = 0;
var selected_bg = 1;
var selected_bottom = 1;

function setImage(type, image) {
    switch(type) {
        case 'body':
            current_body = image;
            break;
        case 'hat':
            current_hat = image;
            break;
        case 'acc':
            current_acc = image;
            break;
        case 'bg':
            current_bg = image;
            break;
        case 'bottom':
            current_bottom = image;
            break;
    }
}

function loadImage(type, imgURL) {
    if(imgURL == undefined) {
        setImage(type, undefined);
    }

    var newImage = new Image();
    newImage.src = imgURL;
    newImage.crossOrigin = 'Anonymous';
    newImage.onload = () => {
        setImage(type, newImage);
    }
}

function getSelectedIdx(type) {
    switch(type) {
        case 'body':
            return selected_body;
        case 'hat':
            return selected_hat;
        case 'acc':
            return selected_acc;
        case 'bg':
            return selected_bg;
        case 'bottom':
            return selected_bottom;
    }
}

function setSelectedIdx(type,idx) {
    switch(type) {
        case 'body':
            selected_body = idx;
            break;
        case 'hat':
            selected_hat = idx;
            break;
        case 'acc':
            selected_acc = idx;
            break;
        case 'bg':
            selected_bg = idx;
            break;
        case 'bottom':
            selected_bottom = idx;
            break;
    }
}

function AddParts(listElem, type, idx, iconURL, imgURL, selected=false) {
    let parts = document.createElement('div');
    parts.className = 'parts';
    parts.id = `${type}-${idx}`;
    if(selected == true) {
        parts.classList.add('parts-selected');
        loadImage(type, imgURL);
    }
    
    let iconImg = document.createElement('img');
    iconImg.src = iconURL;

    parts.onclick = () => {
        const prevIdx = getSelectedIdx(type);
        let prevParts = document.getElementById(`${type}-${prevIdx}`);
        if(prevParts) {
            prevParts.classList.remove('parts-selected');
        }

        setSelectedIdx(type, idx);
        parts.classList.add('parts-selected');
        loadImage(type, imgURL);
    }

    parts.appendChild(iconImg);
    listElem.appendChild(parts);

    return parts;
}

function selectParts(type, idx) {
    let parts = document.getElementById(`${type}-${idx}`);
    if(parts == undefined) {
        console.log(`${type} ${idx}`)
    }
    parts.click();
    setSelectedIdx(type, idx);
}
    
AddParts(bodyList, 'body',1, 'mememaker-assets/img/icons/icon-0.png', 'mememaker-assets/img/chicken/0.png');
AddParts(bodyList, 'body',2, 'mememaker-assets/img/icons/icon-1.png', 'mememaker-assets/img/chicken/1.png', true);
AddParts(bodyList, 'body',3, 'mememaker-assets/img/icons/icon-2.png', 'mememaker-assets/img/chicken/2.png');
AddParts(bodyList, 'body',4, 'mememaker-assets/img/icons/icon-3.png', 'mememaker-assets/img/chicken/3.png');
AddParts(bodyList, 'body',5, 'mememaker-assets/img/icons/icon-4.png', 'mememaker-assets/img/chicken/4.png');

AddParts(hatList, 'hat',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(hatList, 'hat',1, 'mememaker-assets/img/icons/icon-head001.png', 'mememaker-assets/img/head/head001.png');
AddParts(hatList, 'hat',2, 'mememaker-assets/img/icons/icon-head002.png', 'mememaker-assets/img/head/head002.png');
AddParts(hatList, 'hat',3, 'mememaker-assets/img/icons/icon-head003.png', 'mememaker-assets/img/head/head003.png');
AddParts(hatList, 'hat',4, 'mememaker-assets/img/icons/icon-head004.png', 'mememaker-assets/img/head/head004.png');
AddParts(hatList, 'hat',5, 'mememaker-assets/img/icons/icon-head005.png', 'mememaker-assets/img/head/head005.png');
AddParts(hatList, 'hat',6, 'mememaker-assets/img/icons/icon-head006.png', 'mememaker-assets/img/head/head006.png');
AddParts(hatList, 'hat',7, 'mememaker-assets/img/icons/icon-head007.png', 'mememaker-assets/img/head/head007.png');
AddParts(hatList, 'hat',8, 'mememaker-assets/img/icons/icon-head008.png', 'mememaker-assets/img/head/head008.png');
AddParts(hatList, 'hat',9, 'mememaker-assets/img/icons/icon-head009.png', 'mememaker-assets/img/head/head009.png');
AddParts(hatList, 'hat',10, 'mememaker-assets/img/icons/icon-head010.png', 'mememaker-assets/img/head/head010.png');
AddParts(hatList, 'hat',11, 'mememaker-assets/img/icons/icon-head011.png', 'mememaker-assets/img/head/head011.png');
AddParts(hatList, 'hat',12, 'mememaker-assets/img/icons/icon-head012.png', 'mememaker-assets/img/head/head012.png');
AddParts(hatList, 'hat',13, 'mememaker-assets/img/icons/icon-head013.png', 'mememaker-assets/img/head/head013.png');
AddParts(hatList, 'hat',14, 'mememaker-assets/img/icons/icon-head014.png', 'mememaker-assets/img/head/head014.png');

AddParts(accList, 'acc',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(accList, 'acc',1, 'mememaker-assets/img/icons/icon-top001.png', 'mememaker-assets/img/top/top001.png');
AddParts(accList, 'acc',2, 'mememaker-assets/img/icons/icon-top002.png', 'mememaker-assets/img/top/top002.png');
AddParts(accList, 'acc',3, 'mememaker-assets/img/icons/icon-top003.png', 'mememaker-assets/img/top/top003.png');
AddParts(accList, 'acc',4, 'mememaker-assets/img/icons/icon-top004.png', 'mememaker-assets/img/top/top004.png');
AddParts(accList, 'acc',5, 'mememaker-assets/img/icons/icon-top005.png', 'mememaker-assets/img/top/top005.png');
// AddParts(accList, 'acc',6, 'mememaker-assets/img/icons/icon-top006.png', 'mememaker-assets/img/top/top006.png');
AddParts(accList, 'acc',7, 'mememaker-assets/img/icons/icon-top007.png', 'mememaker-assets/img/top/top007.png');
AddParts(accList, 'acc',8, 'mememaker-assets/img/icons/icon-top008.png', 'mememaker-assets/img/top/top008.png');
AddParts(accList, 'acc',9, 'mememaker-assets/img/icons/icon-top009.png', 'mememaker-assets/img/top/top009.png');
AddParts(accList, 'acc',10, 'mememaker-assets/img/icons/icon-top010.png', 'mememaker-assets/img/top/top010.png');
AddParts(accList, 'acc',11, 'mememaker-assets/img/icons/icon-top011.png', 'mememaker-assets/img/top/top011.png');
AddParts(accList, 'acc',12, 'mememaker-assets/img/icons/icon-top012.png', 'mememaker-assets/img/top/top012.png');
AddParts(accList, 'acc',13, 'mememaker-assets/img/icons/icon-top013.png', 'mememaker-assets/img/top/top013.png');
AddParts(accList, 'acc',14, 'mememaker-assets/img/icons/icon-top014.png', 'mememaker-assets/img/top/top014.png');

AddParts(bottomList, 'bottom',0, 'mememaker-assets/img/none.png', undefined, true);
AddParts(bottomList, 'bottom', 1, 'mememaker-assets/img/icons/icon-bot001.png', 'mememaker-assets/img/bottom/bot001.png');
AddParts(bottomList, 'bottom', 2, 'mememaker-assets/img/icons/icon-bot002.png', 'mememaker-assets/img/bottom/bot002.png');
AddParts(bottomList, 'bottom', 3, 'mememaker-assets/img/icons/icon-bot003.png', 'mememaker-assets/img/bottom/bot003.png');
AddParts(bottomList, 'bottom', 4, 'mememaker-assets/img/icons/icon-bot004.png', 'mememaker-assets/img/bottom/bot004.png');
AddParts(bottomList, 'bottom', 5, 'mememaker-assets/img/icons/icon-bot005.png', 'mememaker-assets/img/bottom/bot005.png');
AddParts(bottomList, 'bottom', 6, 'mememaker-assets/img/icons/icon-bot006.png', 'mememaker-assets/img/bottom/bot006.png');
AddParts(bottomList, 'bottom', 7, 'mememaker-assets/img/icons/icon-bot007.png', 'mememaker-assets/img/bottom/bot007.png');
AddParts(bottomList, 'bottom', 8, 'mememaker-assets/img/icons/icon-bot008.png', 'mememaker-assets/img/bottom/bot008.png');
AddParts(bottomList, 'bottom', 9, 'mememaker-assets/img/icons/icon-bot009.png', 'mememaker-assets/img/bottom/bot009.png');
AddParts(bottomList, 'bottom', 10, 'mememaker-assets/img/icons/icon-bot010.png', 'mememaker-assets/img/bottom/bot010.png');
AddParts(bottomList, 'bottom', 11, 'mememaker-assets/img/icons/icon-bot011.png', 'mememaker-assets/img/bottom/bot011.png');
AddParts(bottomList, 'bottom', 12, 'mememaker-assets/img/icons/icon-bot012.png', 'mememaker-assets/img/bottom/bot012.png');

AddParts(bgList, 'bg',1, 'mememaker-assets/img/icons/icon-bg.png', 'mememaker-assets/img/background/bg.png', true);
AddParts(bgList, 'bg',2, 'mememaker-assets/img/icons/icon-bg1.png', 'mememaker-assets/img/background/bg1.png');
AddParts(bgList, 'bg',3, 'mememaker-assets/img/icons/icon-bg2.png', 'mememaker-assets/img/background/bg2.png');
AddParts(bgList, 'bg',4, 'mememaker-assets/img/icons/icon-bg3.png', 'mememaker-assets/img/background/bg3.png');
AddParts(bgList, 'bg',4, 'mememaker-assets/img/icons/icon-bg4.png', 'mememaker-assets/img/background/bg4.png');




const canvas = document.getElementById('mainCanvas');
canvas.width = 400;
canvas.height = 400;
const context = canvas.getContext('2d');

setInterval(() => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, 400, 400);

    if(current_bg != undefined) {
        context.drawImage(current_bg, 0, 0, 400, 400 );
    }

    if(current_body != undefined) {
        context.drawImage(current_body, 0, 0, 400, 400 );
    }

    if(current_acc != undefined) {
        context.drawImage(current_acc, 0, 0, 400, 400 );
    }

    if(current_hat != undefined) {
        context.drawImage(current_hat, 0, 0, 400, 400 );
    }
    
    if(current_bottom != undefined) {
        context.drawImage(current_bottom, 0, 0, 400, 400 );
    }
}, 100);

function randRange(min, max) {
    return Math.floor((Math.random() * (max - min)) + min);
}

const resetBtn = document.getElementById('reset-btn');
resetBtn.onclick = () => {
    selectParts('body', 2);
    selectParts('hat', 0);
    selectParts('acc', 0);
    selectParts('bg', 1);
    selectParts('bottom', 0);
}

const randomBtn = document.getElementById('random-btn');
randomBtn.onclick = () => {
    selectParts('body', randRange(1,5));
    selectParts('hat', randRange(0,15));
    selectParts('acc', randRange(0,15));
    selectParts('bg', randRange(1,5));
    selectParts('bottom', randRange(1,13));
}

const downloadBtn = document.getElementById('download-btn');
downloadBtn.onclick = () => {
    var link = document.createElement('a');
    link.download = 'cony.png';
    link.href = canvas.toDataURL()
    link.click();
}

const bodyLeftBtn = document.getElementById('body-left');
bodyLeftBtn.onclick = () => {
    bodyList.style.transform = 'translateX(0px)';
}

const bodyRightBtn = document.getElementById('body-right');
bodyRightBtn.onclick = () => {
    bodyList.style.transform = 'translateX(-130px)';
}

const hatLeftBtn = document.getElementById('hat-left');
hatLeftBtn.onclick = () => {
    hatList.style.transform = 'translateX(0px)';
}

const hatRightBtn = document.getElementById('hat-right');
hatRightBtn.onclick = () => {
    hatList.style.transform = 'translateX(-850px)';
}

const topLeftBtn = document.getElementById('top-left');
topLeftBtn.onclick = () => {
    accList.style.transform = 'translateX(0px)';
}

const topRightBtn = document.getElementById('top-right');
topRightBtn.onclick = () => {
    accList.style.transform = 'translateX(-750px)';
}

const bottomLeftBtn = document.getElementById('bottom-left');
bottomLeftBtn.onclick = () => {
    bottomList.style.transform = 'translateX(0px)';
}

const bottomRightBtn = document.getElementById('bottom-right');
bottomRightBtn.onclick = () => {
    bottomList.style.transform = 'translateX(-600px)';
}

