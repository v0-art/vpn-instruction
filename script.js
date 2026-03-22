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
        path: '/platforms/Windows',
        apps: {
            happ: {
                name: 'Happ',
                icon: '📱',
                downloads: [
                    {
                        label: 'DOWNLOAD (x64)',
                        url: 'https://github.com/Happ-proxy/happ-desktop/releases/latest/download/setup-Happ.x64.exe'
                    }
                ],
                deepLink: (url) => `happ://add-sub?url=${encodeURIComponent(url)}&name=${encodeURIComponent(SUBSCRIPTION_NAME)}`,
                steps: [
                    {
                        title: 'Установка приложения',
                        description: 'Выберите подходящую версию для вашего устройства, нажмите на кнопку ниже и установите приложение.',
                        showDownloads: true
                    },
                    {
                        title: 'Добавление подписки',
                        description: 'Нажмите кнопку ниже — приложение откроется, и подписка добавится автоматически.',
                        showImport: true
                    },
                    {
                        title: 'Подключение и использование',
                        description: 'В главном разделе нажмите большую кнопку включения в центре для подключения к VPN. Не забудьте выбрать сервер в списке серверов. При необходимости выберите другой сервер из списка серверов.',
                        showDownloads: false,
                        showImport: false
                    }
                ]
            }
        }
    },
    android: {
        name: 'Android',
        path: '/platforms/Android',
        apps: {
            happ: {
                name: 'Happ',
                icon: '📱',
                downloads: [
                    {
                        label: 'GOOGLE PLAY',
                        url: 'https://play.google.com/store/apps/details?id=com.happproxy'
                    },
                    {
                        label: 'APK FILE',
                        url: 'https://github.com/Happ-proxy/happ-android/releases/latest/download/Happ.apk'
                    }
                ],
                deepLink: (url) => `happ://add-sub?url=${encodeURIComponent(url)}&name=${encodeURIComponent(SUBSCRIPTION_NAME)}`,
                steps: [
                    {
                        title: 'Установка приложения',
                        description: 'Откройте страницу в Google Play и установите приложение. Или установите приложение из APK файла напрямую, если Google Play не работает.',
                        showDownloads: true
                    },
                    {
                        title: 'Добавление подписки',
                        description: 'Нажмите кнопку ниже, чтобы добавить подписку.',
                        showImport: true
                    },
                    {
                        title: 'Подключение и использование',
                        description: 'Откройте приложение и подключитесь к серверу.',
                        showDownloads: false,
                        showImport: false
                    }
                ]
            }
        }
    },
    ios: {
        name: 'iOS',
        path: '/platforms/iOS',
        apps: {
            happ: {
                name: 'Happ',
                icon: '📱',
                downloads: [
                    {
                        label: 'APP STORE (RU)',
                        url: 'https://apps.apple.com/ru/app/happ-proxy-utility-plus/id6746188973'
                    },
                    {
                        label: 'APP STORE (US)',
                        url: 'https://apps.apple.com/us/app/happ-proxy-utility/id6504287215'
                    }
                ],
                deepLink: (url) => `happ://add-sub?url=${encodeURIComponent(url)}&name=${encodeURIComponent(SUBSCRIPTION_NAME)}`,
                steps: [
                    {
                        title: 'Установка приложения',
                        description: 'Откройте страницу в App Store и установите приложение. Запустите его, в окне разрешения VPN-конфигурации нажмите Allow и введите свой пароль.',
                        showDownloads: true
                    },
                    {
                        title: 'Добавление подписки',
                        description: 'Нажмите кнопку ниже — приложение откроется, и подписка добавится автоматически.',
                        showImport: true
                    },
                    {
                        title: 'Подключение и использование',
                        description: 'В главном разделе нажмите большую кнопку включения в центре для подключения к VPN. Не забудьте выбрать сервер в списке серверов. При необходимости выберите другой сервер из списка серверов.',
                        showDownloads: false,
                        showImport: false
                    }
                ]
            }
        }
    },
    macos: {
        name: 'macOS',
        path: '/platforms/macOS',
        apps: {
            happ: {
                name: 'Happ',
                icon: '📱',
                downloads: [
                    {
                        label: 'DOWNLOAD (macOS)',
                        url: 'https://github.com/Happ-proxy/happ-desktop/releases/latest/download/Happ.macos.dmg'
                    }
                ],
                deepLink: (url) => `happ://add-sub?url=${encodeURIComponent(url)}&name=${encodeURIComponent(SUBSCRIPTION_NAME)}`,
                steps: [
                    {
                        title: 'Установка приложения',
                        description: 'Выберите подходящую версию для вашего устройства, нажмите на кнопку ниже и установите приложение.',
                        showDownloads: true
                    },
                    {
                        title: 'Добавление подписки',
                        description: 'Нажмите кнопку ниже — приложение откроется, и подписка добавится автоматически.',
                        showImport: true
                    },
                    {
                        title: 'Подключение и использование',
                        description: 'В главном разделе нажмите большую кнопку включения в центре для подключения к VPN. Не забудьте выбрать сервер в списке серверов. При необходимости выберите другой сервер из списка серверов.',
                        showDownloads: false,
                        showImport: false
                    }
                ]
            }
        }
    },
    linux: {
        name: 'Linux',
        path: '/platforms/Linux',
        apps: {
            happ: {
                name: 'Happ',
                icon: '📱',
                downloads: [
                    {
                        label: 'DOWNLOAD (DEB x64)',
                        url: 'https://github.com/Happ-proxy/happ-desktop/releases/latest/download/Happ.linux.x64.deb'
                    }
                ],
                deepLink: (url) => `happ://add-sub?url=${encodeURIComponent(url)}&name=${encodeURIComponent(SUBSCRIPTION_NAME)}`,
                steps: [
                    {
                        title: 'Установка приложения',
                        description: 'Выберите подходящую версию для вашего устройства, нажмите на кнопку ниже и установите приложение.',
                        showDownloads: true
                    },
                    {
                        title: 'Добавление подписки',
                        description: 'Нажмите кнопку ниже — приложение откроется, и подписка добавится автоматически.',
                        showImport: true
                    },
                    {
                        title: 'Подключение и использование',
                        description: 'В главном разделе нажмите большую кнопку включения в центре для подключения к VPN. Не забудьте выбрать сервер в списке серверов. При необходимости выберите другой сервер из списка серверов.',
                        showDownloads: false,
                        showImport: false
                    }
                ]
            }
        }
    }
};

