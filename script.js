/* =====================================================
   SHAHRIYOR'S SCHOOL — TEST SYSTEM
===================================================== */


/* =====================================================
   LANGUAGE SYSTEM
===================================================== */

const SUPPORTED_LANGUAGES = ["uz", "ru", "en"];

let currentLanguage = "uz";

try {
    const saved = localStorage.getItem("schoolLanguage");
    if (SUPPORTED_LANGUAGES.includes(saved)) {
        currentLanguage = saved;
    }
} catch (e) {
    /* localStorage mavjud bo'lmasa, standart til ishlatiladi */
}


const translations = {

    uz: {
        pageTitle: "Shahriyor's School | Testlar",
        schoolSubtitle: "Onlayn test platformasi",
        welcome: "Shahriyor's School ga xush kelibsiz!",
        welcomeText: "Bilimingizni sinab ko'ring va Shahriyor's School sertifikatiga ega bo'ling.",
        chooseTest: "Test turini tanlang",
        englishTest: "Ingliz tili testi",
        englishDescription: "Ingliz tili bo'yicha bilimingizni sinab ko'ring.",
        startEnglish: "Ingliz tili testini boshlash",
        itTest: "IT testi",
        itDescription: "IT va kompyuter texnologiyalari bo'yicha bilimingizni sinab ko'ring.",
        startIT: "IT testini boshlash",
        back: "← Orqaga",
        leaveConfirm: "Testni tark etsangiz, natijangiz saqlanmaydi. Chiqishni xohlaysizmi?",
        question: "Savol",
        next: "Keyingi savol →",
        finish: "Testni yakunlash →",
        congratulations: "Tabriklaymiz!",
        completed: "Siz testni muvaffaqiyatli yakunladingiz.",
        yourScore: "Sizning natijangiz",
        enterNameTitle: "Siz testni yakunladingiz!",
        enterNameText: "Endi sertifikat yaratish uchun Ism va Familiyangizni kiriting.",
        namePlaceholder: "Ism va Familiyangizni kiriting",
        generateCertificate: "Sertifikat yaratish",
        certificateTitle: "MUVAFFAQIYAT SERTIFIKATI",
        presented: "Ushbu sertifikat quyidagi o'quvchiga taqdim etiladi",
        completedCourse: "quyidagi testni muvaffaqiyatli yakunlagani uchun",
        testResult: "Test natijasi",
        percentage: "Foiz",
        date: "Sana",
        educationalCenter: "O'quv markazi",
        officialCertificate: "RASMIY SERTIFIKAT",
        certificateDescription: "Sizning harakatingiz, mehnatingiz va o'rganishga bo'lgan intilishingiz uchun minnatdormiz.",
        print: "🖨 Chop etish / PDF saqlash",
        home: "🏠 Bosh sahifa",
        outstanding: "Ajoyib natija! Siz o'z bilimingiz va mehnatingizni juda yuqori darajada namoyish etdingiz.",
        excellent: "A'lo natija! Siz juda yaxshi bilim darajasini namoyish etdingiz.",
        great: "Ajoyib! Siz yaxshi bilim darajasini muvaffaqiyatli namoyish etdingiz.",
        wellDone: "Barakalla! O'qishda davom eting va bilimlaringizni yanada rivojlantiring.",
        keepLearning: "Testni yakunlaganingiz bilan tabriklaymiz! O'qishda davom eting va hech qachon o'rganishdan to'xtamang.",
        enterNameAlert: "Iltimos, Ism va Familiyangizni kiriting.",
        certificateNo: "Sertifikat №",
        retry: "🔄 Qayta urinish",
        failedTitle: "Afsuski, o'ta olmadingiz",
        failedMessage: "Sertifikat olish uchun kamida {pass}% to'plash kerak. Qayta urinib ko'ring!",
        timeUpMessage: "Vaqt tugadi, test avtomatik yakunlandi.",
        passNote: "O'tish bali: {pass}%",
        showReview: "📝 Xatolarni ko'rish",
        hideReview: "🔼 Yopish",
        reviewAll: "Hammasi",
        reviewWrongOnly: "Faqat xatolar",
        yourAnswer: "Sizning javobingiz",
        correctAnswer: "To'g'ri javob",
        notAnswered: "Javob berilmadi",
        perfectScore: "Ajoyib! Birorta ham xato yo'q 🎯",
        reviewSummary: "To'g'ri: {right} · Noto'g'ri: {wrong} · Javobsiz: {skipped}",
        levelLabel: "Daraja",
        levelBronze: "Bronza",
        levelSilver: "Kumush",
        levelGold: "Oltin",
        levelCefrNote: "CEFR darajasi taxminiy baho hisoblanadi.",
        leaderboardTitle: "🏆 Reyting jadvali",
        leaderboardSub: "Eng yuqori natija ko'rsatgan o'quvchilar (Top 10)",
        lbEnglish: "🇬🇧 Ingliz tili",
        lbIt: "💻 IT",
        lbEmpty: "Hozircha natijalar yo'q. Birinchi bo'ling! 🚀",
        lbLoading: "Yuklanmoqda...",
        lbError: "Reytingni yuklab bo'lmadi. Keyinroq urinib ko'ring.",
        lbLocalNote: "Bu reyting faqat shu qurilmadagi natijalarni ko'rsatadi.",
        lbYou: "Siz",
        download: "🖼 PNG yuklab olish",
        share: "📤 Ulashish",
        telegram: "✈️ Telegram",
        copyLink: "🔗 Havolani nusxalash",
        linkCopied: "Havola nusxalandi ✅",
        shareText: "Men Shahriyor's School'da «{test}» testidan {percent}% natija bilan o'tdim! 🎓",
        imageFailed: "Rasmni yaratib bo'lmadi. Chop etish / PDF tugmasidan foydalaning.",
        preparingImage: "Rasm tayyorlanmoqda...",
        qrCaption: "Tekshirish",
        verifyLoading: "Tekshirilmoqda...",
        verifyValid: "Sertifikat haqiqiy",
        verifyValidText: "Bu sertifikat Shahriyor's School tomonidan berilgan.",
        verifyInvalid: "Sertifikat tasdiqlanmadi",
        verifyInvalidText: "Sertifikat ma'lumotlari tekshiruvdan o'tmadi yoki o'zgartirilgan.",
        verifyNotFound: "Sertifikat topilmadi",
        verifyNotFoundText: "Bu raqamdagi sertifikat bazada mavjud emas.",
        verifyError: "Tekshirib bo'lmadi",
        verifyErrorText: "Internet aloqasini tekshirib, qayta urinib ko'ring.",
        verifyStudent: "O'quvchi",
        verifyTest: "Test"
    },

    ru: {
        pageTitle: "Shahriyor's School | Тесты",
        schoolSubtitle: "Онлайн-платформа тестирования",
        welcome: "Добро пожаловать в Shahriyor's School!",
        welcomeText: "Проверьте свои знания и получите сертификат Shahriyor's School.",
        chooseTest: "Выберите тип теста",
        englishTest: "Тест по английскому языку",
        englishDescription: "Проверьте свои знания английского языка.",
        startEnglish: "Начать тест по английскому",
        itTest: "IT-тест",
        itDescription: "Проверьте свои знания в области IT и компьютерных технологий.",
        startIT: "Начать IT-тест",
        back: "← Назад",
        leaveConfirm: "Если вы выйдете из теста, результат не сохранится. Хотите выйти?",
        question: "Вопрос",
        next: "Следующий вопрос →",
        finish: "Завершить тест →",
        congratulations: "Поздравляем!",
        completed: "Вы успешно завершили тест.",
        yourScore: "Ваш результат",
        enterNameTitle: "Вы завершили тест!",
        enterNameText: "Теперь введите своё имя и фамилию для создания сертификата.",
        namePlaceholder: "Введите имя и фамилию",
        generateCertificate: "Создать сертификат",
        certificateTitle: "СЕРТИФИКАТ ДОСТИЖЕНИЯ",
        presented: "Настоящий сертификат вручается",
        completedCourse: "за успешное прохождение теста",
        testResult: "Результат теста",
        percentage: "Процент",
        date: "Дата",
        educationalCenter: "Образовательный центр",
        officialCertificate: "ОФИЦИАЛЬНЫЙ СЕРТИФИКАТ",
        certificateDescription: "Мы ценим ваши усилия, трудолюбие и стремление к знаниям.",
        print: "🖨 Печать / Сохранить PDF",
        home: "🏠 На главную",
        outstanding: "Выдающийся результат! Вы продемонстрировали высокий уровень знаний и отличную работу.",
        excellent: "Отличный результат! Вы продемонстрировали очень хороший уровень знаний.",
        great: "Отличная работа! Вы успешно продемонстрировали хороший уровень знаний.",
        wellDone: "Молодец! Продолжайте учиться и развивать свои знания.",
        keepLearning: "Поздравляем с завершением теста! Продолжайте учиться и никогда не прекращайте развиваться.",
        enterNameAlert: "Пожалуйста, введите имя и фамилию.",
        certificateNo: "Сертификат №",
        retry: "🔄 Попробовать снова",
        failedTitle: "К сожалению, вы не прошли тест",
        failedMessage: "Для получения сертификата нужно набрать не менее {pass}%. Попробуйте ещё раз!",
        timeUpMessage: "Время вышло, тест завершён автоматически.",
        passNote: "Проходной балл: {pass}%",
        showReview: "📝 Посмотреть ответы",
        hideReview: "🔼 Скрыть",
        reviewAll: "Все",
        reviewWrongOnly: "Только ошибки",
        yourAnswer: "Ваш ответ",
        correctAnswer: "Правильный ответ",
        notAnswered: "Ответа нет",
        perfectScore: "Отлично! Ни одной ошибки 🎯",
        reviewSummary: "Верно: {right} · Неверно: {wrong} · Без ответа: {skipped}",
        levelLabel: "Уровень",
        levelBronze: "Бронза",
        levelSilver: "Серебро",
        levelGold: "Золото",
        levelCefrNote: "Уровень CEFR является приблизительной оценкой.",
        leaderboardTitle: "🏆 Рейтинг",
        leaderboardSub: "Ученики с лучшими результатами (Топ 10)",
        lbEnglish: "🇬🇧 Английский",
        lbIt: "💻 IT",
        lbEmpty: "Пока нет результатов. Будьте первым! 🚀",
        lbLoading: "Загрузка...",
        lbError: "Не удалось загрузить рейтинг. Попробуйте позже.",
        lbLocalNote: "Этот рейтинг показывает только результаты на этом устройстве.",
        lbYou: "Вы",
        download: "🖼 Скачать PNG",
        share: "📤 Поделиться",
        telegram: "✈️ Telegram",
        copyLink: "🔗 Копировать ссылку",
        linkCopied: "Ссылка скопирована ✅",
        shareText: "Я прошёл(а) тест «{test}» в Shahriyor's School с результатом {percent}%! 🎓",
        imageFailed: "Не удалось создать изображение. Используйте кнопку «Печать / PDF».",
        preparingImage: "Подготовка изображения...",
        qrCaption: "Проверка",
        verifyLoading: "Проверка...",
        verifyValid: "Сертификат подлинный",
        verifyValidText: "Этот сертификат выдан Shahriyor's School.",
        verifyInvalid: "Сертификат не подтверждён",
        verifyInvalidText: "Данные сертификата не прошли проверку или были изменены.",
        verifyNotFound: "Сертификат не найден",
        verifyNotFoundText: "Сертификат с таким номером отсутствует в базе.",
        verifyError: "Не удалось проверить",
        verifyErrorText: "Проверьте подключение к интернету и попробуйте снова.",
        verifyStudent: "Ученик",
        verifyTest: "Тест"
    },

    en: {
        pageTitle: "Shahriyor's School | Tests",
        schoolSubtitle: "Online Testing Platform",
        welcome: "Welcome to Shahriyor's School!",
        welcomeText: "Test your knowledge and receive your Shahriyor's School Certificate.",
        chooseTest: "Choose Your Test",
        englishTest: "English Test",
        englishDescription: "Test your English language knowledge.",
        startEnglish: "Start English Test",
        itTest: "IT Test",
        itDescription: "Test your IT and computer technology knowledge.",
        startIT: "Start IT Test",
        back: "← Back",
        leaveConfirm: "If you leave the test, your progress will not be saved. Do you want to leave?",
        question: "Question",
        next: "Next Question →",
        finish: "Finish Test →",
        congratulations: "Congratulations!",
        completed: "You have successfully completed the test.",
        yourScore: "Your Score",
        enterNameTitle: "You have completed the test!",
        enterNameText: "Now enter your First Name and Last Name to generate your certificate.",
        namePlaceholder: "Enter your full name",
        generateCertificate: "Generate Certificate",
        certificateTitle: "CERTIFICATE OF ACHIEVEMENT",
        presented: "This certificate is proudly presented to",
        completedCourse: "for successfully completing the",
        testResult: "Test Result",
        percentage: "Percentage",
        date: "Date",
        educationalCenter: "Educational Center",
        officialCertificate: "OFFICIAL CERTIFICATE",
        certificateDescription: "We appreciate your effort, dedication and commitment to learning.",
        print: "🖨 Print / Save as PDF",
        home: "🏠 Back to Home",
        outstanding: "Outstanding achievement! Your knowledge and dedication are truly impressive.",
        excellent: "Excellent work! You have demonstrated a very strong level of knowledge.",
        great: "Great job! You have successfully demonstrated a good level of knowledge.",
        wellDone: "Well done! Keep learning and continue improving your skills.",
        keepLearning: "Congratulations on completing the test! Keep studying and never stop learning.",
        enterNameAlert: "Please enter your First Name and Last Name.",
        certificateNo: "Certificate No.",
        retry: "🔄 Try again",
        failedTitle: "Unfortunately, you did not pass",
        failedMessage: "You need at least {pass}% to receive a certificate. Please try again!",
        timeUpMessage: "Time is up, the test was finished automatically.",
        passNote: "Passing score: {pass}%",
        showReview: "📝 Review answers",
        hideReview: "🔼 Hide",
        reviewAll: "All",
        reviewWrongOnly: "Mistakes only",
        yourAnswer: "Your answer",
        correctAnswer: "Correct answer",
        notAnswered: "Not answered",
        perfectScore: "Perfect! No mistakes 🎯",
        reviewSummary: "Correct: {right} · Wrong: {wrong} · Skipped: {skipped}",
        levelLabel: "Level",
        levelBronze: "Bronze",
        levelSilver: "Silver",
        levelGold: "Gold",
        levelCefrNote: "The CEFR level is an approximate estimate.",
        leaderboardTitle: "🏆 Leaderboard",
        leaderboardSub: "Students with the highest scores (Top 10)",
        lbEnglish: "🇬🇧 English",
        lbIt: "💻 IT",
        lbEmpty: "No results yet. Be the first! 🚀",
        lbLoading: "Loading...",
        lbError: "Could not load the leaderboard. Please try again later.",
        lbLocalNote: "This leaderboard only shows results from this device.",
        lbYou: "You",
        download: "🖼 Download PNG",
        share: "📤 Share",
        telegram: "✈️ Telegram",
        copyLink: "🔗 Copy link",
        linkCopied: "Link copied ✅",
        shareText: "I passed the “{test}” at Shahriyor's School with {percent}%! 🎓",
        imageFailed: "Could not create the image. Please use the Print / PDF button.",
        preparingImage: "Preparing image...",
        qrCaption: "Verify",
        verifyLoading: "Verifying...",
        verifyValid: "Certificate is authentic",
        verifyValidText: "This certificate was issued by Shahriyor's School.",
        verifyInvalid: "Certificate not verified",
        verifyInvalidText: "The certificate data failed verification or has been modified.",
        verifyNotFound: "Certificate not found",
        verifyNotFoundText: "No certificate with this number exists in the database.",
        verifyError: "Could not verify",
        verifyErrorText: "Please check your internet connection and try again.",
        verifyStudent: "Student",
        verifyTest: "Test"
    }

};


