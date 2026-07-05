document.addEventListener("DOMContentLoaded", () => {
    
    // 1. ROUTING PATTERN FOR SIDEBAR NAV MODULES
    const navItems = document.querySelectorAll('.sidebar-menu li');
    const views = document.querySelectorAll('.admin-view');

    navItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove previous active configurations
            navItems.forEach(i => i.classList.remove('active'));
            this.classList.add('active');

            // Find current logical views
            const targetViewId = 'view-' + this.getAttribute('data-page');

            views.forEach(view => {
                view.classList.remove('active');
                if (view.id === targetViewId) {
                    view.classList.add('active');
                }
            });

            // Automatically resolve mobile sidebar overflow state
            document.getElementById('sidebar').classList.remove('active');
        });
    });

    // 2. MOBILE RESPONSIVE HAMBURGER VIEW CONTROLLER
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');

    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', (e) => {
            sidebar.classList.toggle('active');
            e.stopPropagation();
        });

        document.addEventListener('click', (e) => {
            if (!sidebar.contains(e.target) && sidebar.classList.contains('active')) {
                sidebar.classList.remove('active');
            }
        });
    }

    // 3. LIVE INTERACTIVE TERMINAL LOG ENGINE
    let terminalSimulationActive = true;
    const terminalToggle = document.getElementById('terminalToggle');
    if(terminalToggle) {
        terminalToggle.addEventListener('change', (e) => {
            terminalSimulationActive = e.target.checked;
        });
    }

    const logsArray = [
        "Connection inbound from authenticated IP 192.168.1.45.",
        "Resource Optimization complete for Cluster-01 node elements.",
        "CronJob initialized: Syncing transaction ledger logs to master node.",
        "Security Firewall intercepted minor exploratory packet payload.",
        "Memory leak resolution script run on cache buffers."
    ];
    const logTypes = ['info', 'success', 'warning'];

    setInterval(() => {
        if (!terminalSimulationActive) return;

        const logStream = document.getElementById('logStream');
        if (logStream) {
            // Build temporary elements
            const timeStamp = new Date().toTimeString().split(' ')[0];
            const selectedText = logsArray[Math.floor(Math.random() * logsArray.length)];
            const selectedType = logTypes[Math.floor(Math.random() * logTypes.length)];

            const newLogLi = document.createElement('li');
            newLogLi.className = `log-item ${selectedType}`;
            newLogLi.innerHTML = `<span>${timeStamp}</span> ${selectedText}`;

            // Push element and shift limits
            logStream.appendChild(newLogLi);
            if (logStream.children.length > 5) {
                logStream.removeChild(logStream.children[0]);
            }
        }

        // Live micro fluctuation tracking on indicators
        const cpuVal = document.getElementById('cpu-val');
        if(cpuVal) {
            const rawFluc = (92 + Math.random() * 5).toFixed(1);
            cpuVal.innerText = `${rawFluc}%`;
        }

        const sessionVal = document.getElementById('session-val');
        if(sessionVal){
            let currentSess = parseInt(sessionVal.innerText.replace(/,/g, ''));
            currentSess += Math.floor(Math.random() * 5) - 2;
            sessionVal.innerText = currentSess.toLocaleString();
        }
    }, 3000);

    // 4. CHART JS CONFIGURATION ENGINE (SYSTEM FLOODTRAFFIC)
    const trafficCanvas = document.getElementById('trafficChart');
    if (trafficCanvas) {
        const ctx = trafficCanvas.getContext('2d');
        const customBlueGradient = ctx.createLinearGradient(0, 0, 0, 240);
        customBlueGradient.addColorStop(0, 'rgba(59, 130, 246, 0.4)');
        customBlueGradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['08:00', '10:00', '12:00', '14:00', '16:00', '18:00'],
                datasets: [{
                    label: 'Server Nodes Load (Gbps)',
                    data: [14, 22, 19, 35, 28, 44],
                    borderColor: '#3b82f6',
                    borderWidth: 3,
                    backgroundColor: customBlueGradient,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#3b82f6'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: { legend: { display: false } },
                scales: {
                    x: { grid: { color: '#25334d' }, ticks: { color: '#9ca3af' } },
                    y: { grid: { color: '#25334d' }, ticks: { color: '#9ca3af' } }
                }
            }
        });
    }
});