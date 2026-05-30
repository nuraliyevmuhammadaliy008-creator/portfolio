import { useState, useEffect, useRef } from "react";

const T = {
  uz: {
    available: "Ishga tayyor",
    heroTitle1: "Nuraliyev", heroTitle2: "Muhammad Ali",
    heroDesc: "1 yillik tajriba bilan zamonaviy web ilovalar va enterprise sistemalar yaratuvchi developer. React, Node.js va bulutli texnologiyalarda ixtisoslashgan.",
    viewProjects: "Loyihalarni ko'rish",
    contact: "Bog'lanish",
    yearsExp: "Yil Tajriba", projects: "Loyiha", views: "Ko'rishlar", uptime: "Uptime",
    skillsLabel: "// TEXNOLOGIYALAR", skillsTitle: "Ko'nikmalar va Texnologiyalar",
    careerLabel: "// KARYERA", careerTitle: "Tajriba va Ta'lim",
    navHome: "Asosiy", navProjects: "Loyihalar", navAbout: "Haqida", navContact: "Bog'lanish",
    login: "Kirish",
    projectsLabel: "// LOYIHALAR", projectsTitle: "Loyihalar Portfeli", projectsSub: "Ishlab chiqqan zamonaviy texnologik yechimlar",
    all: "Barchasi",
    contactLabel: "// BOG'LANISH", contactTitle: "Murojaat", contactSub: "Loyiha yoki hamkorlik bo'yicha murojaat qiling",
    fullName: "Ism Familiya", email: "Email Manzil", message: "Xabar",
    namePh: "Ibrohim Vafoyev", msgPh: "Loyiha yoki taklif haqida...",
    send: "Xabar Yuborish", sending: "Yuborilmoqda...",
    sentTitle: "Xabar yuborildi!", sentDesc: "24 soat ichida email orqali javob beraman.",
    sentNotif: "Xabar yuborildi! Tez orada javob beraman 🚀",
    aboutLabel: "// HAQIDA", aboutTitle: "Muhammad Ali Nuraliyev",
    aboutDesc: "1 yildan ortiq tajribaga ega backend developer sifatida zamonaviy web texnologiyalari bilan ishlayman. Node.js, Python va ma'lumotlar bazalari bilan katta tajribaga egaman. Hozirda full stack bo'lish yo'lida qizg'in o'rganmoqdaman.",
    adminPanel: "Admin Panel", userPanel: "Foydalanuvchi Paneli",
    adminDesc: "Tizimni boshqarish uchun kiring", userDesc: "Portfolio platformasiga xush kelibsiz",
    adminBtn: "🛡️ Admin", userBtn: "👤 Foydalanuvchi",
    loginTab: "Kirish", registerTab: "Ro'yxatdan O'tish",
    password: "Parol", enterLogin: "Kirish →", enterRegister: "Hisob Yaratish →",
    checking: "Tekshirilmoqda...",
    errAdmin: "Admin email yoki parol noto'g'ri!",
    errFill: "Email va parolni kiriting!",
    errAdminEmail: "Bu email admin uchun ajratilgan!",
    errAllFields: "Barcha maydonlarni to'ldiring!",
    errEmailTaken: "Bu email band!",
    errPassLen: "Parol kamida 6 belgi bo'lishi kerak!",
    dashboard: "Dashboard", adminProjects: "Loyihalar", messages: "Xabarlar",
    analytics: "Analitika", settings: "Sozlamalar",
    welcome: "Xush kelibsiz",
    totalViews: "Jami Ko'rishlar", totalStars: "GitHub Yulduzlar",
    recentMessages: "So'nggi Xabarlar", topProjects: "Top Loyihalar",
    manageProjects: "Loyihalar Boshqaruvi", addProject: "+ Yangi Loyiha",
    projName: "Loyiha Nomi", tech: "Texnologiyalar", status: "Holat",
    stars: "Yulduzlar", actions: "Amallar", delete: "O'chirish",
    addBtn: "Qo'shish", cancel: "Bekor",
    projAdded: "Yangi loyiha qo'shildi! 🚀", projDeleted: "Loyiha o'chirildi",
    addTitle: "Yangi Loyiha Qo'shish",
    unread: "o'qilmagan", markRead: "O'qildi ✓", deleteMsg: "O'chirish",
    msgRead: "O'qilgan deb belgilandi", msgDeleted: "Xabar o'chirildi",
    newBadge: "YANGI",
    profileInfo: "Profil Ma'lumotlari", bio: "Bio", save: "Saqlash",
    systemInfo: "Tizim Ma'lumotlari", profileSaved: "Profil yangilandi ✓",
    logout: "Chiqish",
    loggedAs: "Siz kirdingizsiz:",
    description: "Tavsif",
    contactLinks: ["📧 Email", "🌍 Veb-sayt", "💼 LinkedIn", "🐙 GitHub"],
    aboutSkills: "Ko'nikmalar",
    aboutExp: "Tajriba",
    aboutBio: "Bio",
  },
  ru: {
    available: "Готов к работе",
    heroTitle1: "Нуралиев", heroTitle2: "Мухаммад Али",
    heroDesc: "Разработчик современных веб-приложений и enterprise-систем с 1 годом опыта. Специализация на React, Node.js и облачных технологиях.",
    viewProjects: "Смотреть проекты",
    contact: "Связаться",
    yearsExp: "Лет опыта", projects: "Проектов", views: "Просмотров", uptime: "Аптайм",
    skillsLabel: "// ТЕХНОЛОГИИ", skillsTitle: "Навыки и Технологии",
    careerLabel: "// КАРЬЕРА", careerTitle: "Опыт и Образование",
    navHome: "Главная", navProjects: "Проекты", navAbout: "Обо мне", navContact: "Контакт",
    login: "Войти",
    projectsLabel: "// ПРОЕКТЫ", projectsTitle: "Портфолио Проектов", projectsSub: "Современные технологические решения",
    all: "Все",
    contactLabel: "// КОНТАКТ", contactTitle: "Связаться", contactSub: "Обращайтесь по вопросам проектов или сотрудничества",
    fullName: "Имя Фамилия", email: "Email Адрес", message: "Сообщение",
    namePh: "Иброхим Вафойев", msgPh: "О проекте или предложении...",
    send: "Отправить сообщение", sending: "Отправляется...",
    sentTitle: "Сообщение отправлено!", sentDesc: "Отвечу по email в течение 24 часов.",
    sentNotif: "Сообщение отправлено! Скоро отвечу 🚀",
    aboutLabel: "// ОБО МНЕ", aboutTitle: "Мухаммад Али Нуралиев",
    aboutDesc: "Backend разработчик с опытом более 1 года. Работаю с Node.js, Python и базами данных. Активно изучаю full stack разработку и современные веб-технологии.",
    adminPanel: "Панель Администратора", userPanel: "Панель Пользователя",
    adminDesc: "Войдите для управления системой", userDesc: "Добро пожаловать на платформу",
    adminBtn: "🛡️ Админ", userBtn: "👤 Пользователь",
    loginTab: "Войти", registerTab: "Регистрация",
    password: "Пароль", enterLogin: "Войти →", enterRegister: "Создать аккаунт →",
    checking: "Проверяется...",
    errAdmin: "Неверный email или пароль администратора!",
    errFill: "Введите email и пароль!",
    errAdminEmail: "Этот email зарезервирован для администратора!",
    errAllFields: "Заполните все поля!",
    errEmailTaken: "Этот email занят!",
    errPassLen: "Пароль должен быть не менее 6 символов!",
    dashboard: "Дашборд", adminProjects: "Проекты", messages: "Сообщения",
    analytics: "Аналитика", settings: "Настройки",
    welcome: "Добро пожаловать",
    totalViews: "Всего просмотров", totalStars: "GitHub Звёзды",
    recentMessages: "Последние сообщения", topProjects: "Топ проектов",
    manageProjects: "Управление проектами", addProject: "+ Новый проект",
    projName: "Название проекта", tech: "Технологии", status: "Статус",
    stars: "Звёзды", actions: "Действия", delete: "Удалить",
    addBtn: "Добавить", cancel: "Отмена",
    projAdded: "Новый проект добавлен! 🚀", projDeleted: "Проект удалён",
    addTitle: "Добавить новый проект",
    unread: "непрочитанных", markRead: "Прочитано ✓", deleteMsg: "Удалить",
    msgRead: "Отмечено как прочитанное", msgDeleted: "Сообщение удалено",
    newBadge: "НОВОЕ",
    profileInfo: "Информация профиля", bio: "О себе", save: "Сохранить",
    systemInfo: "Информация системы", profileSaved: "Профиль обновлён ✓",
    logout: "Выйти",
    loggedAs: "Вы вошли как:",
    description: "Описание",
    contactLinks: ["📧 Email", "🌍 Сайт", "💼 LinkedIn", "🐙 GitHub"],
    aboutSkills: "Навыки",
    aboutExp: "Опыт",
    aboutBio: "О себе",
  },
  en: {
    available: "Available for work",
    heroTitle1: "Nuraliyev", heroTitle2: "Muhammad Ali",
    heroDesc: "Developer building modern web apps and enterprise systems with 1+ year of experience. Specializing in React, Node.js and cloud technologies.",
    viewProjects: "View Projects",
    contact: "Get in Touch",
    yearsExp: "Years Exp.", projects: "Projects", views: "Views", uptime: "Uptime",
    skillsLabel: "// TECH STACK", skillsTitle: "Skills & Technologies",
    careerLabel: "// CAREER PATH", careerTitle: "Experience & Education",
    navHome: "Home", navProjects: "Projects", navAbout: "About", navContact: "Contact",
    login: "Sign In",
    projectsLabel: "// MY WORK", projectsTitle: "Project Portfolio", projectsSub: "Modern tech solutions I've built",
    all: "All",
    contactLabel: "// GET IN TOUCH", contactTitle: "Contact Me", contactSub: "Reach out for projects or collaboration",
    fullName: "Full Name", email: "Email Address", message: "Message",
    namePh: "Ibrohim Vafoyev", msgPh: "About a project or proposal...",
    send: "Send Message", sending: "Sending...",
    sentTitle: "Message sent!", sentDesc: "I'll reply by email within 24 hours.",
    sentNotif: "Message sent! I'll get back to you soon 🚀",
    aboutLabel: "// ABOUT ME", aboutTitle: "Muhammad Ali Nuraliyev",
    aboutDesc: "Backend developer with 1+ year of experience working with modern web technologies. Skilled in Node.js, Python, and databases. Currently on a journey to become a full stack developer.",
    adminPanel: "Admin Panel", userPanel: "User Panel",
    adminDesc: "Sign in to manage the system", userDesc: "Welcome to the portfolio platform",
    adminBtn: "🛡️ Admin", userBtn: "👤 User",
    loginTab: "Sign In", registerTab: "Register",
    password: "Password", enterLogin: "Sign In →", enterRegister: "Create Account →",
    checking: "Verifying...",
    errAdmin: "Incorrect admin email or password!",
    errFill: "Please enter email and password!",
    errAdminEmail: "This email is reserved for admin!",
    errAllFields: "Please fill in all fields!",
    errEmailTaken: "This email is already taken!",
    errPassLen: "Password must be at least 6 characters!",
    dashboard: "Dashboard", adminProjects: "Projects", messages: "Messages",
    analytics: "Analytics", settings: "Settings",
    welcome: "Welcome back",
    totalViews: "Total Views", totalStars: "GitHub Stars",
    recentMessages: "Recent Messages", topProjects: "Top Projects",
    manageProjects: "Manage Projects", addProject: "+ New Project",
    projName: "Project Name", tech: "Technologies", status: "Status",
    stars: "Stars", actions: "Actions", delete: "Delete",
    addBtn: "Add", cancel: "Cancel",
    projAdded: "New project added! 🚀", projDeleted: "Project deleted",
    addTitle: "Add New Project",
    unread: "unread", markRead: "Mark read ✓", deleteMsg: "Delete",
    msgRead: "Marked as read", msgDeleted: "Message deleted",
    newBadge: "NEW",
    profileInfo: "Profile Info", bio: "Bio", save: "Save",
    systemInfo: "System Info", profileSaved: "Profile updated ✓",
    logout: "Sign Out",
    loggedAs: "Signed in as:",
    description: "Description",
    contactLinks: ["📧 Email", "🌍 Website", "💼 LinkedIn", "🐙 GitHub"],
    aboutSkills: "Skills",
    aboutExp: "Experience",
    aboutBio: "Bio",
  },
};