function t(key) {
    const dict = translations[currentLanguage] || translations.uz;
    return dict[key] !== undefined ? dict[key] : translations.en[key] || key;
}


/* =====================================================
   QUESTION HELPERS
   q(correct, en, uz, ru)
   Har bir til: [savol, [javoblar]]
   Javoblar massivida null — inglizcha variant bilan bir xil
   (HTML, CPU, Python kabi atamalar uchun).
===================================================== */

function q(correct, en, uz, ru) {

    const build = (data) => ({
        question: data[0],
        answers: en[1].map((answer, i) =>
            data[1] && data[1][i] != null ? data[1][i] : answer
        )
    });

    return {
        correct: correct,
        translations: {
            en: { question: en[0], answers: en[1] },
            uz: build(uz),
            ru: build(ru)
        }
    };
}

/* Ingliz tili testi — faqat inglizcha */
function eq(correct, question, answers) {

    return {
        correct: correct,
        translations: {
            en: { question: question, answers: answers }
        }
    };
}

function getQuestionData(question) {

    const data = question.translations[currentLanguage] || question.translations.en;

    /* Javoblar aralashtirilgan bo'lsa (perm), shu tartibda qaytariladi */
    if (question.perm) {
        return {
            question: data.question,
            answers: question.perm.map(function (i) { return data.answers[i]; })
        };
    }

    return data;
}


/* =====================================================
   SETTINGS
===================================================== */

/* Sertifikat olish uchun minimal foiz */
const PASS_PERCENT = 60;

/* Fisher–Yates aralashtirish */
function shuffle(array) {

    const a = array.slice();

    for (let i = a.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        const tmp = a[i];
        a[i] = a[j];
        a[j] = tmp;
    }

    return a;
}


/* =====================================================
   DARAJALAR (LEVELS)
   Foizga qarab medal beriladi. Ingliz tili testi uchun
   qo'shimcha ravishda TAXMINIY CEFR darajasi ko'rsatiladi.
   Chegaralarni xohlaganingizcha shu yerdan o'zgartiring.
===================================================== */

const LEVELS = {

    /* Katta foizdan kichigiga qarab yoziladi */
    medals: [
        { min: 90,           key: "Gold",   icon: "🥇" },
        { min: 75,           key: "Silver", icon: "🥈" },
        { min: PASS_PERCENT, key: "Bronze", icon: "🥉" }
    ],

    cefr: [
        { min: 90,           level: "C1" },
        { min: 80,           level: "B2" },
        { min: 70,           level: "B1" },
        { min: PASS_PERCENT, level: "A2" }
    ]
};


/* =====================================================
   SERVER SOZLAMALARI (REYTING VA SERTIFIKATNI TEKSHIRISH)

   FIREBASE_DB_URL bo'sh qoldirilsa, sayt serversiz ishlaydi:
   reyting faqat shu qurilmada saqlanadi.

   Hamma o'quvchilar uchun UMUMIY reyting kerak bo'lsa,
   Firebase Realtime Database yarating va manzilini yozing:
   const FIREBASE_DB_URL = "https://loyiha-nomi-default-rtdb.firebaseio.com";
===================================================== */

const FIREBASE_DB_URL = "";

/* Sertifikat nazorat kodi uchun maxfiy so'z (o'zingiznikiga almashtiring) */
const CERT_SALT = "SHS-change-this-secret";

/* Reytingda nechta o'quvchi ko'rsatiladi */
const LEADERBOARD_SIZE = 10;


/* =====================================================
   TEST QUESTIONS
===================================================== */

