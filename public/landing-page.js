
window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

let currentLanguage = 'TH'; // Initial language state

function toggleDropdownMenu() {
    const menuImage = document.getElementById('menuImage');
    const toggleImage = document.getElementById('toggleImage');
    const toggleText = document.getElementById('toggleText');
    const menuImageMB = document.getElementById('menuImageMB');
    const toggleImageMB = document.getElementById('toggleImageMB');
    const toggleTextMB = document.getElementById('toggleTextMB');

    // Toggle logic
    if (currentLanguage === 'TH') {
        // Switch to English
        menuImage.src = 'assets/images/Flag-Uk.webp'; // Change image to UK flag
        toggleImage.src = 'assets/images/Flag-Thailand.webp'; // Update toggle image to Thai flag
        menuImageMB.src = 'assets/images/Flag-Uk.webp'; // Change image to UK flag
        toggleImageMB.src = 'assets/images/Flag-Thailand.webp'; // Update toggle image to Thai flag
        toggleText.textContent = 'TH'; // Update dropdown text to show TH
        toggleTextMB.textContent = 'TH'; // Update dropdown text to show TH
        currentLanguage = 'EN'; // Update current language state
        changeLanguage('en');
    } else {
        // Switch to Thai
        menuImage.src = 'assets/images/Flag-Thailand.webp'; // Change image to Thai flag
        toggleImage.src = 'assets/images/Flag-Uk.webp'; // Update toggle image to UK flag
        toggleText.textContent = 'EN'; // Update dropdown text to show EN
        menuImageMB.src = 'assets/images/Flag-Thailand.webp'; // Change image to Thai flag
        toggleImageMB.src = 'assets/images/Flag-Uk.webp'; // Update toggle image to UK flag
        toggleTextMB.textContent = 'EN'; // Update dropdown text to show EN
        currentLanguage = 'TH'; // Update current language state
        changeLanguage('th');
    }
}

