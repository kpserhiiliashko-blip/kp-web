---
layout: base.njk
title: Тарифи
permalink: /tariffs/
---

<section class="section">
    <div class="container">
        <h1>Тарифи на услуги</h1>
        <p class="info-text">Актуальні тарифи на послуги відповідно до постанови міської ради від {{ tariffs.updated }}</p>

        <div class="tariff-tables">
            <div class="tariff-section">
                <h2>Водопостачання та каналізація</h2>
                <table class="tariff-table">
                    <thead>
                        <tr>
                            <th>Послуга</th>
                            <th>Вартість</th>
                        </tr>
                    </thead>
                    <tbody>
                        {% for item in tariffs.water %}
                        <tr>
                            <td>{{ item.name }}</td>
                            <td class="price">{{ item.price }} {{ item.unit }}</td>
                        </tr>
                        {% endfor %}
                    </tbody>
                </table>
            </div>

            <div class="tariff-section">
                <h2>Гаряча вода</h2>
                <table class="tariff-table">
                    <thead>
                        <tr>
                            <th>Послуга</th>
                            <th>Вартість</th>
                        </tr>
                    </thead>
                    <tbody>
                        {% for item in tariffs.hot %}
                        <tr>
                            <td>{{ item.name }}</td>
                            <td class="price">{{ item.price }} {{ item.unit }}</td>
                        </tr>
                        {% endfor %}
                    </tbody>
                </table>
            </div>
        </div>

        <div class="info-box warning">
            <h3>📋 Важливо</h3>
            <p>Тарифи можуть змінюватися. Актуальну інформацію можна отримати за телефоном <strong>{{ company.phone }}</strong> або в офісі компанії.</p>
        </div>
    </div>
</section>
