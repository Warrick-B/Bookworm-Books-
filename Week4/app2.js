var conditionals = new Vue({
el: '#display',
data:{
visable:true, //will be seen when set to true
show: true
},
})

var loop = new Vue({
  el: '#forloop',
  data: {
    units: [   //creating an array with list of unit codes
      { code: 'SIT120'},
      { code: 'SIT113' },
      { code: 'SIT111' },
      { code: 'SIT102' }
    ]
  }
})