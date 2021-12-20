DATA = {
    seongkwon: {
        name: '홍성권',
        nickname: '고통받고 싶은 코알라',
        glad: '희 : 생각지도 못한 선행을 받았을 때 기뻐!',
        angry: '노 : 상대방에 대한 예의를 지키지 않는 사람들이 짜증나',
        love: '애 : 가족들과, 친구들과 함께하는 시간을 사랑해',
        happy: '락 : 맛있는 거 먹을 때 너무 즐거워!',
        img: './images/seongkwon2.jpg'

    },
    eunjoo: {
        name: '이은주',
        nickname: 'eunjoomoni',
        glad: '희: 😄내가 누군가에게 도움과 기쁨을 나눠줄 수 있을때 같이 기쁘고',
        angry: '노: 😡배려없는 사람들을 볼때 화가나고',
        love: '애: 🥰가족들과 보내는 시간을 사랑하고',
        happy: '락: 🥳요즘 나의 월급루팡 1호 조카와 월급루팡 2호를 기다리는 즐거움이 있어요:)',
        img: './images/eunjoo2.jpg'


    }
    , taewon: {
        name: '서태원',
        nickname: 'water',
        glad: '희: 바쁜일과를 마치고 온수샤워를 할 때 기쁨을 느낍니다.',
        angry: '노: 미션을 실패했을 때  화가 납니다.',
        love: '애: 가르침을 주시는 선생님들을 사랑합니다.',
        happy: '락: 미션을 성공했을때 즐거움을 느낍니다.',
        img: './images/taewon2.jpg'

    }
}


const seongkwonImage = document.getElementById("seongkwon-image"),
    taewonImage = document.getElementById("taewon-image"),
    eunjooImage = document.querySelector("#eunjoo-image");


seongkwonImage.addEventListener("click", () => createModal(DATA.seongkwon));
taewonImage.addEventListener("click", () => createModal(DATA.taewon));
eunjooImage.addEventListener("click", () => createModal(DATA.eunjoo));


function createModal(obj) {
    //obj.name, obj.a, obj.c
    // 모달창 자체 엘리먼트를 먼저 만들고 
    // 그안에 들어갈 텍스트 엘리먼트들을 각각 만들고 
    // 그다음 모달창안에 해당 엘리먼트들을 어펜드 한뒤
    // 도큐먼트 자체에 어펜드 

    const modal = document.createElement('div');
    modal.classList.add('modal');
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name-div');
    nameDiv.innerHTML = obj.name;
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image-div');
    const personImage = document.createElement('img');
    personImage.classList.add('person-image');
    personImage.src = obj.img;
    const explainDiv = document.createElement('div');
    explainDiv.classList.add('explain-div');
    const gladSpan = document.createElement('span');
    gladSpan.innerHTML = obj.glad;
    const angrySpan = document.createElement('span');
    angrySpan.innerHTML = obj.angry;
    const loveSpan = document.createElement('span');
    loveSpan.innerHTML = obj.love;
    const happySpan = document.createElement('span');
    happySpan.innerHTML = obj.happy;
    explainDiv.appendChild(gladSpan);
    explainDiv.appendChild(angrySpan);
    explainDiv.appendChild(loveSpan);
    explainDiv.appendChild(happySpan);
    imageDiv.appendChild(personImage);
    modalBody.appendChild(imageDiv);
    modalBody.appendChild(explainDiv);
    modal.appendChild(nameDiv);
    modal.appendChild(modalBody);
    document.body.prepend(modal);
    modal.addEventListener("click", () => modal.remove());
}