// Deep link for quick import (header section)
const APP_SCHEMES = {
    happ: {
        deepLink: (url) => `happ://add-sub?url=${encodeURIComponent(url)}&name=${encodeURIComponent(SUBSCRIPTION_NAME)}`,
        fallback: 'https://play.google.com/store/apps/details?id=com.happproxy'
    }
};

// ============================================
// STATE
// ============================================

let currentPlatform = null;
let currentApp = null;

// ============================================
// TERMINAL FUNCTIONS
// ============================================

function typeCommand(element, text, callback) {
    element.textContent = '';
    let i = 0;
    const interval = setInterval(() => {
        element.textContent += text[i];
        i++;
        if (i >= text.length) {
            clearInterval(interval);
            if (callback) setTimeout(callback, 300);
        }
    }, 30);
}

function addToTerminalHistory(container, prompt, command, output = null) {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = `
        <span class="prompt">${prompt}</span>
        <span class="command">${command}</span>
    `;
    container.appendChild(line);
    
    if (output) {
        const outputLine = document.createElement('div');
        outputLine.className = 'output';
        outputLine.innerHTML = output;
        container.appendChild(outputLine);
    }
}

// ============================================
// PLATFORM SELECTION
// ============================================

function selectPlatform(platformId) {
    currentPlatform = platformId;
    const platform = PLATFORMS[platformId];
    
    // Update main terminal
    const mainCommand = document.getElementById('current-command');
    const command = `cd ${platform.path} && ls -la`;
    
    typeCommand(mainCommand, command, () => {
        // Show modal after typing
        setTimeout(() => {
            showPlatformModal(platformId);
        }, 500);
    });
    
    // Highlight selected platform
    document.querySelectorAll('.platform-card').forEach(card => {
        card.classList.remove('active');
    });
    event.currentTarget.classList.add('active');
}

