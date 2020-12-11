// !INCLUSIONE VUE
import Vue from 'vue';


const painter = new Vue ({
    el: '#painterApp',

    data: {
        logoLinksItems: [
        {
            link: 'Products',
        },
        {
            link: 'Brushes',
        },
        {
            link: 'Wacom Tablet',
        },
        {
            link: 'Special Offers',
        },
        {   
            link: 'Trials',
        },
        {
            link: 'Business'
        },
        {
            link: 'Support'
        },
        {
            link: 'Learning'
        }
    ],
    }
})