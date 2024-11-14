window.onload = () => {
    const cards = [
        {
            image: 'sound_purring.gif',
            title: 'Звук (мурчание)',
            price: '500 бук',
            command: '!redeem мурк'
        },
        {
            image: 'ty_rack.png',
            title: 'Серега пират говорит "ты рак"',
            price: '200 бук',
            command: '!redeem рак'
        },
        {
            image: 'skolko.gif',
            title: 'сколько?! да ты шо офигел?!',
            price: '500 бук',
            command: '!redeem сколько'
        },
    ];

    let parentEl = document.getElementById('cards');

    for (let i = 0; i < cards.length; i++) {
        const cardParent = document.createElement('div');
        cardParent.classList.add('shop__card');

        const cardImage = document.createElement('div');
        cardImage.classList.add('shop__card_img');
        cardImage.style.backgroundImage = `url('./assets/images/shop/${cards[i].image}')`;

        const cardTitle = document.createElement('div');
        cardTitle.classList.add('shop__card_title');
        cardTitle.innerText = cards[i].title;

        const cardPrice = document.createElement('div');
        cardPrice.classList.add('shop__card_price');
        cardPrice.innerText = cards[i].price;

        const cardCopy = document.createElement('div');
        cardCopy.classList.add('shop__card_copy');

        const cardCopyText = document.createElement('div');
        cardCopyText.classList.add('shop__card_copy_text');
        cardCopyText.innerText = cards[i].command;

        const cardCopySvg = `<svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_503_180)">
                                <path d="M12 10.5H6C5.725 10.5 5.5 10.275 5.5 10V2C5.5 1.725 5.725 1.5 6 1.5H10.3781L12.5 3.62188V10C12.5 10.275 12.275 10.5 12 10.5ZM6 12H12C13.1031 12 14 11.1031 14 10V3.62188C14 3.225 13.8406 2.84375 13.5594 2.5625L11.4406 0.440625C11.1594 0.159375 10.7781 0 10.3813 0H6C4.89687 0 4 0.896875 4 2V10C4 11.1031 4.89687 12 6 12ZM2 4C0.896875 4 0 4.89687 0 6V14C0 15.1031 0.896875 16 2 16H8C9.10312 16 10 15.1031 10 14V13H8.5V14C8.5 14.275 8.275 14.5 8 14.5H2C1.725 14.5 1.5 14.275 1.5 14V6C1.5 5.725 1.725 5.5 2 5.5H3V4H2Z"
                                      fill="white"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_503_180">
                                    <rect width="14" height="16" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>`;

        parentEl.appendChild(cardParent);
        cardParent.appendChild(cardImage);
        cardParent.appendChild(cardTitle);
        cardParent.appendChild(cardPrice);
        cardParent.appendChild(cardCopy);
        cardCopy.appendChild(cardCopyText);
        cardCopy.innerHTML = cardCopy.innerHTML + cardCopySvg;
    }

    let shopCardCommand = document.querySelectorAll('.shop__card_copy_text');
    for (let i = 0; i < shopCardCommand.length; i++) {
        shopCardCommand[i].addEventListener('click', function (){
            copyCommand(shopCardCommand[i]);
        });
    }
};