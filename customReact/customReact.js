function customRender(reactElement, root) {
    const domElement = document.createElement(reactElement.type);

    // Set inner text content instead of inner HTML for text nodes
    domElement.textContent = reactElement.children;

    // Set attributes using setAttribute
    domElement.setAttribute('type', 'button');
    domElement.setAttribute('id',reactElement.props.id)
    // Attach event listener correctly
    domElement.addEventListener('click', reactElement.props.onClick);
    // Append the created DOM element to the root element
    root.appendChild(domElement);
}

const reactElement = {
    type: 'button',
    props: {
        onClick: () => {
            alert('Button clicked!');
        },

        id: "btn"
    },
    children: 'Click Me'
};

const root = document.querySelector('#root');

customRender(reactElement, root);
