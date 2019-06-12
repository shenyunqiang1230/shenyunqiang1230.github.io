console.log('hello world')
var lovelyGril = (function () {
    var name = '鸭梨傻';
    var age = 18;
    function BeautifulGirl() {
        this.race = 'sprite';
    }
    var like = new BeautifulGirl();

    like.herName = name;
    like.herAge = age;
    return like;
}());
console.log(lovelyGril)
