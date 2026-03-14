// 1. Dữ liệu ngôn ngữ
const languages = {
    vi: {
        heroTitle: "ThoTools",
        heroDesc: "Nâng tầm trải nghiệm Gaming và Discord của bạn với những công cụ tối ưu nhất.",
        btnStart: "Bắt đầu ngay",
        feat1: "Bảo Mật",
        desc1: "Hệ thống luôn được bảo vệ nghiêm ngặt, an toàn tuyệt đối.",
        feat2: "Uy Tín",
        desc2: "Được tin dùng bởi cộng đồng với dịch vụ hỗ trợ 24/7.",
        feat3: "Chất Lượng",
        desc3: "Code tối ưu, mượt mà và không gây giật lag thiết bị.",
        sectionTitle: "Dịch Vụ Của Chúng Tôi",
        checkRep: "Check Uy Tín",
        updatingText: "Đang Trong Quá Trình Cập Nhật..."
    },
    en: {
        heroTitle: "ThoTools",
        heroDesc: "Elevate your Gaming and Discord experience with our professional tools.",
        btnStart: "Get Started",
        feat1: "Security",
        desc1: "The system is always strictly protected, absolutely safe.",
        feat2: "Reputation",
        desc2: "Trusted by the community with 24/7 support service.",
        feat3: "Quality",
        desc3: "Optimized code, smooth and no device lag.",
        sectionTitle: "Our Services",
        checkRep: "Check Legit",
        updatingText: "Updating more tools soon..."
    }
};

// 2. Xử lý lưu ngôn ngữ (LocalStorage)
const langSelect = document.getElementById('langSelect');
function changeLanguage(lang) {
    localStorage.setItem('thoTools_lang', lang);
    const data = languages[lang];
    
    document.getElementById('heroTitle').innerText = data.heroTitle;
    document.getElementById('heroDesc').innerText = data.heroDesc;
    document.getElementById('btnStart').innerText = data.btnStart;
    document.getElementById('feat1').innerText = data.feat1;
    document.getElementById('desc1').innerText = data.desc1;
    document.getElementById('feat2').innerText = data.feat2;
    document.getElementById('desc2').innerText = data.desc2;
    document.getElementById('feat3').innerText = data.feat3;
    document.getElementById('desc3').innerText = data.desc3;
    document.getElementById('sectionTitle').innerText = data.sectionTitle;
    document.getElementById('checkRep').innerText = data.checkRep;
    document.getElementById('updatingText').innerText = data.updatingText;
}

langSelect.addEventListener('change', (e) => changeLanguage(e.target.value));

// 3. Lấy IP người dùng (Ẩn danh/Bảo mật)
async function fetchIp() {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        document.getElementById('userIpText').innerText = `Your IP: ${data.ip}`;
        // Bạn có thể gửi data.ip này về Discord Webhook để quản lý nếu muốn
    } catch (error) {
        console.log("Không thể lấy IP");
    }
}

// 4. Khởi tạo khi load trang
window.onload = () => {
    const savedLang = localStorage.getItem('thoTools_lang') || 'vi';
    langSelect.value = savedLang;
    changeLanguage(savedLang);
    fetchIp();
};

// 5. Chống chuột phải (Hạn chế copy code sơ đẳng)
document.addEventListener('contextmenu', event => event.preventDefault());
