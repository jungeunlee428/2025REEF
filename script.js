document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('.animated-element');
    const fullScreenSections = document.querySelectorAll('.full-screen');

    // 스크롤 애니메이션을 위한 함수
    const checkVisibility = () => {
        animatedElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            // 요소의 10% 이상이 뷰포트에 들어왔을 때 'visible' 클래스 추가
            if (rect.top < window.innerHeight - (rect.height * 0.1)) {
                element.classList.add('visible');
            }
        });
    };

    // 초기 로드 시 한 번 실행
    checkVisibility();

    // 스크롤 이벤트 리스너에 함수 연결
    window.addEventListener('scroll', checkVisibility);

    // 스무스 스크롤 (선택적: 네비게이션 메뉴가 있다면 사용)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    let currentSection = 0;
    window.addEventListener('wheel', function(e) {
        e.preventDefault();

        const delta = e.deltaY;
        const totalSections = fullScreenSections.length;

        if (delta > 0 && currentSection < totalSections - 1) {
            // 아래로 스크롤
            currentSection++;
        } else if (delta < 0 && currentSection > 0) {
            // 위로 스크롤
            currentSection--;
        }

        fullScreenSections[currentSection].scrollIntoView({
            behavior: 'smooth'
        });
    }, { passive: false });
});