const tests = {

    /* =========================
       IT TEST — 40 QUESTIONS
    ========================= */

    it: {

        titleKey: "itTest",

        /* Bazada 80 ta savol bor, har urinishda 40 tasi tasodifiy tanlanadi */
        questionsPerTest: 40,

        /* Test vaqti (soniya): 20 daqiqa */
        timeLimit: 20 * 60,

        questions: [

            q(0,
                ["What does CPU stand for?", ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Computer Processing User"]],
                ["CPU nimani anglatadi?", ["Markaziy protsessor qurilmasi", "Kompyuter shaxsiy qurilmasi", "Markaziy dastur yordam dasturi", "Kompyuter qayta ishlash foydalanuvchisi"]],
                ["Что означает CPU?", ["Центральное процессорное устройство", "Персональное устройство компьютера", "Центральная программная утилита", "Пользователь обработки компьютера"]]
            ),

            q(1,
                ["Which device is used to display information?", ["Keyboard", "Monitor", "Mouse", "Microphone"]],
                ["Ma'lumotni ekranga chiqarish uchun qaysi qurilma ishlatiladi?", ["Klaviatura", "Monitor", "Sichqoncha", "Mikrofon"]],
                ["Какое устройство используется для отображения информации?", ["Клавиатура", "Монитор", "Мышь", "Микрофон"]]
            ),

            q(0,
                ["Which language is mainly used to structure web pages?", ["HTML", "Python", "SQL", "C++"]],
                ["Veb-sahifalarni tuzishda asosan qaysi til ishlatiladi?"],
                ["Какой язык в основном используется для создания структуры веб-страниц?"]
            ),

            q(1,
                ["What does CSS stand for?", ["Computer Style System", "Cascading Style Sheets", "Creative Style Software", "Computer Styling Service"]],
                ["CSS nimani anglatadi?"],
                ["Что означает CSS?"]
            ),

            q(0,
                ["Which language is commonly used to make web pages interactive?", ["JavaScript", "HTML", "CSS", "SQL"]],
                ["Veb-sahifalarni interaktiv qilish uchun odatda qaysi til ishlatiladi?"],
                ["Какой язык обычно используется для создания интерактивных веб-страниц?"]
            ),

            q(0,
                ["Which one is an operating system?", ["Windows", "Google", "HTML", "Python"]],
                ["Qaysi biri operatsion tizim?"],
                ["Что из перечисленного является операционной системой?"]
            ),

            q(0,
                ["What does RAM stand for?", ["Random Access Memory", "Read Access Machine", "Rapid Application Memory", "Random Application Module"]],
                ["RAM nimani anglatadi?"],
                ["Что означает RAM?"]
            ),

            q(1,
                ["Which device is commonly used to type text?", ["Monitor", "Keyboard", "Speaker", "Printer"]],
                ["Matn yozish uchun odatda qaysi qurilma ishlatiladi?", ["Monitor", "Klaviatura", "Karnay", "Printer"]],
                ["Какое устройство обычно используется для ввода текста?", ["Монитор", "Клавиатура", "Динамик", "Принтер"]]
            ),

            q(1,
                ["What is the main function of a web browser?", ["Create electricity", "Access and display websites", "Edit hardware", "Format a hard drive"]],
                ["Veb-brauzerning asosiy vazifasi nima?", ["Elektr energiyasi yaratish", "Veb-saytlarga kirish va ularni ko'rsatish", "Qurilmalarni tahrirlash", "Qattiq diskni formatlash"]],
                ["Какова основная функция веб-браузера?", ["Создание электричества", "Открытие и отображение веб-сайтов", "Редактирование оборудования", "Форматирование жёсткого диска"]]
            ),

            q(0,
                ["Which of these is a programming language?", ["Python", "Windows", "Chrome", "Linux"]],
                ["Quyidagilardan qaysi biri dasturlash tili?"],
                ["Что из перечисленного является языком программирования?"]
            ),

            q(0,
                ["What does URL stand for?", ["Uniform Resource Locator", "Universal Research Link", "User Resource Language", "Uniform Remote Login"]],
                ["URL nimani anglatadi?"],
                ["Что означает URL?"]
            ),

            q(1,
                ["Which company developed the Windows operating system?", ["Apple", "Microsoft", "Google", "Amazon"]],
                ["Windows operatsion tizimini qaysi kompaniya ishlab chiqqan?"],
                ["Какая компания разработала операционную систему Windows?"]
            ),

            q(0,
                ["Which of these is a database language?", ["SQL", "HTML", "CSS", "PNG"]],
                ["Quyidagilardan qaysi biri ma'lumotlar bazasi tili?"],
                ["Что из перечисленного является языком базы данных?"]
            ),

            q(0,
                ["What does HTTP relate to?", ["Web communication", "Computer graphics", "Audio editing", "Keyboard drivers"]],
                ["HTTP nimaga tegishli?", ["Veb-kommunikatsiya", "Kompyuter grafikasi", "Audio tahrirlash", "Klaviatura drayverlari"]],
                ["С чем связан HTTP?", ["Веб-коммуникация", "Компьютерная графика", "Редактирование аудио", "Драйверы клавиатуры"]]
            ),

            q(0,
                ["Which one is an image file format?", ["PNG", "EXE", "HTML", "JS"]],
                ["Qaysi biri rasm fayli formati?"],
                ["Что из перечисленного является форматом изображения?"]
            ),

            q(0,
                ["Which symbol is commonly used for a comment in JavaScript?", ["//", "##", "<!--", "**"]],
                ["JavaScriptda izoh yozish uchun odatda qaysi belgi ishlatiladi?"],
                ["Какой символ обычно используется для комментария в JavaScript?"]
            ),

            q(0,
                ["What is Git mainly used for?", ["Version control", "Video editing", "Graphic design", "Internet browsing"]],
                ["Git asosan nima uchun ishlatiladi?", ["Versiyalarni boshqarish", "Video tahrirlash", "Grafik dizayn", "Internetda ko'rish"]],
                ["Для чего в основном используется Git?", ["Контроль версий", "Редактирование видео", "Графический дизайн", "Просмотр интернета"]]
            ),

            q(0,
                ["What is GitHub?", ["A code hosting and collaboration platform", "An operating system", "A programming language", "A computer processor"]],
                ["GitHub nima?", ["Kod joylashtirish va hamkorlik platformasi", "Operatsion tizim", "Dasturlash tili", "Kompyuter protsessori"]],
                ["Что такое GitHub?", ["Платформа для хранения кода и совместной работы", "Операционная система", "Язык программирования", "Компьютерный процессор"]]
            ),

            q(0,
                ["Which company developed Android?", ["Google", "Microsoft", "Intel", "IBM"]],
                ["Androidni qaysi kompaniya ishlab chiqqan?"],
                ["Какая компания разработала Android?"]
            ),

            q(0,
                ["What does AI stand for?", ["Artificial Intelligence", "Automatic Internet", "Advanced Interface", "Application Integration"]],
                ["AI nimani anglatadi?", ["Sun'iy intellekt", "Avtomatik internet", "Ilg'or interfeys", "Ilovalarni integratsiya qilish"]],
                ["Что означает AI?", ["Искусственный интеллект", "Автоматический интернет", "Расширенный интерфейс", "Интеграция приложений"]]
            ),

            q(1,
                ["Which device is used to store files permanently?", ["RAM", "SSD", "CPU", "Monitor"]],
                ["Fayllarni doimiy saqlash uchun qaysi qurilma ishlatiladi?"],
                ["Какое устройство используется для постоянного хранения файлов?", [null, null, null, "Монитор"]]
            ),

            q(0,
                ["What does SSD stand for?", ["Solid State Drive", "System Storage Device", "Software System Disk", "Secure Storage Data"]],
                ["SSD nimani anglatadi?"],
                ["Что означает SSD?"]
            ),

            q(0,
                ["Which one is a search engine?", ["Google", "Windows", "Python", "Ubuntu"]],
                ["Qaysi biri qidiruv tizimi?"],
                ["Что из перечисленного является поисковой системой?"]
            ),

            q(0,
                ["Which operating system is open source?", ["Linux", "Windows", "iOS", "macOS"]],
                ["Qaysi operatsion tizim ochiq kodli?"],
                ["Какая операционная система имеет открытый исходный код?"]
            ),

            q(0,
                ["What is a file extension?", ["The part of a filename that identifies its type", "A computer cable", "A processor", "A website"]],
                ["Fayl kengaytmasi nima?", ["Fayl turini bildiruvchi fayl nomining qismi", "Kompyuter kabeli", "Protsessor", "Veb-sayt"]],
                ["Что такое расширение файла?", ["Часть имени файла, определяющая его тип", "Компьютерный кабель", "Процессор", "Веб-сайт"]]
            ),

            q(2,
                ["Which extension is commonly used for JavaScript files?", [".css", ".html", ".js", ".py"]],
                ["JavaScript fayllari uchun odatda qaysi kengaytma ishlatiladi?"],
                ["Какое расширение обычно используется для файлов JavaScript?"]
            ),

            q(1,
                ["Which extension is commonly used for Python files?", [".python", ".py", ".pt", ".pyt"]],
                ["Python fayllari uchun odatda qaysi kengaytma ishlatiladi?"],
                ["Какое расширение обычно используется для файлов Python?"]
            ),

            q(0,
                ["What is an algorithm?", ["A step-by-step procedure for solving a problem", "A computer screen", "A type of keyboard", "A programming company"]],
                ["Algoritm nima?", ["Muammoni hal qilish uchun bosqichma-bosqich bajariladigan tartib", "Kompyuter ekrani", "Klaviatura turi", "Dasturlash kompaniyasi"]],
                ["Что такое алгоритм?", ["Пошаговая процедура решения проблемы", "Экран компьютера", "Тип клавиатуры", "Компания по программированию"]]
            ),

            q(0,
                ["What does USB stand for?", ["Universal Serial Bus", "United System Board", "Universal Software Base", "User Serial Backup"]],
                ["USB nimani anglatadi?"],
                ["Что означает USB?"]
            ),

            q(0,
                ["Which component is often called the brain of the computer?", ["CPU", "SSD", "Keyboard", "Monitor"]],
                ["Qaysi qurilma ko'pincha kompyuterning miyasi deb ataladi?", [null, null, "Klaviatura", "Monitor"]],
                ["Какой компонент часто называют мозгом компьютера?", [null, null, "Клавиатура", "Монитор"]]
            ),

            q(0,
                ["What is cloud computing?", ["Using remote servers over the internet", "Using only a local keyboard", "Repairing computer hardware", "Installing Windows"]],
                ["Cloud computing nima?", ["Internet orqali masofaviy serverlardan foydalanish", "Faqat mahalliy klaviaturadan foydalanish", "Kompyuter qurilmalarini ta'mirlash", "Windows o'rnatish"]],
                ["Что такое облачные вычисления?", ["Использование удалённых серверов через интернет", "Использование только локальной клавиатуры", "Ремонт компьютерного оборудования", "Установка Windows"]]
            ),

            q(0,
                ["Which of these is a popular cloud storage service?", ["Google Drive", "Python", "CPU", "HTML"]],
                ["Quyidagilardan qaysi biri mashhur bulutli saqlash xizmati?"],
                ["Что из перечисленного является популярным облачным хранилищем?"]
            ),

            q(0,
                ["What is a password mainly used for?", ["Authentication and account protection", "Increasing screen brightness", "Cooling the CPU", "Creating websites"]],
                ["Parol asosan nima uchun ishlatiladi?", ["Autentifikatsiya va akkauntni himoya qilish", "Ekran yorqinligini oshirish", "CPUni sovitish", "Veb-saytlar yaratish"]],
                ["Для чего в основном используется пароль?", ["Аутентификация и защита аккаунта", "Увеличение яркости экрана", "Охлаждение CPU", "Создание веб-сайтов"]]
            ),

            q(0,
                ["What is phishing?", ["A cyberattack designed to trick users into revealing information", "A programming language", "A computer game", "A type of monitor"]],
                ["Phishing nima?", ["Foydalanuvchilarni ma'lumotlarini oshkor qilishga aldashga qaratilgan kiberhujum", "Dasturlash tili", "Kompyuter o'yini", "Monitor turi"]],
                ["Что такое фишинг?", ["Кибератака, направленная на обман пользователей для получения информации", "Язык программирования", "Компьютерная игра", "Тип монитора"]]
            ),

            q(0,
                ["What does Wi-Fi allow devices to do?", ["Connect wirelessly to a network", "Increase RAM", "Replace the CPU", "Print without electricity"]],
                ["Wi-Fi qurilmalarga nima qilish imkonini beradi?", ["Tarmoqqa simsiz ulanish", "RAMni oshirish", "CPUni almashtirish", "Elektrsiz chop etish"]],
                ["Что позволяет устройствам делать Wi-Fi?", ["Беспроводным способом подключаться к сети", "Увеличивать RAM", "Заменять CPU", "Печатать без электричества"]]
            ),

            q(0,
                ["What is a database?", ["An organized collection of data", "A computer mouse", "A programming keyboard", "A monitor"]],
                ["Ma'lumotlar bazasi nima?", ["Tartiblangan ma'lumotlar to'plami", "Kompyuter sichqonchasi", "Dasturlash klaviaturasi", "Monitor"]],
                ["Что такое база данных?", ["Организованная коллекция данных", "Компьютерная мышь", "Клавиатура для программирования", "Монитор"]]
            ),

            q(0,
                ["Which language is often used for styling websites?", ["CSS", "Python", "SQL", "C#"]],
                ["Veb-saytlarni bezash uchun ko'pincha qaysi til ishlatiladi?"],
                ["Какой язык часто используется для стилизации веб-сайтов?"]
            ),

            q(0,
                ["What is debugging?", ["Finding and fixing errors in a program", "Installing a monitor", "Deleting the internet", "Designing a keyboard"]],
                ["Debugging nima?", ["Dasturdagi xatolarni topish va tuzatish", "Monitor o'rnatish", "Internetni o'chirish", "Klaviatura dizaynini yaratish"]],
                ["Что такое отладка (debugging)?", ["Поиск и исправление ошибок в программе", "Установка монитора", "Удаление интернета", "Проектирование клавиатуры"]]
            ),

            q(0,
                ["What is an IP address?", ["An address used to identify a device on a network", "A programming language", "A type of CPU", "A file extension"]],
                ["IP manzil nima?", ["Tarmoqdagi qurilmani aniqlash uchun ishlatiladigan manzil", "Dasturlash tili", "CPU turi", "Fayl kengaytmasi"]],
                ["Что такое IP-адрес?", ["Адрес, используемый для идентификации устройства в сети", "Язык программирования", "Тип CPU", "Расширение файла"]]
            ),

            q(0,
                ["What is cybersecurity?", ["Protecting systems, networks and data from digital threats", "Designing computer games", "Creating websites only", "Installing printers"]],
                ["Kiberxavfsizlik nima?", ["Tizimlar, tarmoqlar va ma'lumotlarni raqamli tahdidlardan himoya qilish", "Kompyuter o'yinlarini loyihalash", "Faqat veb-saytlar yaratish", "Printerlarni o'rnatish"]],
                ["Что такое кибербезопасность?", ["Защита систем, сетей и данных от цифровых угроз", "Создание компьютерных игр", "Создание только веб-сайтов", "Установка принтеров"]]
            ),

            /* ---------- Qo'shimcha savollar (41–80) ---------- */

            q(0,
                ["What does GPU stand for?", ["Graphics Processing Unit", "General Program Unit", "Graphical Power Utility", "Global Processing User"]],
                ["GPU nimani anglatadi?"],
                ["Что означает GPU?"]
            ),

            q(0,
                ["What does ROM stand for?", ["Read-Only Memory", "Random Output Module", "Rapid Operating Memory", "Remote Offline Machine"]],
                ["ROM nimani anglatadi?"],
                ["Что означает ROM?"]
            ),

            q(0,
                ["Which of these is an input device?", ["Scanner", "Monitor", "Speaker", "Projector"]],
                ["Quyidagilardan qaysi biri kiritish qurilmasi?", ["Skaner", "Monitor", "Karnay", "Proyektor"]],
                ["Что из перечисленного является устройством ввода?", ["Сканер", "Монитор", "Динамик", "Проектор"]]
            ),

            q(0,
                ["Which of these is an output device?", ["Printer", "Keyboard", "Mouse", "Scanner"]],
                ["Quyidagilardan qaysi biri chiqarish qurilmasi?", ["Printer", "Klaviatura", "Sichqoncha", "Skaner"]],
                ["Что из перечисленного является устройством вывода?", ["Принтер", "Клавиатура", "Мышь", "Сканер"]]
            ),

            q(0,
                ["What is the smallest unit of data in a computer?", ["Bit", "Byte", "Kilobyte", "Megabyte"]],
                ["Kompyuterdagi ma'lumotning eng kichik birligi qaysi?", ["Bit", "Bayt", "Kilobayt", "Megabayt"]],
                ["Какая наименьшая единица данных в компьютере?", ["Бит", "Байт", "Килобайт", "Мегабайт"]]
            ),

            q(0,
                ["How many bits are in one byte?", ["8", "4", "16", "10"]],
                ["Bir baytda nechta bit bor?"],
                ["Сколько бит в одном байте?"]
            ),

            q(0,
                ["What does LAN stand for?", ["Local Area Network", "Large Access Node", "Linked Application Network", "Long Area Navigation"]],
                ["LAN nimani anglatadi?"],
                ["Что означает LAN?"]
            ),

            q(0,
                ["What is the main purpose of a router?", ["Connect devices to a network and direct traffic", "Store files permanently", "Display images", "Cool the CPU"]],
                ["Router (marshrutizator)ning asosiy vazifasi nima?", ["Qurilmalarni tarmoqqa ulash va trafikni yo'naltirish", "Fayllarni doimiy saqlash", "Rasmlarni ko'rsatish", "CPUni sovitish"]],
                ["Каково основное назначение маршрутизатора?", ["Подключение устройств к сети и маршрутизация трафика", "Постоянное хранение файлов", "Отображение изображений", "Охлаждение CPU"]]
            ),

            q(0,
                ["What does HTTPS add compared to HTTP?", ["Encrypted, secure communication", "Faster graphics", "More storage", "Voice calls"]],
                ["HTTPS HTTPga nisbatan nimani qo'shadi?", ["Shifrlangan, xavfsiz aloqa", "Tezroq grafika", "Ko'proq xotira", "Ovozli qo'ng'iroqlar"]],
                ["Что добавляет HTTPS по сравнению с HTTP?", ["Зашифрованное, безопасное соединение", "Более быструю графику", "Больше памяти", "Голосовые звонки"]]
            ),

            q(0,
                ["What is an email attachment?", ["A file sent together with an email message", "A type of virus only", "A computer cable", "A web browser"]],
                ["Email attachment (biriktirilgan fayl) nima?", ["Elektron xatga biriktirilgan fayl", "Faqat virus turi", "Kompyuter kabeli", "Veb-brauzer"]],
                ["Что такое вложение в электронном письме?", ["Файл, отправляемый вместе с электронным письмом", "Только вид вируса", "Компьютерный кабель", "Веб-браузер"]]
            ),

            q(0,
                ["Which of these is a web browser?", ["Firefox", "Excel", "Photoshop", "Linux"]],
                ["Qaysi biri veb-brauzer?"],
                ["Что из перечисленного является веб-браузером?"]
            ),

            q(0,
                ["Which key combination is commonly used to copy selected text on Windows?", ["Ctrl + C", "Ctrl + V", "Ctrl + X", "Ctrl + Z"]],
                ["Windowsda tanlangan matnni nusxalash uchun odatda qaysi tugmalar birikmasi ishlatiladi?"],
                ["Какое сочетание клавиш обычно используется для копирования выделенного текста в Windows?"]
            ),

            q(0,
                ["Which key combination is commonly used to undo an action?", ["Ctrl + Z", "Ctrl + C", "Ctrl + P", "Ctrl + S"]],
                ["Amalni bekor qilish (undo) uchun odatda qaysi tugmalar birikmasi ishlatiladi?"],
                ["Какое сочетание клавиш обычно используется для отмены действия?"]
            ),

            q(0,
                ["What does the \"Ctrl + S\" shortcut usually do?", ["Saves the file", "Prints the page", "Closes the window", "Opens a new tab"]],
                ["\"Ctrl + S\" tugmalar birikmasi odatda nima qiladi?", ["Faylni saqlaydi", "Sahifani chop etadi", "Oynani yopadi", "Yangi yorliq ochadi"]],
                ["Что обычно делает сочетание клавиш \"Ctrl + S\"?", ["Сохраняет файл", "Печатает страницу", "Закрывает окно", "Открывает новую вкладку"]]
            ),

            q(0,
                ["Which of these is a spreadsheet program?", ["Microsoft Excel", "Microsoft Word", "PowerPoint", "Notepad"]],
                ["Qaysi biri elektron jadval dasturi?"],
                ["Что из перечисленного является программой для работы с электронными таблицами?"]
            ),

            q(0,
                ["Which program is mainly used to create presentations?", ["PowerPoint", "Excel", "Paint", "Calculator"]],
                ["Taqdimotlar yaratish uchun asosan qaysi dastur ishlatiladi?", [null, null, null, "Kalkulyator"]],
                ["Какая программа в основном используется для создания презентаций?", [null, null, null, "Калькулятор"]]
            ),

            q(0,
                ["What is a folder used for?", ["Organizing files", "Increasing RAM", "Connecting to Wi-Fi", "Cooling the computer"]],
                ["Papka (folder) nima uchun ishlatiladi?", ["Fayllarni tartibga solish", "RAMni oshirish", "Wi-Fi ga ulanish", "Kompyuterni sovitish"]],
                ["Для чего используется папка?", ["Упорядочивание файлов", "Увеличение RAM", "Подключение к Wi-Fi", "Охлаждение компьютера"]]
            ),

            q(0,
                ["What is a variable in programming?", ["A named place for storing data", "A type of monitor", "A keyboard key", "A network cable"]],
                ["Dasturlashda o'zgaruvchi nima?", ["Ma'lumotni saqlash uchun nomlangan joy", "Monitor turi", "Klaviatura tugmasi", "Tarmoq kabeli"]],
                ["Что такое переменная в программировании?", ["Именованное место для хранения данных", "Тип монитора", "Клавиша клавиатуры", "Сетевой кабель"]]
            ),

            q(0,
                ["What is a loop in programming?", ["Code that repeats actions", "A type of error message", "A file format", "A network address"]],
                ["Dasturlashda sikl (loop) nima?", ["Amallarni takrorlaydigan kod", "Xato xabari turi", "Fayl formati", "Tarmoq manzili"]],
                ["Что такое цикл (loop) в программировании?", ["Код, повторяющий действия", "Тип сообщения об ошибке", "Формат файла", "Сетевой адрес"]]
            ),

            q(0,
                ["What does an \"if\" statement do?", ["Runs code only when a condition is true", "Deletes a file", "Connects to the internet", "Draws a picture"]],
                ["Dasturlashda \"if\" operatori nima qiladi?", ["Kodni faqat shart rost bo'lganda bajaradi", "Faylni o'chiradi", "Internetga ulaydi", "Rasm chizadi"]],
                ["Что делает оператор \"if\"?", ["Выполняет код только если условие истинно", "Удаляет файл", "Подключает к интернету", "Рисует картинку"]]
            ),

            q(0,
                ["Which of these is a Boolean value?", ["true", "hello", "42", "#fff"]],
                ["Quyidagilardan qaysi biri mantiqiy (Boolean) qiymat?"],
                ["Что из перечисленного является логическим (Boolean) значением?"]
            ),

            q(0,
                ["Which HTML tag creates a hyperlink?", ["<a>", "<p>", "<img>", "<h1>"]],
                ["Qaysi HTML teg havola (link) yaratadi?"],
                ["Какой HTML-тег создаёт гиперссылку?"]
            ),

            q(0,
                ["Which HTML tag is used for the largest heading?", ["<h1>", "<h6>", "<head>", "<title>"]],
                ["Eng katta sarlavha uchun qaysi HTML teg ishlatiladi?"],
                ["Какой HTML-тег используется для самого крупного заголовка?"]
            ),

            q(0,
                ["Which HTML tag is used to insert an image?", ["<img>", "<a>", "<p>", "<div>"]],
                ["Rasm qo'yish uchun qaysi HTML teg ishlatiladi?"],
                ["Какой HTML-тег используется для вставки изображения?"]
            ),

            q(0,
                ["What does the CSS property \"color\" change?", ["Text color", "Page width", "Font file", "Image format"]],
                ["CSS \"color\" xususiyati nimani o'zgartiradi?", ["Matn rangini", "Sahifa kengligini", "Shrift faylini", "Rasm formatini"]],
                ["Что изменяет CSS-свойство \"color\"?", ["Цвет текста", "Ширину страницы", "Файл шрифта", "Формат изображения"]]
            ),

            q(0,
                ["Which language runs natively in web browsers?", ["JavaScript", "COBOL", "Fortran", "Assembly"]],
                ["Qaysi til veb-brauzerlarda to'g'ridan-to'g'ri ishlaydi?"],
                ["Какой язык работает непосредственно в веб-браузерах?"]
            ),

            q(0,
                ["What is Linux?", ["An open-source operating system kernel", "A web browser", "A programming language", "A search engine"]],
                ["Linux nima?", ["Ochiq kodli operatsion tizim yadrosi", "Veb-brauzer", "Dasturlash tili", "Qidiruv tizimi"]],
                ["Что такое Linux?", ["Ядро операционной системы с открытым исходным кодом", "Веб-браузер", "Язык программирования", "Поисковая система"]]
            ),

            q(0,
                ["What is a bug in software?", ["A flaw or error in a program", "A computer virus only", "A hardware part", "A type of cable"]],
                ["Dasturiy ta'minotda bug nima?", ["Dasturdagi xato yoki kamchilik", "Faqat kompyuter virusi", "Qurilma qismi", "Kabel turi"]],
                ["Что такое баг в программном обеспечении?", ["Ошибка или недостаток в программе", "Только компьютерный вирус", "Часть оборудования", "Тип кабеля"]]
            ),

            q(0,
                ["What is malware?", ["Software designed to harm or exploit a system", "A free text editor", "A type of keyboard", "A cloud service"]],
                ["Malware nima?", ["Tizimga zarar yetkazish yoki undan foydalanish uchun yaratilgan dastur", "Bepul matn muharriri", "Klaviatura turi", "Bulutli xizmat"]],
                ["Что такое вредоносное ПО (malware)?", ["Программа, созданная для причинения вреда системе или её эксплуатации", "Бесплатный текстовый редактор", "Тип клавиатуры", "Облачный сервис"]]
            ),

            q(0,
                ["What is an antivirus program used for?", ["Detecting and removing malicious software", "Editing videos", "Increasing internet speed", "Designing websites"]],
                ["Antivirus dasturi nima uchun ishlatiladi?", ["Zararli dasturlarni aniqlash va o'chirish", "Videolarni tahrirlash", "Internet tezligini oshirish", "Veb-saytlar loyihalash"]],
                ["Для чего используется антивирусная программа?", ["Обнаружение и удаление вредоносных программ", "Редактирование видео", "Увеличение скорости интернета", "Проектирование веб-сайтов"]]
            ),

            q(0,
                ["Which of these is the strongest password?", ["T7#kP9!vQ2$m", "password", "12345678", "qwerty"]],
                ["Quyidagilardan qaysi biri eng kuchli parol?"],
                ["Какой из перечисленных паролей самый надёжный?"]
            ),

            q(0,
                ["What is two-factor authentication (2FA)?", ["Using two different methods to verify your identity", "Using two monitors", "Typing a password twice", "Connecting two computers"]],
                ["Ikki bosqichli autentifikatsiya (2FA) nima?", ["Shaxsni tasdiqlashning ikki xil usulidan foydalanish", "Ikkita monitordan foydalanish", "Parolni ikki marta yozish", "Ikkita kompyuterni ulash"]],
                ["Что такое двухфакторная аутентификация (2FA)?", ["Использование двух разных способов подтверждения личности", "Использование двух мониторов", "Двукратный ввод пароля", "Подключение двух компьютеров"]]
            ),

            q(0,
                ["What does \"backup\" mean?", ["Making a copy of data to protect it", "Deleting old files", "Restarting the computer", "Updating the browser"]],
                ["Zaxira nusxa (backup) nimani anglatadi?", ["Ma'lumotlarni himoya qilish uchun nusxasini saqlash", "Eski fayllarni o'chirish", "Kompyuterni qayta ishga tushirish", "Brauzerni yangilash"]],
                ["Что означает «резервная копия» (backup)?", ["Создание копии данных для их защиты", "Удаление старых файлов", "Перезагрузка компьютера", "Обновление браузера"]]
            ),

            q(0,
                ["What is a domain name?", ["A human-readable website address like example.com", "A type of CPU", "A computer virus", "A file extension"]],
                ["Domen nomi nima?", ["Odam o'qiy oladigan veb-sayt manzili, masalan example.com", "CPU turi", "Kompyuter virusi", "Fayl kengaytmasi"]],
                ["Что такое доменное имя?", ["Понятный человеку адрес сайта, например example.com", "Тип CPU", "Компьютерный вирус", "Расширение файла"]]
            ),

            q(0,
                ["What does \"download\" mean?", ["Copying a file from the internet to your device", "Sending a file to the internet", "Deleting a file", "Printing a file"]],
                ["\"Download\" nimani anglatadi?", ["Internetdan faylni qurilmaga ko'chirib olish", "Faylni internetga yuborish", "Faylni o'chirish", "Faylni chop etish"]],
                ["Что означает «скачивание» (download)?", ["Копирование файла из интернета на устройство", "Отправка файла в интернет", "Удаление файла", "Печать файла"]]
            ),

            q(0,
                ["What is a CPU's speed commonly measured in?", ["GHz", "Pixels", "DPI", "Megapixels"]],
                ["CPU tezligi odatda nimada o'lchanadi?", [null, "Piksel", null, "Megapiksel"]],
                ["В чём обычно измеряется скорость процессора?", [null, "Пиксели", null, "Мегапиксели"]]
            ),

            q(0,
                ["Which unit is the largest?", ["Gigabyte", "Megabyte", "Kilobyte", "Byte"]],
                ["Qaysi birlik eng katta?", ["Gigabayt", "Megabayt", "Kilobayt", "Bayt"]],
                ["Какая единица самая большая?", ["Гигабайт", "Мегабайт", "Килобайт", "Байт"]]
            ),

            q(0,
                ["What is the main role of an operating system?", ["Managing hardware and running applications", "Designing logos", "Writing emails", "Only browsing the web"]],
                ["Operatsion tizimning asosiy vazifasi nima?", ["Qurilmalarni boshqarish va dasturlarni ishga tushirish", "Logotip chizish", "Elektron xat yozish", "Faqat veb-saytlarni ko'rish"]],
                ["Какова основная роль операционной системы?", ["Управление оборудованием и запуск приложений", "Создание логотипов", "Написание писем", "Только просмотр веб-страниц"]]
            ),

            q(0,
                ["What is a pixel?", ["The smallest point of a digital image", "A type of keyboard", "A network protocol", "A programming language"]],
                ["Piksel nima?", ["Raqamli rasmning eng kichik nuqtasi", "Klaviatura turi", "Tarmoq protokoli", "Dasturlash tili"]],
                ["Что такое пиксель?", ["Наименьшая точка цифрового изображения", "Тип клавиатуры", "Сетевой протокол", "Язык программирования"]]
            ),

            q(0,
                ["Which of these is a Python data type for text?", ["str", "int", "float", "bool"]],
                ["Quyidagilardan qaysi biri Pythonda matn uchun ma'lumot turi?"],
                ["Какой из этих типов данных Python используется для текста?"]
            )

        ]

    },


    /* =========================
       ENGLISH TEST — 20 QUESTIONS
    ========================= */

    english: {

        titleKey: "englishTest",

        /* Bazada 40 ta savol bor, har urinishda 20 tasi tasodifiy tanlanadi */
        questionsPerTest: 20,

        /* Test vaqti (soniya): 15 daqiqa */
        timeLimit: 15 * 60,

        questions: [

            eq(1, "Choose the correct sentence.", [
                "She go to school every day.",
                "She goes to school every day.",
                "She going to school every day.",
                "She gone to school every day."
            ]),

            eq(1, "What is the opposite of 'easy'?", ["Simple", "Difficult", "Small", "Quick"]),

            eq(0, "I _____ a student.", ["am", "is", "are", "be"]),

            eq(2, "Choose the correct past form of 'go'.", ["Goed", "Gone", "Went", "Going"]),

            eq(1, "She has _____ apple.", ["a", "an", "the", "some"]),

            eq(1, "What is the plural of 'child'?", ["Childs", "Children", "Childes", "Child"]),

            eq(2, "Choose the correct word: I am interested _____ IT.", ["on", "at", "in", "for"]),

            eq(2, "Which word is a synonym of 'happy'?", ["Sad", "Angry", "Glad", "Tired"]),

            eq(1, "They _____ playing football now.", ["is", "are", "am", "be"]),

            eq(1, "I _____ my homework yesterday.", ["do", "did", "does", "doing"]),

            eq(1, "Choose the correct question.", [
                "Where you live?",
                "Where do you live?",
                "Where does you live?",
                "Where are you live?"
            ]),

            eq(0, "What is the opposite of 'expensive'?", ["Cheap", "Large", "Strong", "Fast"]),

            eq(1, "He _____ never been to London.", ["have", "has", "is", "was"]),

            eq(0, "If I have time, I _____ you.", ["will call", "called", "calling", "calls"]),

            eq(1, "Choose the correct comparative form.", ["More fast", "Faster", "Fastest", "Fastly"]),

            eq(1, "We have lived here _____ 2020.", ["for", "since", "during", "at"]),

            eq(1, "What does 'begin' mean?", ["Finish", "Start", "Stop", "Forget"]),

            eq(1, "Choose the correct sentence.", [
                "There is many students.",
                "There are many students.",
                "There be many students.",
                "There am many students."
            ]),

            eq(2, "She can _____ English.", ["speaks", "speaking", "speak", "spoke"]),

            eq(1, "What is the past participle of 'write'?", ["Wrote", "Written", "Writing", "Writes"]),

            /* ---------- Qo'shimcha savollar (21–40) ---------- */

            eq(1, "She _____ to the market yesterday.", ["go", "went", "goes", "going"]),

            eq(1, "How _____ water do you drink every day?", ["many", "much", "few", "a number of"]),

            eq(0, "I have _____ homework to do.", ["a lot of", "many", "a few", "several"]),

            eq(0, "This book is _____ than that one.", ["more interesting", "most interesting", "interestinger", "interesting"]),

            eq(0, "If it rains tomorrow, we _____ at home.", ["will stay", "stayed", "staying", "have stayed"]),

            eq(0, "What is the opposite of 'ancient'?", ["Modern", "Old", "Huge", "Silent"]),

            eq(0, "Which word is a synonym of 'big'?", ["Large", "Tiny", "Thin", "Weak"]),

            eq(0, "He is good _____ mathematics.", ["at", "on", "in", "to"]),

            eq(0, "I'm looking forward _____ you.", ["to seeing", "to see", "for seeing", "at seeing"]),

            eq(0, "The letter _____ by the secretary yesterday.", ["was written", "wrote", "has wrote", "is writing"]),

            eq(0, "What is the plural of 'woman'?", ["Women", "Womans", "Womens", "Woman"]),

            eq(0, "We _____ dinner when the phone rang.", ["were having", "have", "are having", "had had"]),

            eq(0, "There isn't _____ milk in the fridge.", ["any", "some", "many", "a"]),

            eq(0, "Choose the correct sentence.", [
                "He doesn't like coffee.",
                "He don't like coffee.",
                "He not like coffee.",
                "He doesn't likes coffee."
            ]),

            eq(0, "What does 'huge' mean?", ["Very big", "Very small", "Very fast", "Very quiet"]),

            eq(0, "I _____ in this city since 2015.", ["have lived", "lived", "live", "will live"]),

            eq(0, "She is the _____ student in our class.", ["smartest", "more smart", "smarter", "most smart"]),

            eq(0, "Choose the correct article: He is _____ honest man.", ["an", "a", "the", "no article"]),

            eq(0, "My brother _____ football every weekend.", ["plays", "play", "playing", "is play"]),

            eq(0, "What is the past tense of 'buy'?", ["Bought", "Buyed", "Boughten", "Buys"])

        ]

    }

};


/* =====================================================
   STATE
===================================================== */

let currentTest = null;

let currentTestKey = null;

let currentQuestion = 0;

let score = 0;

let selectedAnswer = null;

let certificateName = "";

let certificateReady = false;

let certificateId = "";

let certificateDate = new Date();

let timerId = null;

let timerEnd = 0;

let timeLeft = 0;

let timeSpent = 0;

let lastResultTimeUp = false;

let resultSaved = false;

let reviewOpen = false;

let reviewFilter = "all";

let leaderboardTab = "english";

let leaderboardRequest = 0;

let certificateBlob = null;

let blobTimer = null;

let verifyParams = null;

let verifyState = { status: "loading" };

let toastTimer = null;


/* =====================================================
   HELPERS
===================================================== */

function $(id) {
    return document.getElementById(id);
}

function isVisible(id) {
    return !$(id).classList.contains("hidden");
}

function showOnly(pageId) {

    ["homePage", "testPage", "resultPage", "certificatePage", "verifyPage"].forEach(function (id) {
        $(id).classList.toggle("hidden", id !== pageId);
    });

    window.scrollTo(0, 0);
}

function formatDate(date) {

    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");

    return dd + "/" + mm + "/" + date.getFullYear();
}

/* 2026-10-13 ko'rinishidagi sana (saqlash va tekshirish uchun) */
function toIsoDate(date) {

    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");

    return date.getFullYear() + "-" + mm + "-" + dd;
}

function parseIsoDate(text) {

    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(text));

    return m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])) : null;
}

