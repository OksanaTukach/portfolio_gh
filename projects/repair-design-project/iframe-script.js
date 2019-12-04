const wrapperButton = document.querySelector('.wrapper--button');
    const widthWrapperButton = getComputedStyle(wrapperButton).width;

    const mobileButton = document.querySelector('.button--change_screen');
    const iframe = document.querySelector('iframe');

    const getWidth = (width) => {
        if (parseInt(width) > 650) {
            iframe.classList.add('desktop');
        };
    };

    const clickBtn = () => {
        getWidth(widthWrapperButton);

        if (iframe.className === 'desktop') {
            mobileButton.innerHTML = 'DESKTOP';
            wrapperButton.classList.add('wrapper--mobile');
            iframe.classList.remove('desktop');
            iframe.classList.add('mobile');
        } else {
            mobileButton.innerHTML = 'MOBILE';
            wrapperButton.classList.remove('wrapper--mobile');
            iframe.classList.remove('mobile');
            iframe.classList.add('desktop');
        }      
    }

    mobileButton.addEventListener('click', clickBtn);