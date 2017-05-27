(function(root) {
    root.animate = function() {
    
        var tl = new TimelineLite({});
        var rect = document.getElementById('rect');
        var circle = document.getElementById('circle');
        var letterM = document.getElementById('letter-m');

        MorphSVGPlugin.convertToPath('circle, rect');

        tl.to('#rect', 1, {
            morphSVG:{shape:'#circle'},
            ease:Sine.easeInOut
        }, '+=1')
        .fromTo('#letter-m', 1, {drawSVG:'0 0'}, {drawSVG:'0% 100%'}, '+=0.5');
    }
}(this));