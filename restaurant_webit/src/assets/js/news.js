
class PWAConfApp {
    /*ToDO: 1. Artikel auslesen und schreiben implementieren*/
    constructor() {
        this.newsDiv = document.querySelector('.news');
        this.init();
    }

    async init() {
        if ('IntersectionObserver' in window) {
            this.setupNavIntersectionObserver();
        }
        this.addLoadingIndicatorDelay();

        await this.loadNews();
    }

    addLoadingIndicatorDelay() {
        // Only show spinner if we're delayed more than 1s
        setTimeout(() => {
            Array.from(document.querySelectorAll('.loader')).forEach(loader => {
                loader.removeAttribute('hidden');
            });
        }, 1000);
    }

    setupNavIntersectionObserver() {
        const nav = document.querySelector('nav');
        const callback = entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    [nav].forEach(e => e.classList.remove('fixed'));
                } else {
                    [nav].forEach(e => e.classList.add('fixed'));
                }
            });
        };
        const observer = new IntersectionObserver(callback, {
            threshold: [0, 1]
        });
        observer.observe(nav);
    }

    async loadNews() {
        const rawNews = await this.fetchJSON('./news.json');

        // Add speaker details to array
        this.news = rawNews;
        this.newsDiv.innerHTML = this.news
            .map(this.toNewsBlock)
            .join('\n');
    }


    toNewsBlock(newsItem) {
        return `
      <div class="schedule-item col-md-12 ${newsItem.category}">
        <div class="title-and-time">
            <h2 class="title">${newsItem.title}</h2>
              <p class="creatDate">Erstellt am: ${newsItem.creatDate}</p>
          </div>
        <p class="description">${newsItem.description}</p>
      </div>
      <hr/>
    `;
    }


    async fetchJSON(url) {
        const res = await fetch(url);
        return res.json();
    }
}

(function () {
    function toJSONString(form) {
        var obj = {};
        var elements = form.querySelectorAll("input, select, textarea");
        for (var i = 0; i < elements.length; ++i) {
            var element = elements[i];
            var name = element.name;
            var value = element.value;

            if (name) {
                obj[name] = value;
            }
        }

        return JSON.stringify(obj);
    }

    document.addEventListener("DOMContentLoaded", function () {
        var form = document.getElementById("test");
        var output = document.getElementById("output");
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            var json = toJSONString(this);
            output.innerHTML = json;
            writeData(output)

        }, false);

    });
})();


window.addEventListener('load', e => {
    new PWAConfApp();
});