const express= require('express');
const {ROUTE_CONSTANTS}=require('./helpers/route_constants');
const app= express();
const bodyparser=require('body-parser');

app.use(bodyparser.urlencoded({extended:false}))

app.use(bodyparser.json())

app.get(ROUTE_CONSTANTS.DEFAULT,function(req,res){
  res.send("<h1> welcome </h1>");
});

app.get(ROUTE_CONSTANTS.GET_LOGIN,function(req,res){
    res.sendFile(__dirname+'/login.html')
});


app.post(ROUTE_CONSTANTS.POST_LOGIN,function(req,res){
    console.log(req.body);
    res.send("login successsfull");
});


app.get(ROUTE_CONSTANTS.GET_REGISTER,function(req,res){
    res.sendFile(__dirname+'/register.html')
});
app.post(ROUTE_CONSTANTS.POST_REGISTER,function(req,res){
    console.log(req.body);
    res.send("register successfully");
});


app.get(ROUTE_CONSTANTS.GET_PRODUCTS,function(req,res){
   const productsData=
        
        [
            {
              "_id": "5f5862491c62c487ab965d63",
              "index": 0,
              "guid": "392e533c-3c7d-4134-b004-4faf87ef54fe",
              "isActive": false,
              "balance": "$2,717.51",
              "picture": "http://placehold.it/32x32",
              "age": 20,
              "eyeColor": "green",
              "name": "Glover Bowman",
              "gender": "male",
              "company": "MONDICIL",
              "email": "gloverbowman@mondicil.com",
              "phone": "+1 (988) 489-3505",
              "address": "864 Alabama Avenue, Chesterfield, Rhode Island, 574",
              "about": "Esse deserunt nostrud ea commodo aute ad non id qui. Nulla culpa esse anim voluptate. Labore dolor culpa nulla deserunt. Deserunt eu incididunt tempor nisi. Ea eu cillum in ad et amet est consectetur quis sint deserunt adipisicing duis adipisicing. Enim minim ad tempor commodo aliquip nostrud ipsum ipsum cupidatat ex et ut.\r\n",
              "registered": "2016-09-13T07:30:06 -06:-30",
              "latitude": 42.508703,
              "longitude": 172.331506,
              "tags": [
                "elit",
                "ex",
                "deserunt",
                "proident",
                "commodo",
                "ad",
                "incididunt"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Poole Matthews"
                },
                {
                  "id": 1,
                  "name": "Amparo Adkins"
                },
                {
                  "id": 2,
                  "name": "Leblanc Hayden"
                }
              ],
              "greeting": "Hello, Glover Bowman! You have 8 unread messages.",
              "favoriteFruit": "strawberry"
            },
            {
              "_id": "5f586249cc430da8b30d74bf",
              "index": 1,
              "guid": "74da57bf-c268-4788-8638-c6d0e78fc258",
              "isActive": false,
              "balance": "$3,117.35",
              "picture": "http://placehold.it/32x32",
              "age": 25,
              "eyeColor": "brown",
              "name": "Wong Cross",
              "gender": "male",
              "company": "GENEKOM",
              "email": "wongcross@genekom.com",
              "phone": "+1 (864) 575-2797",
              "address": "859 Bank Street, Garberville, Indiana, 9327",
              "about": "Do est quis anim Lorem adipisicing. Minim mollit Lorem ea labore commodo ullamco cillum velit occaecat laborum. Non tempor quis consectetur mollit incididunt laborum. Incididunt est id anim cillum ipsum ad officia cupidatat anim et ullamco veniam. Culpa magna sit ipsum duis. Tempor mollit velit minim ad in.\r\n",
              "registered": "2015-05-08T03:17:30 -06:-30",
              "latitude": 44.013678,
              "longitude": 54.593732,
              "tags": [
                "est",
                "ullamco",
                "pariatur",
                "veniam",
                "cillum",
                "incididunt",
                "eiusmod"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Sybil Ratliff"
                },
                {
                  "id": 1,
                  "name": "Lott Larsen"
                },
                {
                  "id": 2,
                  "name": "Ursula Puckett"
                }
              ],
              "greeting": "Hello, Wong Cross! You have 6 unread messages.",
              "favoriteFruit": "apple"
            },
            {
              "_id": "5f58624920ecdc22bb2d9d01",
              "index": 2,
              "guid": "e960e694-9ea7-4d3d-b97f-f55fde063cd7",
              "isActive": true,
              "balance": "$2,063.09",
              "picture": "http://placehold.it/32x32",
              "age": 21,
              "eyeColor": "brown",
              "name": "Alberta Diaz",
              "gender": "female",
              "company": "WATERBABY",
              "email": "albertadiaz@waterbaby.com",
              "phone": "+1 (813) 439-2023",
              "address": "660 Auburn Place, Gardners, Connecticut, 7465",
              "about": "Incididunt cillum dolor Lorem enim deserunt cillum anim aliquip sunt id. Aute in officia sunt pariatur proident ex est voluptate velit. Fugiat elit nostrud anim do. Voluptate qui officia nisi ex consequat deserunt aliqua ad ex aute. Aliqua ut duis anim sint eu cupidatat exercitation fugiat.\r\n",
              "registered": "2018-08-11T09:45:03 -06:-30",
              "latitude": -26.782189,
              "longitude": 74.461829,
              "tags": [
                "laboris",
                "consequat",
                "laboris",
                "minim",
                "reprehenderit",
                "excepteur",
                "sunt"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Hartman Morton"
                },
                {
                  "id": 1,
                  "name": "Tara Hickman"
                },
                {
                  "id": 2,
                  "name": "Schmidt English"
                }
              ],
              "greeting": "Hello, Alberta Diaz! You have 9 unread messages.",
              "favoriteFruit": "strawberry"
            },
            {
              "_id": "5f586249460e4250c0364bfb",
              "index": 3,
              "guid": "6a302929-cec4-4777-8c70-095ed9ebcd71",
              "isActive": true,
              "balance": "$1,437.62",
              "picture": "http://placehold.it/32x32",
              "age": 26,
              "eyeColor": "brown",
              "name": "Andrea Delaney",
              "gender": "female",
              "company": "UNISURE",
              "email": "andreadelaney@unisure.com",
              "phone": "+1 (825) 551-3046",
              "address": "463 Hampton Place, Glenbrook, District Of Columbia, 8375",
              "about": "Ad eu consectetur enim nisi. Sit nisi nisi mollit tempor ullamco anim duis velit amet ut. Enim aliquip et consectetur est aliqua deserunt fugiat culpa et dolor. Sit exercitation duis cupidatat est consequat id occaecat. Officia voluptate pariatur nisi quis enim. Proident ullamco ad dolor nisi. Occaecat minim duis est voluptate.\r\n",
              "registered": "2018-05-12T03:55:34 -06:-30",
              "latitude": 89.702761,
              "longitude": 77.795002,
              "tags": [
                "sint",
                "mollit",
                "ea",
                "officia",
                "amet",
                "ex",
                "in"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Holman Davidson"
                },
                {
                  "id": 1,
                  "name": "Bass Stokes"
                },
                {
                  "id": 2,
                  "name": "Fry Parker"
                }
              ],
              "greeting": "Hello, Andrea Delaney! You have 8 unread messages.",
              "favoriteFruit": "banana"
            },
            {
              "_id": "5f586249c646dd6c3e5944c4",
              "index": 4,
              "guid": "67232263-03a0-424b-ac69-4e663cee23eb",
              "isActive": true,
              "balance": "$3,286.97",
              "picture": "http://placehold.it/32x32",
              "age": 24,
              "eyeColor": "brown",
              "name": "Jeri Santos",
              "gender": "female",
              "company": "PANZENT",
              "email": "jerisantos@panzent.com",
              "phone": "+1 (965) 558-3879",
              "address": "220 Dahl Court, Fairforest, Kentucky, 9561",
              "about": "Cupidatat labore eu minim ipsum duis quis. Dolore officia pariatur irure esse dolor fugiat deserunt aute consequat. Excepteur velit anim commodo exercitation cupidatat ad veniam nisi esse cupidatat. Id sit consectetur culpa anim excepteur deserunt elit ad ut sint eiusmod anim. Ex deserunt quis adipisicing quis ea sunt.\r\n",
              "registered": "2017-09-20T02:56:12 -06:-30",
              "latitude": -45.236822,
              "longitude": 58.219217,
              "tags": [
                "pariatur",
                "reprehenderit",
                "id",
                "adipisicing",
                "ad",
                "adipisicing",
                "nulla"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Ayers Gray"
                },
                {
                  "id": 1,
                  "name": "Rachelle Rios"
                },
                {
                  "id": 2,
                  "name": "Sheree Mann"
                }
              ],
              "greeting": "Hello, Jeri Santos! You have 10 unread messages.",
              "favoriteFruit": "apple"
            },
            {
              "_id": "5f586249dd9685bc8d701d60",
              "index": 5,
              "guid": "4bced336-83da-40ae-9c97-466b4b14872d",
              "isActive": true,
              "balance": "$2,762.44",
              "picture": "http://placehold.it/32x32",
              "age": 23,
              "eyeColor": "blue",
              "name": "Kemp Wolfe",
              "gender": "male",
              "company": "ZOSIS",
              "email": "kempwolfe@zosis.com",
              "phone": "+1 (858) 551-2488",
              "address": "589 Victor Road, Coldiron, Pennsylvania, 3590",
              "about": "Eu proident consequat laboris mollit aliquip est nostrud ullamco ipsum esse ea deserunt elit. Culpa tempor ut nulla et ad magna veniam. Nulla ipsum eiusmod consectetur veniam. Pariatur tempor commodo pariatur ipsum voluptate velit cupidatat commodo mollit. Ipsum qui labore ullamco voluptate magna amet enim reprehenderit ea ea qui tempor.\r\n",
              "registered": "2020-08-22T06:13:38 -06:-30",
              "latitude": -46.76753,
              "longitude": -142.950118,
              "tags": [
                "fugiat",
                "deserunt",
                "tempor",
                "magna",
                "sint",
                "deserunt",
                "magna"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Hale Vega"
                },
                {
                  "id": 1,
                  "name": "Chase Reeves"
                },
                {
                  "id": 2,
                  "name": "Clarissa Stevenson"
                }
              ],
              "greeting": "Hello, Kemp Wolfe! You have 3 unread messages.",
              "favoriteFruit": "strawberry"
            },
            {
              "_id": "5f5862497856958cb9defd8e",
              "index": 6,
              "guid": "04776354-455c-43dd-9349-665f1c90f69d",
              "isActive": false,
              "balance": "$3,452.61",
              "picture": "http://placehold.it/32x32",
              "age": 33,
              "eyeColor": "brown",
              "name": "Gomez Wynn",
              "gender": "male",
              "company": "BUGSALL",
              "email": "gomezwynn@bugsall.com",
              "phone": "+1 (935) 537-2831",
              "address": "336 Schenck Street, Yardville, Oregon, 4731",
              "about": "Quis esse exercitation adipisicing eiusmod sint adipisicing ut adipisicing esse fugiat ullamco Lorem elit. Cupidatat cupidatat veniam non irure velit consequat voluptate. Consectetur et adipisicing deserunt sunt Lorem qui nostrud ad sunt.\r\n",
              "registered": "2016-02-21T01:38:37 -06:-30",
              "latitude": 58.321468,
              "longitude": 27.202065,
              "tags": [
                "excepteur",
                "ex",
                "tempor",
                "enim",
                "et",
                "nisi",
                "nostrud"
              ],
              "friends": [
                {
                  "id": 0,
                  "name": "Foreman Cobb"
                },
                {
                  "id": 1,
                  "name": "Cathy Nichols"
                },
                {
                  "id": 2,
                  "name": "Claudette Weber"
                }
              ],
              "greeting": "Hello, Gomez Wynn! You have 4 unread messages.",
              "favoriteFruit": "strawberry"
            }
          ];
  
          res.json(productsData)
});

app.get(ROUTE_CONSTANTS.GET_FILE,function(req,res)
{
    res.sendFile(__dirname+"/spa.txt")
})
app.listen(3000);