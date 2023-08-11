import './sass/main.scss'


export function gridChildren(parent) {
    for (let i = 0; i < 100; i++) {
        let cell = document.createElement('div');
        parent.appendChild(cell).setAttribute('class', 'cell')
    }
}