function showToast(message) {

    const el = $("toast");

    el.textContent = message;

    el.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(function () {
        el.classList.remove("show");
    }, 2600);
}

function readLocal(key, fallback) {

    try {
        const raw = localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
        return fallback;
    }
}

function writeLocal(key, value) {

    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        /* e'tiborsiz */
    }
}


/* =====================================================
   LEVELS (DARAJALAR)
===================================================== */

function getLevel(percent, testKey) {

    if (percent < PASS_PERCENT) {
        return null;
    }

    const medal = LEVELS.medals.find(function (m) { return percent >= m.min; });

    if (!medal) {
        return null;
    }

    let cefr = null;

    if (testKey === "english") {
        const c = LEVELS.cefr.find(function (x) { return percent >= x.min; });
        cefr = c ? c.level : null;
    }

    return { medal: medal, cefr: cefr };
}

/* Masalan: "🥇 Oltin · B2" */
function levelText(level) {

    if (!level) {
        return "—";
    }

    return level.medal.icon + " " + t("level" + level.medal.key) +
        (level.cefr ? " · " + level.cefr : "");
}


/* =====================================================
   LANGUAGE
===================================================== */

function changeLanguage() {

    currentLanguage = $("languageSelect").value;

    try {
        localStorage.setItem("schoolLanguage", currentLanguage);
    } catch (e) {
        /* e'tiborsiz */
    }

    applyLanguage();
}

