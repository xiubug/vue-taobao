import Mock from 'mockjs'

const tbanners = [{
    url: 'https://market.m.taobao.com/markets/diy/xingqushouzaozhuhuichang?wh_ttid=phone&amp;scm=2027.1007_12948_90513_100200300000000_84900_1_127009_18797.18797.27905&amp;item_id=550111061438&amp;activity_id=127009&amp;spm=a215s.7406091.1.home-1-5-1&amp;locate=home-1-5-1',
    img: '//gw.alicdn.com/imgextra/i2/111/TB2KjeJev6H8KJjy0FjXXaXepXa_!!111-0-luban.jpg_q50.jpg'
}, {
    url: 'https://click.mz.simba.taobao.com/ecpm?e=y2izy936sbOm7JZHpWwQvxsQmLP5zomMZURbdzjY3x1Wte9YjtBuHKSx9e2NAokHf%2Br7VAWC%2FGcqSzJ2i2ivIsqyNMGMHOJEUK7RDtIZydUyXElRAMLwo62Qb3Xy%2B8KVkhmz%2BE4AO%2BJfWlhn61lQT0w2bmrVnXERoa4mkULV16H28nKX%2BFS8m8K9UT9VU9ODRtSV09hKFTa%2FQOhcJUl3oEBpogdpLIC1B2XsSpylVvIxoKI%2FsmBzsOnq6QCK53Laii3ZVTCVFSCshs00%2B32YmOb6NAeXLslJ9h%2BBJsts%2F3cndZkZxLZmgPZrTaNnm9tc6%2F8wBp9sZ8mIRffUiFBkqWBllfH7I47mP0AqE3pUoTdzYx2yBOhIWl9VrpNpzN5yWSdRYnm6PLqgtabXazpLhvyiAUbRHn0CM4XUgDWiOTw%3D&amp;u=https%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Frefpid%3Decpm&amp;k=429',
    img: '//aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg'
}, {
    url: 'https://click.mz.simba.taobao.com/ecpm?e=LktUoZHnq7am7JZHpWwQvxsQmLP5zomMyOBPwp06TF2q5c3ToCGnn2voI5ofz7Jif%2Br7VAWC%2FGcqSzJ2i2ivIsqyNMGMHOJEUK7RDtIZydUyXElRAMLwo4UI%2F6mtzqpw2K1R%2BP4TeoSJ11TBr%2BxZR0w2bmrVnXERaCZ8Zq0G3wJIlCN8EvRBb8K9UT9VU9ODRtSV09hKFTa%2FQOhcJUl3oEBpogdpLIC1B2XsSpylVvIxoKI%2FsmBzsOnq6QCK53Laii3ZVTCVFSCshs00%2B32YmOb6NAeXLslJ9h%2BBJsts%2F3cndZkZxLZmgPZrTaNnm9tc6%2F8wBp9sZ8mIRffUiFBkqWBllfH7I47mP0AqE3pUoTdzYx2yBOhIWl9VrpNpzN5yWSdRYnm6PLqgtabXazpLhvyiAUbRHn0CM4XUgDWiOTw%3D&amp;u=https%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Frefpid%3Decpm&amp;k=429',
    img: '//aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg'
}, {
    url: 'https://www.tmall.hk/wow/import/act/guojizhiyingmuying?scm=2027.1007_12948_90513_100200300000000_84900_4_126924_19725.19725.27812&amp;item_id=531580993706&amp;activity_id=126924&amp;spm=a215s.7406091.1.home-1-5-4&amp;locate=home-1-5-4',
    img: '//gw.alicdn.com/imgextra/i4/62/TB2W.pseCYH8KJjSspdXXcRgVXa_!!62-0-lubanu.jpg_q50.jpg'
}, {
    url: 'https://pages.tmall.com/wow/import/18568/healthyblackfriday?wh_weex=true&amp;scm=2027.1007_12948_90513_100200300000000_84900_5_127429_19969.19969.28444&amp;item_id=558521805430&amp;activity_id=127429&amp;spm=a215s.7406091.1.home-1-5-5&amp;locate=home-1-5-5',
    img: '//gw.alicdn.com/imgextra/i2/77/TB2oSTyeMnH8KJjSspcXXb3QFXa_!!77-0-luban.jpg_q50.jpg'
}, {
    url: 'https://www.tmall.hk/wow/import/18568/bfelectrical?wh_weex=true&amp;scm=2027.1007_12948_90513_100200300000000_84900_6_127181_19967.19967.28447&amp;item_id=558806969394&amp;activity_id=127181&amp;spm=a215s.7406091.1.home-1-5-6&amp;locate=home-1-5-6',
    img: '//gw.alicdn.com/imgextra/i1/127/TB23M7leCYH8KJjSspdXXcRgVXa_!!127-0-luban.jpg_q50.jpg'
}, {
    url: 'https://pages.tmall.com/wow/act/18512/jiadianfenhuichang?scm=2027.1007_12948_90513_100200300000000_84900_7_127213_19603.19603.27626&amp;item_id=527994525166&amp;activity_id=127213&amp;spm=a215s.7406091.1.home-1-5-7&amp;locate=home-1-5-7',
    img: '//gw.alicdn.com/imgextra/i2/35/TB2aKwVexrI8KJjy0FpXXb5hVXa_!!35-0-lubanu.jpg_q50.jpg'
}, {
    url: 'https://pages.tmall.com/wow/chaoshi/act/fblxjsyx?scm=2027.1007_12948_90513_100200300000000_84900_8_113811_19228.19228.26929&amp;item_id=24098036022&amp;activity_id=113811&amp;spm=a215s.7406091.1.home-1-5-8&amp;locate=home-1-5-8',
    img: '//gw.alicdn.com/imgextra/i4/5/TB2ALZ6hwn.PuJjSZFkXXc_lpXa_!!5-0-luban.jpg_q50.jpg'
}]

/**
 * 获取首页banner图
 * @param
 * @return 
 */

export const getHomeBanner = () => Mock.mock('url', {
    code: 0,
    msg: '',
    data: tbanners
})
