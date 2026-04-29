---
layout: base.njk
title: Контакти
permalink: /contacts/
---

<section class="section">
    <div class="container">
        <h1>Зв'яжіться з нами</h1>
        <p class="page-intro">Обирайте зручний канал зв'язку нижче. Для аварійних звернень телефонуйте одразу на гарячу лінію.</p>

        <div class="contact-primary">
            <h2>Основний канал звернення</h2>
            <p class="contact-info"><a href="tel:{{ company.phone }}">{{ company.phone }}</a></p>
            <p class="small">Гаряча лінія для консультацій та аварійних викликів.</p>
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
            <h2>Інші способи зв'язку</h2>
            <div class="contact-list">
                <article class="contact-row">
                    <h3>Email</h3>
                    <p class="contact-info"><a href="mailto:{{ company.email }}">{{ company.email }}</a></p>
                    <p class="small">Зазвичай відповідаємо протягом 24 годин.</p>
                </article>

                <article class="contact-row">
                    <h3>Офіс</h3>
                    <p class="contact-info">{{ company.address }}</p>
                    <p class="small">Прийом громадян за графіком роботи підприємства.</p>
                </article>

                <article class="contact-row">
                    <h3>Графік роботи</h3>
                    <p class="contact-info">{{ company.hours }}</p>
                    <p class="small">Аварійна служба працює 24/7.</p>
                </article>
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
