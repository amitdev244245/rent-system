const data = [
    {
        heading: "Room 1", name: "Vivek", mobile: "7011544086", record: [
            { month: "Apr 2023", newUnits: "-", oldUnits: "85", rentAmt: 3500, status: "Unpaid" },
            { month: "Mar 2023", newUnits: "85", oldUnits: "0", rentAmt: 3500, status: "Paid" },
            // { month: "Feb 2023", newUnits: "Avg", oldUnits: "Avg", rentAmt: 3500, status: "Paid" },
            // { month: "Jan 2023", newUnits: "2385", oldUnits: "2372", rentAmt: 3500, status: "Paid" },
            // { month: "Dec 2023", newUnits: "2372", oldUnits: "2353", rentAmt: 3500, status: "Paid" },
            // { month: "Nov 2023", newUnits: "2353", oldUnits: "2271", rentAmt: 3500, status: "Paid" },
            // { month: "Oct 2023", newUnits: "2271", oldUnits: "start", rentAmt: 3500, status: "Paid" },
        ]
    },
    {
        heading: "Room 2", name: "Vinod", mobile: "9873447012", record: [
            { month: "Apr 2023", newUnits: "-", oldUnits: "2261", rentAmt: 3500, status: "Unpaid" },
            { month: "Mar 2023", newUnits: "2261", oldUnits: "2238", rentAmt: 3500, status: "Paid" },
            // { month: "Feb 2023", newUnits: "2238", oldUnits: "2238", rentAmt: 3500, status: "Paid" },
            // { month: "Jan 2023", newUnits: "2238", oldUnits: "2238", rentAmt: 3500, status: "Paid" },
            // { month: "Dec 2022", newUnits: "2238", oldUnits: "2091", rentAmt: 3500, status: "Paid" },
            // { month: "Nov 2022", newUnits: "2091", oldUnits: "2091", rentAmt: 3500, status: "Paid" },
            // { month: "Oct 2022", newUnits: "2091", oldUnits: "2091", rentAmt: 3500, status: "Paid" },
            // { month: "Sep 2022", newUnits: "2091", oldUnits: "2091", rentAmt: 3500, status: "Paid" },
            // { month: "Aug 2022", newUnits: "2091", oldUnits: "1871", rentAmt: 3500, status: "Paid" },
            // { month: "Jul 2022", newUnits: "1871", oldUnits: "1871", rentAmt: 3500, status: "Paid" },
            // { month: "Jun 2022", newUnits: "1871", oldUnits: "1871", rentAmt: 3500, status: "Paid" },
            // { month: "May 2022", newUnits: "1871", oldUnits: "1871", rentAmt: 3500, status: "Paid" },
            // { month: "Apr 2022", newUnits: "1871", oldUnits: "1871", rentAmt: 3500, status: "Paid" },
            // { month: "Mar 2022", newUnits: "1871", oldUnits: "1871", rentAmt: 3500, status: "Paid" },
            // { month: "Feb 2022", newUnits: "1871", oldUnits: "1871", rentAmt: 3500, status: "Paid" },
            // { month: "Jan 2022", newUnits: "1871", oldUnits: "1871", rentAmt: 3500, status: "Paid" },
            // { month: "Dec 2021", newUnits: "1871", oldUnits: "1587", rentAmt: 3500, status: "Paid" },
            // { month: "Nov 2021", newUnits: "1587", oldUnits: "1587", rentAmt: 3500, status: "Paid" },
            // { month: "Oct 2021", newUnits: "1587", oldUnits: "1587", rentAmt: 3500, status: "Paid" },
            // { month: "Sep 2021", newUnits: "1587", oldUnits: "1587", rentAmt: 3500, status: "Paid" },
            // { month: "Aug 2021", newUnits: "1587", oldUnits: "1587", rentAmt: 3500, status: "Paid" },
            // { month: "Jul 2021", newUnits: "1587", oldUnits: "1367", rentAmt: 3500, status: "Paid" },
            // { month: "Jun 2021", newUnits: "1367", oldUnits: "1367", rentAmt: 3500, status: "Paid" },
            // { month: "May 2021", newUnits: "1367", oldUnits: "1367", rentAmt: 3500, status: "Paid" },
            // { month: "Apr 2021", newUnits: "1367", oldUnits: "1367", rentAmt: 3500, status: "Paid" },
            // { month: "Mar 2021", newUnits: "1367", oldUnits: "1367", rentAmt: 3500, status: "Paid" },
            // { month: "Feb 2021", newUnits: "1367", oldUnits: "1367", rentAmt: 3500, status: "Paid" },
            // { month: "Jan 2021", newUnits: "1367", oldUnits: "1367", rentAmt: 3500, status: "Paid" },
            // { month: "Dec 2020", newUnits: "1367", oldUnits: "1162", rentAmt: 3500, status: "Paid" },
            // { month: "Nov 2020", newUnits: "1162", oldUnits: "1162", rentAmt: 3500, status: "Paid" },
            // { month: "Oct 2020", newUnits: "1162", oldUnits: "1162", rentAmt: 3500, status: "Paid" },
            // { month: "Sep 2020", newUnits: "1162", oldUnits: "1162", rentAmt: 3500, status: "Paid" },
            // { month: "Aug 2020", newUnits: "1162", oldUnits: "1162", rentAmt: 3500, status: "Paid" },
            // { month: "Jul 2020", newUnits: "1162", oldUnits: "1162", rentAmt: 3500, status: "Paid" },
            // { month: "Jun 2020", newUnits: "1162", oldUnits: "1162", rentAmt: 3500, status: "Paid" },
            // { month: "May 2020", newUnits: "1162", oldUnits: "1162", rentAmt: 3500, status: "Paid" },
            // { month: "Apr 2019", newUnits: "1162", oldUnits: "975", rentAmt: 3500, status: "Paid" },
            // { month: "Mar 2020", newUnits: "975", oldUnits: "975", rentAmt: 3500, status: "Paid" },
            // { month: "Feb 2020", newUnits: "975", oldUnits: "975", rentAmt: 3500, status: "Paid" },
            // { month: "Jan 2020", newUnits: "975", oldUnits: "865", rentAmt: 3500, status: "Paid" },
            // { month: "Dec 2019", newUnits: "865", oldUnits: "865", rentAmt: 3500, status: "Paid" },
            // { month: "Nov 2019", newUnits: "865", oldUnits: "802", rentAmt: 3500, status: "Paid" },
            // { month: "Oct 2019", newUnits: "802", oldUnits: "802", rentAmt: 3500, status: "Paid" },
            // { month: "Sep 2019", newUnits: "802", oldUnits: "721", rentAmt: 3500, status: "Paid" },
            // { month: "Aug 2019", newUnits: "721", oldUnits: "597", rentAmt: 3500, status: "Paid" },
            // { month: "Jul 2019", newUnits: "597", oldUnits: "597", rentAmt: 3500, status: "Paid" },
            // { month: "Jun 2019", newUnits: "597", oldUnits: "515", rentAmt: 3500, status: "Paid" },
            // { month: "May 2019", newUnits: "515", oldUnits: "515", rentAmt: 3500, status: "Paid" },
            // { month: "Apr 2019", newUnits: "515", oldUnits: "515", rentAmt: 3500, status: "Paid" },
        ]
    },
    {
        heading: "Room 3", name: "Rahul", mobile: "", record: [
            { month: "Apr 2023", newUnits: "?", oldUnits: "272", rentAmt: 3500, status: "Unpaid" },
            { month: "Mar 2023", newUnits: "272", oldUnits: "231", rentAmt: 3500, status: "Unpaid" },
            { month: "Feb 2023", newUnits: "231", oldUnits: "191", rentAmt: 3500, status: "Paid" },
        ]
    },
    {
        heading: "Room 4", name: "Vidya", mobile: "8700872374", record: [
            { month: "18 Apr 2023", newUnits: "3990", oldUnits: "3939", rentAmt: 3500, status: "Unpaid" },
            { month: "18 Mar 2023", newUnits: "3939", oldUnits: "3890", rentAmt: 3500, status: "Paid" },
            // { month: "18 Feb 2023", newUnits: "3890", oldUnits: "3880", rentAmt: 3500, status: "Paid" },
            // { month: "18 Jan 2023", newUnits: "3880", oldUnits: "start", rentAmt: 3500, status: "Paid" },
            // { month: "18 Dec 2022", newUnits: "189", oldUnits: "177", rentAmt: 3500, status: "Paid" },
            // { month: "18 Nov 2022", newUnits: "177", oldUnits: "135", rentAmt: 3500, status: "Paid" },
            // { month: "18 Oct 2022", newUnits: "135", oldUnits: "start", rentAmt: 3500, status: "Paid" },
        ]
    },
    {
        heading: "Room 5", name: "Rajender", mobile: "8527261971", record: [
            { month: "Apr 2023", newUnits: "?", oldUnits: "4727", rentAmt: 3800, status: "Unpaid" },
            { month: "Mar 2023", newUnits: "4727", oldUnits: "4706", rentAmt: 3800, status: "Paid" },
            { month: "Feb 2023", newUnits: "4706", oldUnits: "4682", rentAmt: 3800, status: "Paid" },
            { month: "Jan 2023", newUnits: "4682", oldUnits: "4649", rentAmt: 3800, status: "Paid" },
            { month: "Dec 2022", newUnits: "4649", oldUnits: "4621", rentAmt: 3800, status: "Paid" },
            { month: "Nov 2022", newUnits: "4621", oldUnits: "4590", rentAmt: 3800, status: "Paid" },
            { month: "Oct 2022", newUnits: "4590", oldUnits: "4573", rentAmt: 3800, status: "Paid" },
            { month: "Sep 2022", newUnits: "4573", oldUnits: "4545", rentAmt: 3800, status: "Paid" },
            { month: "Aug 2022", newUnits: "4545", oldUnits: "4496", rentAmt: 3800, status: "Paid" },
        ]
    },
    {
        heading: "Room 6", name: "Keshav", mobile: "9352167689", record: [
            { month: "-", newUnits: "0", oldUnits: "0", rentAmt: 4000, status: "-" },
        ]
    },
    {
        heading: "Room 7", name: "Available for Rent", mobile: "", record: [
            { month: "-", newUnits: "0", oldUnits: "0", rentAmt: 4000, status: "-" },
        ]
    },
]

export default data;