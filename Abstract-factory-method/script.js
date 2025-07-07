
//Abstract Factory Pattern (Class-less / Function-Based JavaScript)

const createLightButton = () => ({
    render : () => console.log('Rendering light button')
});

const createLightCheckbox = () => ({
    render : () => console.log('Rendering light checkbox')
});

const createDarkButton = () => ({
    render : () => console.log('Rendering dark button')
});

const createDarkCheckbox = () => ({
    render : () => console.log('Rendering dark checkbox')
});

const lightThemeFactory = () => ({
    createButton : createLightButton(),
    createCheckbox : createLightCheckbox(),
});

const darkThemeFactory = () => ({
    createButton : createDarkButton(),
    createCheckbox : createDarkCheckbox(),
});

const renderUi = (themeFactory) => {
   const button = themeFactory.createButton;
   const checkbox = themeFactory.createCheckbox;
   button.render();
   checkbox.render()
};

const lightTheme = lightThemeFactory();
renderUi(lightTheme);

const darkTheme = darkThemeFactory();
renderUi(darkTheme);

