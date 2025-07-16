
function createFile(name){
    return{
        name,
        show(){
            console.log('file' + name)
        }
    }
};

function createFolder(name) {
    const children = [];
    return{
        name,
        add(item){
            children.push(item)
        },
        show(){
            console.log('Folder' + name)
            children.forEach((child) => child.show() )
        }
    }
};

const file1 = createFile('myResume.pdf');
const file2 = createFile('image.png');

const folder1 = createFolder('Docs');
folder1.add(file1);
folder1.add(file2);

const root = createFolder('Root');
root.add(folder1);

root.show();
