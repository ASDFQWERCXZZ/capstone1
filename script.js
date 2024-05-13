window.addEventListener("scroll", function() {
    var landing = document.querySelector('.landing');
    var content = document.querySelector('.content');

    if (window.scrollY > 0) {
        landing.style.opacity = "0";
        content.style.opacity = "1";
    } else {
        landing.style.opacity = "1";
        content.style.opacity = "0";
    }
});

document.querySelector('.hero').addEventListener('click', function() {
    var newPosition = document.querySelector('.new-page1').offsetTop; // new-page1 섹션의 위쪽 위치 계산
    window.scrollTo({ top: newPosition, behavior: 'smooth' }); // 부드러운 스크롤로 이동
});

document.querySelector('.logo').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 페이지 상단으로 부드럽게 스크롤
});

document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginPopup').style.display = 'block';
});

document.getElementById('closeLogin').addEventListener('click', function() {
    document.getElementById('loginPopup').style.display = 'none';
});