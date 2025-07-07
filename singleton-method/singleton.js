
// using singleton in module file

const singleton = (() => {
    let instance;
    const createInstance = (config) => {
        return{
          name : config.name,
          version : config.version,
          createdAt : new Date(),
        };
    }
    return {
        getInstance : (config) => {
            if(!instance){
                instance = createInstance(config);
            }
            return instance;
        }
    }
})();

export default singleton;