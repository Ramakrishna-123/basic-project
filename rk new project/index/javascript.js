//likes button logic
let likesButton = document.querySelector('#likes');
let spanTag = document.querySelector('#span');
let count = 1;
likesButton.addEventListener('mouseenter',function () {
    spanTag.textContent = count;
    count++;
});
//message button logic
let textAreaTag = document.querySelector('#text-area');
let charCount = 100;
let theTAg = document.querySelector('#sms');
textAreaTag.setAttribute('maxlength',charCount);
textAreaTag.addEventListener('keyup',function () {
    let textEnteredLength = textAreaTag.value.length;
    let theCount = charCount-textEnteredLength;
    theTAg.textContent = theCount.toString();
});
// INDIA clock logic
function indiaClock() {
    let today = new Date();
    let options = {timeZone : 'Asia/Kolkata'};
    let indiaDate = today.toLocaleDateString('en-US',options);
    let indiaTime = today.toLocaleTimeString('en-US',options);
    document.querySelector('#india-date').textContent = indiaDate;
    document.querySelector('#india-time').textContent = indiaTime
}
setInterval(indiaClock,1000);
//CHINA clock logic
function chinaClock(){
    let today = new Date();
    let options = {timeZone : 'Asia/shanghai'};
    let chinaDate = today.toLocaleDateString('en-US',options);
    let chinaTime = today.toLocaleTimeString('en-US',options);
    document.querySelector('#china-date').textContent = chinaDate;
    document.querySelector('#china-time').textContent = chinaTime
}
setInterval(chinaClock,1000);
//USA clock logic
function usaClock(){
    let today = new Date();
    let options = {timeZone : 'America/New_York'};
    let usaDate = today.toLocaleDateString('en-US',options);
    let usaTime = today.toLocaleTimeString('en-US',options);
    document.querySelector('#usa-date').textContent = usaDate;
    document.querySelector('#usa-time').textContent = usaTime
}
setInterval(usaClock,1000);