function applyLanguage() {

    document.documentElement.lang = currentLanguage;

    document.title = t("pageTitle");

    $("languageSelect").value = currentLanguage;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
        el.textContent = t(el.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
        el.placeholder = t(el.dataset.i18nPlaceholder);
    });

    if (currentTest) {
        updateTestTitle();
    }

    /* Joriy savolni yangi tilda qayta chizish (tanlangan javob saqlanadi) */
    if (currentTest && isVisible("testPage")) {
        renderQuestion();
    }

    /* Natija sahifasi ochiq bo'lsa (review ham) yangi tilda chiziladi */
    if (currentTest && isVisible("resultPage")) {
        renderResult();
    }

    /* Sertifikat ochiq bo'lsa, uni ham yangi tilda chizish */
    if (certificateReady && isVisible("certificatePage")) {
        renderCertificate();
    }

    /* Tekshirish sahifasi */
    if (isVisible("verifyPage")) {
        renderVerify();
    }

    /* Reyting jadvali */
    renderLeaderboard();
}


/* =====================================================
   START TEST
===================================================== */

function updateTestTitle() {

    $("testTitle").textContent = t(currentTest.titleKey);
}

function startTest(testName) {

    currentTestKey = testName;

    currentTest = buildSession(testName);

    currentQuestion = 0;

    score = 0;

    selectedAnswer = null;

    certificateReady = false;

    certificateName = "";

    certificateId = "";

    certificateBlob = null;

    lastResultTimeUp = false;

    timeSpent = 0;

    resultSaved = false;

    reviewOpen = false;

    reviewFilter = "all";

    $("studentName").value = "";

    showOnly("testPage");

    updateTestTitle();

    showQuestion();

    startTimer(currentTest.timeLimit);
}

