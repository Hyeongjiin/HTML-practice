var Body = {
    setColor:function(color){
        // var target = document.querySelector('body')
        // target.style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor:function(color){
        // var target = document.querySelector('body')
        // target.style.backgroundColor = color;
        $('body').css('backgroundColor', color);
    }
}
var Links = {
    setColor:function(color){
        // var alist = document.querySelectorAll('a')
        // var i = 0
        // while(alist.length > i)
        // {
        //     alist[i].style.color= color;
        //     i += 1;
        // }
        $('a').css('color', color);
    }
}

function nightDayHandler(self){
    if(self.value === 'night'){
        Body.setBackgroundColor('black')
        Body.setColor('white')
        self.value = 'day'

        Links.setColor('powderblue')
    }
    else{
        Body.setBackgroundColor('white')
        Body.setColor('black')
        self.value = 'night'

        Links.setColor('green')
    }
}