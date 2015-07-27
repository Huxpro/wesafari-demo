({
    appDir: './src',
    baseUrl: './js',
    dir: './dist',
    modules: [
        {
            name: 'app'
        }
    ],
    fileExclusionRegExp: /^(r|build)\.js$/,
    optimizeCss: 'standard',
    removeCombined: true,
    paths: {
        React : "lib/react-with-addons",
        FastClick: "http://cdn.bootcss.com/fastclick/1.0.3/fastclick.min",
        Chart: "lib/Chart",
        IScroll: "lib/iscroll",
        Router: "lib/director"
    },
    shim: {
        'IScroll': {
            exports: "IScroll"
        },
        'Router': {
            exports: "Router"
        }
    },
    packages: [
        {
            name: "ReactChart",
            location: "lib/react-chart",
            main: "index"
        }
    ]
})
