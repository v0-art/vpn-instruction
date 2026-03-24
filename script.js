// ============================================
// CONFIGURATION
// ============================================

const SUBSCRIPTION_URL = 'https://your-server.com/sub/YOUR-KEY';
const SUBSCRIPTION_NAME = 'Luffy_VPN';

// ============================================
// PLATFORM & APP DATA
// ============================================

const PLATFORMS = {
    windows: {
        name: 'Windows',
        apps: {
            happ: {
                name: 'Happ',
                icon: '📱',
                downloads: [
                    { label: 'Скачать Happ', url: 'https://github.com/Happ-proxy/happ-desktop/releases/latest/download/setup-Happ.x64.exe' }
                ],
                deepLink: (url) => `happ://import/${url}`,
                steps: [
                    { title: 'Установка приложения', description: 'Скачайте и установите Happ на ваш компьютер.', showDownloads: true, showImport: false },
                    { title: 'Добавление подписки', description: 'Нажмите кнопку ниже — приложение откроется и подписка добавится автоматически.', showDownloads: false, showImport: true },
                    { title: 'Подключение', description: 'Нажмите большую кнопку включения в центре для подключения к VPN. Выберите сервер из списка при необходимости.', showDownloads: false, showImport: false }
                ]
            },
            nekoray: {
                name: 'Nekoray',
                icon: '🐱',
                downloads: [
                    { label: 'Скачать Nekoray', url: 'https://github.com/MatsuriDayo/nekoray/releases/latest' }
                ],
                deepLink: null,
                steps: [
                    { title: 'Установка приложения', description: 'Скачайте и распакуйте Nekoray. Запустите nekoray.exe.', showDownloads: true, showImport: false },
                    { title: 'Добавление подписки', description: 'Откройте Server → Add subscription link. Вставьте вашу ссылку подписки и нажмите OK.', showDownloads: false, showImport: false },
                    { title: 'Подключение', description: 'Нажмите Server → Update subscription. Выберите сервер и нажмите Start.', showDownloads: false, showImport: false }
                ]
            }
        }
    },
    android: {
        name: 'Android',
        apps: {
            happ: {
                name: 'Happ',
                icon: '📱',
                downloads: [
                    { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=com.happproxy' },
                    { label: 'Скачать APK', url: 'https://github.com/Happ-proxy/happ-android/releases/latest/download/Happ.apk' }
                ],
                deepLink: (url) => `happ://import/${url}`,
                steps: [
                    { title: 'Установка приложения', description: 'Установите Happ из Google Play или скачайте APK напрямую.', showDownloads: true, showImport: false },
                    { title: 'Добавление подписки', description: 'Нажмите кнопку ниже, чтобы добавить подписку автоматически.', showDownloads: false, showImport: true },
                    { title: 'Подключение', description: 'Откройте приложение и подключитесь к серверу.', showDownloads: false, showImport: false }
                ]
            },
            nekobox: {
                name: 'NekoBox',
                icon: '🐱',
                downloads: [
                    { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=moe.nb4a' },
                    { label: 'Скачать APK', url: 'https://github.com/MatsuriDayo/NekoBoxForAndroid/releases/latest' }
                ],
                deepLink: null,
                steps: [
                    { title: 'Установка приложения', description: 'Установите NekoBox из Google Play или скачайте APK с GitHub.', showDownloads: true, showImport: false },
                    { title: 'Добавление подписки', description: 'Нажмите + → Subscription group. Вставьте ссылку подписки и нажмите ✓.', showDownloads: false, showImport: false },
                    { title: 'Подключение', description: 'Потяните список вниз для обновления. Выберите сервер и нажмите ▶.', showDownloads: false, showImport: false }
                ]
            }
        }
    },
    ios: {
        name: 'iOS',
        apps: {
            happ: {
                name: 'Happ',
                icon: '📱',
                downloads: [
                    { label: 'App Store (RU)', url: 'https://apps.apple.com/ru/app/happ-proxy-utility-plus/id6746188973' },
                    { label: 'App Store (US)', url: 'https://apps.apple.com/us/app/happ-proxy-utility/id6504287215' }
                ],
                deepLink: (url) => `happ://import/${url}`,
                steps: [
                    { title: 'Установка приложения', description: 'Установите Happ из App Store. Разрешите VPN-конфигурацию при первом запуске.', showDownloads: true, showImport: false },
                    { title: 'Добавление подписки', description: 'Нажмите кнопку ниже — приложение откроется и подписка добавится автоматически.', showDownloads: false, showImport: true },
                    { title: 'Подключение', description: 'Нажмите большую кнопку включения в центре. Выберите сервер из списка при необходимости.', showDownloads: false, showImport: false }
                ]
            }
        }
    },
    macos: {
        name: 'macOS',
        apps: {
            happ: {
                name: 'Happ',
                icon: '📱',
                downloads: [
                    { label: 'Скачать Happ', url: 'https://github.com/Happ-proxy/happ-desktop/releases/latest/download/Happ.macos.dmg' }
                ],
                deepLink: (url) => `happ://import/${url}`,
                steps: [
                    { title: 'Установка приложения', description: 'Скачайте и установите Happ. При первом запуске: ПКМ → Открыть.', showDownloads: true, showImport: false },
                    { title: 'Добавление подписки', description: 'Нажмите кнопку ниже — приложение откроется и подписка добавится автоматически.', showDownloads: false, showImport: true },
                    { title: 'Подключение', description: 'Нажмите большую кнопку включения в центре. Выберите сервер из списка при необходимости.', showDownloads: false, showImport: false }
                ]
            }
        }
    },
    linux: {
        name: 'Linux',
        apps: {
            happ: {
                name: 'Happ',
                icon: '📱',
                downloads: [
                    { label: 'Скачать DEB', url: 'https://github.com/Happ-proxy/happ-desktop/releases/latest/download/Happ.linux.x64.deb' }
                ],
                deepLink: (url) => `happ://import/${url}`,
                steps: [
                    { title: 'Установка приложения', description: 'Скачайте и установите DEB пакет: sudo dpkg -i Happ.linux.x64.deb', showDownloads: true, showImport: false },
                    { title: 'Добавление подписки', description: 'Нажмите кнопку ниже — приложение откроется и подписка добавится автоматически.', showDownloads: false, showImport: true },
                    { title: 'Подключение', description: 'Нажмите большую кнопку включения в центре. Выберите сервер из списка при необходимости.', showDownloads: false, showImport: false }
                ]
            }
        }
    }
};

// ============================================
// STATE
// ============================================

let currentPlatform = null;
let currentApp = null;

// ============================================
// PLATFORM & APP SELECTION
// ============================================

function selectPlatform(platformId) {
    currentPlatform = platformId;
    const platform = PLATFORMS[platformId];
    
    document.querySelectorAll('.platform-card').forEach(card => card.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    const modal = document.getElementById('app-modal');
    const modalTitle = document.getElementById('modal-title');
    const appGrid = document.getElementById('app-grid');
    const instructionsPanel = document.getElementById('instructions-panel');
    
    modalTitle.textContent = `${platform.name} — выберите приложение`;
    instructionsPanel.classList.add('hidden');
    appGrid.style.display = 'grid';
    
    // Generate app cards
    appGrid.innerHTML = '';
    for (const [appId, app] of Object.entries(platform.apps)) {
        const card = document.createElement('button');
        card.className = 'app-card';
        card.onclick = () => selectApp(platformId, appId);
        card.innerHTML = `
            <span class="app-icon">${app.icon}</span>
            <span class="app-name">${app.name}</span>
        `;
        appGrid.appendChild(card);
    }
    
    modal.classList.remove('hidden');
}

function selectApp(platformId, appId) {
    currentPlatform = platformId;
    currentApp = appId;
    
    const platform = PLATFORMS[platformId];
    const app = platform.apps[appId];
    
    const appGrid = document.getElementById('app-grid');
    const instructionsPanel = document.getElementById('instructions-panel');
    const instructionsTitle = document.getElementById('instructions-title');
    const instructionsContent = document.getElementById('instructions-content');
    
    appGrid.style.display = 'none';
    instructionsTitle.textContent = `${app.name} — инструкция`;
    instructionsContent.innerHTML = generateInstructions(app);
    instructionsPanel.classList.remove('hidden');
}

function generateInstructions(app) {
    let html = '';
    
    app.steps.forEach((step, index) => {
        html += `
            <div class="step">
                <div class="step-number">${index + 1}</div>
                <div class="step-content">
                    <h4>${step.title}</h4>
                    <p>${step.description}</p>
        `;
        
        if (step.showDownloads && app.downloads) {
            html += '<div class="step-buttons">';
            app.downloads.forEach(download => {
                html += `
                    <a href="${download.url}" target="_blank" class="action-btn download">
                        <svg viewBox="0 0 24 24"><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/></svg>
                        ${download.label}
                    </a>
                `;
            });
            html += '</div>';
        }
        
        if (step.showImport && app.deepLink) {
            html += `
                <div class="step-buttons">
                    <button class="action-btn import" onclick="importSubscription()">
                        <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                        Добавить подписку
                    </button>
                </div>
            `;
        }
        
        html += '</div></div>';
    });
    
    html += `
        <div class="instructions-footer">
            <p>После подключения проверьте IP на <a href="https://2ip.ru" target="_blank">2ip.ru</a></p>
        </div>
    `;
    
    return html;
}

function backToApps() {
    const appGrid = document.getElementById('app-grid');
    const instructionsPanel = document.getElementById('instructions-panel');
    const modalTitle = document.getElementById('modal-title');
    
    instructionsPanel.classList.add('hidden');
    appGrid.style.display = 'grid';
    modalTitle.textContent = `${PLATFORMS[currentPlatform].name} — выберите приложение`;
}

// ============================================
// IMPORT SUBSCRIPTION
// ============================================

function importSubscription() {
    if (!currentPlatform || !currentApp) {
        showToast('Ошибка: приложение не выбрано', 'error');
        return;
    }
    
    const app = PLATFORMS[currentPlatform].apps[currentApp];
    const subUrl = document.getElementById('subLink').value;
    
    if (!subUrl || subUrl.includes('your-server.com')) {
        showToast('Введите ссылку подписки', 'error');
        return;
    }
    
    if (!app.deepLink) {
        showToast('Автоимпорт недоступен для этого приложения', 'error');
        return;
    }
    
    const deepLink = app.deepLink(subUrl);
    console.log('[DEBUG] Deep link:', deepLink);
    
    showToast(`Открываем ${app.name}...`, 'success');
    
    const link = document.createElement('a');
    link.href = deepLink;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// ============================================
// MODAL
// ============================================

function closeModal() {
    document.getElementById('app-modal').classList.add('hidden');
    document.querySelectorAll('.platform-card').forEach(card => card.classList.remove('active'));
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ============================================
// FAQ
// ============================================

function toggleFaq(button) {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    
    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    
    // Open clicked if wasn't open
    if (!isOpen) {
        item.classList.add('open');
    }
}

// ============================================
// UTILITIES
// ============================================

function copyLink() {
    const input = document.getElementById('subLink');
    const btn = document.querySelector('.copy-btn');
    const btnText = document.getElementById('copyText');
    
    navigator.clipboard.writeText(input.value).then(() => {
        btn.classList.add('copied');
        btnText.textContent = 'Скопировано!';
        showToast('Ссылка скопирована', 'success');
        
        setTimeout(() => {
            btn.classList.remove('copied');
            btnText.textContent = 'Копировать';
        }, 2000);
    }).catch(() => {
        input.select();
        document.execCommand('copy');
        showToast('Ссылка скопирована', 'success');
    });
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================
// INIT
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const subUrl = params.get('sub');
    if (subUrl) {
        document.getElementById('subLink').value = subUrl;
    }
});
// Ждем загрузки страницы
document.addEventListener("DOMContentLoaded", function() {
    // Получаем параметры из URL
    const urlParams = new URLSearchParams(window.location.search);
    const userLink = urlParams.get('link'); // Ищем параметр ?link=...

    // Если ссылка передана, вставляем её в твой input
    if (userLink) {
        document.getElementById('subLink').value = userLink;
    }
});