// ฟังก์ชันสำหรับโหลดไฟล์ JSON
function loadTranslations(language) {
    return fetch(`${language}.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load translation file');
            }
            return response.json();
        });
}

// ฟังก์ชันสำหรับเปลี่ยนภาษา
function changeLanguage(language) {
    localStorage.setItem('selectedLanguage', language); // Save selected language in localStorage

    loadTranslations(language).then(translations => {
        document.getElementById('productFeature').textContent = translations.productFeature;
        document.getElementById('whyBurgundy').textContent = translations.whyBurgundy;
        document.getElementById('demo').textContent = translations.demo;
        document.getElementById('demo1').textContent = translations.demo;
        document.getElementById('signin').textContent = translations.signin;
        document.getElementById('bannerLabel').textContent = translations.bannerLabel;
        document.getElementById('bannerSubLabel').textContent = translations.bannerSubLabel;
        document.getElementById('partnerTitle').textContent = translations.partnerTitle;
        document.getElementById('whyBurgundy1').textContent = translations.whyBurgundy1;
        document.getElementById('whyBurgundyTT1').textContent = translations.whyBurgundyTT1;
        document.getElementById('whyBurgundyST1').textContent = translations.whyBurgundyST1;
        document.getElementById('whyBurgundyTT2').textContent = translations.whyBurgundyTT2;
        document.getElementById('whyBurgundyST2').textContent = translations.whyBurgundyST2;
        document.getElementById('whyBurgundyTT3').textContent = translations.whyBurgundyTT3;
        document.getElementById('whyBurgundyST3').textContent = translations.whyBurgundyST3;
        document.getElementById('whyBurgundyTT4').textContent = translations.whyBurgundyTT4;
        document.getElementById('whyBurgundyST4_1').textContent = translations.whyBurgundyST4_1;
        document.getElementById('whyBurgundyTT4_2').textContent = translations.whyBurgundyTT4_2;
        document.getElementById('whyBurgundyTT5').textContent = translations.whyBurgundyTT5;
        document.getElementById('whyBurgundyST5').textContent = translations.whyBurgundyST5;
        document.getElementById('PromoteBD').textContent = translations.PromoteBD;
        document.getElementById('PromoteBDTT1').textContent = translations.PromoteBDTT1;
        document.getElementById('PromoteBDST1').textContent = translations.PromoteBDST1;
        document.getElementById('PromoteBDTT2').textContent = translations.PromoteBDTT2;
        document.getElementById('PromoteBDST2').textContent = translations.PromoteBDST2;
        document.getElementById('PromoteBDTT3').textContent = translations.PromoteBDTT3;
        document.getElementById('PromoteBDST3').textContent = translations.PromoteBDST3;
        document.getElementById('SimulateACTT').textContent = translations.SimulateACTT;
        document.getElementById('SimulateACST_1').textContent = translations.SimulateACST_1;
        document.getElementById('SimulateACST_2').textContent = translations.SimulateACST_2;
        document.getElementById('SimulateACST_3').textContent = translations.SimulateACST_3;
        document.getElementById('Attribute_title').textContent = translations.Attribute_title;
        document.getElementById('Attribute_subtitle_1').textContent = translations.Attribute_subtitle_1;
        document.getElementById('Attribute_subtitle_2').textContent = translations.Attribute_subtitle_2;
        document.getElementById('Attribute_subtitle_3').textContent = translations.Attribute_subtitle_3;
        document.getElementById('Attribute_subtitle_4').textContent = translations.Attribute_subtitle_4;
        document.getElementById('Attribute_subtitle_5').textContent = translations.Attribute_subtitle_5;
        document.getElementById('Attribute_subtitle_6').textContent = translations.Attribute_subtitle_7;
        document.getElementById('Attribute_subtitle_7').textContent = translations.Attribute_subtitle_1;
        document.getElementById('Attribute_subtitle_8').textContent = translations.Attribute_subtitle_8;
        document.getElementById('Attribute_subtitle_9').textContent = translations.Attribute_subtitle_9;
        document.getElementById('Attribute_subtitle_10').textContent = translations.Attribute_subtitle_10;
        document.getElementById('Vdo_title').textContent = translations.Vdo_title;
        document.getElementById('Vdo_subtitle').textContent = translations.Vdo_subtitle;
        document.getElementById('demo2').textContent = translations.demo2;
        document.getElementById('productFeatureMB').textContent = translations.productFeatureMB;
        document.getElementById('whyBurgundyMB').textContent = translations.whyBurgundyMB;
        document.getElementById('demoMB').textContent = translations.demoMB;
        document.getElementById('signinMB').textContent = translations.signinMB;
        document.getElementById('Company').textContent = translations.Company;
        document.getElementById('About_us').textContent = translations.About_us;
        document.getElementById('productFeature2').textContent = translations.productFeature2;
        document.getElementById('Trips').textContent = translations.Trips;
        document.getElementById('Advance').textContent = translations.Advance;
        document.getElementById('Expense').textContent = translations.Expense;
        document.getElementById('Expense_Vendor').textContent = translations.Expense_Vendor;
        document.getElementById('Recommended_Products').textContent = translations.Recommended_Products;
        document.getElementById('Contact_us').textContent = translations.Contact_us;
        document.getElementById('News').textContent = translations.News;
        document.getElementById('News_subtitle').textContent = translations.News_subtitle;
        document.getElementById('email').textContent = translations.email;
        document.getElementById('submit').textContent = translations.submit;
        document.getElementById('Privacy_Policy').textContent = translations.Privacy_Policy;
        document.getElementById('Cookies_Policy').textContent = translations.Cookies_Policy;
        document.getElementById('Manage_cookies').textContent = translations.Manage_cookies;

    }).catch(error => {
        console.error('Error loading translations:', error);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // ดึงค่าภาษาจาก localStorage ถ้ามี ถ้าไม่มีให้ใช้ค่าเริ่มต้นเป็น 'th'
    const language = localStorage.getItem('selectedLanguage') || 'th';

    // อัปเดต currentLanguage ตามค่าที่บันทึกไว้ใน localStorage
    if (language === 'th') {
        currentLanguage = 'TH';
        document.getElementById('menuImage').src = 'assets/images/Flag-Thailand.webp'; // Thai flag (desktop)
        document.getElementById('toggleImage').src = 'assets/images/Flag-Uk.webp'; // UK flag (dropdown desktop)
        document.getElementById('menuImageMB').src = 'assets/images/Flag-Thailand.webp'; // Thai flag (mobile)
        document.getElementById('toggleImageMB').src = 'assets/images/Flag-Uk.webp'; // UK flag (dropdown mobile)
        document.getElementById('toggleText').textContent = 'EN'; // Text for English (desktop)
        document.getElementById('toggleTextMB').textContent = 'EN'; // Text for English (mobile)
    } else {
        currentLanguage = 'EN';
        document.getElementById('menuImage').src = 'assets/images/Flag-Uk.webp'; // UK flag (desktop)
        document.getElementById('toggleImage').src = 'assets/images/Flag-Thailand.webp'; // Thai flag (dropdown desktop)
        document.getElementById('menuImageMB').src = 'assets/images/Flag-Uk.webp'; // UK flag (mobile)
        document.getElementById('toggleImageMB').src = 'assets/images/Flag-Thailand.webp'; // Thai flag (dropdown mobile)
        document.getElementById('toggleText').textContent = 'TH'; // Text for Thai (desktop)
        document.getElementById('toggleTextMB').textContent = 'TH'; // Text for Thai (mobile)
    }

    // เปลี่ยนภาษาไปยังค่าที่ดึงมา
    changeLanguage(language);
});

ScrollReveal().reveal('.revealBottom', {
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    viewFactor: 0.1,
});

ScrollReveal().reveal('.revealLeft', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    viewFactor: 0.1,
});
ScrollReveal().reveal('.revealRight', {
    origin: 'right',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    viewFactor: 0.1,
});
ScrollReveal().reveal('.revealTop', {
    origin: 'top',
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    viewFactor: 0.1,
});

const logoWrapper = document.querySelector('.logo-wrapper');
const logos = document.querySelectorAll('.logo-wrapper img');

logos.forEach(logo => {
    logo.addEventListener('mouseenter', () => {
        logoWrapper.style.animationPlayState = 'paused';
    });

    logo.addEventListener('mouseleave', () => {
        logoWrapper.style.animationPlayState = 'running';
    });
});