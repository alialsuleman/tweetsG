// Countries  -> States ->  Cities 

// three degree of fire   (1, 2, 3 )   
/**
 *       the pattern is   feel , location and time 
 */
let patterns = [];
patterns[0] = [
    "  feel concerned there is a fire in {location} , is it under control?",
    "  am worried about a minor fire in {location} since, any updates?",
    "  feel a sense of urgency due to a small fire in {location} ",
    "  am troubled by a fire in {location} . Is the situation stable?",
    "  am uneasy about a fire in {location} . Any developments?",
    "  feel a mix of fear and sorrow as there is a fire  . Is it contained ?",
    "  am on edge due to a small fire in {location} . How is it progressing?",
    "  am concerned about a fire in {location} . Is it being managed?",
    "  feel worried as there is a minor fire in {location}. What's the current status?",
    "  am anxious about a fire in {location} . Any information on its status?",
    "  feel concerned about a fire in {location} . Any updates on containment?",
    "  am worried there is a small fire in {location} . Is it still ongoing?",
    "  feel uneasy about a fire in {location} . What actions are being taken?",
    "  am troubled by a minor fire in {location} . Is it under control?",
    "  am concerned about a fire in {location} . Any information on the situation?",
    "  feel a mix of fear and sorrow as there is a fire in {location} that started {time} ago. What measures are in place?",
    "  am on edge due to a small fire in {location} . Is it spreading?",
    "  am worried about a fire in {location} . Any developments?",
    "  feel anxious there is a fire in {location} . How severe is it?",
    "  am concerned about a minor fire in {location} . What's the current status?",
    "  feel concerned there is a fire in {location}. How quickly is it spreading?",
    "  am worried about a small fire in {location} . Any updates on containment?",
    "  feel uneasy there is a fire in {location}. Is it posing a threat?",
    "  am troubled by a minor fire in {location} . What measures are being taken?",
    "  am concerned about a fire in {location}. Is it under control?",
    "  feel a mix of fear and sorrow as there is a fire in {location} . Any information on the situation?",
    "  am on edge due to a small fire in {location} . What's the current status?",
    "  am worried about a fire in {location} . Any developments?",
    "  feel anxious there is a minor fire in {location} . How severe is it?",
    "  am concerned about a fire in {location} . Is it spreading?",
    "  feel uneasy there is a fire in {location} . Has it been contained?",
    "  am concerned about a small fire in {location}. Any updates on control efforts?",
    "  feel worried there is a fire in {location} . What measures are being taken?",
    "  am troubled by a minor fire in {location} . Is it under control?",
    "  am concerned about a fire in {location} . How is it being managed?",
    "  feel a mix of fear and sorrow as there is a fire in {location}. Any information on containment?",
    "  am on edge due to a small fire in {location} . What's the current status?",
    "  am worried about a fire in {location} . Any developments?",
    "  feel anxious there is a minor fire in {location} . How severe is it?",
    "  am concerned about a fire in {location} . Is it spreading?"

]
patterns[1] = [
    "  feel alarmed there is a moderate fire in {location} . Is it escalating?",
    "  am uneasy about a significant fire in {location} . Any updates on containment?",
    "  feel a mix of concern and fear due to a notable fire in {location} ",
    "  am troubled by a moderate fire in {location} . Is it under control?",
    "  am on edge due to a considerable fire in {location} . What's the status?",
    "  feel apprehensive about a moderate fire in {location}. Has it been contained ?",
    "  am concerned about a fire in {location}  . What measures are being taken?",
    "  feel worried as there is a significant fire in {location}  . Any progress updates?",
    "  am anxious about a fire in {location}  . How is the situation evolving?",
    "  feel uneasy about a notable fire in {location}  . Is there a containment plan in place?",
    "  feel alarmed about a significant fire in {location}  . Any updates on containment?",
    "  am uneasy there is a moderate fire in {location} . Is it still ongoing?",
    "  feel a mix of concern and fear due to a fire in {location}  . What actions are being taken?",
    "  am troubled by a notable fire in {location}  . Is it under control?",
    "  am on edge due to a moderate fire in {location}  . Any information on the situation?",
    "  feel apprehensive about a considerable fire in {location}  . What measures are in place?",
    "  am concerned about a fire in {location}  . Is it spreading?",
    "  feel worried there is a significant fire in {location} . Any developments?",
    "  am anxious about a moderate fire in {location} . How severe is it?",
    "  feel uneasy about a notable fire in {location}  . What's the current status?",
    "  feel alarmed about a significant fire in {location}  . How quickly is it escalating?",
    "  am uneasy there is a moderate fire in {location} . Any updates on containment?",
    "  feel a mix of concern and fear due to a notable fire in {location} . Is it posing a threat?",
    "  am troubled by a moderate fire in {location} . What measures are being taken?",
    "  am on edge due to a considerable fire in {location} . Is it under control?",
    "  feel apprehensive about a moderate fire in {location} . Any information on the situation?",
    "  am concerned about a fire in {location} . What's the current status?",
    "  feel worried there is a significant fire in {location} . Any developments?",
    "  am anxious about a moderate fire in {location}  . How severe is it?",
    "  feel uneasy about a notable fire in {location}  . Is it spreading?",
    "  feel troubled there is a significant fire in {location} . How quickly is it escalating?",
    "  am uneasy about a moderate fire in {location}  . Any updates on containment?",
    "  feel a mix of concern and fear due to a notable fire in {location} . Is it posing a threat?",
    "  am alarmed by a moderate fire in {location}  . What measures are being taken?",
    "  am on edge due to a considerable fire in {location} . Is it under control?",
    "  feel concerned about a moderate fire in {location} . Any information on the situation?",
    "  am worried there is a fire in {location} . What's the current status?",
    "  feel uneasy there is a significant fire in {location} . Any developments?",
    "  am anxious about a moderate fire in {location} . How severe is it?",
    "  feel apprehensive about a notable fire in {location} . Is it spreading?"
]
patterns[2] = [
    "  feel terrified there is a severe fire in {location}  . Are evacuations in progress?",
    "  am deeply concerned about a major fire in {location}  . What emergency measures are in place?",
    "  feel a sense of urgency and fear due to a critical fire in {location} ",
    "  am troubled by a severe fire in {location}. How severe is the situation?",
    "  am on edge due to a dangerous fire in {location} . What's the emergency response?",
    "  feel a mix of fear and sorrow as there is a critical fire in {location}. Any updates on evacuations?",
    "  am anxious about a severe fire in {location} . What's the status of firefighting efforts?",
    "  am deeply worried as there is a major fire in {location} . Is the area being evacuated?",
    "  feel terrified about a fire in {location} . What safety precautions are in place?",
    "  am on edge due to a critical fire in {location} . How severe is the impact on the surrounding areas?",
    "  feel terrified about a severe fire in {location} . Any updates on containment?",
    "  am deeply concerned there is a major fire in {location} . Is it still ongoing?",
    "  feel a sense of urgency and fear due to a critical fire in {location} . What actions are being taken?",
    "  am troubled by a severe fire in {location} . Is it under control?",
    "  am on edge due to a dangerous fire in {location} . Any information on the situation?",
    "  feel a mix of fear and sorrow as there is a critical fire in {location} . What measures are in place?",
    "  am anxious about a severe fire in {location} . Is it spreading?",
    "  am deeply worried there is a major fire in {location} . Any developments?",
    "  feel terrified about a fire in {location} . How severe is it?",
    "  am on edge due to a critical fire in {location}  . What's the current status?",
    "  feel terrified about a severe fire in {location} . How quickly is it escalating?",
    "  am deeply concerned there is a major fire in {location} . Any updates on evacuations?",
    "  feel a sense of urgency and fear due to a critical fire in {location} . Is it posing a threat?",
    "  am troubled by a severe fire in {location} . What emergency measures are in place?",
    "  am on edge due to a dangerous fire in {location}  . Is it under control?",
    "  feel a mix of fear and sorrow as there is a critical fire in {location} . Any information on evacuations?",
    "  am anxious about a severe fire in {location} . What's the status of firefighting efforts?",
    "  am deeply worried there is a major fire in {location} . How severe is the impact on the surrounding areas?",
    "  feel terrified about a fire in {location} . Any updates on evacuations?",
    "  am on edge due to a critical fire in {location} . Is it still ongoing?",
    "  feel deeply concerned about a severe fire in {location} . How quickly is it escalating?",
    "  am troubled there is a major fire in {location} . Any updates on evacuations?",
    "  feel a sense of urgency and fear due to a critical fire in {location} . Is it posing a threat?",
    "  am terrified by a severe fire in {location} . What emergency measures are in place?",
    "  am on edge due to a dangerous fire in {location} . Is it under control?",
    "  feel a mix of fear and sorrow as there is a critical fire in {location} . Any information on evacuations?",
    "  am anxious about a severe fire in {location} . What's the status of firefighting efforts?",
    "  am deeply worried there is a major fire in {location} . How severe is the impact on the surrounding areas?",
    "  feel terrified about a fire in {location} . Any updates on evacuations?",
    "  am on edge due to a critical fire in {location} . Is it still ongoing?"
]


