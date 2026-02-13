// ===== LOADING SCREEN =====
window.addEventListener('load', () => {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500);
    }, 2000);
});

// ===== NAVIGATION =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

// Mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 14, 18, 0.98)';
    } else {
        navbar.style.background = 'rgba(10, 14, 18, 0.95)';
    }
});

// ===== VISITOR COUNTER =====
function initVisitorCounter() {
    const visitorCountElement = document.getElementById('visitorCount');
    
    // Simple localStorage-based counter (for demo purposes)
    let count = localStorage.getItem('visitorCount') || 0;
    count = parseInt(count) + 1;
    localStorage.setItem('visitorCount', count);
    
    // Animate count
    let current = 0;
    const target = count;
    const duration = 2000;
    const increment = target / (duration / 16);
    
    const animate = () => {
        current += increment;
        if (current < target) {
            visitorCountElement.textContent = Math.floor(current);
            requestAnimationFrame(animate);
        } else {
            visitorCountElement.textContent = target;
        }
    };
    
    setTimeout(animate, 1000);
}

initVisitorCounter();

// ===== MATRIX RAIN ANIMATION =====
const matrixCanvas = document.getElementById('matrixCanvas');
if (matrixCanvas) {
    const ctx = matrixCanvas.getContext('2d');
    
    matrixCanvas.width = window.innerWidth;
    matrixCanvas.height = window.innerHeight;
    
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    const charArray = chars.split('');
    
    const fontSize = 14;
    const columns = matrixCanvas.width / fontSize;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }
    
    function drawMatrix() {
        ctx.fillStyle = 'rgba(10, 14, 18, 0.05)';
        ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);
        
        ctx.fillStyle = '#00ff41';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = charArray[Math.floor(Math.random() * charArray.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    
    setInterval(drawMatrix, 35);
    
    window.addEventListener('resize', () => {
        matrixCanvas.width = window.innerWidth;
        matrixCanvas.height = window.innerHeight;
    });
}

// ===== INTERACTIVE TERMINAL =====
const terminalInput = document.getElementById('terminalInput');
const terminalOutput = document.getElementById('terminalOutput');
const terminalBody = document.getElementById('terminalBody');

const commands = {
    help: {
        description: 'Show available commands',
        output: `
<div class="terminal-line"><span class="terminal-text-success">Available Commands:</span></div>
<div class="terminal-line"><span class="terminal-highlight">whoami</span> - Learn about me</div>
<div class="terminal-line"><span class="terminal-highlight">projects</span> - View my case investigations</div>
<div class="terminal-line"><span class="terminal-highlight">skills</span> - See my technical capabilities</div>
<div class="terminal-line"><span class="terminal-highlight">education</span> - My academic background</div>
<div class="terminal-line"><span class="terminal-highlight">contact</span> - Get in touch</div>
<div class="terminal-line"><span class="terminal-highlight">resume</span> - View/download my resume</div>
<div class="terminal-line"><span class="terminal-highlight">challenge</span> - Try the breach investigation challenge</div>
<div class="terminal-line"><span class="terminal-highlight">clear</span> - Clear terminal</div>
<div class="terminal-line"><span class="terminal-text-dim">Hidden commands: Try typing random things or explore easter eggs...</span></div>
        `
    },
    whoami: {
        description: 'Display user information',
        output: `
<div class="terminal-line"><span class="terminal-text-success">SAI SREEKAR REDDY BOYAPALLY</span></div>
<div class="terminal-line"><span class="terminal-text">Role: SOC Analyst</span></div>
<div class="terminal-line"><span class="terminal-text">Location: Charlotte, NC</span></div>
<div class="terminal-line"><span class="terminal-text">Status: Actively seeking opportunities</span></div>
<br>
<div class="terminal-line"><span class="terminal-text-dim">I hunt threats for a living. Well, I will be.</span></div>
<div class="terminal-line"><span class="terminal-text-dim">Currently finishing my Master's in Cybersecurity at UNC Charlotte.</span></div>
<div class="terminal-line"><span class="terminal-text-dim">My specialty? Finding needles in haystacks—except the needles are</span></div>
<div class="terminal-line"><span class="terminal-text-dim">sophisticated attacks and the haystacks are terabytes of log data.</span></div>
        `
    },
    projects: {
        description: 'List completed projects',
        output: `
<div class="terminal-line"><span class="terminal-text-success">CASE INVESTIGATIONS:</span></div>
<br>
<div class="terminal-line"><span class="terminal-highlight">CASE_001: Smart Home Heist</span></div>
<div class="terminal-line"><span class="terminal-text-dim">  Type: Digital Forensics Investigation</span></div>
<div class="terminal-line"><span class="terminal-text-dim">  Status: SOLVED ✓</span></div>
<div class="terminal-line"><span class="terminal-text-dim">  Impact: Recovered "deleted" evidence, traced complete attack chain</span></div>
<br>
<div class="terminal-line"><span class="terminal-highlight">CASE_002: Privacy-Preserving Medical AI</span></div>
<div class="terminal-line"><span class="terminal-text-dim">  Type: Machine Learning + Security</span></div>
<div class="terminal-line"><span class="terminal-text-dim">  Status: SOLVED ✓</span></div>
<div class="terminal-line"><span class="terminal-text-dim">  Impact: 97% accuracy + 100% privacy preservation</span></div>
<br>
<div class="terminal-line"><span class="terminal-text">Type 'scroll investigations' to read full stories in the browser</span></div>
        `
    },
    skills: {
        description: 'Display technical skills',
        output: `
<div class="terminal-line"><span class="terminal-text-success">TECHNICAL ARSENAL:</span></div>
<br>
<div class="terminal-line"><span class="terminal-highlight">🛡️  SOC Operations:</span></div>
<div class="terminal-line"><span class="terminal-text">  SIEM (Splunk), Log Analysis, Incident Response, MITRE ATT&CK</span></div>
<br>
<div class="terminal-line"><span class="terminal-highlight">🔍 Forensics:</span></div>
<div class="terminal-line"><span class="terminal-text">  Autopsy, RegRipper, Evidence Collection, Forensic Reporting</span></div>
<br>
<div class="terminal-line"><span class="terminal-highlight">⚡ Automation:</span></div>
<div class="terminal-line"><span class="terminal-text">  Python, Bash, Security Scripting</span></div>
<br>
<div class="terminal-line"><span class="terminal-text-dim">Scroll down to see full capabilities with proficiency levels</span></div>
        `
    },
    education: {
        description: 'Academic background',
        output: `
<div class="terminal-line"><span class="terminal-text-success">EDUCATION:</span></div>
<br>
<div class="terminal-line"><span class="terminal-highlight">Master of Science in Cybersecurity</span></div>
<div class="terminal-line"><span class="terminal-text">University of North Carolina at Charlotte</span></div>
<div class="terminal-line"><span class="terminal-text">Expected: May 2026</span></div>
<br>
<div class="terminal-line"><span class="terminal-highlight">Bachelor of Technology in Information Technology</span></div>
<div class="terminal-line"><span class="terminal-text">VNRVJIET, India</span></div>
<div class="terminal-line"><span class="terminal-text">Graduated: 2024</span></div>
        `
    },
    contact: {
        description: 'Contact information',
        output: `
<div class="terminal-line"><span class="terminal-text-success">CONTACT INFORMATION:</span></div>
<br>
<div class="terminal-line"><span class="terminal-highlight">Email:</span> sreekarreddy369@gmail.com</div>
<div class="terminal-line"><span class="terminal-highlight">LinkedIn:</span> linkedin.com/in/sai-sreekar-reddy-boyapally/</div>
<div class="terminal-line"><span class="terminal-highlight">GitHub:</span> github.com/Sreekar177</div>
<div class="terminal-line"><span class="terminal-highlight">Location:</span> Charlotte, NC</div>
<br>
<div class="terminal-line"><span class="terminal-text-dim">Actively seeking SOC Analyst opportunities</span></div>
        `
    },
    resume: {
        description: 'Resume information',
        output: `
<div class="terminal-line"><span class="terminal-text-success">RESUME:</span></div>
<br>
<div class="terminal-line"><span class="terminal-text">My resume is available upon request.</span></div>
<div class="terminal-line"><span class="terminal-text">Email me at sreekarreddy369@gmail.com</span></div>
<br>
<div class="terminal-line"><span class="terminal-text-dim">Or explore this interactive portfolio to see my capabilities!</span></div>
        `
    },
    challenge: {
        description: 'Launch breach investigation challenge',
        output: `
<div class="terminal-line"><span class="terminal-text-success">Launching breach investigation challenge...</span></div>
<div class="terminal-line"><span class="terminal-text">Scroll down to the Challenge section or click the button above!</span></div>
        `
    },
    clear: {
        description: 'Clear terminal output',
        output: 'CLEAR'
    },
    ls: {
        description: 'List directory contents',
        output: `
<div class="terminal-line"><span class="terminal-text">total 5</span></div>
<div class="terminal-line"><span class="terminal-highlight">drwxr-xr-x</span> projects/</div>
<div class="terminal-line"><span class="terminal-highlight">drwxr-xr-x</span> skills/</div>
<div class="terminal-line"><span class="terminal-highlight">-rw-r--r--</span> about.txt</div>
<div class="terminal-line"><span class="terminal-highlight">-rw-r--r--</span> contact.txt</div>
<div class="terminal-line"><span class="terminal-highlight">-rwxr-xr-x</span> hunt-threats.sh</div>
        `
    },
    pwd: {
        description: 'Print working directory',
        output: `<div class="terminal-line"><span class="terminal-text">/home/sreekar/security-portfolio</span></div>`
    },
    date: {
        description: 'Display current date',
        output: `<div class="terminal-line"><span class="terminal-text">${new Date().toString()}</span></div>`
    },
    'sudo hack-the-planet': {
        description: 'Easter egg',
        output: `
<div class="terminal-line"><span class="terminal-text-success">Access Granted. Welcome, Elite Hacker.</span></div>
<div class="terminal-line"><span class="terminal-text-dim">Just kidding. Real security isn't about breaking in—</span></div>
<div class="terminal-line"><span class="terminal-text-dim">it's about keeping the bad guys out.</span></div>
        `
    },
    matrix: {
        description: 'Easter egg',
        output: `
<div class="terminal-line"><span class="terminal-text-success">Wake up, Neo...</span></div>
<div class="terminal-line"><span class="terminal-text">The Matrix has you...</span></div>
<div class="terminal-line"><span class="terminal-text-dim">Follow the green code in the background ↑</span></div>
        `
    },
    'hack nasa': {
        description: 'Easter egg',
        output: `
<div class="terminal-line"><span class="terminal-text" style="color: #ff5555;">Permission denied. NASA's security is better than that.</span></div>
<div class="terminal-line"><span class="terminal-text-dim">Also, that's super illegal. Let's stick to ethical security, yeah?</span></div>
        `
    }
};

if (terminalInput) {
    // Focus terminal input on load
    setTimeout(() => {
        terminalInput.focus();
    }, 2500);
    
    // Handle terminal commands
    terminalInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim().toLowerCase();
            
            if (command) {
                // Add command to output
                addTerminalLine(`<span class="terminal-prompt">sreekar@security-ops:~$</span> ${terminalInput.value}`);
                
                // Execute command
                if (commands[command]) {
                    if (commands[command].output === 'CLEAR') {
                        terminalOutput.innerHTML = '';
                    } else {
                        addTerminalOutput(commands[command].output);
                    }
                } else if (command.includes('scroll')) {
                    const section = command.replace('scroll ', '');
                    const element = document.getElementById(section);
                    if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        addTerminalLine(`<span class="terminal-text-success">Scrolling to ${section}...</span>`);
                    } else {
                        addTerminalLine(`<span class="terminal-text" style="color: #ff5555;">Section not found. Try: investigations, challenge, skills, contact</span>`);
                    }
                } else {
                    addTerminalLine(`<span class="terminal-text" style="color: #ff5555;">Command not found: ${command}</span>`);
                    addTerminalLine(`<span class="terminal-text-dim">Type 'help' to see available commands</span>`);
                }
                
                terminalInput.value = '';
                terminalBody.scrollTop = terminalBody.scrollHeight;
            }
        }
    });
}

