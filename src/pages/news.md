---
layout: base.njk
title: Новини
permalink: /news/
---

<section class="section">
    <div class="container">
        <h1>Новини та оголошення</h1>

        <div class="news-list">
            {% set sortedNews = collections.news | sortByDate %}
            {% for post in sortedNews %}
            <article class="news-item">
                <div class="news-date">{{ post.data.date | dateFilter }}</div>
                <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
                <p class="news-excerpt">{{ post.data.excerpt or post.templateContent | truncate(200) }}</p>
                <a href="{{ post.url }}" class="read-more">Читати далі →</a>
            </article>
            {% endfor %}
        </div>

        <div class="news-admin-note">
            <p>Щоб додати або відредагувати новину, перейдіть до <a href="/admin/">Редактору новин</a>.</p>
        </div>

        {% if collections.news.length == 0 %}
        <p class="empty-state">Наразі нема новин. Якщо у вас є інформація для поділу, звертайтесь до <a href="mailto:{{ company.email }}">нас</a>.</p>
        {% endif %}
    </div>

</section>
