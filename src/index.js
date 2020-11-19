import './styles.scss';

function themeButton(containerElement) {
  const themeButton = document.createElement('button');
  themeButton.innerText = 'Click To Swap Theme';
  themeButton.classList.add('banner__button');

  themeButton.addEventListener('click', (event) => {
    console.log(event);
    containerElement.classList.toggle('banner--dark');
  });

  return themeButton;
}

function component() {
  const container = document.createElement('div');
  const element = document.createElement('h1');

  container.classList.add('banner');

  element.innerText = 'Hello Webpack';
  element.classList.add('banner__heading');

  container.appendChild(element);
  container.appendChild(themeButton(container));

  return container;
}

document.body.appendChild(component());
