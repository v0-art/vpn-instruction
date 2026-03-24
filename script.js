// ============================================
// CONFIGURATION
// ============================================
const SUBSCRIPTION_URL = 'https://your-server.com/sub/YOUR-KEY';

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
                downloads: [{ label: 'СКАЧАТЬ (x64)', url: 'https://github.com/Happ-proxy/happ-desktop/releases/latest/download/setup-Happ.x64.exe' }],
                steps: [
                    { title: 'Установка приложения', description: 'Выберите подходящую версию для вашего устройства, нажмите на кнопку ниже и установите приложение.', showDownloads: true, showCopyBox: false },
                    { title: 'Добавление подписки', description: 'Скопируйте вашу подписку ниже. Откройте приложение, нажмите + (Добавить) и выберите импорт из буфера обмена (Import from clipboard).', showDownloads: false, showCopyBox: true },
                    { title: 'Подключение', description: 'В главном разделе нажмите большую кнопку включения в центре. Выберите нужный сервер из списка.', showDownloads: false, showCopyBox: false }
                ]
            },
            nekoray: {
                name: 'Nekoray',
                icon: '🐱',
                downloads: [{ label: 'СКАЧАТЬ ARCHIVE', url: 'https://github.com/MatsuriDayo/nekoray/releases/download/4.0.1/nekoray-4.0.1-2024-12-12-windows64.zip' }],
                steps: [
                    { title: 'Установка', description: 'Скачайте архив (windows64.zip), распакуйте в удобную папку и запустите nekoray.exe.', showDownloads: true, showCopyBox: false },
                    { title: 'Добавление подписки', description: 'Скопируйте ссылку ниже. В программе нажмите Сервер (Server) → Добавить ссылку подписки. Вставьте ссылку и нажмите ОК.', showDownloads: false, showCopyBox: true },
                    { title: 'Подключение', description: 'Нажмите Сервер → Обновить подписку. Выберите сервер, кликните правой кнопкой мыши и нажмите Запустить.', showDownloads: false, showCopyBox: false }
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
                    { label: 'GOOGLE PLAY', url: 'https://play.google.com/store/apps/details?id=com.happproxy' },
                    { label: 'СКАЧАТЬ APK', url: 'https://github.com/Happ-proxy/happ-android/releases/latest/download/Happ.apk' }
                ],
                steps: [
                    { title: 'Установка', description: 'Установите приложение из Google Play или APK файла.', showDownloads: true, showCopyBox: false },
                    { title: 'Добавление подписки', description: 'Скопируйте ссылку ниже. В приложении нажмите +, выберите "Импорт" (Import) и вставьте ссылку.', showDownloads: false, showCopyBox: true },
                    { title: 'Подключение', description: 'Откройте приложение, выберите сервер и нажмите кнопку подключения.', showDownloads: false, showCopyBox: false }
                ]
            },
            nekobox: {
                name: 'NekoBox',
                icon: '🐱',
                downloads: [
                    { label: 'СКАЧАТЬ APK', url: 'https://github.com/MatsuriDayo/NekoBoxForAndroid/releases/download/1.4.2/NekoBox-1.4.2-arm64-v8a.apk' },
                    { label: 'Google Play', url: 'https://play.google.com/store/apps/details?id=moe.nb4a' }
                ],
                steps: [
                    { title: 'Установка', description: 'Установите NekoBox по кнопке выше.', showDownloads: true, showCopyBox: false },
                    { title: 'Добавление подписки', description: 'Скопируйте ссылку. В приложении нажмите на значок + вверху → Группа подписок (Subscription group). Вставьте ссылку в поле "Ссылка". Нажмите галочку.', showDownloads: false, showCopyBox: true },
                    { title: 'Подключение', description: 'Потяните экран вниз для обновления серверов. Выберите сервер и нажмите кнопку запуска (самолетик) внизу.', showDownloads: false, showCopyBox: false }
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
                    { label: 'APP STORE (RU)', url: 'https://apps.apple.com/ru/app/happ-proxy-utility-plus/id6746188973' },
                    { label: 'APP STORE (US)', url: 'https://apps.apple.com/us/app/happ-proxy-utility/id6504287215' }
                ],
                steps: [
                    { title: 'Установка', description: 'Установите приложение из App Store. При первом запуске разрешите добавление VPN-конфигурации.', showDownloads: true, showCopyBox: false },
                    { title: 'Добавление подписки', description: 'Скопируйте ссылку ниже. Откройте приложение, нажмите + и вставьте ссылку.', showDownloads: false, showCopyBox: true },
                    { title: 'Подключение', description: 'Нажмите большую кнопку включения в центре.', showDownloads: false, showCopyBox: false }
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
                    { label: 'СКАЧАТЬ (macOS)', url: 'https://github.com/Happ-proxy/happ-desktop/releases/latest/download/Happ.macos.dmg' }
                ],
                steps: [
                    { title: 'Установка', description: 'Скачайте и установите приложение.', showDownloads: true, showCopyBox: false },
                    { title: 'Добавление подписки', description: 'Скопируйте ссылку ниже. Откройте приложение, нажмите + и вставьте ссылку.', showDownloads: false, showCopyBox: true },
                    { title: 'Подключение', description: 'Нажмите большую кнопку включения в центре.', showDownloads: false, showCopyBox: false }
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
                    { label: 'СКАЧАТЬ (DEB x64)', url: 'https://github.com/Happ-proxy/happ-desktop/releases/latest/download/Happ.linux.x64.deb' }
                ],
                steps: [
                    { title: 'Установка', description: 'Скачайте файл и установите его.', showDownloads: true, showCopyBox: false },
                    { title: 'Добавление подписки', description: 'Скопируйте ссылку ниже. Откройте приложение, нажмите + и вставьте ссылку.', showDownloads: false, showCopyBox: true },
                    { title: 'Подключение', description: 'Выберите сервер и нажмите кнопку включения.', showDownloads: false, showCopyBox: false }
                ]
            },
            nekoray: {
                name: 'Nekoray',
                icon: '🐧',
                downloads: [{ label: 'СКАЧАТЬ APPIMAGE', url: 'https://github.com/MatsuriDayo/nekoray/releases/download/4.0.1/nekoray-4.0.1-2024-12-12-linux-x64.AppImage' }],
                steps: [
                    { title: 'Установка', description: 'Скачайте AppImage, дайте файлу права на выполнение (chmod +x) и запустите.', showDownloads: true, showCopyBox: false },
                    { title: 'Добавление подписки', description: 'Скопируйте ссылку ниже. В программе выберите Сервер → Добавить ссылку подписки.', showDownloads: false, showCopyBox: true },
                    { title: 'Подключение', description: 'Нажмите Сервер → Обновить подписку. Выберите сервер и нажмите Запустить.', showDownloads: false, showCopyBox: false }
                ]
            }
        }
    }
};

