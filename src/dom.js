console.log('dom file');

const body = document.body;

const styleBody = () => { 
    body.style.background = 'hotpink';
}

const addTitle = title => { 
    const heading = document.createElement('h1');
    heading.textContent = title;
    body.append(heading);
}

const name = 'ahmed';

export {styleBody , addTitle , name};