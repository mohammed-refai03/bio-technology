const views = {
    overview: `
        <div class="stats-grid">
            <div class="stat-card blue"><div class="stat-icon"><i class="fa-solid fa-users"></i></div><div><h3>1,247</h3><small>Total Users</small></div></div>
            <div class="stat-card purple"><div class="stat-icon"><i class="fa-solid fa-vials"></i></div><div><h3>3,842</h3><small>Samples</small></div></div>
            <div class="stat-card green"><div class="stat-icon"><i class="fa-solid fa-chart-line"></i></div><div><h3>96.8%</h3><small>Accuracy</small></div></div>
            <div class="stat-card orange"><div class="stat-icon"><i class="fa-solid fa-wallet"></i></div><div><h3>$125k</h3><small>Revenue</small></div></div>
        </div>
        <div class="charts-row">
            <div class="chart-container"><h4>Revenue Analytics</h4><canvas id="lineChart"></canvas></div>
            <div class="chart-container"><h4>Resource Split</h4><canvas id="pieChart"></canvas></div>
        </div>`,
    
    research: `
        <div class="stats-grid">
            <div class="stat-card blue"><div class="stat-icon"><i class="fa-solid fa-folder-tree"></i></div><div><h3>12</h3><small>Active Projects</small></div></div>
            <div class="stat-card green"><div class="stat-icon"><i class="fa-solid fa-circle-check"></i></div><div><h3>154</h3><small>Milestones</small></div></div>
            <div class="stat-card purple"><div class="stat-icon"><i class="fa-solid fa-file-export"></i></div><div><h3>28</h3><small>Publications</small></div></div>
            <div class="stat-card orange"><div class="stat-icon"><i class="fa-solid fa-coins"></i></div><div><h3>$2.4M</h3><small>Total Grants</small></div></div>
        </div>
        <div class="charts-row full-chart">
            <div class="chart-container"><h4>Project Completion Rates</h4><canvas id="barChart"></canvas></div>
        </div>
        <div class="data-card">
            <div style="display:flex; justify-content:space-between;"><h4>Cancer Genomics Study</h4><span class="tag active">In Progress</span></div>
            <p style="color:var(--text-muted); font-size:0.9rem; margin:10px 0;">Mapping genetic markers for early-stage detection.</p>
        </div>`,
        
    sequencing: `
        <div class="stats-grid">
            <div class="stat-card blue"><div class="stat-icon"><i class="fa-solid fa-dna"></i></div><div><h3>852</h3><small>Sequences</small></div></div>
            <div class="stat-card green"><div class="stat-icon"><i class="fa-solid fa-microchip"></i></div><div><h3>14.2TB</h3><small>Processed</small></div></div>
            <div class="stat-card orange"><div class="stat-icon"><i class="fa-solid fa-clock"></i></div><div><h3>1.2s</h3><small>Latency</small></div></div>
            <div class="stat-card purple"><div class="stat-icon"><i class="fa-solid fa-server"></i></div><div><h3>99.9%</h3><small>Uptime</small></div></div>
        </div>
        <div class="charts-row">
            <div class="chart-container"><h4>Sequence Quality Trends</h4><canvas id="seqLineChart"></canvas></div>
            <div class="chart-container"><h4>Genome Variants</h4><canvas id="seqPieChart"></canvas></div>
        </div>`,

    staff: `
        <div class="data-card">
            <h4>Personnel Management</h4>
            <table style="width:100%; border-collapse:collapse; margin-top:20px;">
                <tr style="text-align:left; color:var(--text-muted); font-size:0.8rem;"><th>NAME</th><th>ROLE</th><th>AVAILABILITY</th></tr>
                <tr><td style="padding:15px 0;"><strong>Dr. Sarah Admin</strong></td><td>Bio-Informatics</td><td><span class="tag success">Available</span></td></tr>
                <tr><td style="padding:15px 0;"><strong>Dr. Emily Chen</strong></td><td>Lead Geneticist</td><td><span class="tag active">Busy</span></td></tr>
            </table>
        </div>`,

    settings: `<div class="data-card"><h4>System Nodes</h4><p>Security configuration and API keys.</p></div>`
};

