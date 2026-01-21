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
        title: 'Por que elegir',
        highlight: 'NovaDent',
        description: 'Somos una clinica dental comprometida con tu bienestar y tranquilidad. Nuestro equipo trabaja en instalaciones modernas y tecnologia de punta.',
        features: [
            'Especialistas certificados',
            'Tecnologia moderna',
            'Atencion sin dolor'
        ],
        images: [
            { src: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&h=300&fit=crop', alt: 'Consultorio dental' },
            { src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=300&h=200&fit=crop', alt: 'Equipo dental' },
            { src: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=300&h=200&fit=crop', alt: 'Tecnologia dental' }
        ]
    }));

    // Testimonials Component
    Alpine.data('testimonials', () => ({
        title: 'Lo que dicen nuestros pacientes',
        items: [
            {
                text: 'Excelente atencion, me senti muy comoda durante todo el tratamiento. El personal es muy profesional y amable.',
                name: 'Maria Gonzalez',
                role: 'Paciente',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face'
            },
            {
                text: 'El mejor equipo dental que he conocido. Mi tratamiento de ortodoncia fue rapido y sin molestias.',
                name: 'Carlos Ruiz',
                role: 'Paciente',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
            },
            {
                text: 'Despues de años con miedo al dentista, encontre en NovaDent un lugar donde me siento segura. Totalmente recomendado.',
                name: 'Ana Martinez',
                role: 'Paciente',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
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
            alert('Gracias por tu mensaje. Te contactaremos pronto.');
            this.formData = { nombre: '', telefono: '', email: '', horario: '' };
        }
    }));
});
