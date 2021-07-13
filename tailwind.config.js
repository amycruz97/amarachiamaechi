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
                 'purple': '#6C00FF',
                'lightpurple':'#E5D9F6;',
                'darkblue':'#192734'



            },
            boxShadow:{
                '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
               '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
               '4xl': '0 55px 70px -15px rgba(0, 0, 0, 0.3)',
            },
            borderRadius:{
               
            },
            borderColor: theme => ({
                ...theme('colors'),
                'purple': '#6C00FF',
                'lightpurple':'#E5D9F6;',
                'darkblue':'#192734'
                
            }),
        },
    },

}
