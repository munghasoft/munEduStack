

/* ================================== 
KPI CARDS
===================================== */

const kpiCards = document.querySelectorAll(".kpi-card");

const kpiValue = document.querySelectorAll(".kpi-value");

const dashboardData = {
    institutions: 454,
    users: 1250,
    uptime: "99.98%",
    supportTickets: 14
};


kpiValue.forEach(function (value) {

    
    kpiValue[0].textContent = dashboardData.institutions;
    kpiValue[1].textContent = dashboardData.users.toLocaleString();
    kpiValue[2].textContent = dashboardData.uptime;
    kpiValue[3].textContent = dashboardData.supportTickets;

});