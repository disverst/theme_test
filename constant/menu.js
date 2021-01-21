export const MENUITEMS = [
   {
      title: 'Сервисы', type: 'link', children: [
         { path: '/layouts/agency', title: 'Agency', type: 'link' },
      ],
   },
   {
      title: 'О нас', type: 'link', children: [
         {
            title: 'Blog Grid View', type: 'sub', children: [
               { path: '/blog/blog-grid/column-no-sidebar', title: 'No Sidebar', type: 'link' },
               { path: '/blog/blog-grid/column-left-sidebar', title: 'Left Sidebar', type: 'link' },
               { path: '/blog/blog-grid/column-right-sidebar', title: 'Right Sidebar', type: 'link' },
               { path: '/blog/blog-grid/classic-no-sidebar', title: 'Full Width No Sidebar', type: 'link' },
               { path: '/blog/blog-grid/classic-right-sidebar', title: 'Full Width Right Sidebar', type: 'link' },
               { path: '/blog/blog-grid/classic-left-sidebar', title: 'Full Width Left Sidebar', type: 'link' }
            ]
         },
      ]
   },
   {
      title: 'Процессы', type: 'link', children: [
         { path: '/page/404', title: '404', type: 'link' },
         { path: '/page/faq', title: 'FAQ', type: 'link' },
         { path: '/page/typography', title: 'Typography', type: 'link' },
         { path: '/page/maintenance', title: 'Maintenance', type: 'link' },
         { path: '/page/about-us', title: 'About us', type: 'link' },

         {
            title: 'Team', type: 'sub', children: [
               { path: '/page/team', title: 'Team', type: 'link' },
               { path: '/page/team-grid', title: 'Team Grid', type: 'link' },
               { path: '/page/team-list', title: 'Team List', type: 'link' }]
         },
         {
            title: 'Comming Soon', type: 'sub', children: [

               { path: '/page/commingsoon1', title: 'Comming Soon1', type: 'link' },
               { path: '/page/commingsoon2', title: 'Comming Soon2', type: 'link' }]
         }]
   },
   {
      title: 'Отзывы', type: 'link', children: [
         {
            title: 'Elements1', type: 'sub', children: [
               { path: '/elements/alerts', title: 'Alerts', type: 'link', icon: 'alert' },
               { path: '/elements/accordion', title: 'Accordion', type: 'link', icon: 'layout-accordion-merged' },
               { path: '/elements/boxshadow', title: 'Box Shadow', type: 'link', icon: 'layers' },
               { path: '/elements/button', title: 'Buttons', type: 'link', icon: 'write' },
               { path: '/elements/contact', title: 'Contact', type: 'link', icon: 'map-alt' },]
         },
      ]
   },
   {
      title: 'Новости', type: 'link', children: [
         {
            title: 'Portfolio-Basic', type: 'link', children: [
               { path: '/portfolio/basic-2-grid', title: 'Basic – 2 Grid', type: 'link' },
               { path: '/portfolio/basic-3-grid', title: 'Basic – 3 Grid', type: 'link' },
               { path: '/portfolio/basic-4-grid', title: 'Basic – 4 Grid', type: 'link' },
               { path: '/portfolio/portfolio-title-2-col', title: 'Basic W Tittle – 2 Grid', type: 'link' },
               { path: '/portfolio/portfolio-title-3-col', title: 'Basic W Tittle – 3 Grid', type: 'link' },
               { path: '/portfolio/portfolio-title-4-col', title: 'Basic W Tittle – 4 Grid', type: 'link' },
               { path: '/portfolio/portfolio-parallex', title: 'Parallex', type: 'link' },
               { path: '/portfolio/centered-slide', title: 'Centered Slides', type: 'link' },
               { path: '/portfolio/vertical-slide', title: 'Vertical Slides', type: 'link' },
               { path: '/portfolio/multiple-carousel', title: '4 Slide With Center Slider', type: 'link' }]
         },
      ]
   },
   {
      title: 'Контакты', type: 'link', children: [
         {
            title: 'Header Style', type: 'link', children: [
               { path: '/features/header-light', title: 'Light Header', type: 'link' },
               { path: '/features/header-dark', title: 'Dark Header', type: 'link' },
               { path: '/features/header-transparent', title: 'Glass Header', type: 'link' },
               { path: '/features/header-right-navigation', title: 'Header Right Navigation', type: 'link' },
               { path: '/features/header-center-logo', title: 'Header Center Logo', type: 'link' }]
         },
      ]
   },
]
