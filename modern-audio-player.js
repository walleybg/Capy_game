class ModernAudioPlayer {
    constructor() {
        this.audio = null;
        this.player = null;
        this.overlay = null;
        
        this.isPlaying = false;
        this.isDragging = false;
        this.currentSpeed = 1.0;
        this.speeds = [1.0, 1.25, 1.5];
        this.speedIndex = 0;
        
        this.createPlayer();
        this.initializeElements();
        this.bindEvents();
        this.setupDragging();
    }
    
    createPlayer() {
        // Create overlay
        this.overlay = document.createElement('div');
        this.overlay.id = 'modernAudioOverlay';
        this.overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.3);
            z-index: 9998;
            display: none;
        `;
        document.body.appendChild(this.overlay);
        
        // Create player
        this.player = document.createElement('div');
        this.player.id = 'modernAudioPlayer';
        this.player.innerHTML = `
            <div class="player-header" id="modernPlayerHeader">
                <div class="player-title">
                    <span>🎧</span>
                    <span>Podcast Player</span>
                </div>
                <div class="player-controls-header">
                    <button class="header-btn" id="modernMinimizeBtn" title="Minimizar">−</button>
                    <button class="header-btn" id="modernCloseBtn" title="Fechar">×</button>
                </div>
            </div>
            
            <div class="player-content" id="modernPlayerContent">
                <div class="track-info">
                    <div class="track-title" id="modernTrackTitle">Carregando...</div>
                    <div class="track-subtitle" id="modernTrackSubtitle">Aguarde...</div>
                </div>
                
                <div class="progress-container">
                    <div class="progress-bar" id="modernProgressBar">
                        <div class="progress-fill" id="modernProgressFill">
                            <div class="progress-handle" id="modernProgressHandle"></div>
                        </div>
                    </div>
                    <div class="time-display">
                        <span id="modernCurrentTime">0:00</span>
                        <span id="modernTotalTime">0:00</span>
                    </div>
                </div>
                
                <div class="main-controls">
                    <button class="control-btn" id="modernRewind30Btn" title="Retroagir 30s">⏪</button>
                    <button class="control-btn" id="modernRewind10Btn" title="Retroagir 10s">⏮</button>
                    <button class="control-btn play-btn" id="modernPlayPauseBtn" title="Play/Pause">▶</button>
                    <button class="control-btn" id="modernForward10Btn" title="Avançar 10s">⏭</button>
                    <button class="control-btn" id="modernForward30Btn" title="Avançar 30s">⏩</button>
                </div>
                
                <div class="secondary-controls">
                    <div class="speed-control">
                        <button class="speed-btn" id="modernSpeedBtn" title="Velocidade">1.0x</button>
                    </div>
                    
                    <div class="volume-control">
                        <span>🔊</span>
                        <input type="range" class="volume-slider" id="modernVolumeSlider" min="0" max="100" value="100">
                        <span class="volume-display" id="modernVolumeDisplay">100%</span>
                    </div>
                </div>
            </div>
        `;
        
        // Add styles
        this.player.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            width: 400px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            z-index: 9999;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            color: white;
            overflow: hidden;
            transition: all 0.3s ease;
            display: none;
        `;
        
        document.body.appendChild(this.player);
        
        // Create audio element
        this.audio = document.createElement('audio');
        this.audio.id = 'modernAudioElement';
        this.audio.preload = 'metadata';
        this.audio.style.display = 'none';
        document.body.appendChild(this.audio);
        
        // Add CSS styles
        this.addStyles();
    }
    
    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .modern-audio-player.minimized {
                height: 60px;
            }
            
            .modern-audio-player.minimized .player-content {
                display: none;
            }
            
            .player-header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 15px 20px;
                background: rgba(255, 255, 255, 0.1);
                cursor: move;
                user-select: none;
            }
            
            .player-title {
                font-size: 16px;
                font-weight: 600;
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .player-controls-header {
                display: flex;
                gap: 10px;
            }
            
            .header-btn {
                width: 30px;
                height: 30px;
                border: none;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.2);
                color: white;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 14px;
                transition: all 0.2s ease;
            }
            
            .header-btn:hover {
                background: rgba(255, 255, 255, 0.3);
                transform: scale(1.1);
            }
            
            .player-content {
                padding: 20px;
            }
            
            .track-info {
                text-align: center;
                margin-bottom: 25px;
            }
            
            .track-title {
                font-size: 18px;
                font-weight: 600;
                margin-bottom: 5px;
            }
            
            .track-subtitle {
                font-size: 14px;
                opacity: 0.8;
            }
            
            .progress-container {
                margin-bottom: 20px;
            }
            
            .progress-bar {
                width: 100%;
                height: 8px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 4px;
                position: relative;
                cursor: pointer;
                margin: 10px 0;
            }
            
            .progress-fill {
                height: 100%;
                background: linear-gradient(90deg, #ffd700, #ffed4e);
                border-radius: 4px;
                width: 0%;
                transition: width 0.1s ease;
                position: relative;
            }
            
            .progress-handle {
                position: absolute;
                right: -6px;
                top: 50%;
                transform: translateY(-50%);
                width: 16px;
                height: 16px;
                background: #ffd700;
                border-radius: 50%;
                box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
                cursor: pointer;
                opacity: 0;
                transition: opacity 0.2s ease;
            }
            
            .progress-bar:hover .progress-handle {
                opacity: 1;
            }
            
            .time-display {
                display: flex;
                justify-content: space-between;
                font-size: 12px;
                opacity: 0.8;
                margin-top: 5px;
            }
            
            .main-controls {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
                margin-bottom: 20px;
            }
            
            .control-btn {
                width: 50px;
                height: 50px;
                border: none;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.2);
                color: white;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
                transition: all 0.2s ease;
            }
            
            .control-btn:hover {
                background: rgba(255, 255, 255, 0.3);
                transform: scale(1.1);
            }
            
            .play-btn {
                width: 60px;
                height: 60px;
                background: rgba(255, 255, 255, 0.9);
                color: #667eea;
                font-size: 24px;
            }
            
            .play-btn:hover {
                background: white;
                transform: scale(1.1);
            }
            
            .secondary-controls {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 15px;
            }
            
            .speed-control {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            
            .speed-btn {
                padding: 8px 12px;
                border: none;
                border-radius: 20px;
                background: rgba(255, 255, 255, 0.2);
                color: white;
                cursor: pointer;
                font-size: 12px;
                font-weight: 600;
                transition: all 0.2s ease;
            }
            
            .speed-btn:hover,
            .speed-btn.active {
                background: rgba(255, 255, 255, 0.4);
            }
            
            .volume-control {
                display: flex;
                align-items: center;
                gap: 10px;
                flex: 1;
            }
            
            .volume-slider {
                flex: 1;
                height: 4px;
                background: rgba(255, 255, 255, 0.2);
                border-radius: 2px;
                outline: none;
                cursor: pointer;
            }
            
            .volume-slider::-webkit-slider-thumb {
                appearance: none;
                width: 16px;
                height: 16px;
                background: #ffd700;
                border-radius: 50%;
                cursor: pointer;
            }
            
            .volume-slider::-moz-range-thumb {
                width: 16px;
                height: 16px;
                background: #ffd700;
                border-radius: 50%;
                cursor: pointer;
                border: none;
            }
            
            .volume-display {
                font-size: 12px;
                min-width: 35px;
                text-align: right;
            }
            
            .modern-audio-player.dragging {
                transition: none;
            }
            
            @media (max-width: 480px) {
                #modernAudioPlayer {
                    width: calc(100% - 40px);
                    right: 20px;
                    left: 20px;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    initializeElements() {
        // Player controls
        this.playPauseBtn = document.getElementById('modernPlayPauseBtn');
        this.progressBar = document.getElementById('modernProgressBar');
        this.progressFill = document.getElementById('modernProgressFill');
        this.progressHandle = document.getElementById('modernProgressHandle');
        this.currentTimeEl = document.getElementById('modernCurrentTime');
        this.totalTimeEl = document.getElementById('modernTotalTime');
        this.trackTitle = document.getElementById('modernTrackTitle');
        this.trackSubtitle = document.getElementById('modernTrackSubtitle');
        this.volumeSlider = document.getElementById('modernVolumeSlider');
        this.volumeDisplay = document.getElementById('modernVolumeDisplay');
        this.speedBtn = document.getElementById('modernSpeedBtn');
        
        // Navigation buttons
        this.rewind30Btn = document.getElementById('modernRewind30Btn');
        this.rewind10Btn = document.getElementById('modernRewind10Btn');
        this.forward10Btn = document.getElementById('modernForward10Btn');
        this.forward30Btn = document.getElementById('modernForward30Btn');
        
        // Header controls
        this.minimizeBtn = document.getElementById('modernMinimizeBtn');
        this.closeBtn = document.getElementById('modernCloseBtn');
        this.playerHeader = document.getElementById('modernPlayerHeader');
        this.playerContent = document.getElementById('modernPlayerContent');
    }
    
    bindEvents() {
        // Play/Pause
        this.playPauseBtn.addEventListener('click', () => this.togglePlayPause());
        
        // Progress bar
        this.progressBar.addEventListener('click', (e) => this.seek(e));
        
        // Navigation buttons
        this.rewind30Btn.addEventListener('click', () => this.skip(-30));
        this.rewind10Btn.addEventListener('click', () => this.skip(-10));
        this.forward10Btn.addEventListener('click', () => this.skip(10));
        this.forward30Btn.addEventListener('click', () => this.skip(30));
        
        // Speed control
        this.speedBtn.addEventListener('click', () => this.cycleSpeed());
        
        // Volume control
        this.volumeSlider.addEventListener('input', (e) => this.setVolume(e.target.value));
        
        // Header controls
        this.minimizeBtn.addEventListener('click', () => this.toggleMinimize());
        this.closeBtn.addEventListener('click', () => this.close());
        
        // Audio events
        this.audio.addEventListener('loadedmetadata', () => this.onLoadedMetadata());
        this.audio.addEventListener('timeupdate', () => this.updateProgress());
        this.audio.addEventListener('ended', () => this.onEnded());
        this.audio.addEventListener('error', () => this.onError());
        this.audio.addEventListener('canplay', () => this.onCanPlay());
        
        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboard(e));
        
        // Overlay click to close
        this.overlay.addEventListener('click', () => this.close());
    }
    
    setupDragging() {
        let isDragging = false;
        let startX, startY, startLeft, startTop;
        
        this.playerHeader.addEventListener('mousedown', (e) => {
            isDragging = true;
            this.player.classList.add('dragging');
            
            startX = e.clientX;
            startY = e.clientY;
            
            const rect = this.player.getBoundingClientRect();
            startLeft = rect.left;
            startTop = rect.top;
            
            e.preventDefault();
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            
            const deltaX = e.clientX - startX;
            const deltaY = e.clientY - startY;
            
            let newLeft = startLeft + deltaX;
            let newTop = startTop + deltaY;
            
            // Keep within viewport bounds
            const playerRect = this.player.getBoundingClientRect();
            const maxLeft = window.innerWidth - playerRect.width;
            const maxTop = window.innerHeight - playerRect.height;
            
            newLeft = Math.max(0, Math.min(newLeft, maxLeft));
            newTop = Math.max(0, Math.min(newTop, maxTop));
            
            this.player.style.left = newLeft + 'px';
            this.player.style.top = newTop + 'px';
            this.player.style.right = 'auto';
        });
        
        document.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                this.player.classList.remove('dragging');
            }
        });
    }
    
    open(audioSrc, title, subtitle) {
        console.log('Abrindo player moderno:', { audioSrc, title, subtitle });
        
        this.trackTitle.textContent = title || 'Podcast';
        this.trackSubtitle.textContent = subtitle || 'Capy Game';
        
        this.audio.src = audioSrc;
        this.audio.load();
        
        this.player.style.display = 'block';
        this.overlay.style.display = 'block';
        
        // Reset position
        this.player.style.top = '20px';
        this.player.style.right = '20px';
        this.player.style.left = 'auto';
        
        console.log('Player moderno aberto com sucesso');
    }
    
    close() {
        this.audio.pause();
        this.audio.src = '';
        this.player.style.display = 'none';
        this.overlay.style.display = 'none';
        this.isPlaying = false;
        this.updatePlayButton();
        console.log('Player moderno fechado');
    }
    
    toggleMinimize() {
        this.player.classList.toggle('minimized');
        this.minimizeBtn.textContent = this.player.classList.contains('minimized') ? '□' : '−';
    }
    
    togglePlayPause() {
        if (this.isPlaying) {
            this.audio.pause();
        } else {
            this.audio.play().catch(e => console.error('Erro ao reproduzir:', e));
        }
        this.isPlaying = !this.isPlaying;
        this.updatePlayButton();
    }
    
    updatePlayButton() {
        this.playPauseBtn.textContent = this.isPlaying ? '⏸' : '▶';
    }
    
    seek(e) {
        const rect = this.progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const newTime = percent * this.audio.duration;
        
        if (isFinite(newTime)) {
            this.audio.currentTime = newTime;
            console.log(`Seek para: ${this.formatTime(newTime)} (${(percent * 100).toFixed(1)}%)`);
        }
    }
    
    skip(seconds) {
        const newTime = this.audio.currentTime + seconds;
        this.audio.currentTime = Math.max(0, Math.min(newTime, this.audio.duration));
        console.log(`Skip ${seconds}s para: ${this.formatTime(this.audio.currentTime)}`);
    }
    
    cycleSpeed() {
        this.speedIndex = (this.speedIndex + 1) % this.speeds.length;
        this.currentSpeed = this.speeds[this.speedIndex];
        this.audio.playbackRate = this.currentSpeed;
        this.speedBtn.textContent = this.currentSpeed + 'x';
        console.log(`Velocidade alterada para: ${this.currentSpeed}x`);
    }
    
    setVolume(value) {
        this.audio.volume = value / 100;
        this.volumeDisplay.textContent = value + '%';
    }
    
    updateProgress() {
        if (!this.audio.duration) return;
        
        const percent = (this.audio.currentTime / this.audio.duration) * 100;
        this.progressFill.style.width = percent + '%';
        
        this.currentTimeEl.textContent = this.formatTime(this.audio.currentTime);
        this.totalTimeEl.textContent = this.formatTime(this.audio.duration);
    }
    
    formatTime(seconds) {
        if (!isFinite(seconds)) return '0:00';
        
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return mins + ':' + (secs < 10 ? '0' : '') + secs;
    }
    
    onLoadedMetadata() {
        this.totalTimeEl.textContent = this.formatTime(this.audio.duration);
        console.log('Metadata carregada, duração:', this.formatTime(this.audio.duration));
    }
    
    onCanPlay() {
        console.log('Áudio pronto para reprodução');
    }
    
    onError() {
        console.error('Erro ao carregar áudio');
        this.trackTitle.textContent = 'Erro no carregamento';
    }
    
    onEnded() {
        this.isPlaying = false;
        this.updatePlayButton();
        this.progressFill.style.width = '0%';
        this.currentTimeEl.textContent = '0:00';
        console.log('Reprodução finalizada');
    }
    
    handleKeyboard(e) {
        if (!this.player.style.display || this.player.style.display === 'none') return;
        
        switch(e.code) {
            case 'Space':
                e.preventDefault();
                this.togglePlayPause();
                break;
            case 'ArrowLeft':
                e.preventDefault();
                this.skip(-10);
                break;
            case 'ArrowRight':
                e.preventDefault();
                this.skip(10);
                break;
            case 'ArrowUp':
                e.preventDefault();
                const currentVol = Math.min(100, parseInt(this.volumeSlider.value) + 10);
                this.volumeSlider.value = currentVol;
                this.setVolume(currentVol);
                break;
            case 'ArrowDown':
                e.preventDefault();
                const newVol = Math.max(0, parseInt(this.volumeSlider.value) - 10);
                this.volumeSlider.value = newVol;
                this.setVolume(newVol);
                break;
        }
    }
}

// Initialize modern player when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.modernAudioPlayer = new ModernAudioPlayer();
    console.log('Modern Audio Player inicializado');
});
