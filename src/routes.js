import Index from "./views/Index.js";
// import Profile from "./views/examples/Profile.js";
// import Maps from "./views/examples/Maps.js";
import Login from "./views/examples/Login.js";
// Import componets here when they are created

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-blue",
    component: Index,
    layout: "/admin"
  },
  {
    path: "/time-table",
    name: "Time Table",
    icon: "ni ni-watch-time text-indigo",
    component: Index, // Changes this when respective component is created.
    layout: "/admin"
  },
  {
    path: "/schedule",
    name: "Schedule",
    icon: "ni ni-calendar-grid-58 text-purple",
    component: Index, // Changes this when respective component is created.
    layout: "/admin"
  },
  {
    path: "/attendance",
    name: "Attendance",
    icon: "ni ni-badge text-red",
    component: Index, // Changes this when respective component is created.
    layout: "/admin"
  },
  {
    path: "/assignments",
    name: "Assignments",
    icon: "ni ni-bullet-list-67 text-orange",
    component: Index, // Changes this when respective compenent is created.
    layout: "/admin"
  },
  {
    path: "/storage",
    name: "Storage",
    icon: "ni ni-folder-17 text-yellow",
    component: Index, // Changes this when respective compenent is created.
    layout: "/admin"
  },
  {
    path: "/grades",
    name: "Grades",
    icon: "ni ni-trophy text-green",
    component: Index, // Changes this when respective compenent is created.
    layout: "/admin"
  },
  {
    path: "/reminders",
    name: "Reminders",
    icon: "ni ni-time-alarm text-teal",
    component: Index, // Changes this when respective compenent is created.
    layout: "/admin"
  },
  {
    path: "/quick-notes",
    name: "Quick Notes",
    icon: "ni ni-book-bookmark text-cyan",
    component: Index, // Changes this when respective compenent is created.
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  }
];
export default routes;