function addTerminalLine(content) {
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = content;
    terminalOutput.appendChild(line);
}

function addTerminalOutput(content) {
    terminalOutput.innerHTML += content;
}

// ===== CASE INVESTIGATION TOGGLE =====
function toggleCase(caseNumber) {
    const caseDetails = document.getElementById(`case${caseNumber}`);
    const btn = caseDetails.previousElementSibling;
    
    if (caseDetails.classList.contains('active')) {
        caseDetails.classList.remove('active');
        btn.querySelector('span').textContent = 'READ THE INVESTIGATION';
    } else {
        // Close all other cases
        document.querySelectorAll('.case-details').forEach(detail => {
            detail.classList.remove('active');
        });
        
        caseDetails.classList.add('active');
        btn.querySelector('span').textContent = 'COLLAPSE';
    }
}

// ===== BREACH INVESTIGATION CHALLENGE =====
const challengeData = {
    logs: [
        { text: '2025-02-13 10:23:45 192.168.1.105 -> 10.0.0.15:443 HTTPS/TLS [Normal]', malicious: false },
        { text: '2025-02-13 10:23:47 192.168.1.108 -> 8.8.8.8:53 DNS Query [google.com]', malicious: false },
        { text: '2025-02-13 10:23:50 192.168.1.102 -> 10.0.0.15:80 HTTP GET /api/users', malicious: false },
        { text: '2025-02-13 10:23:52 192.168.1.110 -> 185.220.101.45:4444 TCP SYN [ALERT]', malicious: true },
        { text: '2025-02-13 10:23:54 192.168.1.105 -> 10.0.0.20:22 SSH Connection', malicious: false },
        { text: '2025-02-13 10:23:56 192.168.1.107 -> 10.0.0.15:443 HTTPS/TLS [Normal]', malicious: false },
        { text: '2025-02-13 10:23:58 192.168.1.109 -> 8.8.4.4:53 DNS Query [amazon.com]', malicious: false },
        { text: '2025-02-13 10:24:00 192.168.1.103 -> 10.0.0.25:3306 MySQL Connection', malicious: false },
        { text: '2025-02-13 10:24:02 192.168.1.106 -> 10.0.0.15:80 HTTP GET /login', malicious: false },
        { text: '2025-02-13 10:24:04 192.168.1.111 -> 10.0.0.30:443 HTTPS/TLS [Normal]', malicious: false }
    ],
    correctAnswer: 3,
    explanation: {
        correct: "Excellent catch! That's a connection to port 4444 on a suspicious IP (185.220.101.45, known Tor exit node). Port 4444 is commonly used for reverse shells and command & control. The [ALERT] tag was a hint, but the real red flags are: unusual destination IP, non-standard port, and TCP SYN suggesting connection initiation.",
        incorrect: "Not quite. Look for unusual destination IPs, non-standard ports, or suspicious connection patterns. The malicious entry has port 4444 (common for reverse shells) and connects to a Tor exit node IP. Normal traffic usually goes to well-known services and ports."
    }
};

