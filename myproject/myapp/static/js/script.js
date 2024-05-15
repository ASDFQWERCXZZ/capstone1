document.addEventListener('DOMContentLoaded', function() {
    var landing = document.querySelector('.landing');
    var content = document.querySelector('.content');
    var loginOverlay = document.getElementById('loginOverlay');

    // 초기에는 로그인 창을 숨깁니다.
    loginOverlay.style.display = 'none';

    // 스크롤 이벤트 설정
    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            landing.style.opacity = "0";
            content.style.opacity = "1";
        } else {
            landing.style.opacity = "1";
            content.style.opacity = "0";
        }
    });

    // 로그인 버튼 클릭 시 로그인 폼 표시
    document.getElementById('loginButton').addEventListener('click', function(event) {
        event.preventDefault();
        loginOverlay.style.display = 'flex';
    });

    // 로그인 폼 닫기 버튼 클릭 시 로그인 폼 닫기
    document.getElementById('closeLogin').addEventListener('click', function() {
        loginOverlay.style.display = 'none';
    });

    // 히어로 섹션 클릭 시 페이지 상단으로 스크롤
    document.querySelector('.hero').addEventListener('click', function() {
        var newPosition = document.querySelector('.new-page1').offsetTop;
        window.scrollTo({ top: newPosition, behavior: 'smooth' });
    });

    // 로고 클릭 시 페이지 상단으로 스크롤
    document.querySelector('.logo').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // 로그인 폼 제출 시 로그인 처리
    document.getElementById('loginSubmit').addEventListener('click', function(event) {
        event.preventDefault();
        
        // 사용자가 입력한 아이디와 비밀번호 가져오기
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        
        // 여기에 로그인 처리 로직을 추가합니다.
        // 예를 들어, 서버에 AJAX 요청을 보내고 응답을 처리하는 코드를 작성합니다.
        // 이 예제에서는 간단히 콘솔에 출력하는 것으로 대체합니다.
        console.log('Email:', email);
        console.log('Password:', password);

        // 로그인 폼 닫기
        loginOverlay.style.display = 'none';
    });
});

///////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    var signupOverlay = document.getElementById('signupOverlay');

    // 초기에는 회원가입 창을 숨깁니다.
    signupOverlay.style.display = 'none';

    // 회원가입 버튼 클릭 시 회원가입 폼 표시
    document.getElementById('signupButton').addEventListener('click', function(event) {
        event.preventDefault();
        signupOverlay.style.display = 'flex';
    });

    // 회원가입 폼 닫기 버튼 클릭 시 회원가입 폼 닫기
    document.getElementById('closeSignup').addEventListener('click', function() {
        signupOverlay.style.display = 'none';
    });

    document.getElementById('signupSubmit').addEventListener('click', function(event) {
        event.preventDefault();
        

        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);

        // 회원가입 폼 닫기
        signupOverlay.style.display = 'none';
    });
});