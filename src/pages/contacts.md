---
layout: base.njk
title: Контакти
permalink: /contacts/
---

<section class="section">
    <div class="container">
        <h1>Зв'яжіться з нами</h1>

        <div class="contacts-grid">
            <div class="contact-card">
                <h2>☎️ Телефон</h2>
                <p class="contact-info">{{ company.phone }}</p>
                <p class="small">Гарячая лінія — для аварійних ситуацій</p>
            </div>

            <div class="contact-card">
                <h2>📧 Email</h2>
                <p class="contact-info"><a href="mailto:{{ company.email }}">{{ company.email }}</a></p>
                <p class="small">Відповідь протягом 24 годин</p>
            </div>

            <div class="contact-card">
                <h2>📍 Офіс</h2>
                <p class="contact-info">{{ company.address }}</p>
                <p class="small">Приймальні години</p>
            </div>

            <div class="contact-card">
                <h2>🕐 Графік роботи</h2>
                <p class="contact-info">{{ company.hours }}</p>
                <p class="small">Аварійна служба 24/7</p>
            </div>
        </div>

        <section class="section-inner">
            <h2>Аварійні ситуації</h2>
            <div class="alert">
                <p><strong>У разі аварії (витік, відсутність води):</strong></p>
                <p class="phone-urgent">☎️ {{ company.phone }}</p>
                <p>Служба аварійної допомоги працює цілодобово</p>
            </div>
        </section>

        <section class="section-inner">
            <h2>Поширені питання</h2>
            <div class="faq">
                <div class="faq-item">
                    <h3>Як повідомити про витік?</h3>
                    <p>Негайно зателефонуйте на гарячу лінію. Спеціаліст прибуде протягом 2 годин у межах міста.</p>
                </div>
                <div class="faq-item">
                    <h3>Як сплатити рахунок?</h3>
                    <p>Можна сплатити в офісі, через онлайн-банк за рахунком у платіжці або через систему електронних платежів.</p>
                </div>
                <div class="faq-item">
                    <h3>Як отримати довідку про водопровід?</h3>
                    <p>Звертайтесь особисто до нас у офіс з паспортом та документом на квартиру/дім. Довідка видається в день звернення.</p>
                </div>
            </div>
        </section>
    </div>
</section>