// ==================== RASM URL lari ====================
// Rasmlar base64 orqali embed qilinadi — import orqali ishlatiladi
// To'g'ridan to'g'ri URL sifatida beriladi
const PROJECT_IMAGES = {
  ymarket1: "https://i.imgur.com/placeholder1.png",
  lordfruit: "https://i.imgur.com/placeholder2.png",
  ymarket2: "https://i.imgur.com/placeholder3.png",
  keystore: "https://i.imgur.com/placeholder4.png",
};

// ==================== DB ====================
const DB = {
  users: [{ id: 1, name: "Muhammad Ali Nuraliyev", email: "admin@alinuraliyev.dev", password: "admin123", role: "admin", avatar: "MA", bio: "Backend Developer & Software Enthusiast" }],
  projects: [
    { id: 1, title: "E-Commerce Platform", tech: "React, Node.js, PostgreSQL", status: "live", views: 1240, stars: 48, desc: { uz: "Keng ko'lamli savdo platformasi", ru: "Широкая торговая платформа", en: "Large-scale e-commerce platform" } },
    { id: 2, title: "AI Chat System", tech: "Python, FastAPI, Redis", status: "live", views: 987, stars: 62, desc: { uz: "AI asosida ish yurituvchi chat", ru: "Чат на основе ИИ", en: "AI-powered chat system" } },
    { id: 3, title: "DevOps Dashboard", tech: "Vue.js, Docker, K8s", status: "beta", views: 543, stars: 31, desc: { uz: "Monitoring paneli", ru: "Панель мониторинга", en: "Cloud infrastructure monitoring" } },
    { id: 4, title: "Mobile Banking App", tech: "React Native, GraphQL", status: "live", views: 2103, stars: 95, desc: { uz: "Xavfsiz mobil bank ilovasi", ru: "Безопасное мобильное банковское приложение", en: "Secure mobile banking app" } },
    { id: 5, title: "Real-time Analytics", tech: "Next.js, ClickHouse", status: "dev", views: 321, stars: 17, desc: { uz: "Katta ma'lumotlar tahlili", ru: "Аналитика больших данных", en: "Big data analytics dashboard" } },
    { id: 6, title: "Blockchain Wallet", tech: "Solidity, Web3.js", status: "beta", views: 678, stars: 44, desc: { uz: "Desentralized kriptovalyuta hamyoni", ru: "Децентрализованный крипто-кошелёк", en: "Decentralized crypto wallet" } },
    // 4 ta yangi loyiha — rasmlar bilan
    {
      id: 7,
      title: "Ymarket — Dark",
      tech: "React, Node.js, Tailwind",
      status: "live",
      views: 890,
      stars: 37,
      image: "__YMARKET1__",
      desc: {
        uz: "Zamonaviy dark-tema elektronika do'koni. Tezkor yetkazib berish va kafolat tizimi bilan.",
        ru: "Современный интернет-магазин электроники с тёмной темой.",
        en: "Modern dark-themed electronics store with fast delivery and warranty system.",
      },
    },
    {
      id: 8,
      title: "Lord Fruit — Export Platform",
      tech: "React, Express, MongoDB",
      status: "live",
      views: 1120,
      stars: 53,
      image: "__LORDFRUIT__",
      desc: {
        uz: "Yuqori sifatli quritilgan mevalar eksporti platformasi. Ko'p tilli interfeys.",
        ru: "Платформа экспорта сухофруктов высокого качества. Мультиязычный интерфейс.",
        en: "Premium dried fruit export platform with multilingual support.",
      },
    },
    {
      id: 9,
      title: "Ymarket — Green",
      tech: "React, Firebase, Stripe",
      status: "live",
      views: 1450,
      stars: 61,
      image: "__YMARKET2__",
      desc: {
        uz: "Organik mahsulotlar do'koni. Uyga bepul yetkazib berish va aksiyalar tizimi.",
        ru: "Магазин органических продуктов. Бесплатная доставка и акции.",
        en: "Organic products marketplace with free home delivery and promotions.",
      },
    },
    {
      id: 10,
      title: "Keystore — Keyboards",
      tech: "Next.js, TypeScript, Prisma",
      status: "beta",
      views: 670,
      stars: 29,
      image: "__KEYSTORE__",
      desc: {
        uz: "Premium klaviaturalar do'koni. Gaming, simsiz va professional modellar katalogi.",
        ru: "Магазин премиальных клавиатур — gaming, беспроводные и профессиональные модели.",
        en: "Premium keyboard store — gaming, wireless, and professional models catalog.",
      },
    },
  ],
  messages: [
    { id: 1, from: "Ibrohim Vafoyev", email: "jasur@mail.com", text: "Portfolio juda chiroyli!", date: "2025-05-20", read: false },
    { id: 2, from: "Nurali Nizomiddinov", email: "nilufar@mail.com", text: "Loyiha uchun hamkorlik qilishni istardim", date: "2025-05-22", read: true },
    { id: 3, from: "Odilov Avazbek", email: "bobur@mail.com", text: "CV yuborishingiz mumkinmi?", date: "2025-05-24", read: false },
  ],
};

const ADMIN_EMAIL = "admin@alinuraliyev.dev";

