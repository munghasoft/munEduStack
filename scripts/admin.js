

/* ================================== 
KPI CARDS
===================================== */

const kpiCards = document.querySelectorAll(".kpi-card");

const kpiValue = document.querySelectorAll(".kpi-value");

/*const dashboardData = {
    institutions: 454,
    users: 1250,
    uptime: "99.98%",
    supportTickets: 14
};*/

const kpiData = [
    {
        value: 400
    },
    {
        value: 12000,
        format: "number"
    },
    {
        value: "99.98%"
    },
    {
        value: 20
    }
]

kpiData.forEach(function (data, index) {

    let displayValue = data.value;

    if (data.format === "number") {
        displayValue = data.value.toLocaleString();
    }

    kpiValue[index].textContent = displayValue;
})

/*kpiValue.forEach(function (value) {

    
    kpiValue[0].textContent = dashboardData.institutions;
    kpiValue[1].textContent = dashboardData.users.toLocaleString();
    kpiValue[2].textContent = dashboardData.uptime;
    kpiValue[3].textContent = dashboardData.supportTickets;

});*/


/* =========================================
DASHBOARD CARDS RECENT ACTIVITY TABLE DATA
============================================= */

const institutionActivity = [
    {
        institution: "Gulu High School",
        admin: "School Admin",
        status: "Active",
        date: "01/09/2026"
    },
    {
        institution: "Kampala High School",
        admin: "School Admin",
        status: "Active",
        date: "01/09/2026"
    },
    {
        institution: "Entebbe Secondary School",
        admin: "School Admin",
        status: "Pending",
        date: "02/09/2026"
    },
    {
        institution: "Wakiso High School",
        admin: "School Admin",
        status: "Active",
        date: "03/09/2026"
    },
    {
        institution: "Mbarara College",
        admin: "School Admin",
        status: "Active",
        date: "04/09/2026"
    }
];

institutionActivity.push({
    institution: "Mbale College",
    admin: "School Admin",
    status: "Suspended",
    date: "05/09/2026"
});

renderActivityTable(institutionActivity);



function renderActivityTable(data) {

    const activityTableBody = document.querySelector("#activityTableBody");

    activityTableBody.innerHTML = "";

    data.forEach(function(activity) {

        const row = document.createElement("tr");

        // Institution cell

        const institutionCell = document.createElement("td");

        institutionCell.textContent = activity.institution;
        row.appendChild(institutionCell);

        // Admin cell

        const adminCell = document.createElement("td");

        adminCell.textContent = activity.admin;
        row.appendChild(adminCell);
        
        // Status cell

        const statusCell = document.createElement("td");

        const statusBadge = document.createElement("span");

        statusBadge.textContent = activity.status;
        statusBadge.classList.add("status");

        if (activity.status === "Active") {
            statusBadge.classList.add("active-status");
        }
        
        if (activity.status === "Pending") {
            statusBadge.classList.add("pending-status");
        }

        if (activity.status === "Suspended") {
            statusBadge.classList.add("suspended-status");
        }

        statusCell.appendChild(statusBadge);

        row.appendChild(statusCell);

        
        // Date cell
        const dateCell = document.createElement("td");        
        
        
        dateCell.textContent = activity.date;        
        row.appendChild(dateCell);

        activityTableBody.appendChild(row);
    });
}


renderActivityTable(institutionActivity);


/* =========================================
DASHBOARD CARDS RECENT API LATENCY TABLE DATA
============================================= */

const apiLatencyData = [
    {
        endpoint: "/login",
        responseTime: "120",
        status: "Good"
    },
    {
        endpoint: "/schools",
        responseTime: 280,
        status: "Good"
    },
    {
        endpoint: "/students",
        responseTime: 520,
        status: "Warning"
    },
    {
        endpoint: "/reports",
        responseTime: 850,
        status: "Danger"
    }
]; 


