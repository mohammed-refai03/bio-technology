const views = {
  overview: `
        <div class="stats-grid">
            <div class="stat-card"><div class="stat-icon" style="background:#e0e7ff;color:#4338ca"><i class="fa-solid fa-flask"></i></div><div><h3>4</h3><small>Active Tasks</small></div></div>
            <div class="stat-card"><div class="stat-icon" style="background:#dcfce7;color:#15803d"><i class="fa-solid fa-check"></i></div><div><h3>28</h3><small>Tests Done</small></div></div>
            <div class="stat-card"><div class="stat-icon" style="background:#e0e7ff;color:#4338ca"><i class="fa-solid fa-clock"></i></div><div><h3>1.2h</h3><small>Avg Cycle</small></div></div>
            <div class="stat-card"><div class="stat-icon" style="background:#f3e8ff;color:#7e22ce"><i class="fa-solid fa-medal"></i></div><div><h3>Top 5%</h3><small>Rank</small></div></div>
        </div>
        <div class="charts-row">
            <div class="chart-container"><h4>Weekly Activity</h4><canvas id="mainChart"></canvas></div>
            <div class="chart-container"><h4>Task Split</h4><canvas id="sideChart"></canvas></div>
        </div>`,

  myResearch: `
    <div class="stats-grid">
        <div class="stat-card">
            <div class="stat-icon" style="background:#f3e8ff;color:#7e22ce"><i class="fa-solid fa-microscope"></i></div>
            <div><h3>3</h3><small>Active Studies</small></div>
        </div>
        <div class="stat-card">
            <div class="stat-icon" style="background:#e0e7ff;color:#4338ca"><i class="fa-solid fa-dna"></i></div>
            <div><h3>12</h3><small>Sequencing Runs</small></div>
        </div>
    </div>

    <div class="data-card">
        <div class="card-header">
            <div>
                <h4 style="color:var(--navy);">Cancer Genomics Study</h4>
                <p style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">Comprehensive analysis of genetic mutations in breast cancer patients.</p>
            </div>
            <span class="tag tag-blue">Active</span>
        </div>
        
        <div style="display:flex; gap:20px; margin:20px 0; flex-wrap:wrap;">
            <div style="display:flex; align-items:center; gap:8px; font-size:0.85rem;">
                <i class="fa-solid fa-users" style="color:var(--primary);"></i>
                <span><strong>4</strong> members</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px; font-size:0.85rem;">
                <i class="fa-solid fa-sack-dollar" style="color:#10b981;"></i>
                <span><strong>$500K</strong> budget</span>
            </div>
            <div style="display:flex; align-items:center; gap:8px; font-size:0.85rem;">
                <i class="fa-solid fa-book" style="color:#f59e0b;"></i>
                <span><strong>3</strong> publications</span>
            </div>
        </div>

        <div class="progress-container" style="height:10px; background:#f1f5f9; border-radius:10px; overflow:hidden;">
            <div class="progress-fill" style="width: 67%; height:100%; background: linear-gradient(90deg, var(--primary), #a855f7);"></div>
        </div>
        <div style="display:flex; justify-content:space-between; margin-top:8px; font-size:0.8rem;">
            <span style="color:var(--text-muted);">Project Progress</span>
            <strong>67%</strong>
        </div>

        <div style="margin-top:20px; padding-top:15px; border-top:1px solid #f1f5f9; display:flex; justify-content:space-between; align-items:center;">
            <div>
                <p style="font-size:0.75rem; color:var(--text-muted); text-transform:uppercase;">Lead Researcher</p>
                <p style="font-size:0.9rem; font-weight:700;">Dr. Emily Chen</p>
            </div>
            <button style="padding:8px 16px; background:var(--navy); color:white; border:none; border-radius:8px; font-size:0.8rem; cursor:pointer; font-weight:600;" onclick="window.location.href='404.html'">View Details</button>
        </div>
    </div>

    <div class="data-card">
        <div class="card-header">
            <div>
                <h4 style="color:var(--navy);">Alzheimer's Biomarker Discovery</h4>
                <p style="font-size:0.8rem; color:var(--text-muted); margin-top:4px;">Identifying novel protein biomarkers for early detection.</p>
            </div>
            <span class="tag" style="background:#f1f5f9; color:var(--text-muted);">Queued</span>
        </div>
        <div class="progress-container" style="height:10px; background:#f1f5f9; border-radius:10px; margin-top:15px;">
            <div style="width:0%; height:100%;"></div>
        </div>
    </div>
`,

  // ... overview and myResearch remain the same ...

  messages: `
        <div class="data-card">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
                <h4>Communication Hub</h4>
                <button class="tag tag-blue" style="border:none; cursor:pointer;" onclick="window.location.href='404.html'">+ New Message</button>
            </div>
            
            <div class="msg-item" style="display:flex; gap:15px; padding:15px; border-radius:12px; border:1px solid #f1f5f9; margin-bottom:10px;">
                <img src="https://ui-avatars.com/api/?name=Arjun+K&background=6366f1&color=fff" style="width:45px; height:45px; border-radius:50%;">
                <div style="flex-grow:1;">
                    <div style="display:flex; justify-content:space-between;">
                        <strong>Dr. Arjun K.</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">2h ago</span>
                    </div>
                    <p style="font-size:0.85rem; color:var(--navy); margin:4px 0;">Urgent: Log Update Required</p>
                    <p style="font-size:0.8rem; color:var(--text-muted);">Please update the sequencing logs for Sample B-12 before the 4 PM briefing.</p>
                </div>
            </div>

            <div class="msg-item" style="display:flex; gap:15px; padding:15px; border-radius:12px; border:1px solid #f1f5f9;">
                <img src="https://ui-avatars.com/api/?name=System+Alert&background=f1f5f9&color=64748b" style="width:45px; height:45px; border-radius:50%;">
                <div style="flex-grow:1;">
                    <div style="display:flex; justify-content:space-between;">
                        <strong>Automated Lab System</strong>
                        <span style="font-size:0.7rem; color:var(--text-muted);">Yesterday</span>
                    </div>
                    <p style="font-size:0.85rem; color:var(--navy); margin:4px 0;">Maintenance Notice</p>
                    <p style="font-size:0.8rem; color:var(--text-muted);">Server Node Alpha will be offline for 30 minutes at midnight IST.</p>
                </div>
            </div>
        </div>`,

  profile: `
        <div class="data-card" style="text-align:center; padding:40px 20px;">
            <div style="position:relative; width:100px; margin:0 auto 20px;">
                <img src="https://ui-avatars.com/api/?name=James+R&background=6366f1&color=fff" style="width:100px; height:100px; border-radius:24px; box-shadow:0 10px 20px rgba(99,102,241,0.2);">
                <span style="position:absolute; bottom:-5px; right:-5px; background:var(--success); width:20px; height:20px; border-radius:50%; border:3px solid white;"></span>
            </div>
            <h3 style="font-size:1.4rem;">James Rubert</h3>
            <p style="color:var(--text-muted); font-size:0.9rem;">Patient ID: #BN-992</p>
            
            <div style="display:flex; justify-content:center; gap:10px; margin-top:20px;">
                <span class="tag tag-blue">Genomics</span>
                <span class="tag tag-blue">Data Analysis</span>
            </div>
        </div>

        <div class="data-card">
            <h4>Professional Overview</h4>
            <div style="margin-top:15px; display:grid; gap:12px;">
                <div style="display:flex; justify-content:space-between; font-size:0.9rem; padding-bottom:8px; border-bottom:1px solid #f1f5f9;">
                    <span style="color:var(--text-muted);">Department</span>
                    <strong>Molecular Research</strong>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:0.9rem; padding-bottom:8px; border-bottom:1px solid #f1f5f9;">
                    <span style="color:var(--text-muted);">Location</span>
                    <strong>Salem, Tamil Nadu</strong>
                </div>
                <div style="display:flex; justify-content:space-between; font-size:0.9rem;">
                    <span style="color:var(--text-muted);">Joining Date</span>
                    <strong>Oct 2025</strong>
                </div>
            </div>
        </div>`,

  billing: `
        <div class="data-card" style="background: linear-gradient(135deg, var(--primary), #4338ca); color:white; border:none;">
            <p style="opacity:0.8; font-size:0.8rem; text-transform:uppercase; letter-spacing:1px;">Active Plan</p>
            <h2 style="margin:10px 0;">Pro Researcher</h2>
            <p style="font-size:0.9rem;">Next renewal: <strong>April 18, 2026</strong></p>
            <button style="margin-top:20px; padding:10px 20px; border-radius:8px; border:none; background:white; color:var(--primary); font-weight:700; cursor:pointer;" onclick="window.location.href='404.html'">Manage Subscription</button>
        </div>

        <div class="data-card">
            <h4>Usage Metrics</h4>
            <div style="margin-top:20px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.85rem;">
                    <span>Cloud Storage (14.2GB / 50GB)</span>
                    <strong>28%</strong>
                </div>
                <div style="height:8px; background:#f1f5f9; border-radius:10px; overflow:hidden;">
                    <div style="width:28%; height:100%; background:var(--primary);"></div>
                </div>
            </div>
            <div style="margin-top:20px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:0.85rem;">
                    <span>Compute Units (850 / 1000)</span>
                    <strong>85%</strong>
                </div>
                <div style="height:8px; background:#f1f5f9; border-radius:10px; overflow:hidden;">
                    <div style="width:85%; height:100%; background:var(--success);"></div>
                </div>
            </div>
        </div>`,
};

