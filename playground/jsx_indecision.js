const app = {
    title:'Indecision App',
    subtitle:'Put your life in the hands of computer',
    options:[]
};

const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;
    // console.log(option)
    // event.target.elements.option.value = '';
    if(option){
        app.options.push(option);
        renderApplication();
        event.target.elements.option.value = ''
    }
};


const appRoot = document.getElementById('app');


const removeAllElements = () => {
    app.options= [];
    renderApplication();
};


const onMakeDecision = ()=> {
        const randomNum = Math.floor(Math.random() * (app.options.length));
        const selectedItem = app.options[randomNum];
        alert(selectedItem);
};


const renderApplication = () => {

const template = ( 
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length>0 ? 'Here are your options':'No Options'}</p>
        <p>Total Items: {app.options.length}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What Should I Do ?</button>
        <ol>
            {
                app.options.map(option=><li key={option}>{option}</li>)
            }
        </ol>
        
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" autoComplete="off"/>
            <button>Add Option</button>
            <button onClick={removeAllElements}>Remove All</button>
        </form>
    </div>
);
ReactDOM.render(template,appRoot)
};
renderApplication();