// main.js - 절대 경로 버전 (GitHub Pages 저장소명: notaxkorea)
document.addEventListener('DOMContentLoaded', function() {
    // ========== 1. 헤더, 푸터 동적 주입 (절대 경로) ==========
    const headerHTML = `
    <header>
        <div class="container header-inner">
            <div class="logo">NOTAX <span>세무회계</span></div>
            <div class="menu-toggle"><i class="fas fa-bars"></i></div>
            <nav>
                <a href="/notaxkorea/index.html">홈</a>
                <div class="dropdown">
                    <button class="dropbtn">서비스 <i class="fas fa-chevron-down"></i></button>
                    <div class="dropdown-content">
                        <a href="/notaxkorea/solution/book.html">세무기장</a>
                        <a href="/notaxkorea/solution/consulting.html">법인컨설팅</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">고객유형 <i class="fas fa-chevron-down"></i></button>
                    <div class="dropdown-content">
                        <a href="/notaxkorea/target/corporate.html">법인사업자</a>
                        <a href="/notaxkorea/target/sole.html">개인사업자</a>
                    </div>
                </div>
                <a href="/notaxkorea/cases.html">고객사례</a>
                <a href="/notaxkorea/team.html">회계사 소개</a>
                <a href="/notaxkorea/blog.html">블로그</a>
                <a href="/notaxkorea/contact.html" class="btn-outline">상담신청</a>
            </nav>
        </div>
    </header>`;
    const footerHTML = `
    <footer>
        <div class="container">
            <p>© 2026 인일회계법인 NOTAX (김광수 공인회계사) | 인천 남동구·연수구·송도 특화 서비스</p>
            <p>회계사 직접 상담, 정확한 신고와 사후관리 보장</p>
        </div>
    </footer>`;

    document.getElementById('header').innerHTML = headerHTML;
    document.getElementById('footer').innerHTML = footerHTML;

    // ========== 2. 모바일 메뉴 토글 ==========
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => nav.classList.toggle('show'));
    }

    // ========== 3. 드롭다운 (PC/모바일 모두 클릭 토글) ==========
    const dropdownBtns = document.querySelectorAll('.dropbtn');
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const parent = this.closest('.dropdown');
            if (parent) parent.classList.toggle('active');
        });
    });

    // ========== 4. 무료 진단 (index.html 전용) ==========
    const diagForm = document.getElementById('quickDiagnosis');
    if (diagForm) {
        diagForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const industry = document.getElementById('industry').value;
            const revenue = document.getElementById('revenue').value;
            const businessType = document.getElementById('businessType').value;
            if (!industry || !revenue || !businessType) {
                alert('업종, 매출, 사업자 형태를 모두 선택해주세요.');
                return;
            }
            let message = `📊 [진단 결과]\n업종: ${industry}\n매출: ${revenue}\n사업자 형태: ${businessType}\n\n`;
            if (businessType === '개인사업자') {
                if (revenue === '1억 미만') message += '✅ 간편장부 대상입니다. 기준경비율 적용 가능성을 검토해보세요.';
                else if (revenue === '1억~5억') message += '✅ 복식부기 의무 대상입니다. 필요경비 누락 없이 챙기세요.';
                else message += '✅ 전문적인 세무관리가 필요한 규모입니다. 절세 포인트 상담을 권장합니다.';
            } else {
                if (revenue === '1억 미만') message += '✅ 소규모 법인, 접대비·차량유지비 누락 주의하세요.';
                else if (revenue === '1억~5억') message += '✅ 중간예납·가산세 관리 중요한 구간입니다.';
                else message += '✅ 법인세 절감 전략이 필요합니다. 세무사 검토 필수입니다.';
            }
            message += '\n\n🔗 더 자세한 맞춤 정보는 네이버 블로그에서 확인하세요.';
            alert(message);
            window.open('https://blog.naver.com/notaxcpa', '_blank');
            diagForm.reset();
        });
    }

    // ========== 5. 상담 폼 제출 (contact.html 전용) ==========
    const contactForm = document.getElementById('taxContactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = this.querySelector('input[name="name"]')?.value;
            const phone = this.querySelector('input[name="phone"]')?.value;
            if (!name || !phone) {
                alert('이름과 연락처는 필수 입력 항목입니다.');
                return;
            }
            alert(`✅ 상담 신청이 접수되었습니다.\n📞 ${phone}\n회계사가 24시간 이내 직접 연락드립니다.`);
            this.reset();
        });
    }

    // ========== 6. 네이버 블로그 링크 매핑 ==========
    const naverMap = {
        case1: 'https://blog.naver.com/notaxcpa/2234567890',
        case2: 'https://blog.naver.com/notaxcpa/2234567891',
        case3: 'https://blog.naver.com/notaxcpa/2234567892',
        case4: 'https://blog.naver.com/notaxcpa/2234567893',
        case5: 'https://blog.naver.com/notaxcpa/2234567894',
        case6: 'https://blog.naver.com/notaxcpa/2234567895',
        blog1: 'https://blog.naver.com/notaxcpa/2234567896',
        blog2: 'https://blog.naver.com/notaxcpa/2234567897',
        blog3: 'https://blog.naver.com/notaxcpa/2234567898',
        'blog-main': 'https://blog.naver.com/notaxcpa',
        default: 'https://blog.naver.com/notaxcpa'
    };
    document.querySelectorAll('.naver-blog-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const cat = link.getAttribute('data-category');
            const url = naverMap[cat] || naverMap.default;
            window.open(url, '_blank');
        });
    });

    // ========== 7. 고객사례 필터 (cases.html) ==========
    const filterBtns = document.querySelectorAll('.filter-btn');
    const caseCards = document.querySelectorAll('.case-card');
    if (filterBtns.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const filter = this.getAttribute('data-filter');
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                caseCards.forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ========== 8. 블로그 카테고리 필터 (blog.html) ==========
    const catBtns = document.querySelectorAll('.blog-cat');
    const blogCards = document.querySelectorAll('.blog-card');
    if (catBtns.length) {
        catBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                const cat = this.getAttribute('data-cat');
                catBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                blogCards.forEach(card => {
                    if (cat === 'all' || card.getAttribute('data-cat') === cat) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }

    // ========== 9. 부드러운 스크롤 (내부 앵커) ==========
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === "#" || targetId === "" || targetId === "#home") return;
            const target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
                if (nav && nav.classList.contains('show')) nav.classList.remove('show');
            }
        });
    });
});