let challengeStartTime;

function startChallenge() {
    const challengeIntro = document.getElementById('challengeIntro');
    const challengeGame = document.getElementById('challengeGame');
    
    challengeIntro.style.display = 'none';
    challengeGame.style.display = 'block';
    
    challengeStartTime = Date.now();
    
    // Display logs
    const logContent = document.getElementById('logContent');
    logContent.innerHTML = '';
    
    challengeData.logs.forEach((log, index) => {
        const logEntry = document.createElement('div');
        logEntry.className = 'log-entry';
        logEntry.textContent = `[${index}] ${log.text}`;
        logContent.appendChild(logEntry);
    });
    
    // Display options
    const challengeOptions = document.getElementById('challengeOptions');
    challengeOptions.innerHTML = '';
    
    challengeData.logs.forEach((log, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.className = 'option-btn';
        optionBtn.textContent = `Entry [${index}]: ${log.text}`;
        optionBtn.onclick = () => checkAnswer(index);
        challengeOptions.appendChild(optionBtn);
    });
}

function checkAnswer(selectedIndex) {
    const challengeGame = document.getElementById('challengeGame');
    const challengeResult = document.getElementById('challengeResult');
    const timeElapsed = Math.floor((Date.now() - challengeStartTime) / 1000);
    
    challengeGame.style.display = 'none';
    challengeResult.style.display = 'block';
    
    const isCorrect = selectedIndex === challengeData.correctAnswer;
    
    challengeResult.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <h3 style="font-size: 2rem; margin-bottom: 1rem; color: ${isCorrect ? 'var(--primary)' : '#ff5555'};">
                ${isCorrect ? '🎯 CORRECT!' : '❌ Not Quite'}
            </h3>
            <p style="font-size: 1.125rem; color: var(--text-dim); margin-bottom: 1.5rem; line-height: 1.7;">
                ${isCorrect ? challengeData.explanation.correct : challengeData.explanation.incorrect}
            </p>
            <div style="font-family: var(--font-mono); color: var(--text-dim); margin-bottom: 1.5rem;">
                Time: ${timeElapsed} seconds
            </div>
            <button class="btn btn-primary" onclick="resetChallenge()">TRY AGAIN</button>
        </div>
    `;
    
    // Track analytics
    if (typeof gtag === 'function') {
        gtag('event', 'challenge_completed', {
            correct: isCorrect,
            time: timeElapsed
        });
    }
}

function resetChallenge() {
    const challengeIntro = document.getElementById('challengeIntro');
    const challengeGame = document.getElementById('challengeGame');
    const challengeResult = document.getElementById('challengeResult');
    
    challengeResult.style.display = 'none';
    challengeIntro.style.display = 'block';
}

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);
            
            fadeInObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply to elements
document.querySelectorAll('.case-card, .skill-category, .cert-card, .contact-card').forEach(el => {
    fadeInObserver.observe(el);
});

// ===== SKILL BAR ANIMATIONS =====
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target;
            const width = progress.style.getPropertyValue('--progress');
            progress.style.width = '0';
            
            setTimeout(() => {
                progress.style.transition = 'width 1.5s ease';
                progress.style.width = width;
            }, 200);
            
            skillObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-progress').forEach(bar => {
    skillObserver.observe(bar);
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== FOOTER YEAR =====
document.getElementById('currentYear').textContent = new Date().getFullYear();

// ===== CONSOLE EASTER EGG =====
console.log('%c🔐 SECURITY ALERT!', 'color: #00ff41; font-size: 24px; font-weight: bold;');
console.log('%c👋 Hey there, curious one!', 'color: #0af; font-size: 18px;');
console.log('%cIf you\'re looking around in here, you might be the kind of person I want to work with.', 'color: #e0e0e0; font-size: 14px;');
console.log('%c📧 Let\'s connect: sreekarreddy369@gmail.com', 'color: #00ff41; font-size: 14px; font-weight: bold;');
console.log('%c💡 Pro tip: Try typing "matrix" in the terminal above!', 'color: #888; font-size: 12px;');

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K to focus terminal
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        terminalInput && terminalInput.focus();
    }
});

// ===== ANALYTICS EVENTS =====
// Track section views
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && typeof gtag === 'function') {
            gtag('event', 'section_view', {
                section_name: entry.target.id
            });
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('section[id]').forEach(section => {
    sectionObserver.observe(section);
});

// Track outbound links
document.querySelectorAll('a[href^="http"], a[href^="mailto"]').forEach(link => {
    link.addEventListener('click', function() {
        if (typeof gtag === 'function') {
            gtag('event', 'outbound_click', {
                link_url: this.href,
                link_text: this.textContent
            });
        }
    });
});

console.log('%c✅ All systems operational. Welcome to the portfolio.', 'color: #00ff41; font-size: 12px;');