/* Har urinish uchun savollar va javoblar tartibi aralashtiriladi */
function buildSession(testName) {

    const source = tests[testName];

    /* Bazadagi savollar aralashtirilib, kerakli soni olinadi.
       "Qayta urinish" bosilsa, yangi tasodifiy tanlov bo'ladi. */
    const picked = shuffle(source.questions).slice(0, source.questionsPerTest || source.questions.length);

    const questions = picked.map(function (question) {

        const count = question.translations.en.answers.length;

        const order = shuffle(Array.from({ length: count }, function (_, i) { return i; }));

        return {
            translations: question.translations,
            perm: order,
            correct: order.indexOf(question.correct)
        };
    });

    return {
        titleKey: source.titleKey,
        timeLimit: source.timeLimit,
        questions: questions
    };
}

function retryTest() {

    startTest(currentTestKey);
}


/* =====================================================
   TIMER
===================================================== */

function formatTime(seconds) {

    const m = String(Math.floor(seconds / 60)).padStart(2, "0");
    const s = String(seconds % 60).padStart(2, "0");

    return m + ":" + s;
}

function updateTimerDisplay() {

    $("timer").textContent = "⏱ " + formatTime(timeLeft);

    $("timer").classList.toggle("warning", timeLeft <= 60);
}

function startTimer(seconds) {

    stopTimer();

    timerEnd = Date.now() + seconds * 1000;

    timeLeft = seconds;

    updateTimerDisplay();

    timerId = setInterval(function () {

        /* Vaqt soat bo'yicha hisoblanadi (fon rejimida ham to'g'ri ishlaydi) */
        timeLeft = Math.max(0, Math.ceil((timerEnd - Date.now()) / 1000));

        updateTimerDisplay();

        if (timeLeft <= 0) {
            finishTest(true);
        }

    }, 500);
}

function stopTimer() {

    if (timerId !== null) {
        clearInterval(timerId);
        timerId = null;
    }
}


/* =====================================================
   SHOW QUESTION
===================================================== */

function showQuestion() {

    selectedAnswer = null;

    renderQuestion();
}

/* Savolni chizadi. Agar javob allaqachon tanlangan bo'lsa,
   rang va holat saqlanadi (til almashtirilganda ham). */
function renderQuestion() {

    const question = currentTest.questions[currentQuestion];

    const total = currentTest.questions.length;

    const data = getQuestionData(question);

    $("questionText").textContent = data.question;

    $("questionCounter").textContent =
        t("question") + " " + (currentQuestion + 1) + " / " + total;

    $("progressBar").style.width =
        (((currentQuestion + 1) / total) * 100) + "%";

    const container = $("answersContainer");

    container.innerHTML = "";

    data.answers.forEach(function (answer, index) {

        const el = document.createElement("div");

        el.className = "answer";

        el.textContent = answer;

        if (selectedAnswer !== null) {

            el.classList.add("locked");

            if (index === question.correct) {
                el.classList.add("correct");
            } else if (index === selectedAnswer) {
                el.classList.add("wrong");
            }

        } else {

            el.onclick = function () {
                selectAnswer(index);
            };
        }

        container.appendChild(el);
    });

    const isLast = currentQuestion === total - 1;

    $("nextButton").textContent = isLast ? t("finish") : t("next");

    $("nextButton").disabled = selectedAnswer === null;
}


/* =====================================================
   SELECT ANSWER
===================================================== */

function selectAnswer(index) {

    /* Bir marta javob berilgach, qayta tanlab bo'lmaydi */
    if (selectedAnswer !== null) {
        return;
    }

    selectedAnswer = index;

    const question = currentTest.questions[currentQuestion];

    /* Review uchun foydalanuvchi javobini saqlaymiz */
    question.userAnswer = index;

    if (index === question.correct) {
        score++;
    }

    renderQuestion();
}


/* =====================================================
   NEXT QUESTION
===================================================== */

function nextQuestion() {

    if (selectedAnswer === null) {
        return;
    }

    currentQuestion++;

    if (currentQuestion >= currentTest.questions.length) {
        finishTest();
        return;
    }

    showQuestion();
}


/* =====================================================
   FINISH TEST
===================================================== */

function getPercentage() {

    return Math.round((score / currentTest.questions.length) * 100);
}

function isPassed() {

    return getPercentage() >= PASS_PERCENT;
}

function finishTest(timeUp) {

    const limit = currentTest.timeLimit;

    /* Sarflangan vaqt (reytingda teng natijalarni ajratish uchun) */
    timeSpent = timeUp === true
        ? limit
        : Math.max(0, Math.min(limit, Math.round(limit - (timerEnd - Date.now()) / 1000)));

    stopTimer();

    lastResultTimeUp = timeUp === true;

    reviewOpen = false;

    reviewFilter = "all";

    showOnly("resultPage");

    renderResult();
}

function renderResult() {

    const total = currentTest.questions.length;

    const passed = isPassed();

    $("scoreText").textContent = score + " / " + total;

    $("percentageText").textContent = getPercentage() + "%";

    $("passNote").textContent = t("passNote").replace("{pass}", PASS_PERCENT);

    $("resultIcon").textContent = passed ? "🎉" : "😔";

    $("resultTitle").textContent = passed ? t("congratulations") : t("failedTitle");

    const mainMessage = passed
        ? t("completed")
        : t("failedMessage").replace("{pass}", PASS_PERCENT);

    $("resultMessage").textContent =
        (lastResultTimeUp ? t("timeUpMessage") + " " : "") + mainMessage;

    document.querySelector(".result-container").classList.toggle("failed", !passed);

    /* Daraja (faqat o'tganlarga) */
    const level = passed ? getLevel(getPercentage(), currentTestKey) : null;

    $("levelBox").classList.toggle("hidden", !level);

    if (level) {
        $("levelIcon").textContent = level.medal.icon;
        $("levelText").textContent = t("levelLabel") + ": " + t("level" + level.medal.key) +
            (level.cefr ? " · " + level.cefr : "");
        $("levelNote").textContent = level.cefr ? t("levelCefrNote") : "";
    }

    /* O'tgan bo'lsa — sertifikat formasi, o'ta olmasa — qayta urinish */
    $("certificateForm").classList.toggle("hidden", !passed);

    $("retrySection").classList.toggle("hidden", passed);

    /* Xatolarni ko'rib chiqish */
    $("reviewList").classList.toggle("hidden", !reviewOpen);

    $("reviewToggle").textContent = reviewOpen ? t("hideReview") : t("showReview");

    if (reviewOpen) {
        renderReview();
    }
}


/* =====================================================
   REVIEW — XATOLARNI KO'RIB CHIQISH
===================================================== */

