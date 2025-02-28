//How to Create a React Element
const h2 = React.createElement(
  "h2",
  { className: "subheading" },
  "hello react"
);
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(h2);

const container = React.createElement(
    'div',
    { className: 'container', id: 'container' },
    [
      React.createElement('section', { key: 1 }, [
        React.createElement(
          'p',
          { key: 1 },
          'The library for web and native user interfaces'
        ),
        React.createElement('img', {
          key: 2,
          style: {
            width: 200,
            backgroundColor: 'teal',
            borderRadius: 8,
            padding: 16,
          },
          src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        }),
      ]),
      React.createElement('section', { key: 2 }, [
        React.createElement('form', { key: 1 }, [
          React.createElement('div', {className: 'input-group', key: 1}, [
            React.createElement(
              'label',
              { key: 1, htmlFor: 'username' },
              'Username'
            ),
            React.createElement('input', { key: 2, id: 'username' }),
          ]),
          React.createElement('div', {className: 'input-group', key: 2}, [
            React.createElement(
              'label',
              { key: 1, htmlFor: 'password' },
              'Password'
            ),
            React.createElement('input', { key: 2, id: 'password', type: 'password' }),
          ]),
        ]),
      ]),
      React.createElement('a',{href:"https://www.freecodecamp.org/news/what-is-the-virtual-dom-in-react/"},"About virtual dom in react")
      
    ]
  )
  root.render(container)