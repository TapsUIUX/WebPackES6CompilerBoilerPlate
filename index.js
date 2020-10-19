import HelloWorld from 'components/renderDom';
import 'main.css';

const main = async () => {
    HelloWorld();
}

main().then(() => console.log('Started')); 