let eventt = [];
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

class Graph {
    // defining vertex array and
    // adjacent list
    ans = new Array();
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }

    addVertex(v) {
        this.AdjList.set(v, []);
    }
    addEdge(v, w) {
        // console.log(w + ' ' + v);
        this.AdjList.get(v).push(w);
        /// this.AdjList.get(w).push(v);
    }

    dfs(startingNode) {

        var visited = {};
        this.ans = new Array();
        this.DFSUtil(startingNode, visited);
        //console.log(this.ans)
    }


    DFSUtil(vert, visited) {
        visited[vert] = true;

        let node = vert;

        if (eventt[node])
            for (let h of eventt[node]) {
                this.ans.push(h)
                //console.log(h);
            }

        //console.log('dfs : ' + node + ' ' + eventt[node])
        var get_neighbours = this.AdjList.get(vert);
        for (var i in get_neighbours) {
            var get_elem = get_neighbours[i];

            if (!visited[get_elem]) {
                // console.log('w' + get_elem)
                this.DFSUtil(get_elem, visited);
            }
        }
        // console.log(ans);
    }
}
let cnt = 1;
var g = new Graph(6);
var vertices = [];

// adding vertices

class FireTask {
    constructor(city, degree, time, state, countery) {
        this.city = city;
        this.state = state;
        this.countery = countery;
        this.degree = degree;
        this.time = time;
    }
}
class Tweet {
    constructor(time, text, user) {
        this.time = time;
        this.text = text;
        this.user = user;
    }
}



