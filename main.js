


function ToyReactBuilder() {
    this.createElement = function (tagName, attributes, ...children) {
        function createElementChildren(childrenTagNames) {
            const fragments = document.createDocumentFragment();
            for (var childrenTagName of childrenTagNames) {
                let children_elem;
                if (typeof childrenTagName === 'string') {
                    children_elem = document.createTextNode(childrenTagName);
                } else {
                    children_elem = document.createElement(childrenTagName);
                }


                fragments.appendChild(children_elem);
            }
            return fragments;
        }

        const rootElem = document.createElement(tagName);

        for (let attr in attributes) {
            rootElem.setAttribute(attr, attributes[attr]);
        }
        rootElem.appendChild(createElementChildren(children));
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
