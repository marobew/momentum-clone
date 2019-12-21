const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    // 한자리 수일 때 앞에 0 붙이기 - 삼항연산자 이용
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds 
    }`;
}

function init() {
    getTime();
    // setInterval(실행할 함수, 실행할 시간 간격(ms))
    setInterval(getTime, 1000);
}
init();