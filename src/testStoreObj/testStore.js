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
                    accessories: ["2","3","4","5"],
                    currentDate: "12/07/17",
                    pastDate: "12/07/16",
                }
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
                    id:"456",
                    workType:"Замена *",
                    cost: "1000$",
                    accessories: ["2","3","4","5"],
                    currentDate: "12/07/17",
                    pastDate: "12/07/16",
                }
            ]
        }
    ]
}

export default testStore;