function showData(type, btn) {
  // 1. Clear all active states
  document
    .querySelectorAll(".nav-link, .mobile-link")
    .forEach((el) => el.classList.remove("active"));

  // 2. Add active to clicked element
  if (btn) btn.classList.add("active");

  // 3. Sync: If clicked mobile, highlight sidebar counterpart
  const sidebarMatch = document.querySelector(
    `.sidebar .nav-link[onclick*="'${type}'"]`,
  );
  const mobileMatch = document.querySelector(
    `.mobile-nav .mobile-link[onclick*="'${type}'"]`,
  );
  if (sidebarMatch) sidebarMatch.classList.add("active");
  if (mobileMatch) mobileMatch.classList.add("active");

  // 4. Inject View
  const container = document.getElementById("dynamicContent");
  container.innerHTML = views[type];

  // 5. Update Title
  const titleMap = {
    overview: "Patient Dashboard",
    myResearch: "My Research",
    messages: "Messages",
    profile: "My Profile",
    billing: "Billing",
  };
  document.getElementById("pageTitle").innerText = titleMap[type];

  // 6. Charts
  if (type === "overview") {
    setTimeout(() => {
      renderChart(
        "mainChart",
        "line",
        ["M", "T", "W", "T", "F"],
        [12, 19, 15, 22, 30],
        "#6366f1",
      );
      renderChart(
        "sideChart",
        "doughnut",
        ["Completed", "Pending"],
        [70, 30],
        ["#6366f1", "#e2e8f0"],
      );
      animateStats();
    }, 50);
  }
}

function renderChart(id, type, labels, data, color) {
  const ctx = document.getElementById(id);
  if (!ctx) return;
  new Chart(ctx, {
    type: type,
    data: {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: color,
          borderColor: color,
          tension: 0.4,
        },
      ],
    },
    options: { responsive: true, maintainAspectRatio: false },
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

function animateStats() {
  document.querySelectorAll(".stat-card h3").forEach((el) => {
    const target = parseInt(el.innerText);
    if (isNaN(target)) return;
    el.innerText = "0";
    let count = 0;
    const interval = setInterval(() => {
      count += Math.ceil(target / 20);
      if (count >= target) {
        el.innerText = target;
        clearInterval(interval);
      } else {
        el.innerText = count;
      }
    }, 30);
  });
}
function logout() {
  // 1. Confirm with the user
 
    // 2. Clear all user data from storage
    localStorage.clear();

    // 3. Redirect back to login
    window.location.href = "login.html";

}

window.onload = () => {
  loadUserData();
  showData("overview", document.querySelector(".nav-link.active"));
};
