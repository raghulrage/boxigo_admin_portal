






var drop=new Vue({
    el:'#drop',
    data:{
        custlists:[
            {
                name:"edwin",
                phoneno:"9889898799",
                email:"fhiehfi@gmail.com",
                dateofjoin:"3.4.19",
                address:"karnataka",
                type:"Elite ",
            },
            {
                name:"Sammitha",
                type:"Normal ",
            },   {
                name:"Venkatesh",
                type:"Low ",
            }
        ],
        vendlists:[
            {
                name:"edwin",
                phoneno:"9889898799",
                email:"fhiehfi@gmail.com",
                dateofjoin:"3.4.19",
                address:"karnataka",
            },
            {
                name:"Sammitha"
            },  
            {
                name:"Venkatesh"
            },
            {
                name:"Pinto"
            }
        ],
        newvendlists:[
            {
                name:"edwin",
                phoneno:"9889898799",
                email:"fhiehfi@gmail.com",
                dateofjoin:"3.4.19",
                address:"karnataka",
            },
            {
                name:"Sammitha"
            },   {
                name:"Venkatesh"
            },
            {
                name:"Sam"
            },
            {
                name:"Jeevan"
            }
        ],
        lists:[

            {
                name:"yadhu",
                movingfrom:"19th, A Ejipura, BangaloreCross",
                movingto:"19th, A Ejipura, BangaloreCross",
                movingdistance:"Moving Distance 50 KM",
                dateofshifting:"23/06/2019",
                movetype:"2 BHK",
                totalitems:"25",
                number:"678987654",
                items:[
                    'cot 1',
                    'table 2',
                    'chair 4',
                    'sofa',
                    'TV' ,
                    'chair 4',
                    'sofa',
                    'TV',
                    'light'
                ]
            },
            {
                name:"venkatesh",
                age:'21',
                items:[
                    'cot 1',
                    'table 2',
                    'chair 4',
                    'dresser 1',
                    'fan 2'
                ]
            },
            {
                name:"venkat",
                age:'21',
                items:[
                    'cot 1',
                    'table 2',
                    'chair 4',
                    'tablemate 1',
                    
                ]
            },
            {
                name:"ve",
                age:'21',
                items:[
                    'cot 1',
                    'table 2',
                    'chair 4',
                    'sofa 2',
                    'cub board 1',
                    'washing machine 1'
                ]
            }
        ],
        lists2:[
            {
                name:"yadhu2",
                movingfrom2:"19th, A Ejipura, BangaloreCross",
                movingto:"19th, A Ejipura, BangaloreCross",
                movingdistance2:"Moving Distance 50 KM",
                name:"edwin1",
                dateofshifting2:"Jul.23",
                movingtype2:" 2 BHK",
                totalitems2:" 25",
                number2:"6789876546",
                requestedtime2:"5pm",
                vendors2:[
                    {
                        name:"venkatesh",
                        contact:"3456543456",
                        quote:'20000',
                    },
                    {
                        name:"venkatesh",
                        contact:"3456543456",
                        quote:''
                    },
                    {
                        name:"venkatesh",
                        contact:"3456543456",
                        quote:''
                    },
                    {
                        name:"venkatesh",
                        contact:"3456543456",
                        quote:''
                    }
                ]
            },
            {
                name:"venkatesh2",
                age:'21',
                date:'13.08.2018',
                vendors2:[],
                quote:''
            },
            {
                name:"venkat2",
                age:'21',
                date:'14.08.2018',
                vendors2:[],
                quote:""
            },
            {
                name:"ve2",
                age:'21',
                date:'15.08.2018',
                vendors2:[],
                quote:"20000"
            }
        ],
        lists3:[
            {
                name:"yadhu23",
                date:"july 3",
                movingfrom3:"19th, A Ejipura, BangaloreCross",
                movingto3:"19th, A Ejipura, BangaloreCross",
                movingdistance3:"Moving Distance 50 KM",
                dateofshifting3:"July 23",
                movetype3:"2 BHK",
                totalitems3:"25",
                companyconformedfor3:"Plan Packers And Movers ",
                numberofcompany3:"9487874439",
                amount3:"18000 ",


            },
            {name:"venkatesh23",age:'21'},
            {name:"venkat23",age:'21'},
            {name:"ve23",age:'21',},
            
        ],
        lists4:[
            {
                name:"yadhu24",
                movingfrom4:"19th, A Ejipura, BangaloreCross",
                movingto4:"19th, A Ejipura, BangaloreCross",
                movingdistance4:"Moving Distance 50 KM",
                dateofshifting4:"23/06/2019",
                movingtype4:"2 BHK",
                totalitems4:"25",
                Cancelledon4:"6pm",
            },
            {
                name:"venkatesh24",
                age:'21'
            },
            {
                name:"venkat24",
                age:'21'
            },
            {
                name:"ve24"
                ,age:'21'
            },
            {
                name:"ve234"
                ,age:'21'
            }
        ],
    
     height:"300vh",
     height1:"100vh",
     count:0,
     display:"none",
     display1:"block",
    colors:[],
    model:false,
        
    },
    methods:{
        
        drop1(id1){
            var ids1 = document.getElementById(id1);
          if((this.count++)%2!=0 ){
            console.log(this.count);
                console.log("even");
               return ids1.style.maxHeight=this.height1; 
          }
        
            ids1.style.maxHeight=this.height;
       
           
           
        //    ids1.style.display=this.display1;
        //    this.display="block"
           
       
        },
        drop2(id2,val){
            
            var ids2 = document.getElementById(id2);
            ids2.style.display=this.display;
        },
        drop12(id1){
            var ids1 = document.getElementById(id1);
           ids1.style.maxHeight=this.height;
            
           console.log(ids1);

        },  drop22(id2){
            var ids2 = document.getElementById(id2);
            // this.height="100px";
        },
        modelclose(id){
            this.model=false;
            console.log(id);
        },
        modelopen(id){
            this.model=true;
            var ids=document.getElementById(id);
            ids.style.display="block"
            console.log(id);
        }
        
        
    },

});

