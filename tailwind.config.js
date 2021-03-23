// module.exports = {
//   purge: [],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     colors:{
//       'purple': '#6C00FF',
//       'lightpurple':'#E5D9F6;',
//       'darkblue':'#192734'

//     },

//     extend: {
    
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// }


module.exports = {
    theme: {
        extend: {
            backgroundColor: theme => ({
                ...theme('colors'),
                'purple': '#6C00FF',
                'lightpurple':'#E5D9F6;',
                'darkblue':'#192734'

                
            }),
            colors: {
                'purple': '#6C00FF',
                'lightpurple':'#E5D9F6;',
                'darkblue':'#192734'

            },
            textColor: {
                
                


            },
            boxShadow:{
               
            },
            borderRadius:{
               
            },
            borderColor: theme => ({
                ...theme('colors'),
                
                
            }),
        },
    },

}
