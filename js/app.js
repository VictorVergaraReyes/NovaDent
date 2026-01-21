// NovaDent - Alpine.js Application Data

// Component Loader
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${componentPath}:`, error);
    }
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
    const components = [
        { id: 'navbar-component', path: 'components/navbar.html' },
        { id: 'hero-component', path: 'components/hero.html' },
        { id: 'services-component', path: 'components/services.html' },
        { id: 'why-us-component', path: 'components/why-us.html' },
        { id: 'testimonials-component', path: 'components/testimonials.html' },
        { id: 'cta-component', path: 'components/cta.html' },
        { id: 'footer-component', path: 'components/footer.html' }
    ];

    // Load all components in parallel
    await Promise.all(components.map(c => loadComponent(c.id, c.path)));
});

// Alpine.js initialization
document.addEventListener('alpine:init', () => {
    // Global Store
    Alpine.store('app', {
        mobileMenu: false,
        toggleMenu() {
            this.mobileMenu = !this.mobileMenu;
        }
    });

    // Navbar Component
    Alpine.data('navbar', () => ({
        menuItems: [
            { label: 'Inicio', href: '#inicio', active: true },
            { label: 'Servicios', href: '#servicios', active: false },
            { label: 'Nosotros', href: '#nosotros', active: false },
            { label: 'Testimonios', href: '#testimonios', active: false },
            { label: 'Contacto', href: '#contacto', active: false }
        ]
    }));

    // Hero Component
    Alpine.data('hero', () => ({
        title: 'Recupera tu sonrisa con especialistas en',
        highlight: 'odontologia moderna',
        subtitle: 'Obten tu primera consulta de valoracion totalmente gratis. Equipos de ultima generacion y especialistas certificados para tu salud dental.',
        ctaText: 'Agendar tu primera cita',
        badges: [
            { icon: 'bi-patch-check-fill', text: '+10 años de experiencia' },
            { icon: 'bi-people-fill', text: '+5000 pacientes satisfechos' }
        ],
        image: 'assets/hero-img.png'
    }));

    // Services Component
    Alpine.data('services', () => ({
        title: 'Nuestros Servicios Especializados',
        items: [
            {
                icon: 'bi-brightness-high',
                title: 'Blanqueamiento',
                description: 'Tecnicas avanzadas y seguras para devolver el brillo natural a tus dientes con resultados visibles.',
                image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&h=300&fit=crop'
            },
            {
                icon: 'bi-grid-3x3',
                title: 'Ortodoncia',
                description: 'Brackets tradicionales e invisibles para alinear tu sonrisa de forma efectiva y comoda.',
                image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=400&h=300&fit=crop'
            },
            {
                icon: 'bi-puzzle',
                title: 'Implantes',
                description: 'Soluciones permanentes y naturales para reemplazar piezas dentales con tecnologia de punta.',
                image: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=400&h=300&fit=crop'
            }
        ]
    }));

    // Why Us Component
    Alpine.data('whyUs', () => ({
        highlight: 'NovaDent',
        description: 'Nos enfocamos en brindar una experiencia comoda y resultados duraderos mediante un trato humano y tecnologia de punta.',
        features: [
            {
                icon: 'bi-patch-check-fill',
                title: 'Especialistas certificados',
                description: 'Equipo medico con años de experiencia y certificaciones internacionales.'
            },
            {
                icon: 'bi-cpu-fill',
                title: 'Tecnologia moderna',
                description: 'Contamos con escaneo digital y equipos de minima invasion para tu comodidad.'
            },
            {
                icon: 'bi-emoji-smile-fill',
                title: 'Atencion sin dolor',
                description: 'Protocolos diseñados para tu total comodidad durante cada tratamiento.'
            }
        ],
        images: [
            { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTdFyhbbSBv7TdQSvJ4s7NK4lAmxYoVybdJTzv5yPe7CZvyWNX9T8eB8arPoiEF0Exo8ujB4ReSnXNSIx4KS3ELMOWhvPCmjDbfGYeEIb2cw7Yiesi4RY1OuLTbGveCO3L9Pa5LtOW6PTvsfaG1yP4O3f7ZQDgVmMBOixd_wgnFdO7gdXWPG0MbG_zGGd4pYQjFIys6dJLCEUm24jSWcmR0MW3Dv2aCBAM4slsNlNz6HP4k-HU_BXeH9wcH8UWvGmVjzR4AD_Crnua', alt: 'Equipo dental moderno' },
            { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJRC27YObqBlXHXf0XmoJlBMl-PMeTColAdT7CWRD9tIxBHYeZ8KMGYPLp8pFOcPqEf5Y1AE5tyoH4VNhuiPIrwq3K08xZk4rY815IelK5zUuu7V5JNqSxYUoPZE2F0mI0SUWWbDkolF10oACLbdCZccWcxJEReqgAvUJ3sRAaTGZfGB3XtWqSewWxW5DDK9l0L6XRV_4mS_Bgx2efmLyihrKZDD44ZV8E3ABWHxrvHZ0SxLVFchoWDsy7Ad6cWDuIV4BLGuaJD2vc', alt: 'Profesional medico' },
            { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAscb9Tg0KogulI_uGSW9-2t4Cn8tr2HgYr-ScXRBGD1vkP86Amnmt0FLW_euki4whF8HB7hvW5Ry3scwcohvbY-I0fgUaIuUzbaHhgowqzgNgAmWZZLDcAzUz3-MPRgjHicO-o79u8X4m6U9x-y7IcVN32_RhHUeXtBfl3FJPe4ZyKPZ7lIEfz_oxiYAHQcmSy2IO4oCSO3AgCH4S0ZMdtVGzK8r_w3aRAYFVJTJmXNcVN_-APCxXd2rue-sZVPK1dSlYaI-jIb0mR', alt: 'Instrumentos dentales' },
            { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuATjPT7TN1FfedChBUuVheyHlaYCcYmRImg8qg4wbTSYaOvXSEUYhSR3qf8CRDzOE1qRmI10xSofAL1o9kc3ac57xYAM4NK0VPU_PwvzCJ72WPyFCSIMSdfLF7GlEmYM-523LcXZ7e4lDe3hg_BdcERVJ_AdXeuRQu6QZgttWu7Ce7ying_JChft23BwqECI77rCBFIFlLusTSyFDvQXZ3N25-XKPhGz_DC3txu79HXPGMoie1E5SELRbGdAR7R_p4Ry3_JQWPVRsXR', alt: 'Sala de espera moderna' }
        ]
    }));

    // Testimonials Component
    Alpine.data('testimonials', () => ({
        title: 'Lo que dicen nuestros pacientes',
        items: [
            {
                text: 'Increible atencion. Me hice un blanqueamiento y los resultados superaron mis expectativas. ¡Totalmente recomendado!',
                name: 'Maria Garcia',
                role: 'Paciente de Ortodoncia',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDT9fEh0S9YRLcqEFKSP4OjjmdkJYuyLPTSxvfX2Rfoiayb8jxxCDPYEVaH2X8LoVjFPR87UwysZqH6MMUAhkL7aPsp-a1vPbnnNOousn5z6ZCASutEhFNm191C9EmW4_lNp8iNlMAbm7ebWs-JGAPNhL_fBzrmdxQIskoCpcbytVxYGh09NJL73_L_vMJhx7INQkNROo5Dch6OQ3tIbb2kQ1npZgc8Q7bqoE5OwPwvaYDCKH3pX6P0OOFjAKUQZXifaSX5UQuFCPTI',
                featured: false
            },
            {
                text: 'El mejor equipo dental que he conocido. Las instalaciones son de lujo y el trato es muy profesional y cercano.',
                name: 'Carlos Ruiz',
                role: 'Paciente de Implantes',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvswjQNjHpVPomCBQrqyHo6MS6uR-JXuPi_1lE04jM4B8zpSK0BY5vfDtLrqdIYQXvYt9lyykWT7QE8ucMBChT2Ctf_TLRskIqMaoYFglvccHfnahaJwzIooa-ZGJ03PZzhkoElZlQ8m0YmsgFxoV1JPo6CY4X13gH6KagUK5Ew3nQm9jUAb6yrIrdCAD8ezeM9yKcbAELSJBIPZCdf4mZ0MgWAsdKPoye7dztHe8MF_Pvmdhl0wL1aMWdZzGJ6aUYLHol9lsfIrSU',
                featured: true
            },
            {
                text: 'Tenia mucho miedo al dentista, pero en NovaDent me hicieron sentir muy tranquilo. El tratamiento fue totalmente sin dolor.',
                name: 'Elena Martinez',
                role: 'Paciente General',
                image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB50Y7Br79QmodEgbWh6-ZB184QU721RytZrFpFe18wpQxDsjxOIAp1gfFwlC8E9hGbTYjLcXaLLEkmkP3ylquASBsMVUnmKKg5jotUmJgYY8zAU7Kv03biRWiv8f24Giah6hZDYbH8K-AWHToJcUgyp4ULJqkoU6cXAGHyVthSDpxcWfvXRf9GOHjJV6VQEf_DgyJaQVSi_RkW9vOn1rguFbU7733knQHyP2T0Xl_J-9QcwZMdELwz3HDjEAzXuY9C4rmGfsXbP6zB',
                featured: false
            }
        ]
    }));

    // CTA Component
    Alpine.data('cta', () => ({
        title: 'Listo para transformar tu sonrisa?',
        buttonText: 'Agendar consulta'
    }));

    // Footer Component
    Alpine.data('footer', () => ({
        title: 'Estamos para ayudarte',
        description: 'Visitanos en nuestra clinica o contactanos para agendar tu cita. Estamos listos para atenderte.',
        contact: [
            { icon: 'bi-geo-alt', text: 'Av. Principal 123, Ciudad' },
            { icon: 'bi-telephone', text: '+52 55 1234 5678' },
            { icon: 'bi-whatsapp', text: '+52 55 8765 4321' },
            { icon: 'bi-clock', text: 'Lun - Vie: 9:00 - 19:00' }
        ],
        formData: {
            nombre: '',
            telefono: '',
            email: '',
            horario: ''
        },
        submitForm() {
            // Send event to Google Tag Manager
            if (window.dataLayer) {
                window.dataLayer.push({
                    event: 'form_submit',
                    form_name: 'contact_form',
                    form_data: {
                        nombre: this.formData.nombre,
                        telefono: this.formData.telefono,
                        email: this.formData.email,
                        horario: this.formData.horario
                    }
                });
            }

            alert('Gracias por tu mensaje. Te contactaremos pronto.');
            this.formData = { nombre: '', telefono: '', email: '', horario: '' };
        }
    }));
});
