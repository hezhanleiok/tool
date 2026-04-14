// 1. 定义多语言字典
const translations = {
    'zh': {
        'nav_exchange': '汇率终端',
        'nav_tax': '个税筹划',
        'nav_mortgage': '房贷配置',
        'nav_archive': '文章存档',
        'btn_read_more': '展开阅读全文'
    },
    'en': {
        'nav_exchange': 'Exchange',
        'nav_tax': 'Tax Plan',
        'nav_mortgage': 'Mortgage',
        'nav_archive': 'Archive',
        'btn_read_more': 'Read More'
    }
};

// 2. 切换语言的函数
function toggleLanguage() {
    const currentLang = localStorage.getItem('site_lang') === 'en' ? 'zh' : 'en';
    localStorage.setItem('site_lang', currentLang);
    applyLanguage(currentLang);
}

// 3. 将语言应用到页面的函数
function applyLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
    // 更新按钮文字
    const btn = document.getElementById('langSwitcher');
    if (btn) btn.innerText = lang === 'zh' ? 'EN / 中文' : '中文 / EN';
}

// 4. 页面加载时自动执行
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('site_lang') || 'zh';
    applyLanguage(savedLang);
});