var fs = require("fs");





(async () => {



    const express = require('express');
    // const mysql = require('mysql2/promise');

    //  const connection = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'dataset' });
    const app = express();

    // let [countries, aaa] = await connection.execute('SELECT id, name FROM Countries ');
    //let [states, aa] = await connection.execute('SELECT id,	name, country_id FROM states ');
    // let [cities, a] = await connection.execute('SELECT id	,name,state_id FROM  cities ');
    let xx = '';
    // for (let x of cities) {
    //     xx += x.id + ' ' + x.name + ' ' + x.state_id + '\n';
    // }

    let xxx = fs.readFileSync("countries.txt").toString().split('\n');
    let countries = new Array();
    for (let x of xxx) {
        let o = x.split(' ');
        let r = {
            id: o[0],
            name: o[1]
        }
        for (let j = 2; j < o.length; j++) {
            r.name += o[j];
        }
        countries.push(r);
    }

    xxx = fs.readFileSync("states.txt").toString().split('\n');
    let states = new Array();
    for (let x of xxx) {
        let o = x.split(' ');
        // console.log(o);
        let r = {
            id: o[0],
            name: o[1],
            country_id: +o[o.length - 1]
        }
        for (let j = 2; j < o.length - 1; j++) {
            r.name += o[j];
        }
        states.push(r);
    }
    xxx = fs.readFileSync("cities.txt").toString().split('\n');
    cities = new Array();
    for (let x of xxx) {
        let o = x.split(' ');
        let r = {
            id: o[0],
            name: o[1],
            state_id: +o[o.length - 1]
        }
        for (let j = 2; j < o.length - 1; j++) {
            r.name += o[j];
        }
        cities.push(r);
    }


    //console.log(count[0]);







    const countriesIdToName = new Map();
    const countriesNameToId = new Map();
    const statesIdToName = new Map();
    const statesNameToId = new Map();
    const citiesIdToName = new Map();
    const citiesNameToId = new Map();
    const stateParent = new Map();
    const cityParent = new Map();

    //console.log(countries); // id , name ;
    //console.log(states);//  { id: 51, name: 'Northern', country_id: 83 },
    //console.log(cities); // { id: 58, name: 'Bāsawul', state_id: 3882 },



    g.addVertex('ROOT');


    for (let h of countries) {
        //
        if (h.id == '') break;
        if (!h.name) break;
        //console.log(h);
        h.name = h.name.toLowerCase();
        countriesIdToName[h.id] = h.name;
        countriesNameToId[h.name] = h.id;
        g.addVertex('CO' + h.name);
    }
    for (let h of states) {

        if (h.id == '') break;
        ///  console.log(h);
        h.name = h.name.toLowerCase();
        statesIdToName[h.id] = h.name;
        statesNameToId[h.name] = h.id;
        g.addVertex('ST' + h.name);
    }
    for (let h of cities) {
        // console.log(h);
        if (h.id == '') break;
        if (!h.name) break;
        h.name = h.name.toLowerCase();
        citiesIdToName[h.id] = h.name;
        citiesNameToId[h.name] = h.id;
        //    console.log(h.name)
        g.addVertex('CI' + h.name);

    }
    //g.AdjList.get('CIDeste')

    // build graph 
    for (let h of countries) {
        if (h.id == '') break;

        g.addEdge('ROOT', 'CO' + h.name);
    }
    for (let h of states) {
        if (h.id == '') break;
        // console.log(h);
        stateParent[h.name] = countriesIdToName[h.country_id];
        const country = 'CO' + countriesIdToName[h.country_id];
        g.addEdge(country, 'ST' + h.name);
        //   console.log(country + ' ' + 'ST' + h.name)
    }
    for (let h of cities) {
        if (h.id == '') break;
        cityParent[h.name] = statesIdToName[h.state_id];
        const state = 'ST' + statesIdToName[h.state_id];
        g.addEdge(state, 'CI' + h.name);
    }
    const numOfLeave = cities.length;
    console.log(numOfLeave);

    //console.log(citiesIdToName[getRandomInt(1, 127617)]);

    const t1 = new FireTask(0, 0, 0, 0, 0);
    const t2 = new FireTask(0, 0, 0, 0, 0);
    const t3 = new FireTask(0, 0, 0, 0, 0);
    const t4 = new FireTask(0, 0, 0, 0, 0);
    129998
    console.log(cities.length)
    //console.log(patterns[0].length)
    setInterval(() => {
        // this is task 1  

        if (t1.time <= 0) {
            // eventt[t1.city] = [];

            t1.city = citiesIdToName[getRandomInt(1, 127617) - 1];
            //  t1.city = 'homs'
            console.log(cityParent[t1.city]);
            t1.state = cityParent[t1.city];
            t1.countery = stateParent[t1.state];
            t1.degree = getRandomInt(0, 2);
            t1.time = getRandomInt(300000, 1800000);
            eventt['CI' + t1.city] = new Array()
        }
        eventt['CI' + t1.city] = new Array();

        let numOfTweet = getRandomInt(0, (t1.degree + 1) * 3);
        for (let x = 0; x <= numOfTweet; x++) {
            let tweet = patterns[t1.degree][getRandomInt(0, patterns[t1.degree].length)];
            tweet = tweet.replace('{location}', t1.city);
            let xx = new Date();
            xx.toString();
            let T = new Tweet(xx, tweet, 'null');
            // console.log(T);
            eventt['CI' + t1.city].push(T);
        }
        //console.log(eventt[t1.city] + ' ' + t1.city)
        t1.time -= 30000;
    }, 1000)




    setInterval(() => {
        if (t2.time <= 0) {
            eventt[t2.city] = new Array();
            t2.city = citiesIdToName[getRandomInt(1, 127617)];
            t2.state = cityParent[t2.city];
            t2.countery = stateParent[t2.state];
            t2.degree = getRandomInt(0, 2);
            t2.time = getRandomInt(300000, 1800000);
            eventt['CI' + t2.city] = new Array()

        }
        eventt['CI' + t2.city] = new Array();

        let numOfTweet = getRandomInt(0, (t2.degree + 1) * 3);
        for (let x = 0; x <= numOfTweet; x++) {
            let tweet = patterns[t2.degree][getRandomInt(0, patterns[t2.degree].length)];
            tweet = tweet.replace('{location}', t2.city);
            let xx = new Date();
            xx.toString();
            let T = new Tweet(xx, tweet, 'null');
            // console.log(T);
            eventt['CI' + t2.city].push(T);
        }

        t2.time -= 30000;
    }, 1000)
    setInterval(() => {
        if (t3.time <= 0) {
            eventt[t3.city] = new Array()
            t3.city = citiesIdToName[getRandomInt(1, 127617)];
            t3.state = cityParent[t3.city];
            t3.countery = stateParent[t3.state];
            t3.degree = getRandomInt(0, 2);
            t3.time = getRandomInt(300000, 1800000);
            eventt['CI' + t3.city] = new Array()
        }
        eventt['CI' + t3.city] = new Array();
        let numOfTweet = getRandomInt(0, (t3.degree + 1) * 3);
        for (let x = 0; x <= numOfTweet; x++) {
            let tweet = patterns[t3.degree][getRandomInt(0, patterns[t3.degree].length)];
            tweet = tweet.replace('{location}', t3.city);
            let xx = new Date();
            xx.toString();
            let T = new Tweet(xx, tweet, 'null');
            // console.log(T);
            eventt['CI' + t3.city].push(T);
        }
        t3.time -= 30000;
    }, 1000)
    setInterval(() => {
        if (t4.time <= 0) {
            eventt[t4.city] = new Array()
            t4.city = citiesIdToName[getRandomInt(1, 127617)];
            t4.state = cityParent[t4.city];
            t4.countery = stateParent[t4.state];
            t4.degree = getRandomInt(0, 2);
            t4.time = getRandomInt(300000, 1800000);
            eventt['CI' + t4.city] = new Array()
        }
        eventt['CI' + t4.city] = new Array();

        let numOfTweet = getRandomInt(0, (t4.degree + 1) * 3);
        for (let x = 0; x <= numOfTweet; x++) {
            let tweet = patterns[t4.degree][getRandomInt(0, patterns[t4.degree].length)];
            tweet = tweet.replace('{location}', t4.city);
            let xx = new Date();
            xx.toString();
            let T = new Tweet(xx, tweet, 'null');
            // console.log(T);
            eventt['CI' + t4.city].push(T);
        }

        t4.time -= 30000;
    }, 1000)






    app.get('/', (req, res) => {
        res.send({
            event: {
                t1, t2, t3, t4
            }
        })
    })
    app.all("/countries/:id", async (req, res) => {
        cnt++;
        console.log('started');
        g.dfs('CO' + req.params.id);
        res.send({ cnt: cnt, rows: g.ans });
    })
    app.all("/states/:id", async (req, res) => {
        cnt++;
        console.log('started');
        g.dfs('ST' + req.params.id);
        res.send({ cnt: cnt, rows: g.ans });
    })
    app.all("/cities/:id", async (req, res) => {
        cnt++;
        console.log('started');
        g.dfs('CI' + req.params.id);
        res.send({ cnt: cnt, rows: g.ans });
    })

    app.listen(3000, () => {
        console.log(1);
    });
})();