function toggleReview() {

    reviewOpen = !reviewOpen;

    $("reviewList").classList.toggle("hidden", !reviewOpen);

    $("reviewToggle").textContent = reviewOpen ? t("hideReview") : t("showReview");

    if (reviewOpen) {
        renderReview();
        $("reviewList").scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function setReviewFilter(filter) {

    reviewFilter = filter;

    renderReview();
}

function renderReview() {

    const list = $("reviewList");

    list.innerHTML = "";

    let right = 0, wrong = 0, skipped = 0;

    const items = [];

    currentTest.questions.forEach(function (question, i) {

        const data = getQuestionData(question);

        const answered = question.userAnswer !== undefined;

        const isRight = answered && question.userAnswer === question.correct;

        if (isRight) { right++; } else if (answered) { wrong++; } else { skipped++; }

        if (reviewFilter === "wrong" && isRight) {
            return;
        }

        const item = document.createElement("div");

        item.className = "review-item " + (isRight ? "right" : "wrong");

        const title = document.createElement("div");
        title.className = "review-question";
        title.textContent = (i + 1) + ". " + data.question;
        item.appendChild(title);

        /* Foydalanuvchi javobi */
        const mine = document.createElement("div");
        mine.className = "review-line " + (isRight ? "ok" : "bad");
        mine.textContent = t("yourAnswer") + ": " +
            (answered ? data.answers[question.userAnswer] : t("notAnswered"));
        item.appendChild(mine);

        /* To'g'ri javob (faqat xato bo'lsa) */
        if (!isRight) {
            const correct = document.createElement("div");
            correct.className = "review-line ok";
            correct.textContent = t("correctAnswer") + ": " + data.answers[question.correct];
            item.appendChild(correct);
        }

        items.push(item);
    });

    /* Umumiy xulosa */
    const summary = document.createElement("div");

    summary.className = "review-summary";

    summary.textContent = wrong + skipped === 0
        ? t("perfectScore")
        : t("reviewSummary")
            .replace("{right}", right)
            .replace("{wrong}", wrong)
            .replace("{skipped}", skipped);

    list.appendChild(summary);

    /* Filtr tugmalari (xato bo'lsagina) */
    if (wrong + skipped > 0) {

        const filters = document.createElement("div");

        filters.className = "review-filters";

        [["all", "reviewAll"], ["wrong", "reviewWrongOnly"]].forEach(function (pair) {

            const btn = document.createElement("button");

            btn.type = "button";

            btn.className = "review-filter" + (reviewFilter === pair[0] ? " active" : "");

            btn.textContent = t(pair[1]);

            btn.onclick = function () { setReviewFilter(pair[0]); };

            filters.appendChild(btn);
        });

        list.appendChild(filters);
    }

    items.forEach(function (item) {
        list.appendChild(item);
    });
}


/* =====================================================
   SERVER / BAZA YORDAMCHILARI
===================================================== */

const LOCAL_LB_KEY = "schoolLeaderboard";

const LOCAL_CERT_KEY = "schoolCertificates";

function dbEnabled() {

    return typeof FIREBASE_DB_URL === "string" && FIREBASE_DB_URL.trim() !== "";
}

function dbUrl(path, query) {

    return FIREBASE_DB_URL.trim().replace(/\/+$/, "") + "/" + path + ".json" +
        (query ? "?" + query : "");
}


/* =====================================================
   CERTIFICATE DATA + NAZORAT KODI
===================================================== */

/* Oddiy nazorat kodi. DIQQAT: bu faqat tasodifiy o'zgartirishlardan
   himoya qiladi. Haqiqiy himoya uchun Firebase (server) ishlatiladi. */
function checksum(text) {

    let h = 2166136261;

    for (let i = 0; i < text.length; i++) {
        h ^= text.charCodeAt(i);
        h = Math.imul(h, 16777619);
    }

    return (h >>> 0).toString(36);
}

function buildPayload(c) {

    return [c.id, c.name, c.test, c.score, c.total, c.date, CERT_SALT].join("|");
}

function getCertificateData() {

    return {
        id: certificateId,
        name: certificateName,
        test: currentTestKey,
        score: score,
        total: currentTest.questions.length,
        date: toIsoDate(certificateDate)
    };
}

/* Tashqaridan kelgan (URL yoki baza) ma'lumotni tekshirib, tozalaydi */
function normalizeCert(id, raw) {

    if (!raw || typeof raw !== "object") {
        return null;
    }

    const test = String(raw.test);

    const sc = Number(raw.score);

    const total = Number(raw.total);

    const date = String(raw.date || "");

    if ((test !== "english" && test !== "it") ||
        !isFinite(sc) || !isFinite(total) || total <= 0 || sc < 0 || sc > total ||
        !parseIsoDate(date)) {
        return null;
    }

    return {
        id: String(id),
        name: String(raw.name || "").slice(0, 60),
        test: test,
        score: sc,
        total: total,
        date: date
    };
}

/* withData = true bo'lsa, ma'lumotlar havolaning o'ziga yoziladi (serversiz rejim) */
function getVerifyUrl(withData) {

    const base = location.href.split("#")[0].split("?")[0];

    const c = getCertificateData();

    let url = base + "?v=" + encodeURIComponent(c.id);

    if (withData) {
        url += "&n=" + encodeURIComponent(c.name) +
            "&t=" + c.test +
            "&s=" + c.score +
            "&o=" + c.total +
            "&d=" + c.date +
            "&h=" + checksum(buildPayload(c));
    }

    return url;
}

function getShareUrl() {

    return getVerifyUrl(!dbEnabled());
}


/* =====================================================
   LEADERBOARD (REYTING)
===================================================== */

function normalizeEntry(raw) {

    if (!raw || typeof raw !== "object") {
        return null;
    }

    const percent = Number(raw.percent);

    const sc = Number(raw.score);

    const total = Number(raw.total);

    if (!isFinite(percent) || !isFinite(sc) || !isFinite(total) || total <= 0) {
        return null;
    }

    return {
        name: String(raw.name || "").slice(0, 60),
        percent: Math.max(0, Math.min(100, percent)),
        score: sc,
        total: total,
        time: Math.max(0, Number(raw.time) || 0),
        date: String(raw.date || ""),
        cid: String(raw.cid || "")
    };
}

/* Yuqori foiz → kam vaqt → oldin topshirgan */
function sortEntries(list) {

    return list.sort(function (a, b) {
        return (b.percent - a.percent) ||
            (a.time - b.time) ||
            a.date.localeCompare(b.date);
    });
}

/* Natijani saqlaydi (sertifikat yaratilganda bir marta chaqiriladi) */
async function saveResult() {

    const c = getCertificateData();

    const entry = {
        name: c.name,
        test: c.test,
        score: c.score,
        total: c.total,
        percent: getPercentage(),
        time: timeSpent,
        date: c.date,
        cid: c.id
    };

    /* 1) Shu qurilmada saqlash (serversiz rejim uchun ham, zaxira sifatida ham) */
    const board = readLocal(LOCAL_LB_KEY, {});

    board[c.test] = sortEntries((board[c.test] || []).concat([entry])).slice(0, 50);

    writeLocal(LOCAL_LB_KEY, board);

    const certs = readLocal(LOCAL_CERT_KEY, {});

    certs[c.id] = { name: c.name, test: c.test, score: c.score, total: c.total, date: c.date };

    writeLocal(LOCAL_CERT_KEY, certs);

    /* 2) Umumiy bazaga yuborish (Firebase) */
    if (!dbEnabled()) {
        return;
    }

    try {

        await fetch(dbUrl("leaderboard/" + c.test), {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(entry)
        });

        await fetch(dbUrl("certificates/" + c.id), {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                name: c.name, test: c.test, score: c.score, total: c.total, date: c.date
            })
        });

    } catch (e) {
        /* Internet bo'lmasa, natija baribir shu qurilmada saqlangan */
    }
}

async function loadLeaderboard(testKey) {

    if (dbEnabled()) {

        const query = "orderBy=" + encodeURIComponent('"percent"') + "&limitToLast=50";

        const res = await fetch(dbUrl("leaderboard/" + testKey, query));

        if (!res.ok) {
            throw new Error("HTTP " + res.status);
        }

        const data = await res.json();

        return sortEntries(
            Object.values(data || {}).map(normalizeEntry).filter(Boolean)
        ).slice(0, LEADERBOARD_SIZE);
    }

    const board = readLocal(LOCAL_LB_KEY, {});

    return sortEntries(
        (board[testKey] || []).map(normalizeEntry).filter(Boolean)
    ).slice(0, LEADERBOARD_SIZE);
}

function showLeaderboard(testKey) {

    leaderboardTab = testKey;

    renderLeaderboard();
}

async function renderLeaderboard() {

    const list = $("leaderboardList");

    const requestId = ++leaderboardRequest;

    $("lbTabEnglish").classList.toggle("active", leaderboardTab === "english");

    $("lbTabIt").classList.toggle("active", leaderboardTab === "it");

    $("leaderboardNote").textContent = dbEnabled() ? "" : t("lbLocalNote");

    list.innerHTML = "";

    const message = function (text) {

        const el = document.createElement("div");

        el.className = "lb-empty";

        el.textContent = text;

        list.appendChild(el);
    };

    message(t("lbLoading"));

    let entries;

    try {
        entries = await loadLeaderboard(leaderboardTab);
    } catch (e) {
        if (requestId === leaderboardRequest) {
            list.innerHTML = "";
            message(t("lbError"));
        }
        return;
    }

    /* Eskirgan so'rovning natijasi ko'rsatilmaydi */
    if (requestId !== leaderboardRequest) {
        return;
    }

    list.innerHTML = "";

    if (entries.length === 0) {
        message(t("lbEmpty"));
        return;
    }

    const medals = ["🥇", "🥈", "🥉"];

    entries.forEach(function (entry, i) {

        const row = document.createElement("div");

        row.className = "lb-row" + (i < 3 ? " top" : "") +
            (certificateId !== "" && entry.cid === certificateId ? " me" : "");

        const rank = document.createElement("div");
        rank.className = "lb-rank";
        rank.textContent = i < 3 ? medals[i] : String(i + 1);

        const name = document.createElement("div");
        name.className = "lb-name";
        name.textContent = entry.name || "—";

        if (row.classList.contains("me")) {
            const you = document.createElement("span");
            you.className = "lb-you";
            you.textContent = t("lbYou");
            name.appendChild(you);
        }

        const level = document.createElement("div");
        level.className = "lb-level";
        level.textContent = levelText(getLevel(Math.round(entry.percent), leaderboardTab));

        const percent = document.createElement("div");
        percent.className = "lb-percent";
        percent.textContent = Math.round(entry.percent) + "%";

        const time = document.createElement("div");
        time.className = "lb-time";
        time.textContent = "⏱ " + formatTime(Math.round(entry.time));

        row.appendChild(rank);
        row.appendChild(name);
        row.appendChild(level);
        row.appendChild(percent);
        row.appendChild(time);

        list.appendChild(row);
    });
}


/* =====================================================
   CERTIFICATE
===================================================== */

function generateCertificate() {

    const name = $("studentName").value.trim();

    if (name === "") {

        alert(t("enterNameAlert"));

        $("studentName").focus();

        return;
    }

    /* O'tish balidan past natijada sertifikat berilmaydi */
    if (!currentTest || !isPassed()) {
        return;
    }

    certificateName = name;

    certificateReady = true;

    if (certificateId === "") {
        certificateId = generateCertificateId();
        certificateDate = new Date();
    }

    /* Natijani reytingga va sertifikatlar bazasiga saqlash (bir marta) */
    if (!resultSaved) {
        resultSaved = true;
        saveResult();
    }

    showOnly("certificatePage");

    renderCertificate();
}

/* Masalan: SHS-2026-482915 */
function generateCertificateId() {

    const number = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");

    return "SHS-" + new Date().getFullYear() + "-" + number;
}

