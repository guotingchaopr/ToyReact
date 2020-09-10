


function ToyReactBuilder() {
    this.createElement = function (tagName, attributes, ...children) {
        function createElementChildren() {
            const fragments = document.createDocumentFragment();
            for (let child of children) {
                if (typeof child === 'string') {
                    let childElem = document.createTextNode(child);
                    fragments.appendChild(childElem);
                } else {
                    fragments.appendChild(child);
                }
            }
            return fragments;
        }

        const rootElem = document.createElement(tagName);

        for (let attr in attributes) {
            rootElem.setAttribute(attr, attributes[attr]);
        }
        rootElem.appendChild(createElementChildren());
        return rootElem;
    }
}

var ToyReact = new ToyReactBuilder;


const elem = (
    <div class="a">
        <div>123</div>
        <button>123</button>
        <input type='text' placeholder='please enter some number' />
    </div>
)

document.body.appendChild(elem);