function showPlatformModal(platformId) {
    const platform = PLATFORMS[platformId];
    const modal = document.getElementById('app-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalPath = document.getElementById('modal-path');
    const modalHistory = document.getElementById('modal-terminal-history');
    const modalCommand = document.getElementById('modal-command');
    const appGrid = document.getElementById('app-grid');
    const instructionsPanel = document.getElementById('instructions-panel');
    
    // Reset
    modalHistory.innerHTML = '';
    instructionsPanel.classList.add('hidden');
    
    // Set title and path
    modalTitle.textContent = `${platform.name} - VPN Client`;
    modalPath.textContent = platform.path;
    
    // Type command
    typeCommand(modalCommand, 'ls -la', () => {
        // Add to history
        addToTerminalHistory(modalHistory, `root@luffy:${platform.path}#`, 'ls -la');
        modalCommand.textContent = '';
        
        // Generate app cards
        generateAppCards(platformId);
    });
    
    // Show modal
    modal.classList.remove('hidden');
}

function generateAppCards(platformId) {
    const platform = PLATFORMS[platformId];
    const appGrid = document.getElementById('app-grid');
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
}

// ============================================
// APP SELECTION & INSTRUCTIONS
// ============================================

function selectApp(platformId, appId) {
    currentPlatform = platformId;
    currentApp = appId;
    const platform = PLATFORMS[platformId];
    const app = platform.apps[appId];
    
    const modalHistory = document.getElementById('modal-terminal-history');
    const modalCommand = document.getElementById('modal-command');
    const instructionsPanel = document.getElementById('instructions-panel');
    const instructionsTitle = document.getElementById('instructions-title');
    const instructionsContent = document.getElementById('instructions-content');
    
    // Type cat command
    const command = `cat ${app.name.toLowerCase()}_setup.md`;
    
    typeCommand(modalCommand, command, () => {
        // Add to history
        addToTerminalHistory(modalHistory, `root@luffy:${platform.path}#`, command);
        modalCommand.textContent = '';
        
        // Generate instructions
        instructionsTitle.textContent = `${app.name} - Инструкция по установке`;
        instructionsContent.innerHTML = generateInstructions(app, platformId, appId);
        
        // Show instructions
        instructionsPanel.classList.remove('hidden');
        
        // Scroll to instructions
        instructionsPanel.scrollIntoView({ behavior: 'smooth' });
    });
}

function generateInstructions(app, platformId, appId) {
    let html = '<div class="instructions-steps">';
    
    app.steps.forEach((step, index) => {
        html += `
            <div class="step">
                <div class="step-number">[${index + 1}]</div>
                <div class="step-content">
                    <h4>${step.title}</h4>
                    <p>${step.description}</p>
        `;
        
        // Show download buttons if needed
        if (step.showDownloads && app.downloads) {
            html += '<div class="step-buttons">';
            app.downloads.forEach(download => {
                html += `
                    <a href="${download.url}" target="_blank" class="action-btn download">
                        <svg viewBox="0 0 24 24"><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/></svg>
                        <span>${download.label}</span>
                    </a>
                `;
            });
            html += '</div>';
        }
        
        // Show import button if needed
        if (step.showImport) {
            html += `
                <div class="step-buttons">
                    <button class="action-btn import" onclick="importSubscription()">
                        <svg viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                        <span>ДОБАВИТЬ ПОДПИСКУ</span>
                    </button>
                </div>
            `;
        }
        
        html += `
                </div>
            </div>
        `;
    });
    
    html += '</div>';
    
    // Footer with check link
    html += `
        <div class="instructions-footer">
            <p class="output">// После подключения проверьте IP: <a href="https://2ip.ru" target="_blank">2ip.ru</a></p>
        </div>
    `;
    
    return html;
}

// ============================================
// IMPORT FUNCTION
// ============================================

function importSubscription() {
    if (!currentPlatform || !currentApp) {
        showToast('[ERROR] Platform not selected', 'error');
        return;
    }
    
    const platform = PLATFORMS[currentPlatform];
    const app = platform.apps[currentApp];
    const subUrl = document.getElementById('subLink').value || SUBSCRIPTION_URL;
    
    if (app.deepLink) {
        const deepLink = app.deepLink(subUrl);
        
        showToast(`[EXEC] Открываем ${app.name}...`);
        
        console.log('Deep link:', deepLink);
        
        // Try to open app
        const iframe = document.createElement('iframe');
        iframe.style.display = 'none';
        iframe.src = deepLink;
        document.body.appendChild(iframe);
        
        setTimeout(() => {
            window.location.href = deepLink;
        }, 100);
        
        setTimeout(() => {
            document.body.removeChild(iframe);
        }, 2000);
    } else {
        showToast('[ERROR] Deep link not available', 'error');
    }
}

function openApp(appName) {
    const app = APP_SCHEMES[appName];
    if (!app) {
        showToast('[ERROR] App not found', 'error');
        return;
    }
    
    const subUrl = document.getElementById('subLink').value || SUBSCRIPTION_URL;
    const deepLink = app.deepLink(subUrl);
    
    showToast(`[EXEC] Открываем ${appName}...`);
    
    console.log('Quick import deep link:', deepLink);
    
    // Try to open
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.src = deepLink;
    document.body.appendChild(iframe);
    
    setTimeout(() => {
        window.location.href = deepLink;
    }, 100);
    
    setTimeout(() => {
        document.body.removeChild(iframe);
    }, 2000);
}

// ============================================
// MODAL FUNCTIONS
// ============================================

function closeModal() {
    document.getElementById('app-modal').classList.add('hidden');
    document.querySelectorAll('.platform-card').forEach(card => {
        card.classList.remove('active');
    });
    
    // Clear main terminal command
    document.getElementById('current-command').textContent = '';
}

function closeInstructions() {
    document.getElementById('instructions-panel').classList.add('hidden');
}

// Close modal on outside click
document.addEventListener('click', (e) => {
    const modal = document.getElementById('app-modal');
    if (e.target === modal) {
        closeModal();
    }
});

// Close on Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

function copyLink() {
    const input = document.getElementById('subLink');
    const btn = document.querySelector('.copy-btn');
    const btnText = document.getElementById('copyText');
    
    navigator.clipboard.writeText(input.value).then(() => {
        btn.classList.add('copied');
        btnText.textContent = '[COPIED]';
        showToast('[SUCCESS] Ссылка скопирована');
        
        setTimeout(() => {
            btn.classList.remove('copied');
            btnText.textContent = '[COPY]';
        }, 2000);
    }).catch(() => {
        input.select();
        document.execCommand('copy');
        btn.classList.add('copied');
        btnText.textContent = '[COPIED]';
        setTimeout(() => {
            btn.classList.remove('copied');
            btnText.textContent = '[COPY]';
        }, 2000);
    });
}

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast ${type}`;
    
    setTimeout(() => toast.classList.add('show'), 10);
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Get subscription from URL params
    const params = new URLSearchParams(window.location.search);
    const subUrl = params.get('sub');
    if (subUrl) {
        document.getElementById('subLink').value = subUrl;
    }
    
    // Startup animation in main terminal
    const mainCommand = document.getElementById('current-command');
    setTimeout(() => {
        typeCommand(mainCommand, 'system --init --secure', () => {
            const history = document.getElementById('terminal-history');
            addToTerminalHistory(history, 'root@luffy:~#', 'system --init --secure');
            
            const output = document.createElement('div');
            output.className = 'output';
            output.innerHTML = `
                <span style="color: var(--secondary)">[OK]</span> VLESS Reality Protocol loaded<br>
                <span style="color: var(--secondary)">[OK]</span> Encryption: TLS 1.3<br>
                <span style="color: var(--secondary)">[OK]</span> Ready for secure connection<br>
            `;
            history.appendChild(output);
            
            mainCommand.textContent = '';
        });
    }, 500);
});