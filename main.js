document.addEventListener('DOMContentLoaded', () => {
    // Create tooltip element if it doesn't exist
    if (!document.getElementById('skill-tooltip')) {
        const tooltip = document.createElement('div');
        tooltip.id = 'skill-tooltip';
        document.body.appendChild(tooltip);
    }

    // Skill descriptions
    const skillDescriptions = {
        'Liderazgo': 'Capacidad de inspirar, motivar y guiar a un equipo hacia metas comunes, utilizando habilidades de comunicación, empatía y toma de decisiones.',
        'Gestión del tiempo': 'Habilidad para organizar, priorizar y ejecutar tareas de manera eficiente, maximizando la productividad y cumpliendo objetivos en los plazos establecidos.',
        'Comunicación': 'Destreza para transmitir ideas de manera clara, efectiva y asertiva, tanto de forma verbal como escrita, facilitando el entendimiento y la colaboración.',
        'Trabajo en equipo': 'Capacidad de colaborar de manera armoniosa con otros, compartiendo conocimientos, apoyando a los compañeros y contribuyendo al logro de objetivos colectivos.',
        'Toma de decisiones': 'Habilidad para analizar situaciones, evaluar alternativas, considerar riesgos y elegir el curso de acción más apropiado con confianza y criterio.',
        'Pensamiento estratégico': 'Capacidad de visualizar el panorama completo, anticipar tendencias, identificar oportunidades y desarrollar planes que impulsen el éxito a largo plazo.'
    };

    // Skill items tooltip functionality
    const skillItems = document.querySelectorAll('.skill-item');
    const tooltip = document.getElementById('skill-tooltip');

    skillItems.forEach(item => {
        item.addEventListener('mousemove', (e) => {
            const skillName = item.textContent.trim();
            const description = skillDescriptions[skillName];
            
            if (description) {
                tooltip.textContent = description;
                tooltip.style.display = 'block';
                
                // Position tooltip
                const tooltipWidth = 250;
                const tooltipHeight = 150;
                let left = e.clientX + 10;
                let top = e.clientY + 10;
                
                // Adjust if tooltip would go off right side of screen
                if (left + tooltipWidth > window.innerWidth) {
                    left = e.clientX - tooltipWidth - 10;
                }
                
                // Adjust if tooltip would go off bottom of screen
                if (top + tooltipHeight > window.innerHeight) {
                    top = e.clientY - tooltipHeight - 10;
                }
                
                tooltip.style.left = `${left}px`;
                tooltip.style.top = `${top}px`;
            }
        });

        item.addEventListener('mouseleave', () => {
            tooltip.style.display = 'none';
        });
    });
});