function renderApiLatencyTable(data) {

    const apiLatencyTableBody = document.querySelector("#apiLatencyTableBody");

    apiLatencyTableBody.innerHTML = "";
    data.forEach(function(api) {
        const row = document.createElement("tr");

        //Endpoint cell
        
        const endpointCell = document.createElement("td");
        endpointCell.textContent = api.endpoint;
        row.appendChild(endpointCell);

        //Response Time cell
        
        const responseTimeCell = document.createElement("td");
        responseTimeCell.textContent = api.responseTime + "ms";
        row.appendChild(responseTimeCell);

        //Status cell
        
        const statusCell = document.createElement("td");
        statusCell.textContent = api.status;

        if (api.status === "Good") {
            statusCell.classList.add("good");
        }
        if (api.status === "Warning") {
            statusCell.classList.add("warning");
        }
        if (api.status === "Danger") {
            statusCell.classList.add("danger");
        }
        row.appendChild(statusCell);

        apiLatencyTableBody.appendChild(row);
    });
}

renderApiLatencyTable(apiLatencyData)

/* =========================================
DASHBOARD CARDS SECURITY ALERTS & ANOMALIES TABLE DATA
============================================= */

const securityAlerts = [
    {
        alert: "Failed login",
        source: "Admin Portal",
        severity: "High",
        time: "10:21"
    },
    {
        alert: "Unsual API request",
        source: "API Gateway",
        severity: "Medium",
        time: "10:15"
    },
    {
        alert: "New admin login",
        source: "School Portal",
        severity: "Low",
        time: "09:21"
    }
];

function renderSecurityAlerts(data) {

    const securityAlertTableBody = document.querySelector("#securityAlertTableBody");

    securityAlertTableBody.innerHTML = "";

    data.forEach(function(securityAlert) {

        const row = document.createElement("tr");

        // Alert Cell

        const alertCell = document.createElement("td");

        alertCell.textContent = securityAlert.alert;
        row.appendChild(alertCell);

        // Source Cell

        const sourceCell = document.createElement("td");

        sourceCell.textContent = securityAlert.source;
        row.appendChild(sourceCell);

        // Severity Cell

        const severityCell = document.createElement("td");

        severityCell.textContent = securityAlert.severity;

        if (securityAlert.severity === "High") {
            severityCell.classList.add("danger");
        }
        if (securityAlert.severity === "Medium") {
            severityCell.classList.add("warning");
        }
        if (securityAlert.severity === "Low") {
            severityCell.classList.add("good");
        }
        row.appendChild(severityCell);

        // Time Cell

        const timeCell = document.createElement("td");

        timeCell.textContent = securityAlert.time;
        row.appendChild(timeCell);

        securityAlertTableBody.appendChild(row);
    });
}

renderSecurityAlerts(securityAlerts);



/*============================================================
ADMIN TASKS AND NOTIFICATIONS PANEL
============================================================== */

const adminTasks = [
    {
        text: "License renewal due for 5 institutions",
        icon: "bx bx-cog",
        action: "license"
    },
    {
        text: "New institution request available",
        icon: "bx bx-cog",
        action: "institutions"
    },
    {
        text: "Review pending features request",
        icon: "bx bx-cog",
        action: "features"
    },
    {
        text: "Check systen security notificationd",
        icon: "bx bx-cog",
        action: "security"
    }
];

const adminTaskList = document.querySelector("#adminTaskList");

adminTasks.forEach(function(task) {

    const taskItem = document.createElement("div");

    taskItem.classList.add("admin-task-item");

    const taskText = document.createElement("span");

    taskText.classList.add("admin-task-text");
    taskText.textContent = task.text;

    const taskIcon = document.createElement("i");

    taskIcon.className = task.icon;

    // ADDING AN EVENT TO THE ACTION

    taskItem.addEventListener("click", () => {

        if (task.action === "license") {
            document.querySelector(".billing-panel").scrollIntoView({
                behavior: "smooth"
            });
        }
        if (task.action === "institutions") {
            document.querySelector(".activity-panel").scrollIntoView({
                behavior: "smooth"
            });
        }
        if (task.action === "features") {
            document.querySelector(".admin-tasks-panel").scrollIntoView({
                behavior: "smooth"
            });
        }
        if (task.action === "security") {
            document.querySelector(".security-panel").scrollIntoView({
                behavior: "smooth"
            });
        }
    });

    taskItem.appendChild(taskText);
    taskItem.appendChild(taskIcon);

    adminTaskList.appendChild(taskItem);
});