// ==================== STYLES ====================
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
  *{margin:0;padding:0;box-sizing:border-box;}
  :root{
    --bg:#050A14;--bg2:#0A1628;--bg3:#0F1F3D;
    --accent:#00D4FF;--accent2:#7B61FF;--accent3:#00FF88;
    --text:#E8F4FD;--text2:#8BA4C2;
    --border:rgba(0,212,255,0.15);--card:rgba(10,22,40,0.8);
    --glow:0 0 20px rgba(0,212,255,0.3);
    --nav-h:64px;--sidebar-w:220px;
  }
  body{background:var(--bg);color:var(--text);font-family:'Space Grotesk',sans-serif;overflow-x:hidden;}
  .mono{font-family:'JetBrains Mono',monospace;}
  ::-webkit-scrollbar{width:3px;}
  ::-webkit-scrollbar-track{background:var(--bg);}
  ::-webkit-scrollbar-thumb{background:var(--accent);border-radius:2px;}

  @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
  @keyframes blink{0%,100%{opacity:1}50%{opacity:0}}
  @keyframes slideIn{from{transform:translateX(-20px);opacity:0}to{transform:translateX(0);opacity:1}}
  @keyframes fadeUp{from{transform:translateY(16px);opacity:0}to{transform:translateY(0);opacity:1}}
  @keyframes rotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
  @keyframes scanline{0%{top:-100%}100%{top:100%}}
  @keyframes orbit{from{transform:rotate(0deg) translateX(110px) rotate(0deg)}to{transform:rotate(360deg) translateX(110px) rotate(-360deg)}}
  @keyframes counter{from{opacity:0;transform:scale(0.5)}to{opacity:1;transform:scale(1)}}

  .btn-primary{background:linear-gradient(135deg,var(--accent),var(--accent2));color:var(--bg);border:none;padding:11px 24px;border-radius:8px;font-family:'Space Grotesk',sans-serif;font-size:14px;font-weight:600;cursor:pointer;transition:all .3s;white-space:nowrap;}
  .btn-primary:hover{transform:translateY(-2px);box-shadow:0 8px 24px rgba(0,212,255,0.35);}
  .btn-primary:active{transform:scale(0.97);}
  .btn-primary:disabled{opacity:0.7;transform:none;}
  .btn-outline{background:transparent;color:var(--accent);border:1px solid var(--accent);padding:9px 20px;border-radius:8px;font-family:'Space Grotesk',sans-serif;font-size:13px;font-weight:500;cursor:pointer;transition:all .3s;white-space:nowrap;}
  .btn-outline:hover{background:rgba(0,212,255,0.1);box-shadow:var(--glow);}

  .card{background:var(--card);border:1px solid var(--border);border-radius:14px;backdrop-filter:blur(10px);transition:border-color .3s,box-shadow .3s;}
  .card:hover{border-color:rgba(0,212,255,0.35);box-shadow:var(--glow);}

  .input{background:rgba(255,255,255,0.05);border:1px solid var(--border);border-radius:10px;color:var(--text);padding:11px 14px;font-family:'Space Grotesk',sans-serif;font-size:14px;width:100%;transition:all .3s;outline:none;}
  .input:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(0,212,255,0.1);}
  .input::placeholder{color:var(--text2);}

  .badge{padding:3px 9px;border-radius:20px;font-size:10px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;}
  .badge-live{background:rgba(0,255,136,0.15);color:var(--accent3);border:1px solid rgba(0,255,136,0.3);}
  .badge-beta{background:rgba(0,212,255,0.15);color:var(--accent);border:1px solid rgba(0,212,255,0.3);}
  .badge-dev{background:rgba(255,165,0,0.15);color:#FFA500;border:1px solid rgba(255,165,0,0.3);}
  .glow-line{height:1px;background:linear-gradient(90deg,transparent,var(--accent),transparent);opacity:.4;}

  .nav{position:fixed;top:0;left:0;right:0;z-index:100;background:rgba(5,10,20,0.92);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);height:var(--nav-h);display:flex;align-items:center;justify-content:space-between;padding:0 20px;gap:12px;}
  .nav-logo{font-family:'JetBrains Mono',monospace;color:var(--accent);font-size:17px;font-weight:700;white-space:nowrap;}
  .nav-right{display:flex;align-items:center;gap:8px;flex-wrap:nowrap;overflow:hidden;}
  .nav-links{display:flex;gap:2px;}
  @media(max-width:600px){.nav-links{display:none;}}

  .lang-switcher{display:flex;background:rgba(255,255,255,0.06);border:1px solid var(--border);border-radius:8px;overflow:hidden;}
  .lang-btn{padding:6px 10px;border:none;background:transparent;color:var(--text2);font-family:'Space Grotesk',sans-serif;font-size:12px;font-weight:600;cursor:pointer;transition:all .2s;}
  .lang-btn.active{background:var(--accent);color:var(--bg);}

  .sidebar{position:fixed;left:0;top:var(--nav-h);bottom:0;width:var(--sidebar-w);background:var(--bg2);border-right:1px solid var(--border);padding:16px 12px;overflow-y:auto;z-index:50;transition:transform .3s;}
  .sidebar-item{display:flex;align-items:center;gap:10px;padding:10px 14px;border-radius:10px;cursor:pointer;transition:all .2s;color:var(--text2);font-size:13px;font-weight:500;margin-bottom:3px;border:1px solid transparent;}
  .sidebar-item:hover{background:rgba(0,212,255,0.07);color:var(--text);}
  .sidebar-item.active{background:rgba(0,212,255,0.12);color:var(--accent);border-color:rgba(0,212,255,0.2);}
  .sidebar-icon{font-size:16px;width:18px;text-align:center;flex-shrink:0;}

  .panel-main{margin-left:var(--sidebar-w);margin-top:var(--nav-h);padding:28px 28px 60px;min-height:calc(100vh - var(--nav-h));}
  @media(max-width:768px){
    .sidebar{transform:translateX(-100%);}
    .sidebar.open{transform:translateX(0);}
    .panel-main{margin-left:0;padding:20px 16px 60px;}
  }

  .hero-wrap{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;min-height:calc(100vh - var(--nav-h));padding:60px;}
  @media(max-width:900px){.hero-wrap{grid-template-columns:1fr;gap:40px;padding:40px 20px;min-height:auto;padding-top:80px;}}
  @media(max-width:600px){.hero-wrap{padding:60px 16px 40px;}}

  .hero-h1{font-size:clamp(32px,5vw,54px);font-weight:700;line-height:1.1;margin-bottom:16px;}

  .monitor{width:min(260px,80vw);border:3px solid var(--accent);border-radius:14px 14px 4px 4px;background:var(--bg2);animation:float 4s ease-in-out infinite;box-shadow:0 0 40px rgba(0,212,255,0.2),inset 0 0 20px rgba(0,212,255,0.05);}
  .screen{height:min(168px,50vw);border-radius:10px 10px 2px 2px;overflow:hidden;position:relative;background:#000;}
  .scanline{position:absolute;left:0;right:0;height:2px;background:rgba(0,212,255,.3);animation:scanline 3s linear infinite;}
  .monitor-base{width:50px;height:10px;background:var(--accent);margin:0 auto;border-radius:0 0 4px 4px;}
  .monitor-stand{width:90px;height:16px;background:rgba(0,212,255,0.2);margin:0 auto;border-radius:0 0 8px 8px;border:1px solid var(--border);}
  .orbit-ring{position:absolute;width:300px;height:300px;border:1px dashed rgba(0,212,255,0.2);border-radius:50%;}
  .orbit-dot{width:9px;height:9px;background:var(--accent2);border-radius:50%;animation:orbit 6s linear infinite;box-shadow:0 0 8px var(--accent2);}
  .orbit-dot2{animation-delay:-3s;background:var(--accent3);box-shadow:0 0 8px var(--accent3);}
  .orbit-dot3{animation-delay:-1.5s;background:var(--accent);box-shadow:0 0 8px var(--accent);animation-duration:4s;width:7px;height:7px;}
  @media(max-width:900px){.orbit-ring{width:220px;height:220px;} .orbit-dot{animation:orbit 6s linear infinite;} @keyframes orbit{from{transform:rotate(0deg) translateX(80px) rotate(0deg)}to{transform:rotate(360deg) translateX(80px) rotate(-360deg)}}}

  .section-pad{padding:70px 60px;}
  @media(max-width:900px){.section-pad{padding:50px 20px;}}
  @media(max-width:600px){.section-pad{padding:40px 16px;}}
  .section-title{font-size:clamp(22px,3vw,28px);font-weight:700;margin-bottom:8px;}
  .section-sub{color:var(--text2);font-size:14px;margin-bottom:28px;}
  .accent-text{background:linear-gradient(135deg,var(--accent),var(--accent2));-webkit-background-clip:text;-webkit-text-fill-color:transparent;}

  .projects-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:18px;}
  .stats-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:14px;}
  .skills-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:14px;}

  .stat-card{background:var(--card);border:1px solid var(--border);border-radius:14px;padding:20px;position:relative;overflow:hidden;}
  .stat-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--accent),var(--accent2));}

  .data-table{width:100%;border-collapse:collapse;font-size:13px;}
  .data-table th{text-align:left;padding:10px 14px;font-size:11px;color:var(--text2);font-weight:600;letter-spacing:.5px;text-transform:uppercase;border-bottom:1px solid var(--border);}
  .data-table td{padding:12px 14px;border-bottom:1px solid rgba(255,255,255,0.04);}
  .data-table tr:hover td{background:rgba(0,212,255,0.04);}
  .table-wrap{overflow-x:auto;border-radius:14px;}

  .form-group{margin-bottom:16px;}
  .form-label{display:block;font-size:12px;font-weight:600;color:var(--text2);margin-bottom:7px;letter-spacing:.3px;}

  .alert{padding:10px 14px;border-radius:9px;font-size:13px;margin-bottom:14px;}
  .alert-error{background:rgba(255,50,50,0.1);border:1px solid rgba(255,50,50,0.3);color:#FF6B6B;}
  .alert-success{background:rgba(0,255,136,0.1);border:1px solid rgba(0,255,136,0.3);color:var(--accent3);}

  .spinner{width:36px;height:36px;border:3px solid rgba(0,212,255,.1);border-top-color:var(--accent);border-radius:50%;animation:rotate .8s linear infinite;}

  .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.8);z-index:200;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);padding:20px;}
  .modal{background:var(--bg2);border:1px solid var(--border);border-radius:18px;padding:28px;width:100%;max-width:440px;animation:fadeUp .3s;max-height:90vh;overflow-y:auto;}

  .notif{position:fixed;bottom:20px;right:20px;z-index:300;background:var(--bg2);border:1px solid var(--accent3);border-radius:12px;padding:12px 18px;font-size:13px;color:var(--accent3);box-shadow:0 8px 32px rgba(0,0,0,.4);animation:fadeUp .4s;display:flex;align-items:center;gap:8px;max-width:320px;}

  .tag{display:inline-block;padding:3px 9px;border-radius:6px;font-size:11px;background:rgba(123,97,255,.15);color:#B8A4FF;border:1px solid rgba(123,97,255,.25);margin:2px;}
  .tech-tag{display:inline-block;padding:2px 7px;background:rgba(0,212,255,.08);border:1px solid rgba(0,212,255,.2);border-radius:4px;font-size:10px;color:var(--accent);font-family:'JetBrains Mono',monospace;margin:2px;}

  .skill-bar-bg{background:rgba(255,255,255,.08);border-radius:4px;height:5px;overflow:hidden;}
  .skill-bar-fill{height:100%;border-radius:4px;background:linear-gradient(90deg,var(--accent),var(--accent2));transition:width 1.5s ease;}

  .timeline-item{position:relative;padding-left:28px;margin-bottom:24px;}
  .timeline-item::before{content:'';position:absolute;left:7px;top:8px;bottom:-16px;width:1px;background:var(--border);}
  .timeline-dot{position:absolute;left:0;top:6px;width:16px;height:16px;border-radius:50%;background:var(--accent);box-shadow:0 0 8px var(--accent);border:3px solid var(--bg);}

  .hero-stats{display:flex;gap:clamp(16px,3vw,32px);margin-top:40px;flex-wrap:wrap;}

  .project-card{padding:0;cursor:pointer;overflow:hidden;}
  .project-card:hover .proj-arrow{transform:translateX(4px);}
  .proj-arrow{transition:transform .2s;display:inline-block;}
  .proj-img{width:100%;height:170px;object-fit:cover;object-position:top;display:block;}
  .proj-img-placeholder{width:100%;height:170px;background:linear-gradient(135deg,rgba(0,212,255,0.1),rgba(123,97,255,0.1));display:flex;align-items:center;justify-content:center;font-size:36px;}
  .proj-body{padding:18px 20px;}

  .auth-wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;position:relative;z-index:1;}
  .auth-box{width:100%;max-width:420px;animation:fadeUp .5s;}

  .mob-menu-btn{display:none;background:transparent;border:1px solid var(--border);color:var(--text2);padding:7px 10px;border-radius:8px;cursor:pointer;font-size:18px;}
  @media(max-width:768px){.mob-menu-btn{display:flex;align-items:center;}}

  .sidebar-overlay{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:49;}
  .sidebar-overlay.show{display:block;}

  .hero-computer{display:flex;justify-content:center;align-items:center;}
  @media(max-width:900px){.hero-computer{display:none;}}

  .pub-nav-link{background:none;border:none;color:var(--text2);cursor:pointer;padding:7px 12px;font-size:13px;font-weight:500;border-radius:8px;font-family:'Space Grotesk',sans-serif;transition:all .2s;}
  .pub-nav-link:hover,.pub-nav-link.active{color:var(--accent);}

  .about-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;}
  @media(max-width:700px){.about-grid{grid-template-columns:1fr;}}

  .contact-info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:20px;}
  @media(max-width:600px){.contact-info-grid{grid-template-columns:1fr;}}

  /* ABOUT PAGE STYLES */
  .about-profile-card{padding:32px 28px;margin-bottom:24px;}
  .about-avatar{width:110px;height:110px;border-radius:50%;border:3px solid var(--accent);object-fit:cover;box-shadow:0 0 24px rgba(0,212,255,0.35);}
  .about-avatar-placeholder{width:110px;height:110px;border-radius:50%;border:3px solid var(--accent);background:linear-gradient(135deg,var(--accent),var(--accent2));display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:700;color:var(--bg);box-shadow:0 0 24px rgba(0,212,255,0.35);flex-shrink:0;}
  .about-skill-pill{display:inline-flex;align-items:center;gap:5px;padding:6px 12px;background:rgba(0,212,255,0.08);border:1px solid rgba(0,212,255,0.2);border-radius:20px;font-size:12px;color:var(--accent);font-family:'JetBrains Mono',monospace;margin:4px;}
