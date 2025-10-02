function blur(cont) {
    cont.classList.toggle('blur_class');
}
function disblur(cont) {
    cont.classList.remove('blur_class');
}

document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const menu = document.querySelector('.header__top-menu');
    const content = document.querySelector('.header__content');
    
    if (mobileToggle && menu) {
        mobileToggle.addEventListener('click', function() {
            menu.classList.toggle('active');
            blur(content)
        });
        
        const menuLinks = document.querySelectorAll('.top-menu__item-link');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                menu.classList.remove('active');
                disblur(content);
            });
        });
        
        document.addEventListener('click', function(event) {
            if (!menu.contains(event.target) && !mobileToggle.contains(event.target)) {
                menu.classList.remove('active');
                disblur(content);
            }
        });
    }

    changeCard(1);
});


const CARDS = [
    {
        id: 1,
        title: "О МЕССЕНДЖЕРЕ",
        descript: `Мессенджер <span class="b">INSTANT</span> создается на Python PySide6 и QML QtQuick. Это <span class="reds">некоммерческий</span> проект без цели заработка - мы развиваем его ради саморазвития и получения собственного опыта ;)`,
        src: "src/assets/images/logo.png",
        alt: "image 1",
    },
    {
        id: 2,
        title: "СИСТЕМА КОНТРОЛЯ ВЕРСИЙ",
        descript: `Мы используем <a target="_blank" href="https://git-scm.com/" class="box-second__link">Git</a> в связке с <a target="_blank" href="https://github.com/" class="box-second__link">GitHub</a> для эффективной командной работы. Это позволяет нам делиться изменениями, работать над разными задачами параллельно и сохранять всю историю разработки проекта в одном месте`,
        src: "src/assets/images/logo_git.png",
        alt: "image 2",
    },
    {
        id: 3,
        title: "ТЕХНОЛОГИИ РАЗРАБОТКИ",
        descript: `Для интерфейса используем <span class="b">QML Qt.Quick</span> и <span class="b">JavaScript</span>. Такой стек обеспечивает нам кроссплатфор-менность и удобство разработки. <br> Серверную часть пишем на Python с <span class="b">asyncio</span> и <span class="b">Websocket</span>. В далеком будущем сервер будем переписывать под <span class="b">C++</span>`,
        src: "src/assets/images/technologi.png",
        alt: "image 3",
    },
    {
        id: 4,
        title: "НАДО ПОНИМАТЬ",
        descript: `<span class="b">Мы не платим ЗП нашим сотрудникам.</span> Участники команды получают возможность работать над интересным проектом, а также бесценный опыт реальной разработки в команде. <br><span class="reds">Наш проект не подходит тем, кто хочет "просто заработать денег"</span>`,
        src: "src/assets/images/exp.png",
        alt: "image 4",
    },
    {
        id: 5,
        title: "ЧТО ЦЕНИМ В НОВИЧКАХ",
        descript: `<span class="reds">Hard skills</span> не так важны - главное готовность работать в команде, прислушиваться к старшим разработчикам и ответственно выполнять задачи. Мы ценим <span class="b">мотивацию</span> и <span class="b">готовность учиться</span> выше формальных знаний и опыта работы`,
        src: "src/assets/images/fire.png",
        alt: "image 5",
    },
    {
        id: 6,
        title: "КАК К НАМ ПОПАСТЬ",
        descript: `Нужно пройти <a href="#about_membership" class="box-second__link">опрос</a>:<br>- "Почему я хочу работать с вами"<br>- Свои контакты <br>- Еще несколько вопросов <br><br>Мы рассмотрим каждую заявку и обязательно свяжемся с вами!`,
        src: "src/assets/images/quest.png",
        alt: "image 6",
    },
]

function changeCard(id) {
    const current = CARDS[id-1];
    let image = document.getElementById('box-second__image');
    image.src = current.src
    image.alt = current.alt
    let title = document.getElementById('box-second__title');
    let descript = document.getElementById('box-second__text');

    title.innerHTML = current.title
    descript.innerHTML = current.descript

}