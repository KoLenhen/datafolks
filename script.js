const cardTemplate = document.querySelector('#projects__item-template').content;
const popupImage = document.querySelector('.popup_type_show');
const closeImage = document.querySelector('.popup__close_image');
const projectsList = document.querySelector('.projects__list');
const moreBtn = document.querySelector('.projects__btn');

const projectItems = [{
        name: 'республика саха',
        link: 'images/image1.jpg',
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis aliquam fugit dolorum tenetur facilis esse eos illo praesentium atque, ducimus rem eum, voluptas velit dolores. Laboriosam numquam ullam, consequuntur.'
    },
    {
        name: 'газпром',
        link: 'images/image2.jpg',
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis aliquam fugit dolorum tenetur facilis esse eos illo praesentium atque, ducimus rem eum, voluptas velit dolores. Laboriosam numquam ullam, consequuntur.'
    },
    {
        name: 'Nokia',
        link: 'images/image3.jpg',
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis aliquam fugit dolorum tenetur facilis esse eos illo praesentium atque, ducimus rem eum, voluptas velit dolores. Laboriosam numquam ullam, consequuntur.'
    },
    {
        name: 'республика саха',
        link: 'images/image1.jpg',
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis aliquam fugit dolorum tenetur facilis esse eos illo praesentium atque, ducimus rem eum, voluptas velit dolores. Laboriosam numquam ullam, consequuntur.'
    },
    {
        name: 'газпром',
        link: 'images/image2.jpg',
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis aliquam fugit dolorum tenetur facilis esse eos illo praesentium atque, ducimus rem eum, voluptas velit dolores. Laboriosam numquam ullam, consequuntur.'
    },
    {
        name: 'Nokia',
        link: 'images/image3.jpg',
        description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut, perferendis aliquam fugit dolorum tenetur facilis esse eos illo praesentium atque, ducimus rem eum, voluptas velit dolores. Laboriosam numquam ullam, consequuntur.'
    }
];

function closeAnyPopup(modalName) {
    modalName.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc);
    document.removeEventListener('click', closeByOverlay);
}

function closePopup(event) {
    const eventTarget = event.target;
    deleteEventListener(eventTarget);
    closeAnyPopup(eventTarget.closest('.popup'));
}

function openAnyPopup(modalName) {
    modalName.classList.add('popup_opened');
    const close = modalName.querySelector('.popup__close');
    closeImage.addEventListener('click', closePopup);
    document.addEventListener('keydown', closeByEsc);
    const overlay = document.querySelector('.popup_opened');
    overlay.addEventListener('click', closeByOverlay);
}


function deleteEventListener(eventTarget) {
    eventTarget.removeEventListener('click', closePopup);
}


for (let i = 0; i < 3; i++) {
    projectsList.append(addProject(projectItems[i]));
}

moreBtn.addEventListener('click', () => {

    for (let i = 3; i < projectItems.length; i++) {
        projectsList.append(addProject(projectItems[i]));
    };
})


function addProject(projectItem) {

    const cardElement = cardTemplate.cloneNode(true);
    const cardImage = cardElement.querySelector('.projects__img');
    const projectsItem = cardElement.querySelector('.projects__item');

    cardImage.src = projectItem.link;
    cardImage.alt = 'фото' + ' ' + projectItem.name;
    cardElement.querySelector('.projects__name').textContent = projectItem.name;

    projectsItem.addEventListener('click', function() {
        popupImage.querySelector('.popup__caption').textContent = projectItem.description;
        popupImage.querySelector('.popup__image').src = projectItem.link;
        popupImage.querySelector('.popup__title').textContent = projectItem.name;
        openAnyPopup(popupImage);
    });

    return cardElement;
}


function closeByEsc(event) {
    if (event.keyCode === 27) {
        const popupCurrent = document.querySelector('.popup_opened');
        closeAnyPopup(popupCurrent);
    }
}

function closeByOverlay(event) {
    event.stopPropagation();
    closeAnyPopup(event.target);
}