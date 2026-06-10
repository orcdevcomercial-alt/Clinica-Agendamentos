export function renderHome() {
    return `
    <section class="hero">
        <div class="hero-content">
            <span class="badge">Atendimento Especializado</span>

            <h1>
                Cuidando da sua saúde com excelência e tecnologia
            </h1>

            <p>
                Consultas, exames e acompanhamento médico personalizado
                para garantir mais qualidade de vida para você e sua família.
            </p>

            <div class="hero-buttons">
                <button class="btn-primary">
                    Agendar Consulta
                </button>

                <button class="btn-secondary">
                    Saiba Mais
                </button>
            </div>

            <div class="hero-info">
                <div>
                    <strong>+10.000</strong>
                    <span>Pacientes</span>
                </div>

                <div>
                    <strong>15+</strong>
                    <span>Anos</span>
                </div>

                <div>
                    <strong>98%</strong>
                    <span>Satisfação</span>
                </div>
            </div>
        </div>

        <div class="hero-image">
            <img src="assets/img/doctor.png" alt="Doutor">
        </div>
    </section>

    <section class="stats">
        <div class="stat-card">
            <h3>+10.000</h3>
            <p>Pacientes Atendidos</p>
        </div>

        <div class="stat-card">
            <h3>+5.000</h3>
            <p>Exames Realizados</p>
        </div>

        <div class="stat-card">
            <h3>15+</h3>
            <p>Anos de Experiência</p>
        </div>

        <div class="stat-card">
            <h3>98%</h3>
            <p>Satisfação dos Pacientes</p>
        </div>
    </section>

    <section class="about-doctor">
        <div class="about-image">
            <img src="assets/img/doctor2.jpg">
        </div>

        <div class="about-content">
            <span>Sobre o Médico</span>

            <h2>Dr. André Ferreira</h2>

            <p>
                Médico especialista em cardiologia com ampla experiência
                no diagnóstico e tratamento de doenças cardiovasculares.
            </p>

            <ul>
                <li>✔ Especialista em Cardiologia</li>
                <li>✔ Membro da SBC</li>
                <li>✔ Atendimento Humanizado</li>
                <li>✔ Tecnologia Avançada</li>
            </ul>

            <button class="btn-primary">
                Conhecer o Doutor
            </button>
        </div>
    </section>

    <section class="specialties">
        <h2>Especialidades</h2>

        <div class="specialties-grid">

            <div class="specialty-card">
                ❤️
                <h3>Cardiologia Clínica</h3>
            </div>

            <div class="specialty-card">
                🫀
                <h3>Check-up Cardiológico</h3>
            </div>

            <div class="specialty-card">
                📈
                <h3>Mapa e Holter</h3>
            </div>

            <div class="specialty-card">
                🩺
                <h3>Ecocardiograma</h3>
            </div>

            <div class="specialty-card">
                🏃
                <h3>Teste Ergométrico</h3>
            </div>

            <div class="specialty-card">
                💓
                <h3>Prevenção Cardíaca</h3>
            </div>

        </div>
    </section>

    <section class="symptoms">
        <h2>Sintomas que Merecem Atenção</h2>

        <div class="symptoms-grid">
            <div>Dor no peito</div>
            <div>Falta de ar</div>
            <div>Palpitações</div>
            <div>Tonturas</div>
            <div>Pressão Alta</div>
            <div>Cansaço Excessivo</div>
        </div>
    </section>

    <section class="testimonials">

        <h2>Depoimentos</h2>

        <div class="testimonial-card">
            <p>
                Excelente atendimento, profissional muito atencioso.
            </p>
            <strong>Maria Silva</strong>
        </div>

        <div class="testimonial-card">
            <p>
                Estrutura impecável e atendimento rápido.
            </p>
            <strong>Carlos Souza</strong>
        </div>

    </section>

    <section class="cta">
        <h2>
            Sua saúde merece atenção especializada
        </h2>

        <p>
            Agende sua consulta agora mesmo.
        </p>

        <button class="btn-primary">
            Agendar Consulta
        </button>
    </section>
    `;
}