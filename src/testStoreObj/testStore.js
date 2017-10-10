const testStore = {
  taskId: 1,
  activeCarId: 123,
  filter: "ALL",
  add: false,
  cars: [
    {
      id: 123,
      brand: "Ford",
      model: "Focus",
      year: 2006,
      engineCapacity: 1.8,
      hp: 125,
      vin: "QWEX12345ZXC",
      workItems: [
        {
          id: "1",
          complited: false,
          workType: "Замена *",
          cost: "1000$",
          accessories: [
            { id: 1, amount: 1, name: "1", finished: true, changing: false },
            { id: 2, name: "2", finished: true, changing: false },
            { id: 3, name: "3", finished: false, changing: false },
            { id: 4, name: "4", finished: false, changing: false }
          ],
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        },
        {
          id: "2",
          complited: false,
          workType: "Замена *",
          cost: "1000$",
          accessories: [
            { id: 5, name: "1", finished: true, changing: false },
            { id: 6, name: "2", finished: true, changing: false },
            { id: 7, name: "3", finished: false, changing: false },
            { id: 8, name: "4", finished: false, changing: false }
          ],
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        },
        {
          id: "3",
          complited: false,
          workType: "Замена *",
          cost: "1000$",
          accessories: [
            { id: 9, name: "1", finished: true, changing: false },
            { id: 10, name: "2", finished: true, changing: false },
            { id: 11, name: "3", finished: false, changing: false },
            { id: 12, name: "4", finished: false, changing: false }
          ],
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        },
        {
          id: "4",
          complited: false,
          workType: "Замена *",
          cost: "1000$",
          accessories: [
            { id: 13, name: "1", finished: true, changing: false },
            { id: 14, name: "2", finished: true, changing: false },
            { id: 15, name: "3", finished: false, changing: false },
            { id: 16, name: "4", finished: false, changing: false }
          ],
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        },
        {
          id: "5",
          complited: false,
          workType: "Замена *",
          cost: "1000$",
          accessories: [
            { id: 17, name: "1", finished: true, changing: false },
            { id: 18, name: "2", finished: true, changing: false },
            { id: 19, name: "3", finished: false, changing: false },
            { id: 20, name: "4", finished: false, changing: false }
          ],
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        }
      ]
    },
    {
      id: 456,
      brand: "Ford",
      model: "Mondeo",
      year: 2017,
      engineCapacity: 2.0,
      hp: 155,
      vin: "ASD123456TYU",
      workItems: [
        {
          id: "6",
          complited: false,
          workType: "Замена *",
          cost: "1000$",
          accessories: [
            { id: 21, name: "11", finished: true, changing: false },
            { id: 22, name: "11", finished: true, changing: false },
            { id: 23, name: "11", finished: false, changing: false },
            { id: 24, name: "11", finished: false, changing: false }
          ],
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        },
        {
          id: "7",
          complited: false,
          workType: "Замена *",
          cost: "1000$",
          accessories: [
            { id: 25, name: "22", finished: true, changing: false },
            { id: 26, name: "22", finished: true, changing: false },
            { id: 27, name: "22", finished: false, changing: false },
            { id: 28, name: "22", finished: false, changing: false }
          ],
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        },
        {
          id: "8",
          complited: false,
          workType: "Замена *",
          cost: "1000$",
          accessories: [
            { id: 29, name: "33", finished: true, changing: false },
            { id: 30, name: "33", finished: true, changing: false },
            { id: 31, name: "33", finished: false, changing: false },
            { id: 32, name: "33", finished: false, changing: false }
          ],
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        },
        {
          id: "9",
          complited: false,
          workType: "Замена *",
          cost: "1000$",
          accessories: [
            { id: 33, name: "44", finished: true, changing: false },
            { id: 34, name: "44", finished: true, changing: false },
            { id: 35, name: "44", finished: false, changing: false },
            { id: 36, name: "44", finished: false, changing: false }
          ],
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        },
        {
          id: "10",
          complited: false,
          workType: "Замена *",
          cost: "1000$",
          accessories: [
            { id: 37, name: "1", finished: true, changing: false },
            { id: 38, name: "2", finished: true, changing: false },
            { id: 39, name: "3", finished: false, changing: false },
            { id: 40, name: "44", finished: false, changing: false }
          ],
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        }
      ]
    }
  ]
};

export default testStore;