`;

// ==================== MATRIX BG ====================
function MatrixBg() {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%";
    let drops = Array(Math.floor(canvas.width / 20)).fill(1);
    const iv = setInterval(() => {
      ctx.fillStyle = "rgba(5,10,20,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0,212,255,0.06)";
      ctx.font = "13px JetBrains Mono";
      drops = Array(Math.floor(canvas.width / 20)).fill(1).map((_, i) => drops[i] || 1);
      drops.forEach((y, i) => {
        ctx.fillText(chars[Math.floor(Math.random() * chars.length)], i * 20, y * 20);
        if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    }, 60);
    return () => { clearInterval(iv); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} style={{ position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0, opacity: 0.7 }} />;
}

function TypeWriter({ texts, speed = 80 }) {
  const [display, setDisplay] = useState("");
  const [tIdx, setTIdx] = useState(0);
  const [cIdx, setCIdx] = useState(0);
  const [del, setDel] = useState(false);
  useEffect(() => {
    const cur = texts[tIdx];
    const t = setTimeout(() => {
      if (!del) {
        setDisplay(cur.slice(0, cIdx + 1));
        if (cIdx + 1 === cur.length) setTimeout(() => setDel(true), 1400);
        else setCIdx(c => c + 1);
      } else {
        setDisplay(cur.slice(0, cIdx - 1));
        if (cIdx - 1 === 0) { setDel(false); setTIdx(i => (i + 1) % texts.length); setCIdx(0); }
        else setCIdx(c => c - 1);
      }
    }, del ? speed / 2 : speed);
    return () => clearTimeout(t);
  }, [cIdx, del, tIdx, texts, speed]);
  return <span style={{ color: "var(--accent)" }}>{display}<span style={{ borderRight: "2px solid var(--accent)", marginLeft: 1, animation: "blink 1s infinite" }}> </span></span>;
}

function ComputerHero({ lang }) {
  const lines = [
    "$ whoami", `> ${lang === "ru" ? "Нуралиев Мухаммад Али" : lang === "uz" ? "Nuraliyev Muhammad Ali" : "Muhammad Ali Nuraliyev"}`,
    "$ skills --list", "> React, Node.js, Python...",
    "$ git status", "> Available for hire ✓",
  ];
  const [shown, setShown] = useState(0);
  useEffect(() => {
    if (shown < lines.length) { const t = setTimeout(() => setShown(s => s + 1), 550); return () => clearTimeout(t); }
  }, [shown]);
  return (
    <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div className="orbit-ring">
        <div className="orbit-dot" />
        <div className="orbit-dot orbit-dot2" />
        <div className="orbit-dot orbit-dot3" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", zIndex: 1 }}>
        <div className="monitor">
          <div className="screen">
            <div className="scanline" />
            <div style={{ padding: "10px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10px" }}>
              {lines.slice(0, shown).map((line, i) => (
                <div key={i} style={{ color: line.startsWith("$") ? "var(--accent3)" : "var(--accent)", marginBottom: 3, opacity: 0, animation: "fadeUp .4s forwards", animationDelay: `${i * 0.05}s` }}>{line}</div>
              ))}
              {shown < lines.length && <span style={{ color: "var(--accent)", animation: "blink 1s infinite" }}>█</span>}
            </div>
          </div>
          <div style={{ padding: "5px 10px", display: "flex", gap: 5, borderTop: "1px solid rgba(0,212,255,0.15)" }}>
            {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />)}
          </div>
        </div>
        <div className="monitor-base" />
        <div className="monitor-stand" />
      </div>
    </div>
  );
}

function AnimCounter({ target, suffix = "" }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let s = 0; const step = target / 40;
    const iv = setInterval(() => { s += step; if (s >= target) { setVal(target); clearInterval(iv); } else setVal(Math.floor(s)); }, 40);
    return () => clearInterval(iv);
  }, [target]);
  return <span>{val.toLocaleString()}{suffix}</span>;
}

function LangSwitcher({ lang, setLang }) {
  return (
    <div className="lang-switcher">
      {["uz","ru","en"].map(l => (
        <button key={l} className={`lang-btn ${lang === l ? "active" : ""}`} onClick={() => setLang(l)}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

// ==================== ABOUT PAGE (YANGILANGAN) ====================
function AboutPage({ t, lang }) {
  const skills = ["Node.js", "Python", "Express.js", "PostgreSQL", "MongoDB", "REST API", "Git", "Docker", "React", "JavaScript"];
  const bioText = {
    uz: "Yosh va istiqbolli backend developer. Node.js, Python va ma'lumotlar bazalari bilan ixtisoslashgan. RESTful API va microservices arxitekturasi bo'yicha tajribaga ega. Har kuni yangi texnologiyalar o'rganib, zamonaviy yechimlar yaratishga intiladi.",
    ru: "Молодой и перспективный backend разработчик. Специализируется на Node.js, Python и базах данных. Имеет опыт в RESTful API и микросервисной архитектуре.",
    en: "Young and promising backend developer. Specializes in Node.js, Python and databases. Experienced in RESTful API and microservices architecture.",
  };

  return (
    <div className="section-pad" style={{ paddingTop: "calc(var(--nav-h) + 30px)", position: "relative", zIndex: 1, maxWidth: 500, margin: "0 auto" }}>
      <p className="mono" style={{ color: "var(--accent)", fontSize: 12, marginBottom: 8, textAlign: "center" }}>{t.aboutLabel}</p>
      <h2 className="section-title" style={{ marginBottom: 24, textAlign: "center" }}>{t.aboutTitle}</h2>

      {/* MAIN PROFILE CARD */}
      <div className="card" style={{ padding: "28px 24px", marginBottom: 20 }}>

        {/* RASM - yuqorida markazda */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 18 }}>
          <img
            src={`data:image/png;base64,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`}
            alt="Muhammad Ali Nuraliyev"
            style={{ width: 100, height: 100, borderRadius: "50%", border: "3px solid var(--accent)", objectFit: "cover", objectPosition: "top center", boxShadow: "0 0 24px rgba(0,212,255,0.35)" }}
          />
        </div>

        {/* ISIM, LAVOZIM, JOYLASHUV */}
        <div style={{ textAlign: "center", marginBottom: 18 }}>
          <h3 style={{ fontSize: 17, fontWeight: 700, color: "var(--accent)", marginBottom: 6 }}>Muhammad Ali Nuraliyev</h3>
          <p style={{ fontSize: 13, color: "var(--text2)", marginBottom: 4 }}>🖥️ Backend Developer</p>
          <p style={{ fontSize: 12, color: "var(--text2)", marginBottom: 12 }}>📍 Samarqand, O'zbekiston uz</p>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(0,255,136,0.12)", border: "1px solid rgba(0,255,136,0.3)", borderRadius: 20, padding: "5px 14px", fontSize: 12, color: "var(--accent3)" }}>
            <span style={{ width: 7, height: 7, background: "var(--accent3)", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 8px var(--accent3)" }} />
            {lang === "uz" ? "Faol (Ishga tayyor)" : lang === "ru" ? "Активен (Готов к работе)" : "Active (Available for work)"}
          </span>
        </div>

        {/* BIO */}
        <p style={{ color: "var(--text2)", fontSize: 13, lineHeight: 1.8, textAlign: "center", marginBottom: 20, padding: "0 4px" }}>
          {bioText[lang]}
        </p>

        {/* KO'NIKMALAR */}
        <div style={{ marginBottom: 20 }}>
          <p className="mono" style={{ fontSize: 11, color: "var(--text2)", marginBottom: 10, textAlign: "center", letterSpacing: 1, textTransform: "uppercase" }}>
            {lang === "uz" ? "Ko'nikmalar" : lang === "ru" ? "Навыки" : "Skills"}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
            {skills.map(s => (
              <span key={s} style={{ padding: "4px 11px", background: "rgba(0,212,255,0.08)", border: "1px solid rgba(0,212,255,0.2)", borderRadius: 6, fontSize: 11, color: "var(--accent)", fontFamily: "'JetBrains Mono',monospace" }}>{s}</span>
            ))}
          </div>
        </div>

        {/* STATS */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {[
            ["10+", lang === "uz" ? "Loyihalar soni" : lang === "ru" ? "Проектов" : "Projects"],
            ["1+",  lang === "uz" ? "Tajriba" : lang === "ru" ? "Опыт" : "Experience"],
            ["🏆",  "Top Rated"],
          ].map(([n, l]) => (
            <div key={l} style={{ background: "rgba(0,212,255,0.06)", border: "1px solid var(--border)", borderRadius: 10, padding: "14px 8px", textAlign: "center" }}>
              <div style={{ fontSize: 20, fontWeight: 700, color: "var(--accent)", marginBottom: 4 }}>{n}</div>
              <div style={{ fontSize: 11, color: "var(--text2)" }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT LINKS */}
      <div className="card" style={{ padding: "20px 24px" }}>
        {[
          [t.contactLinks[0], "admin@alinuraliyev.dev"],
          [t.contactLinks[1], "alinuraliyev.dev"],
          [t.contactLinks[2], "linkedin.com/in/alinuraliyev"],
          [t.contactLinks[3], "github.com/alinuraliyev"],
        ].map(([k, v]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: 13 }}>
            <span style={{ color: "var(--text2)" }}>{k}</span>
            <span style={{ color: "var(--accent)" }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
// ==================== PUBLIC PAGES ====================
function LandingPage({ t, lang, onNavigate }) {
  const skills = [
    { name: "React / Next.js", level: 75 }, { name: "Node.js / Express", level: 88 },
    { name: "Python / FastAPI", level: 80 }, { name: "PostgreSQL / Redis", level: 82 },
    { name: "Docker / Kubernetes", level: 65 }, { name: "TypeScript", level: 70 },
  ];
  const timeline = {
    uz: [
      { year: "2024", title: "Backend Developer", place: "Freelance", desc: "Node.js va Python bilan RESTful API va backend sistemalar yaratish" },
      { year: "2023", title: "Junior Developer", place: "O'quv loyihalari", desc: "Web ilovalar va ma'lumotlar bazalari bilan ishlash" },
      { year: "2023", title: "BSc Computer Science", place: "TUIT University", desc: "Kompyuter Fanlari bo'limi" },
    ],
    ru: [
      { year: "2024", title: "Backend Developer", place: "Freelance", desc: "Создание RESTful API и backend систем с Node.js и Python" },
      { year: "2023", title: "Junior Developer", place: "Учебные проекты", desc: "Работа с веб-приложениями и базами данных" },
      { year: "2023", title: "BSc Computer Science", place: "TUIT University", desc: "Факультет компьютерных наук" },
    ],
    en: [
      { year: "2024", title: "Backend Developer", place: "Freelance", desc: "Building RESTful APIs and backend systems with Node.js and Python" },
      { year: "2023", title: "Junior Developer", place: "Learning Projects", desc: "Working with web apps and databases" },
      { year: "2023", title: "BSc Computer Science", place: "TUIT University", desc: "Computer Science department" },
    ],
  };
  const tl = timeline[lang];
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <section style={{ position: "relative", zIndex: 1 }}>
        <div className="hero-wrap">
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.3)", borderRadius: 20, padding: "5px 14px", marginBottom: 20, fontSize: 12, color: "var(--accent)" }}>
              <span style={{ width: 7, height: 7, background: "var(--accent3)", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 8px var(--accent3)" }} />
              {t.available}
            </div>
            <h1 className="hero-h1">{t.heroTitle1}<br /><span className="accent-text">{t.heroTitle2}</span></h1>
            <div style={{ fontSize: "clamp(16px,2.5vw,20px)", marginBottom: 20, color: "var(--text2)" }}>
              <TypeWriter texts={["Backend Developer", "API Architect", "Node.js Enthusiast", "Full Stack in Progress"]} />
            </div>
            <p style={{ color: "var(--text2)", fontSize: 15, lineHeight: 1.8, marginBottom: 28, maxWidth: 460 }}>{t.heroDesc}</p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button className="btn-primary" onClick={() => onNavigate("projects")}>{t.viewProjects} →</button>
              <button className="btn-outline" onClick={() => onNavigate("contact")}>{t.contact}</button>
            </div>
            <div className="hero-stats">
              {[["1+", t.yearsExp], ["10+", t.projects], ["5K+", t.views], ["99.8%", t.uptime]].map(([n, l]) => (
                <div key={l}><div style={{ fontSize: "clamp(18px,2.5vw,22px)", fontWeight: 700, color: "var(--accent)" }}>{n}</div><div style={{ fontSize: 11, color: "var(--text2)" }}>{l}</div></div>
              ))}
            </div>
          </div>
          <div className="hero-computer"><ComputerHero lang={lang} /></div>
        </div>
      </section>

      <div className="glow-line" style={{ margin: "0 clamp(16px,4vw,60px)" }} />

      <section className="section-pad" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="mono" style={{ color: "var(--accent)", fontSize: 12, marginBottom: 8 }}>{t.skillsLabel}</p>
          <h2 className="section-title">{t.skillsTitle}</h2>
        </div>
        <div className="skills-grid" style={{ maxWidth: 860, margin: "0 auto" }}>
          {skills.map(s => (
            <div key={s.name} className="card" style={{ padding: "18px 22px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 9 }}>
                <span style={{ fontSize: 13, fontWeight: 500 }}>{s.name}</span>
                <span className="mono" style={{ fontSize: 12, color: "var(--accent)" }}>{s.level}%</span>
              </div>
              <div className="skill-bar-bg"><div className="skill-bar-fill" style={{ width: `${s.level}%` }} /></div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p className="mono" style={{ color: "var(--accent2)", fontSize: 12, marginBottom: 8 }}>{t.careerLabel}</p>
          <h2 className="section-title">{t.careerTitle}</h2>
        </div>
        <div style={{ maxWidth: 660, margin: "0 auto" }}>
          {tl.map((item, i) => (
            <div key={i} className="timeline-item">
              <div className="timeline-dot" />
              <div className="card" style={{ padding: "18px 22px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6, gap: 10 }}>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 3 }}>{item.title}</h3>
                    <div style={{ color: "var(--accent)", fontSize: 12 }}>{item.place}</div>
                  </div>
                  <span className="mono" style={{ fontSize: 12, color: "var(--text2)", background: "rgba(0,212,255,0.08)", padding: "3px 9px", borderRadius: 6, flexShrink: 0 }}>{item.year}</span>
                </div>
                <p style={{ color: "var(--text2)", fontSize: 13 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// ==================== PROJECTS PAGE (YANGILANGAN) ====================
function ProjectsPage({ t, lang }) {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? DB.projects : DB.projects.filter(p => p.status === filter);
  const defaultIcons = ["🚀","🤖","📊","💳","📈","⛓️","🛒","🍎","🥬","⌨️"];

  // Rasmlarni import qilish o'rniga — uploaded fayllar yo'li
  const imageMap = {
    "__YMARKET1__": "/mnt/user-data/uploads/1779867420881_image.png",
    "__LORDFRUIT__": "/mnt/user-data/uploads/1779867455606_image.png",
    "__YMARKET2__": "/mnt/user-data/uploads/1779867518263_image.png",
    "__KEYSTORE__": "/mnt/user-data/uploads/1779867570782_image.png",
  };

  return (
    <div className="section-pad" style={{ paddingTop: "calc(var(--nav-h) + 30px)", position: "relative", zIndex: 1 }}>
      <div style={{ marginBottom: 32 }}>
        <p className="mono" style={{ color: "var(--accent)", fontSize: 12, marginBottom: 8 }}>{t.projectsLabel}</p>
        <h2 className="section-title">{t.projectsTitle}</h2>
        <p className="section-sub">{t.projectsSub}</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {["all","live","beta","dev"].map(f => (
            <button key={f} onClick={() => setFilter(f)} className={filter === f ? "btn-primary" : "btn-outline"} style={{ padding: "7px 16px", fontSize: 12 }}>
              {f === "all" ? t.all : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>
      <div className="projects-grid">
        {filtered.map((p, i) => (
          <div key={p.id} className="card project-card" style={{ animation: "fadeUp .4s both", animationDelay: `${i * 0.05}s` }}>
            {/* RASM yoki ICON */}
            {p.image ? (
              <img
                src={imageMap[p.image] || p.image}
                alt={p.title}
                className="proj-img"
                onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }}
              />
            ) : null}
            {p.image ? (
              <div className="proj-img-placeholder" style={{ display: "none" }}>{defaultIcons[i % 10]}</div>
            ) : (
              <div className="proj-img-placeholder">{defaultIcons[i % 10]}</div>
            )}

            <div className="proj-body">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10 }}>
                <h3 style={{ fontSize: 15, fontWeight: 600 }}>{p.title}</h3>
                <span className={`badge badge-${p.status}`}>{p.status}</span>
              </div>
              <p style={{ color: "var(--text2)", fontSize: 12, marginBottom: 12, lineHeight: 1.6 }}>{p.desc[lang]}</p>
              <div style={{ marginBottom: 14 }}>{p.tech.split(", ").map(tech => <span key={tech} className="tech-tag">{tech}</span>)}</div>
              <div className="glow-line" style={{ margin: "12px 0" }} />
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text2)" }}>
                <span>👁 {p.views.toLocaleString()}</span>
                <span>⭐ {p.stars}</span>
                <span style={{ color: "var(--accent)", fontWeight: 500 }}>
                  {lang === "uz" ? "Ko'rish" : lang === "ru" ? "Открыть" : "View"} <span className="proj-arrow">→</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactPage({ t, onSuccess }) {
  const [form, setForm] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  function submit() {
    if (!form.name || !form.email || !form.msg) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); onSuccess(t.sentNotif); }, 1100);
  }
  if (sent) return (
    <div className="section-pad" style={{ paddingTop: "calc(var(--nav-h) + 40px)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", position: "relative", zIndex: 1 }}>
      <div style={{ fontSize: 64, marginBottom: 20 }}>✅</div>
      <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 10 }}>{t.sentTitle}</h2>
      <p style={{ color: "var(--text2)" }}>{t.sentDesc}</p>
    </div>
  );
  return (
    <div className="section-pad" style={{ paddingTop: "calc(var(--nav-h) + 30px)", position: "relative", zIndex: 1, maxWidth: 560, margin: "0 auto" }}>
      <p className="mono" style={{ color: "var(--accent)", fontSize: 12, marginBottom: 8 }}>{t.contactLabel}</p>
      <h2 className="section-title" style={{ marginBottom: 6 }}>{t.contactTitle}</h2>
      <p className="section-sub">{t.contactSub}</p>
      <div className="card" style={{ padding: "28px 24px" }}>
        <div className="form-group">
          <label className="form-label">{t.fullName}</label>
          <input className="input" placeholder={t.namePh} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        </div>
        <div className="form-group">
          <label className="form-label">{t.email}</label>
          <input className="input" type="email" placeholder="email@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
        </div>
        <div className="form-group">
          <label className="form-label">{t.message}</label>
          <textarea className="input" placeholder={t.msgPh} rows={4} value={form.msg} onChange={e => setForm({ ...form, msg: e.target.value })} style={{ resize: "vertical" }} />
        </div>
        <button className="btn-primary" onClick={submit} disabled={loading} style={{ width: "100%", fontSize: 15 }}>
          {loading ? t.sending : `${t.send} →`}
        </button>
      </div>
      <div className="contact-info-grid">
        {[["📧","admin@alinuraliyev.dev"],["💼","linkedin.com/in/alinuraliyev"],["🐙","github.com/alinuraliyev"]].map(([icon, val]) => (
          <div key={val} className="card" style={{ padding: "12px 14px", textAlign: "center" }}>
            <div style={{ fontSize: 18, marginBottom: 4 }}>{icon}</div>
            <div style={{ fontSize: 10, color: "var(--text2)", wordBreak: "break-all" }}>{val}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================== AUTH ====================
function AuthPage({ onLogin, t }) {
  const [mode, setMode] = useState("login");
  const [role, setRole] = useState("user");
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    setErr(""); setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (role === "admin") {
        const user = DB.users.find(u => u.email === form.email && u.password === form.password && u.role === "admin");
        if (!user) { setErr(t.errAdmin); return; }
        onLogin(user);
      } else {
        if (mode === "login") {
          if (!form.email || !form.password) { setErr(t.errFill); return; }
          if (form.email === ADMIN_EMAIL) { setErr(t.errAdminEmail); return; }
          onLogin({ id: Date.now(), name: form.email.split("@")[0], email: form.email, role: "user", avatar: form.email.slice(0, 2).toUpperCase() });
        } else {
          if (!form.name || !form.email || !form.password) { setErr(t.errAllFields); return; }
          if (form.email === ADMIN_EMAIL) { setErr(t.errEmailTaken); return; }
          if (form.password.length < 6) { setErr(t.errPassLen); return; }
          onLogin({ id: Date.now(), name: form.name, email: form.email, role: "user", avatar: form.name.slice(0, 2).toUpperCase() });
        }
      }
    }, 800);
  }

  return (
    <div className="auth-wrap">
      <div className="auth-box">
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <div style={{ fontSize: 44, marginBottom: 10 }}>{role === "admin" ? "🛡️" : "👤"}</div>
          <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 6 }}>{role === "admin" ? t.adminPanel : t.userPanel}</h1>
          <p style={{ color: "var(--text2)", fontSize: 13 }}>{role === "admin" ? t.adminDesc : t.userDesc}</p>
        </div>
        <div style={{ display: "flex", background: "rgba(255,255,255,0.05)", borderRadius: 12, padding: 3, marginBottom: 20 }}>
          {[["user", t.userBtn], ["admin", t.adminBtn]].map(([r, label]) => (
            <button key={r} onClick={() => { setRole(r); setErr(""); setForm({ name: "", email: "", password: "" }); }}
              style={{ flex: 1, padding: "9px", border: "none", borderRadius: 10, cursor: "pointer", fontSize: 13, fontWeight: 500, fontFamily: "'Space Grotesk',sans-serif", transition: "all .3s",
                background: role === r ? "linear-gradient(135deg,var(--accent),var(--accent2))" : "transparent",
                color: role === r ? "var(--bg)" : "var(--text2)" }}>
              {label}
            </button>
          ))}
        </div>
        {role === "user" && (
          <div style={{ display: "flex", gap: 8, marginBottom: 20 }}>
            {[["login", t.loginTab], ["register", t.registerTab]].map(([m, label]) => (
              <button key={m} onClick={() => { setMode(m); setErr(""); }} className={mode === m ? "btn-primary" : "btn-outline"} style={{ flex: 1, fontSize: 13 }}>{label}</button>
            ))}
          </div>
        )}
        <div className="card" style={{ padding: "24px 20px" }}>
          {err && <div className="alert alert-error">{err}</div>}
          {mode === "register" && role === "user" && (
            <div className="form-group">
              <label className="form-label">{t.fullName}</label>
              <input className="input" placeholder={t.namePh} value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
            </div>
          )}
          <div className="form-group">
            <label className="form-label">{t.email}</label>
            <input className="input" type="email" placeholder="email@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="form-group" style={{ marginBottom: 20 }}>
            <label className="form-label">{t.password}</label>
            <input className="input" type="password" placeholder="••••••••" value={form.password} onChange={e => setForm({ ...form, password: e.target.value })} onKeyDown={e => e.key === "Enter" && handleSubmit()} />
          </div>
          <button className="btn-primary" onClick={handleSubmit} disabled={loading} style={{ width: "100%", fontSize: 15 }}>
            {loading ? (
              <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <div style={{ width: 16, height: 16, border: "2px solid rgba(0,0,0,.3)", borderTopColor: "var(--bg)", borderRadius: "50%", animation: "rotate .8s linear infinite" }} />
                {t.checking}
              </span>
            ) : mode === "login" ? t.enterLogin : t.enterRegister}
          </button>
        </div>
        <p style={{ textAlign: "center", marginTop: 14, fontSize: 12, color: "var(--text2)" }}>Ali Nuraliyev Portfolio © 2025</p>
      </div>
    </div>
  );
}

// ==================== ADMIN DASHBOARD ====================
function AdminDashboard({ user, onLogout, t, lang, setLang }) {
  const [page, setPage] = useState("dashboard");
  const [msgs, setMsgs] = useState(DB.messages);
  const [projs, setProjs] = useState(DB.projects);
  const [notif, setNotif] = useState(null);
  const [sideOpen, setSideOpen] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newProj, setNewProj] = useState({ title: "", tech: "", status: "dev", desc: { uz: "", ru: "", en: "" } });

  function showNotif(msg) { setNotif(msg); setTimeout(() => setNotif(null), 2800); }

  const navItems = [
    { id: "dashboard", icon: "📊", label: t.dashboard },
    { id: "projects", icon: "🚀", label: t.adminProjects, badge: 0 },
    { id: "messages", icon: "💬", label: t.messages, badge: msgs.filter(m => !m.read).length },
    { id: "analytics", icon: "📈", label: t.analytics },
    { id: "settings", icon: "⚙️", label: t.settings },
  ];

  function renderPage() {
    switch (page) {
      case "dashboard": return <AdminHome t={t} msgs={msgs} projs={projs} />;
      case "projects": return <AdminProjects t={t} lang={lang} projs={projs} setProjs={setProjs} showNotif={showNotif} showAdd={showAddModal} setShowAdd={setShowAddModal} newProj={newProj} setNewProj={setNewProj} />;
      case "messages": return <AdminMessages t={t} msgs={msgs} setMsgs={setMsgs} showNotif={showNotif} />;
      case "analytics": return <AdminAnalytics t={t} projs={projs} />;
      case "settings": return <AdminSettings t={t} user={user} showNotif={showNotif} />;
      default: return null;
    }
  }

  return (
    <div>
      <div className="nav">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button className="mob-menu-btn" onClick={() => setSideOpen(o => !o)}>☰</button>
          <span className="nav-logo">Muha.DEV</span>
          <span className="badge badge-live">ADMIN</span>
        </div>
        <div className="nav-right">
          <LangSwitcher lang={lang} setLang={setLang} />
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,var(--accent),var(--accent2))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "var(--bg)", flexShrink: 0 }}>{user.avatar}</div>
          <button className="btn-outline" onClick={onLogout} style={{ fontSize: 12, padding: "6px 14px" }}>{t.logout}</button>
        </div>
      </div>
      <div className={`sidebar-overlay ${sideOpen ? "show" : ""}`} onClick={() => setSideOpen(false)} />
      <div className={`sidebar ${sideOpen ? "open" : ""}`}>
        {navItems.map(item => (
          <div key={item.id} className={`sidebar-item ${page === item.id ? "active" : ""}`} onClick={() => { setPage(item.id); setSideOpen(false); }}>
            <span className="sidebar-icon">{item.icon}</span>
            <span style={{ flex: 1 }}>{item.label}</span>
            {item.badge > 0 && <span style={{ background: "var(--accent)", color: "var(--bg)", borderRadius: "50%", width: 17, height: 17, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, fontWeight: 700 }}>{item.badge}</span>}
          </div>
        ))}
        <div style={{ marginTop: 20, padding: "12px", background: "rgba(0,212,255,0.06)", borderRadius: 10, border: "1px solid rgba(0,212,255,0.1)" }}>
          <div className="mono" style={{ color: "var(--accent3)", fontSize: 10 }}>$ system status</div>
          <div style={{ color: "var(--text2)", fontSize: 11, marginTop: 4 }}>🟢 99.8% uptime</div>
        </div>
      </div>
      <div className="panel-main" style={{ animation: "slideIn .4s" }}>{renderPage()}</div>
      {notif && <div className="notif">✅ {notif}</div>}
    </div>
  );
}

function AdminHome({ t, msgs, projs }) {
  const stats = [
    { label: t.totalViews, value: 8420, icon: "👁", color: "var(--accent)" },
    { label: t.adminProjects, value: projs.length, icon: "🚀", color: "var(--accent2)" },
    { label: t.messages, value: msgs.length, icon: "💬", color: "var(--accent3)" },
    { label: t.totalStars, value: projs.reduce((s, p) => s + p.stars, 0), icon: "⭐", color: "#FFA500" },
  ];
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700 }}>{t.dashboard}</h1>
        <p style={{ color: "var(--text2)", marginTop: 4, fontSize: 14 }}>{t.welcome}, {DB.users[0].name.split(" ").pop()}! 👋</p>
      </div>
      <div className="stats-grid" style={{ marginBottom: 24 }}>
        {stats.map(s => (
          <div key={s.label} className="stat-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div>
                <div style={{ fontSize: 11, color: "var(--text2)", marginBottom: 7, fontWeight: 600 }}>{s.label}</div>
                <div style={{ fontSize: 26, fontWeight: 700, color: s.color }}><AnimCounter target={s.value} /></div>
              </div>
              <div style={{ fontSize: 22 }}>{s.icon}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
        <div className="card" style={{ padding: 22 }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>{t.topProjects}</h3>
          {DB.projects.slice(0, 4).map(p => (
            <div key={p.id} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: 13 }}>
              <span style={{ color: "var(--text2)" }}>{p.title}</span>
              <span style={{ color: "var(--accent)" }}>👁 {p.views}</span>
            </div>
          ))}
        </div>
        <div className="card" style={{ padding: 22 }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16 }}>{t.recentMessages}</h3>
          {msgs.slice(0, 3).map(m => (
            <div key={m.id} style={{ padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                <span style={{ fontSize: 13, fontWeight: 500 }}>{m.from}</span>
                {!m.read && <span className="badge badge-live" style={{ fontSize: 8 }}>{t.newBadge}</span>}
              </div>
              <p style={{ fontSize: 11, color: "var(--text2)" }}>{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AdminProjects({ t, lang, projs, setProjs, showNotif, showAdd, setShowAdd, newProj, setNewProj }) {
  function del(id) { setProjs(projs.filter(p => p.id !== id)); showNotif(t.projDeleted); }
  function add() {
    if (!newProj.title) return;
    setProjs([...projs, { ...newProj, id: Date.now(), views: 0, stars: 0 }]);
    setShowAdd(false); setNewProj({ title: "", tech: "", status: "dev", desc: { uz: "", ru: "", en: "" } });
    showNotif(t.projAdded);
  }
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24, flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ fontSize: 20, fontWeight: 700 }}>{t.manageProjects}</h2>
          <p style={{ color: "var(--text2)", fontSize: 13, marginTop: 3 }}>{projs.length} {t.adminProjects.toLowerCase()}</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAdd(true)}>{t.addProject}</button>
      </div>
      <div className="card table-wrap">
        <table className="data-table">
          <thead><tr><th>{t.projName}</th><th>{t.tech}</th><th>{t.status}</th><th>{t.totalViews}</th><th>{t.stars}</th><th>{t.actions}</th></tr></thead>
          <tbody>
            {projs.map(p => (
              <tr key={p.id}>
                <td style={{ fontWeight: 500 }}>{p.title}</td>
                <td>{p.tech.split(", ").slice(0, 2).map(tech => <span key={tech} className="tech-tag">{tech}</span>)}</td>
                <td><span className={`badge badge-${p.status}`}>{p.status}</span></td>
                <td className="mono" style={{ color: "var(--accent)" }}>{p.views.toLocaleString()}</td>
                <td className="mono">⭐ {p.stars}</td>
                <td><button onClick={() => del(p.id)} style={{ background: "rgba(255,50,50,0.1)", border: "1px solid rgba(255,50,50,0.3)", color: "#FF6B6B", padding: "4px 10px", borderRadius: 6, cursor: "pointer", fontSize: 11 }}>{t.delete}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showAdd && (
        <div className="modal-overlay" onClick={() => setShowAdd(false)}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 22 }}>{t.addTitle}</h3>
            {[[t.projName, "title", "E-Commerce Platform"], [t.tech, "tech", "React, Node.js"], [t.description, "desc_uz", "..."]].map(([lbl, key, ph]) => (
              <div key={key} className="form-group">
                <label className="form-label">{lbl} {key === "desc_uz" && "(UZ)"}</label>
                <input className="input" placeholder={ph} value={key === "desc_uz" ? newProj.desc.uz : newProj[key]} onChange={e => key === "desc_uz" ? setNewProj({ ...newProj, desc: { ...newProj.desc, uz: e.target.value, ru: e.target.value, en: e.target.value } }) : setNewProj({ ...newProj, [key]: e.target.value })} />
              </div>
            ))}
            <div className="form-group">
              <label className="form-label">{t.status}</label>
              <select className="input" value={newProj.status} onChange={e => setNewProj({ ...newProj, status: e.target.value })}>
                <option value="dev">Dev</option><option value="beta">Beta</option><option value="live">Live</option>
              </select>
            </div>
            <div style={{ display: "flex", gap: 10 }}>
              <button className="btn-primary" onClick={add} style={{ flex: 1 }}>{t.addBtn}</button>
              <button className="btn-outline" onClick={() => setShowAdd(false)} style={{ flex: 1 }}>{t.cancel}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AdminMessages({ t, msgs, setMsgs, showNotif }) {
  function markRead(id) { setMsgs(msgs.map(m => m.id === id ? { ...m, read: true } : m)); showNotif(t.msgRead); }
  function del(id) { setMsgs(msgs.filter(m => m.id !== id)); showNotif(t.msgDeleted); }
  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700 }}>{t.messages}</h2>
        <p style={{ color: "var(--text2)", fontSize: 13, marginTop: 3 }}>{msgs.filter(m => !m.read).length} {t.unread}</p>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {msgs.map(m => (
          <div key={m.id} className="card" style={{ padding: "20px", borderColor: !m.read ? "rgba(0,212,255,0.4)" : "var(--border)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,var(--accent),var(--accent2))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, color: "var(--bg)", flexShrink: 0 }}>{m.from.charAt(0)}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>{m.from}</div>
                  <div style={{ fontSize: 11, color: "var(--text2)" }}>{m.email}</div>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ fontSize: 11, color: "var(--text2)" }}>{m.date}</span>
                {!m.read && <span className="badge badge-live" style={{ fontSize: 8 }}>{t.newBadge}</span>}
              </div>
            </div>
            <p style={{ color: "var(--text2)", fontSize: 13, marginBottom: 14, padding: "10px", background: "rgba(255,255,255,0.03)", borderRadius: 8 }}>{m.text}</p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {!m.read && <button className="btn-outline" onClick={() => markRead(m.id)} style={{ fontSize: 11, padding: "5px 14px" }}>{t.markRead}</button>}
              <button onClick={() => del(m.id)} style={{ background: "rgba(255,50,50,0.1)", border: "1px solid rgba(255,50,50,0.3)", color: "#FF6B6B", padding: "5px 14px", borderRadius: 8, cursor: "pointer", fontSize: 11 }}>{t.deleteMsg}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AdminAnalytics({ t, projs }) {
  const maxViews = Math.max(...projs.map(p => p.views));
  return (
    <div>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24 }}>{t.analytics}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(280px,1fr))", gap: 20 }}>
        <div className="card" style={{ padding: 22 }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 18 }}>{t.totalViews}</h3>
          {projs.map(p => (
            <div key={p.id} style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5, fontSize: 12 }}>
                <span style={{ color: "var(--text2)" }}>{p.title}</span>
                <span className="mono" style={{ color: "var(--accent)" }}>{p.views.toLocaleString()}</span>
              </div>
              <div className="skill-bar-bg"><div className="skill-bar-fill" style={{ width: `${(p.views / maxViews) * 100}%` }} /></div>
            </div>
          ))}
        </div>
        <div className="card" style={{ padding: 22 }}>
          <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 18 }}>{t.status}</h3>
          {["live","beta","dev"].map(status => {
            const count = projs.filter(p => p.status === status).length;
            return (
              <div key={status} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                <span className={`badge badge-${status}`}>{status}</span>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 80, height: 5, background: "rgba(255,255,255,0.08)", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ width: `${(count / projs.length) * 100}%`, height: "100%", background: "linear-gradient(90deg,var(--accent),var(--accent2))", borderRadius: 3 }} />
                  </div>
                  <span className="mono" style={{ fontSize: 13, color: "var(--accent)", minWidth: 16 }}>{count}</span>
                </div>
              </div>
            );
          })}
          <div style={{ marginTop: 20, padding: 14, background: "rgba(0,212,255,0.06)", borderRadius: 10, textAlign: "center" }}>
            <div style={{ fontSize: 28, fontWeight: 700, color: "var(--accent)" }}><AnimCounter target={projs.reduce((s, p) => s + p.stars, 0)} /></div>
            <div style={{ fontSize: 12, color: "var(--text2)", marginTop: 3 }}>{t.totalStars} ⭐</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminSettings({ t, user, showNotif }) {
  const [bio, setBio] = useState(DB.users[0].bio);
  const sysInfo = [["Backend","Node.js v20"],["Database","PostgreSQL 16"],["Cache","Redis 7.2"],["CDN","Cloudflare"],["Version","v2.5.0"]];
  return (
    <div style={{ maxWidth: 580 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 24 }}>{t.settings}</h2>
      <div className="card" style={{ padding: "24px 20px", marginBottom: 18 }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 18 }}>{t.profileInfo}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
          <div style={{ width: 56, height: 56, borderRadius: "50%", background: "linear-gradient(135deg,var(--accent),var(--accent2))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 700, color: "var(--bg)", flexShrink: 0 }}>{user.avatar}</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 15 }}>{user.name}</div>
            <div style={{ fontSize: 12, color: "var(--accent)" }}>{user.email}</div>
            <span className="badge badge-live" style={{ marginTop: 5, display: "inline-block" }}>Admin</span>
          </div>
        </div>
        <div className="form-group">
          <label className="form-label">{t.bio}</label>
          <textarea className="input" rows={3} value={bio} onChange={e => setBio(e.target.value)} />
        </div>
        <button className="btn-primary" onClick={() => showNotif(t.profileSaved)}>{t.save}</button>
      </div>
      <div className="card" style={{ padding: "24px 20px" }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>{t.systemInfo}</h3>
        {sysInfo.map(([k, v]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid rgba(255,255,255,0.04)", fontSize: 13 }}>
            <span style={{ color: "var(--text2)" }}>{k}</span>
            <span className="mono" style={{ color: "var(--accent3)" }}>{v}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ==================== USER DASHBOARD ====================
function UserDashboard({ user, onLogout, t, lang, setLang }) {
  const [page, setPage] = useState("home");
  const [notif, setNotif] = useState(null);
  const [sideOpen, setSideOpen] = useState(false);
  function showNotif(msg) { setNotif(msg); setTimeout(() => setNotif(null), 2800); }
  const navItems = [
    { id: "home", icon: "🏠", label: t.navHome },
    { id: "projects", icon: "🚀", label: t.navProjects },
    { id: "about", icon: "👨‍💻", label: t.navAbout },
    { id: "contact", icon: "📩", label: t.navContact },
  ];
  return (
    <div>
      <div className="nav">
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button className="mob-menu-btn" onClick={() => setSideOpen(o => !o)}>☰</button>
          <span className="nav-logo">Muha.DEV</span>
        </div>
        <div className="nav-right">
          <LangSwitcher lang={lang} setLang={setLang} />
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "linear-gradient(135deg,#7B61FF,var(--accent3))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, color: "var(--bg)", flexShrink: 0 }}>{user.avatar}</div>
          <button className="btn-outline" onClick={onLogout} style={{ fontSize: 12, padding: "6px 14px" }}>{t.logout}</button>
        </div>
      </div>
      <div className={`sidebar-overlay ${sideOpen ? "show" : ""}`} onClick={() => setSideOpen(false)} />
      <div className={`sidebar ${sideOpen ? "open" : ""}`}>
        {navItems.map(item => (
          <div key={item.id} className={`sidebar-item ${page === item.id ? "active" : ""}`} onClick={() => { setPage(item.id); setSideOpen(false); }}>
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
        <div style={{ marginTop: 16, padding: "12px 14px", background: "rgba(123,97,255,0.08)", border: "1px solid rgba(123,97,255,0.2)", borderRadius: 10 }}>
          <div style={{ fontSize: 11, color: "var(--text2)", marginBottom: 5 }}>{t.loggedAs}</div>
          <div style={{ fontSize: 13, fontWeight: 600 }}>{user.name}</div>
          <div style={{ fontSize: 11, color: "var(--accent)", marginTop: 2, wordBreak: "break-all" }}>{user.email}</div>
        </div>
      </div>
      <div className="panel-main">
        {page === "home" && <LandingPage t={t} lang={lang} onNavigate={setPage} />}
        {page === "projects" && <ProjectsPage t={t} lang={lang} />}
        {page === "about" && <AboutPage t={t} lang={lang} />}
        {page === "contact" && <ContactPage t={t} onSuccess={showNotif} />}
      </div>
      {notif && <div className="notif">✅ {notif}</div>}
    </div>
  );
}

// ==================== PUBLIC SITE ====================
function PublicSite({ onLogin, t, lang, setLang }) {
  const [page, setPage] = useState("home");
  const [showAuth, setShowAuth] = useState(false);
  const [notif, setNotif] = useState(null);
  function showNotif(msg) { setNotif(msg); setTimeout(() => setNotif(null), 2800); }
  return (
    <div>
      <div className="nav">
        <span className="nav-logo">Muha.DEV</span>
        <div className="nav-right">
          <div className="nav-links">
            {[["home", t.navHome], ["projects", t.navProjects], ["about", t.navAbout], ["contact", t.navContact]].map(([id, label]) => (
              <button key={id} className={`pub-nav-link ${page === id && !showAuth ? "active" : ""}`} onClick={() => { setPage(id); setShowAuth(false); }}>{label}</button>
            ))}
          </div>
          <LangSwitcher lang={lang} setLang={setLang} />
          <button className="btn-primary" onClick={() => setShowAuth(true)}>{t.login} →</button>
        </div>
      </div>
      {showAuth ? (
        <AuthPage onLogin={onLogin} t={t} />
      ) : (
        <>
          {page === "home" && <LandingPage t={t} lang={lang} onNavigate={p => { setPage(p); setShowAuth(false); }} />}
          {page === "projects" && <ProjectsPage t={t} lang={lang} />}
          {page === "about" && <AboutPage t={t} lang={lang} />}
          {page === "contact" && <ContactPage t={t} onSuccess={showNotif} />}
        </>
      )}
      {notif && <div className="notif">✅ {notif}</div>}
    </div>
  );
}

// ==================== ROOT ====================
export default function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [lang, setLang] = useState("uz");

  useEffect(() => { setTimeout(() => setLoading(false), 1400); }, []);

  const t = T[lang];

  if (loading) return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "var(--bg)", gap: 20 }}>
      <style>{styles}</style>
      <MatrixBg />
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <div className="mono" style={{ fontSize: "clamp(28px,5vw,36px)", fontWeight: 700, color: "var(--accent)", marginBottom: 6, letterSpacing: 4 }}>Muha.DEV</div>
        <div style={{ fontSize: 13, color: "var(--text2)", marginBottom: 28 }}>Muhammad Ali Nuraliyev Portfolio</div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="spinner" />
        </div>
        <div className="mono" style={{ fontSize: 11, color: "var(--text2)", marginTop: 16, animation: "blink 1.5s infinite" }}>
          {lang === "uz" ? "Yuklanmoqda..." : lang === "ru" ? "Загрузка..." : "Loading..."}
        </div>
      </div>
    </div>
  );

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh" }}>
      <style>{styles}</style>
      <MatrixBg />
      {!user ? (
        <PublicSite onLogin={setUser} t={t} lang={lang} setLang={setLang} />
      ) : user.role === "admin" ? (
        <AdminDashboard user={user} onLogout={() => setUser(null)} t={t} lang={lang} setLang={setLang} />
      ) : (
        <UserDashboard user={user} onLogout={() => setUser(null)} t={t} lang={lang} setLang={setLang} />
      )}
    </div>
  );
}