function renderCertificate() {

    const total = currentTest.questions.length;

    const percentage = Math.round((score / total) * 100);

    $("certificateName").textContent = certificateName;

    $("certificateTest").textContent = t(currentTest.titleKey);

    $("certificateScore").textContent = score + " / " + total;

    $("certificatePercentage").textContent = percentage + "%";

    $("certificateLevel").textContent = levelText(getLevel(percentage, currentTestKey));

    $("certificateCongratulations").textContent =
        getCongratulations(percentage);

    $("certificateDate").textContent = formatDate(certificateDate);

    $("certificateNumber").textContent = certificateId;

    renderQR();

    fitCertificate();

    scheduleImagePrepare();
}

function getCongratulations(percentage) {

    if (percentage >= 90) return t("outstanding");

    if (percentage >= 80) return t("excellent");

    if (percentage >= 70) return t("great");

    if (percentage >= 60) return t("wellDone");

    return t("keepLearning");
}

/* Sertifikatni ekran kengligiga moslab kichraytiradi (telefon uchun) */
function fitCertificate() {

    if (!isVisible("certificatePage")) {
        return;
    }

    const stage = $("certificateStage");

    const cert = $("certificate");

    cert.style.transform = "translateX(-50%)";

    const scale = Math.min(1, stage.clientWidth / cert.offsetWidth);

    cert.style.transform = "translateX(-50%) scale(" + scale + ")";

    stage.style.height = (cert.offsetHeight * scale) + "px";
}


/* =====================================================
   QR-KOD
===================================================== */

function renderQR() {

    const box = $("certificateQR");

    const block = $("certificateQrBlock");

    box.innerHTML = "";

    /* Kutubxona yuklanmagan bo'lsa (internet yo'q), QR yashiriladi */
    if (typeof QRCode === "undefined") {
        block.classList.add("hidden");
        return;
    }

    /* Serversiz rejimda ma'lumot havolaning ichida; juda uzun bo'lsa — qisqa havola */
    const urls = dbEnabled()
        ? [getVerifyUrl(false)]
        : [getVerifyUrl(true), getVerifyUrl(false)];

    for (let i = 0; i < urls.length; i++) {

        try {

            new QRCode(box, {
                text: urls[i],
                width: 160,
                height: 160,
                colorDark: "#172033",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.L
            });

            block.classList.remove("hidden");

            return;

        } catch (e) {
            box.innerHTML = "";
        }
    }

    block.classList.add("hidden");
}


/* =====================================================
   SERTIFIKATNI TEKSHIRISH (QR ochiladigan sahifa)
===================================================== */

function checkVerifyLink() {

    let params;

    try {
        params = new URLSearchParams(location.search);
    } catch (e) {
        return;
    }

    const id = params.get("v");

    if (!id) {
        return;
    }

    verifyParams = {
        id: id,
        name: params.get("n") || "",
        test: params.get("t") || "",
        score: params.get("s"),
        total: params.get("o"),
        date: params.get("d") || "",
        hash: params.get("h") || ""
    };

    showOnly("verifyPage");

    runVerify();
}

async function runVerify() {

    const p = verifyParams;

    verifyState = { status: "loading" };

    renderVerify();

    /* Baza kaliti sifatida faqat oddiy belgilar ruxsat etiladi */
    if (!/^[A-Za-z0-9-]{3,40}$/.test(p.id)) {
        verifyState = { status: "notfound" };
        renderVerify();
        return;
    }

    try {

        if (dbEnabled()) {

            const res = await fetch(dbUrl("certificates/" + p.id));

            if (!res.ok) {
                throw new Error("HTTP " + res.status);
            }

            const raw = await res.json();

            const data = raw ? normalizeCert(p.id, raw) : null;

            verifyState = !raw
                ? { status: "notfound" }
                : data ? { status: "valid", data: data } : { status: "invalid" };

        } else if (p.hash) {

            const data = normalizeCert(p.id, {
                name: p.name, test: p.test, score: p.score, total: p.total, date: p.date
            });

            verifyState = data && checksum(buildPayload(data)) === p.hash
                ? { status: "valid", data: data }
                : { status: "invalid" };

        } else {

            const certs = readLocal(LOCAL_CERT_KEY, {});

            const data = certs[p.id] ? normalizeCert(p.id, certs[p.id]) : null;

            verifyState = data ? { status: "valid", data: data } : { status: "notfound" };
        }

    } catch (e) {

        verifyState = { status: "error" };
    }

    renderVerify();
}

function renderVerify() {

    const state = verifyState.status;

    const map = {
        loading:  ["⏳", "verifyLoading", ""],
        valid:    ["✅", "verifyValid", "verifyValidText"],
        invalid:  ["❌", "verifyInvalid", "verifyInvalidText"],
        notfound: ["❌", "verifyNotFound", "verifyNotFoundText"],
        error:    ["⚠️", "verifyError", "verifyErrorText"]
    };

    const m = map[state] || map.error;

    $("verifyIcon").textContent = m[0];

    $("verifyTitle").textContent = t(m[1]);

    $("verifyText").textContent = m[2] ? t(m[2]) : "";

    document.querySelector(".verify-container").classList.toggle(
        "failed", state !== "valid" && state !== "loading"
    );

    const box = $("verifyDetails");

    box.innerHTML = "";

    box.classList.toggle("hidden", state !== "valid");

    if (state !== "valid") {
        return;
    }

    const d = verifyState.data;

    const percent = Math.round((d.score / d.total) * 100);

    const rows = [
        [t("certificateNo"), d.id],
        [t("verifyStudent"), d.name],
        [t("verifyTest"), t(d.test === "it" ? "itTest" : "englishTest")],
        [t("testResult"), d.score + " / " + d.total + " (" + percent + "%)"],
        [t("levelLabel"), levelText(getLevel(percent, d.test))],
        [t("date"), formatDate(parseIsoDate(d.date))]
    ];

    rows.forEach(function (row) {

        const line = document.createElement("div");
        line.className = "verify-row";

        const label = document.createElement("span");
        label.textContent = row[0];

        const value = document.createElement("strong");
        value.textContent = row[1];

        line.appendChild(label);
        line.appendChild(value);
        box.appendChild(line);
    });
}


/* =====================================================
   PNG YUKLASH VA ULASHISH
===================================================== */

/* Sertifikatni rasmga aylantiradi (ekrandagi kichraytirishdan mustaqil) */
function captureCertificate() {

    if (typeof html2canvas === "undefined") {
        return Promise.reject(new Error("html2canvas yo'q"));
    }

    return html2canvas($("certificate"), {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
        windowWidth: 1400,
        onclone: function (doc) {

            const stage = doc.getElementById("certificateStage");
            const cert = doc.getElementById("certificate");

            stage.style.height = cert.offsetHeight + "px";
            stage.style.overflow = "visible";

            cert.style.transform = "none";
            cert.style.left = "0";
        }
    }).then(function (canvas) {

        return new Promise(function (resolve, reject) {
            canvas.toBlob(function (blob) {
                blob ? resolve(blob) : reject(new Error("blob"));
            }, "image/png");
        });
    });
}

/* Ulashish tugmasi bosilganda rasm tayyor turishi uchun oldindan tayyorlab qo'yamiz */
function scheduleImagePrepare() {

    certificateBlob = null;

    clearTimeout(blobTimer);

    blobTimer = setTimeout(function () {

        captureCertificate()
            .then(function (blob) { certificateBlob = blob; })
            .catch(function () { /* e'tiborsiz */ });

    }, 900);
}

function certificateFileName() {

    return "Shahriyors-School-" + certificateId + ".png";
}

async function downloadCertificate() {

    try {

        let blob = certificateBlob;

        if (!blob) {
            showToast(t("preparingImage"));
            blob = await captureCertificate();
        }

        const url = URL.createObjectURL(blob);

        const a = document.createElement("a");

        a.href = url;

        a.download = certificateFileName();

        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);

        setTimeout(function () { URL.revokeObjectURL(url); }, 4000);

    } catch (e) {

        showToast(t("imageFailed"));
    }
}

function shareMessage() {

    return t("shareText")
        .replace("{test}", t(currentTest.titleKey))
        .replace("{percent}", getPercentage());
}

async function shareCertificate() {

    const url = getShareUrl();

    const text = shareMessage();

    if (navigator.share) {

        try {

            /* Rasm tayyor bo'lsa — rasmni ulashamiz */
            if (certificateBlob && navigator.canShare) {

                const file = new File([certificateBlob], certificateFileName(), { type: "image/png" });

                if (navigator.canShare({ files: [file] })) {

                    await navigator.share({ files: [file], title: "Shahriyor's School", text: text + "\n" + url });

                    return;
                }
            }

            await navigator.share({ title: "Shahriyor's School", text: text, url: url });

            return;

        } catch (e) {

            /* Foydalanuvchi o'zi bekor qilgan bo'lsa, boshqa narsa qilinmaydi */
            if (e && e.name === "AbortError") {
                return;
            }
        }
    }

    /* Brauzer ulashishni qo'llamasa — Telegram orqali */
    shareTelegram();
}

function shareTelegram() {

    const link = "https://t.me/share/url?url=" + encodeURIComponent(getShareUrl()) +
        "&text=" + encodeURIComponent(shareMessage());

    window.open(link, "_blank", "noopener");
}

function copyText(text) {

    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    }

    return new Promise(function (resolve, reject) {

        const area = document.createElement("textarea");

        area.value = text;

        area.style.position = "fixed";

        area.style.opacity = "0";

        document.body.appendChild(area);

        area.select();

        try {
            document.execCommand("copy") ? resolve() : reject(new Error("copy"));
        } catch (e) {
            reject(e);
        }

        document.body.removeChild(area);
    });
}

function copyCertificateLink() {

    const url = getShareUrl();

    copyText(url)
        .then(function () { showToast(t("linkCopied")); })
        .catch(function () { window.prompt("Link:", url); });
}


/* =====================================================
   PRINT
===================================================== */

function printCertificate() {

    window.print();
}

window.addEventListener("beforeprint", function () {

    const cert = $("certificate");

    cert.style.transform = "";

    $("certificateStage").style.height = "";
});

window.addEventListener("afterprint", fitCertificate);

window.addEventListener("resize", fitCertificate);


/* =====================================================
   NAVIGATION
===================================================== */

/* Test paytida "Orqaga" bosilsa tasdiq so'raladi */
function goBack() {

    if (isVisible("testPage") && !confirm(t("leaveConfirm"))) {
        return;
    }

    goHome();
}

function goHome() {

    stopTimer();

    currentTest = null;

    currentTestKey = null;

    certificateReady = false;

    reviewOpen = false;

    certificateBlob = null;

    clearTimeout(blobTimer);

    /* Tekshirish havolasidan kelgan bo'lsa, manzildagi parametrlarni tozalaymiz */
    if (location.search) {
        try {
            history.replaceState(null, "", location.pathname);
        } catch (e) {
            /* e'tiborsiz */
        }
    }

    verifyParams = null;

    showOnly("homePage");

    renderLeaderboard();
}


/* =====================================================
   INIT
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    applyLanguage();

    $("studentName").addEventListener("keydown", function (event) {

        if (event.key === "Enter") {
            generateCertificate();
        }
    });

    /* QR orqali ochilgan bo'lsa, tekshirish sahifasi ko'rsatiladi */
    checkVerifyLink();
});