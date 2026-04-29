---
layout: base.njk
title: Послуги
permalink: /services/
---

<section class="section">
    <div class="container">
        <h1>Наші послуги</h1>
        
        <div class="services-grid">
            {% for service in services.items %}
            <div class="service-card">
                <div class="service-icon large">{{ service.icon }}</div>
                <h2>{{ service.name }}</h2>
                <p>{{ service.description }}</p>
            </div>
            {% endfor %}
        </div>

        <div class="info-box">
            <h3>Якість обслуговування</h3>
            <ul>
                <li>✓ Постійний контроль якості води</li>
                <li>✓ Цілодобова гаряча лінія</li>
                <li>✓ Швидке реагування на аварійні ситуації</li>
                <li>✓ Сучасне обладнання</li>
                <li>✓ Прозора комунікація з мешканцями громади</li>
            </ul>
        </div>
    </div>
</section>