let currentPlatform = null;

function selectPlatform(platformId) {
    currentPlatform = platformId;
    const platform = PLATFORMS[platformId];
    
    document.querySelectorAll('.platform-card').forEach(c => c.classList.remove('active'));
    event.currentTarget.classList.add('active');
    
    document.getElementById('modal-title').textContent = `${platform.name} — выберите приложение`;
    
    // ЖЕСТКОЕ УПРАВЛЕНИЕ ОТОБРАЖЕНИЕМ
    document.getElementById('instructions-panel').style.display = 'none';
    
    const appGrid = document.getElementById('app-grid');
    appGrid.style.display = 'grid';
    appGrid.innerHTML = '';
    
    for (const [appId, app] of Object.entries(platform.apps)) {
        const card = document.createElement('div');
        card.className = 'app-card';
        card.onclick = () => selectApp(platformId, appId);
        card.innerHTML = `<span class="app-icon">${app.icon}</span><span class="app-name">${app.name}</span>`;
        appGrid.appendChild(card);
    }
    
    document.getElementById('app-modal').style.display = 'flex';
}

function selectApp(platformId, appId) {
    const app = PLATFORMS[platformId].apps[appId];
    
    // ЖЕСТКОЕ УПРАВЛЕНИЕ ОТОБРАЖЕНИЕМ
    document.getElementById('app-grid').style.display = 'none';
    
    document.getElementById('instructions-title').textContent = app.name;
    document.getElementById('instructions-content').innerHTML = generateInstructions(app);
    
    document.getElementById('instructions-panel').style.display = 'block';
}

function generateInstructions(app) {
    const subUrl = document.getElementById('subLink').value || SUBSCRIPTION_URL;
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
            app.downloads.forEach(d => {
                html += `<a href="${d.url}" target="_blank" class="action-btn download">${d.label}</a>`;
            });
            html += '</div>';
        }
        
        if (step.showCopyBox) {
            html += `
                <div class="inline-copy-box">
                    <input type="text" value="${subUrl}" readonly class="inline-sub-input" onclick="this.select()">
                    <button class="action-btn import" onclick="copyInlineLink(this, '${subUrl}')">Скопировать</button>
                </div>
            `;
        }
        
        html += '</div></div>';
    });
    return html;
}

function backToApps() {
    // ЖЕСТКОЕ УПРАВЛЕНИЕ ОТОБРАЖЕНИЕМ
    document.getElementById('instructions-panel').style.display = 'none';
    document.getElementById('app-grid').style.display = 'grid';
    document.getElementById('modal-title').textContent = `${PLATFORMS[currentPlatform].name} — выберите приложение`;
}

function closeModal() {
    document.getElementById('app-modal').style.display = 'none';
    document.querySelectorAll('.platform-card').forEach(c => c.classList.remove('active'));
}

function copyLink() {
    const input = document.getElementById('subLink');
    navigator.clipboard.writeText(input.value).then(() => {
        showToast('Ссылка скопирована', 'success');
    }).catch(() => {
        input.select(); document.execCommand('copy');
        showToast('Ссылка скопирована', 'success');
    });
}

function copyInlineLink(btn, text) {
    navigator.clipboard.writeText(text).then(() => {
        const oldText = btn.textContent;
        btn.textContent = 'Скопировано!';
        btn.style.background = '#10b981';
        setTimeout(() => {
            btn.textContent = oldText;
            btn.style.background = '';
        }, 2000);
        showToast('Ссылка скопирована', 'success');
    });
}

function toggleFaq(button) {
    const item = button.closest('.faq-item');
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => toast.classList.remove('show'), 3000);
}

document.addEventListener('DOMContentLoaded', () => {
    // Скрываем модалку при загрузке жестко
    document.getElementById('app-modal').style.display = 'none';

    // Инициализация Telegram Web App
    if (window.Telegram && Telegram.WebApp) {
        Telegram.WebApp.ready();
        Telegram.WebApp.expand();
    }

    // ИСПРАВЛЕНИЕ: Получаем подписку. Ищем параметр 'link' (как у вас в боте)
    const params = new URLSearchParams(window.location.search);
    const userLink = params.get('link') || params.get('sub'); // Проверяем оба варианта на всякий случай
    
    if (userLink) {
        document.getElementById('subLink').value = userLink;
    }
});