function showData(type, btn) {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    btn.classList.add('active');
    const container = document.getElementById('dynamicContent');
    container.innerHTML = views[type];

    // Page Specific Chart Initialization
    if (type === 'overview') {
        renderChart('lineChart', 'line', ['Jan', 'Feb', 'Mar', 'Apr'], [65, 80, 95, 125], '#6366f1');
        renderChart('pieChart', 'doughnut', ['Genomics', 'Oncology', 'Other'], [40, 35, 25], ['#6366f1', '#10b981', '#f59e0b']);
    } else if (type === 'research') {
        renderChart('barChart', 'bar', ['Study A', 'Study B', 'Study C'], [85, 42, 67], '#10b981');
    } else if (type === 'sequencing') {
        renderChart('seqLineChart', 'line', ['Wk1', 'Wk2', 'Wk3', 'Wk4'], [92, 98, 94, 99], '#7e22ce');
        renderChart('seqPieChart', 'pie', ['Type A', 'Type B'], [60, 40], ['#7e22ce', '#6366f1']);
    }
}

function renderChart(id, type, labels, data, colors) {
  new Chart(document.getElementById(id), {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: colors,
          borderColor: Array.isArray(colors) ? "#fff" : colors,
          tension: 0.4,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, // 🔥 IMPORTANT FIX
      plugins: {
        legend: {
          display: type !== "line" && type !== "bar",
        },
      },
    },
  });
}

function loadUserData() {
  const name = localStorage.getItem("userName");
  const email = localStorage.getItem("userEmail");
  const role = localStorage.getItem("userRole");

  // Show ROLE (Admin / Patient)
  if (role) {
    document.getElementById("userRole").textContent =
      role.charAt(0).toUpperCase() + role.slice(1);
  }

  // Show Email
  if (email) {
    document.getElementById("userEmail").textContent = email;
  }

  // Avatar (based on name)
  if (name) {
    document.getElementById("userAvatar").src =
      `https://ui-avatars.com/api/?name=${name}&background=6366f1&color=fff`;
  }
}

/* ================= COUNT ANIMATION ================= */

function animateCount(el, target) {
    let start = 0;
    const duration = 1200;
    const increment = target / (duration / 16);

    function update() {
        start += increment;
        if (start < target) {
            el.innerText = formatNumber(Math.floor(start));
            requestAnimationFrame(update);
        } else {
            el.innerText = formatNumber(target);
        }
    }
    update();
}

function formatNumber(num) {
    if (num >= 1000) return num.toLocaleString();
    return num;
}

/* Apply animation to all stats */
function animateStats() {
    document.querySelectorAll(".stat-card h3").forEach(el => {
        let value = el.innerText.replace(/[^0-9]/g, "");

        if (!value) return;

        value = parseInt(value);

        el.innerText = "0";
        animateCount(el, value);
    });
}

/* ================= PAGE LOAD ANIMATION ================= */

function applyAnimations() {
    document.querySelectorAll(".stat-card, .chart-container, .data-card")
        .forEach((el, i) => {
            el.style.opacity = "0";
            setTimeout(() => {
                el.classList.add("fade-in");
                el.style.opacity = "1";
            }, i * 100);
        });
}

/* ================= MOBILE SIDEBAR ================= */

function createMenuToggle() {
    const btn = document.createElement("div");
    btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    btn.style.fontSize = "1.3rem";
    btn.style.cursor = "pointer";

    document.querySelector(".top-bar").prepend(btn);

    btn.onclick = () => {
        document.querySelector(".sidebar").classList.toggle("active");
    };
}

/* ================= OVERRIDE showData ================= */

const originalShowData = showData;

showData = function(type, btn) {
    originalShowData(type, btn);

    setTimeout(() => {
        animateStats();
        applyAnimations();
    }, 100);
};

function logout() {
  // 1. Confirm with the user
  
 
    // 2. Clear all user data from storage
    localStorage.clear();

    // 3. Redirect back to login
    window.location.href = "login.html";
  
}

/* ================= INIT ================= */

window.onload = () => {
    showData('overview', document.querySelector('.nav-link.active'));
    loadUserData();
    createMenuToggle();
};
// Initial Load
