const testStore = {
    activeCarId: 123,
    filter:"ALL",
    add: false,
    cars:[
        {
            id:123,
            brand:"Ford",
            model:"Focus",
            year: 2006,
            engineCapacity: 1.8,
            hp: 125,
            vin: "QWEX12345ZXC",
            workItem:[
                {
                    id:"324",
                    workType:"Замена *",
                    cost: "1000$",
                    accessories: [{name:"1", finished: true},{name:"2", finished: true},{name:"3", finished: false},{name:"4", finished: false}],
                    currentDate: "12/07/17",
                    pastDate: "12/07/16",
                },{
                    id:"324",
                    workType:"Замена *",
                    cost: "1000$",
                    accessories: [{name:"1", finished: true},{name:"2", finished: true},{name:"3", finished: false},{name:"4", finished: false}],
                    currentDate: "12/07/17",
                    pastDate: "12/07/16",
                },{
                    id:"324",
                    workType:"Замена *",
                    cost: "1000$",
                    accessories: [{name:"1", finished: true},{name:"2", finished: true},{name:"3", finished: false},{name:"4", finished: false}],
                    currentDate: "12/07/17",
                    pastDate: "12/07/16",
                },{
                    id:"324",
                    workType:"Замена *",
                    cost: "1000$",
                    accessories: [{name:"1", finished: true},{name:"2", finished: true},{name:"3", finished: false},{name:"4", finished: false}],
                    currentDate: "12/07/17",
                    pastDate: "12/07/16",
                },{
                    id:"324",
                    workType:"Замена *",
                    cost: "1000$",
                    accessories: [{name:"1", finished: true},{name:"2", finished: true},{name:"3", finished: false},{name:"4", finished: false}],
                    currentDate: "12/07/17",
                    pastDate: "12/07/16",
                },
            ]
        },{
            
            id:456,
            brand:"Ford",
            model:"Mondeo",
            year: 2017,
            engineCapacity: 2.0,
            hp: 155,
            vin: "ASD123456TYU",
            workItem:[
                {
                    id:"324",
                    workType:"Замена *",
                    cost: "1000$",
                    accessories: [{name:"11", finished: true},{name:"11", finished: true},{name:"11", finished: false},{name:"11", finished: false}],
                    currentDate: "12/07/17",
                    pastDate: "12/07/16",
                },{
                    id:"324",
                    workType:"Замена *",
                    cost: "1000$",
                    accessories: [{name:"22", finished: true},{name:"22", finished: true},{name:"22", finished: false},{name:"22", finished: false}],
                    currentDate: "12/07/17",
                    pastDate: "12/07/16",
                },{
                    id:"324",
                    workType:"Замена *",
                    cost: "1000$",
                    accessories: [{name:"33", finished: true},{name:"33", finished: true},{name:"33", finished: false},{name:"33", finished: false}],
                    currentDate: "12/07/17",
                    pastDate: "12/07/16",
                },{
                    id:"324",
                    workType:"Замена *",
                    cost: "1000$",
                    accessories: [{name:"44", finished: true},{name:"44", finished: true},{name:"44", finished: false},{name:"44", finished: false}],
                    currentDate: "12/07/17",
                    pastDate: "12/07/16",
                },{
                    id:"324",
                    workType:"Замена *",
                    cost: "1000$",
                    accessories: [{name:"1", finished: true},{name:"2", finished: true},{name:"3", finished: false},{name:"44", finished: false}],
                    currentDate: "12/07/17",
                    pastDate: "12/07/16",
                },
            ]
        }
    ]
}

export default testStore;