const translations = {
    // English translations
    en: {
        pageTitle: "Apex Ski - Bariloche",
        lessonsTitle: "Ski & Snowboard Experiences",
        fullDayTitle: "Full day",
        fullDayText: "Make the most of your ski day. You'll have an instructor accompanying you from when you put your boots on until you take them off.",
        miniDayTitle: "Mini Day",
        miniDayText: "Make the most of your time until lunchtime, class until 2 PM.",
        halfDayTitle: "Half Day",
        halfDayText: "Instructor available until 12:30 PM or starting from 1:00 PM.",
        whyChooseTitle: "Why Choose Apex?",
        whyChooseText: "We are happy to offer you an exclusive and high-quality service to help you create an unforgettable experience, thanks to our internationally experienced instructors.",
        readyToSkiTitle: "Ready to ski with us?",
        contactButton: "Contact us on WhatsApp",
        policiesLink: "Reservation & Cancellation Policies",
    },
    // Spanish translations
    es: {
        pageTitle: "Apex Ski - Bariloche",
        lessonsTitle: "Experiencias de Esquí y Snowboard",
        fullDayTitle: "Día Completo",
        fullDayText: "Aprovecha al máximo tu día de esquí. Tendrás un instructor acompañándote desde que te pones las botas hasta que te las quitas.",
        miniDayTitle: "Mini Día",
        miniDayText: "Aprovecha al máximo tu tiempo hasta la hora de comer, clase hasta las 14:00.",
        halfDayTitle: "Medio Día",
        halfDayText: "Instructor disponible hasta las 12:30 o a partir de las 13:00.",
        whyChooseTitle: "¿Por qué elegir Apex?",
        whyChooseText: "Estamos felices de ofrecerte un servicio exclusivo y de alta calidad para ayudarte a crear una experiencia inolvidable, gracias a nuestros instructores con experiencia internacional.",
        readyToSkiTitle: "¿Listo para esquiar con nosotros?",
        contactButton: "Contáctanos por WhatsApp",
        policiesLink: "Políticas de Reserva y Cancelación",
    },
    // Portuguese (Brazilian) translations
    pt: {
        pageTitle: "Apex Ski - Bariloche",
        lessonsTitle: "Experiências de Ski e Snowboard",
        fullDayTitle: "Dia Inteiro",
        fullDayText: "Aproveite ao máximo o seu dia de esqui. Você terá um instrutor te acompanhando desde o momento em que calça as botas até tirá-las.",
        miniDayTitle: "Mini Dia",
        miniDayText: "Aproveite ao máximo o seu tempo até a hora do almoço, aula até as 14h.",
        halfDayTitle: "Meio Dia",
        halfDayText: "Instrutor disponível até as 12:30 ou a partir das 13:00.",
        whyChooseTitle: "Por que escolher a Apex?",
        whyChooseText: "Temos o prazer de oferecer um serviço exclusivo e de alta qualidade para ajudá-lo a criar uma experiência inesquecível, graças aos nossos instrutores com experiência internacional.",
        readyToSkiTitle: "Pronto para esquiar conosco?",
        contactButton: "Fale conosco pelo WhatsApp",
        policiesLink: "Políticas de Reserva e Cancelamento",
    },
};

// 2. Function to set the language
const setLanguage = (lang) => {
    // Find all elements with the 'data-key' attribute
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        // Check if a translation exists for the current language and key
        if (translations[lang] && translations[lang][key]) {
            // If it's the page title, update it
            if (element.tagName === 'TITLE') {
                element.textContent = translations[lang][key];
            } else {
                // Otherwise, update the content of the element
                element.innerHTML = translations[lang][key];
            }
        }
    });

    // Update the lang attribute of the <html> tag for accessibility
    document.documentElement.lang = lang;

    // Save the user's language preference in the browser
    localStorage.setItem('language', lang);

    // Update active class on language switcher
    document.querySelectorAll('.lang-switcher a').forEach(a => {
        a.classList.remove('active');
        if (a.id === `lang-${lang}`) {
            a.classList.add('active');
        }
    });
};

// 3. Function to determine the initial language
const getInitialLanguage = () => {
    // Check for a language preference in local storage
    const savedLang = localStorage.getItem('language');
    if (savedLang && translations[savedLang]) {
        return savedLang;
    }
    // Otherwise, use the browser's language (e.g., 'en-US' becomes 'en')
    const browserLang = navigator.language.split('-')[0];
    if (translations[browserLang]) {
        return browserLang;
    }
    // Default to English if no preference is found
    return 'en';
};

// 4. Set the language when the page loads
document.addEventListener('DOMContentLoaded', () => {
    const initialLang = getInitialLanguage();
    setLanguage(initialLang);

    // Add click event listeners to the language switcher links
    document.getElementById('lang-en').addEventListener('click', (e) => { e.preventDefault(); setLanguage('en'); });
    document.getElementById('lang-es').addEventListener('click', (e) => { e.preventDefault(); setLanguage('es'); });
    document.getElementById('lang-pt').addEventListener('click', (e) => { e.preventDefault(); setLanguage('pt'); });
});
