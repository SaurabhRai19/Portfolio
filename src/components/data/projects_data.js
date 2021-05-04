import tweetme from '../../assets/projects_images/tweetme.PNG'
import chatapp from '../../assets/projects_images/chatapp.JPG'
import hardware_store from '../../assets/projects_images/hardware_store.jpg'
import portfolio from '../../assets/projects_images/portfolio.JPG'
import new_year from '../../assets/projects_images/new_year.jpg'
import color_classification from '../../assets/projects_images/color_classification.jpg'
import blinking from '../../assets/projects_images/blinking.JPG'
import COVID from '../../assets/projects_images/COVID.png'
import Video_Chat from '../../assets/projects_images/Video_Chat.png';
import Pizza_Store_Locator from '../../assets/projects_images/Pizza_Store_Locator.png';

const data_projects = [
    {
        name: 'COVID19 Cases App',
        image: COVID,
        deployed_url: 'https://thirsty-bose-c66415.netlify.app/',
        github_url: 'https://github.com/SaurabhRai19/Covid-App',
        category: ['react.js']
    },

    {
        name: 'Video_Chat',
        image: Video_Chat,
        deployed_url: 'https://video-chat-app-sr-add583.netlify.app/',
        github_url: 'https://github.com/SaurabhRai19/Video-Chat-App',
        category: ['node.js', 'socket.io', 'react.js']
    },

    {
        name: 'Pizza Stores Locator App',
        image: Pizza_Store_Locator,
        deployed_url: 'https://pizza-store-locator-leaflet-sr-65e0e5.netlify.app/',
        github_url: 'https://github.com/SaurabhRai19/PizzaStoreLocatorwithLeaflet',
        category: ['leaflet', 'javascript','vanilla']
    }
]

export default data_projects;