

/*===========================================================
INSTUTION ONBOARDING CHART
============================================================== */

const onboardingData = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun"
    ],
    values: [
        18,
        25,
        31,
        42,
        35,
        50
    ]
};

const onboardingCanvas = document.querySelector(".onboardingChart");

const onboardingChart = new Chart(onboardingCanvas, {
    type: "line",
    data: {
        labels: onboardingData.labels,
        datasets: [
            {
                label: "New Instutions",
                data: onboardingData.values,
                
                borderWidth: 2,
                tension: 0.4,
                pointRadius: 3,
                pointHoverRadius: 5
            }
        ]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                },
                ticks: {
                    color: "#9aaeb5"
                }
            },
            y: {
                beginAtZero: true,
                ticks: {
                    color: "#9aaeb5"
                }
            }
        }
    }
       
});


/*===========================================================
USER DISTRIBUTION BY ROLE CHART
============================================================== */

const userRoleData = {
    labels: [
        "Super Admin",
        "School Admin",
        "Teacher",
        "Parent",
        "Student"
    ],

    values: [
        25,
        180,
        950,
        3200,
        8150
    ]
};

const userRoleCanvas = document.querySelector(".userRoleChart");

const userRoleChart = new Chart(userRoleCanvas, {
    type: "doughnut",
    data: {
        labels: userRoleData.labels,

        datasets: [
            {
                label: "Users",
                data: userRoleData.values,
                backgroundColor: [
                    "#3498db",
                    "#9b59b6",
                    "#f1c40f",
                    "#2ecc71",
                    "#40b8",
                ],
                borderWidth: 0
            }
        ]
    },

    options: {
        responsive: true,
        maintainAspectRatio: false,

        plugins: {
            legend: {
                position: "right",
                labels: {
                    color: "#9aaeb5",
                    boxWidth: 10,
                    padding: 10
                }
            },
            tooltip: {
                enabled: true
            }
        }
    }
});


/*===========================================================
SERVER LOAD AND PERFORMANCE CHART
============================================================== */

const serverLoadData = {

    labels: [
        "08:00",
        "10:00",
        "12:00",
        "14:00",
        "16:00",
        "18:00"
    ],

    values: [
        32,
        45,
        58,
        51,
        67,
        49
    ]

};

const serverLoadCanvas = document.querySelector(".serverLoadChart");

const serverLoadChart = new Chart(serverLoadCanvas, {

    type: "line",

    data: {

        labels: serverLoadData.labels,

        datasets: [

            {
                label: "Server Load",
                data: serverLoadData.values,
                borderColor: "#20b8b0",
                backgroundColor: "rgba(46, 196, 182, 0.10)",

                borderWidth: 2,

                tension: 0.4,

                pointRadius: 2,

                pointHoverRadius: 5
            }

        ]

    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            }

        },

        scales: {

            x: {

                    grid: {
                        display: false
                    },

                ticks: {
                    color: "#9aaeb5"
                }

            },

            y: {

                beginAtZero: true,

                max: 100,

                ticks: {
                    color: "#9aaeb5",

                    callback: function (value) {
                        return value + "%";
                    }
                },

            }

        }

    }
});


/* ============================================================
BILLING AND REVENUE CHART
=================================================================*/

const billingRevenueData = {
    labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun"
    ],
    values: [
        4200000,
        5100000,
        4800000,
        6200000,
        7100000,
        8500000
    ]
};

const billingRevenueCanvas = document.querySelector(".billingRevenueChart");

const billingRevenueChart = new Chart(billingRevenueCanvas, {

    type: "bar",

    data: {

        labels: billingRevenueData.labels,

        datasets: [
            {
                label: "Revenue",

                data: billingRevenueData.values,

                backgroundColor: "#20b8b0",
                borderWidth: 0,
                borderRadius: 5
            }
        ]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        plugins: {

            legend: {
                display: false
            },

            tooltip: {
                enabled: true,
                borderWidth: 1,
                padding: 10
                
            }
        },

        scales: {

            x: {
                grid: {
                    display: false
                },

                ticks: {
                    color: "#9aaeb5"
                }
            },

            y: {

                beginAtZero: true,

                ticks: {
                    color: "#9aaeb5"
                }
            }
        }
    }
});