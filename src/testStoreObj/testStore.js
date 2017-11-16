const testStore = {
  cars: {
    123: {
      id: 123,
      brand: "Ford",
      model: "Focus",
      year: 2006,
      engineCapacity: 1.8,
      hp: 125,
      vin: "QWEX12345ZXC"
    },
    456: {
      id: 456,
      brand: "Ford",
      model: "Mondeo",
      year: 2017,
      engineCapacity: 2.0,
      hp: 155,
      vin: "ASD123456TYU"
    }
  },
  settings: {
    taskId: 1,
    activeCarId: 123,
    filter: "ALL",
    add: false
  },
  tasks: {
    123: {
      activeTasks: {
        1: {
          id: 1,
          complited: false,
          deleted: false,
          workName: "Замена *",
          cost: "1000$",
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        },
        2: {
          id: 2,
          complited: false,
          deleted: false,
          workName: "Замена *",
          cost: "1000$",
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        },
        3: {
          id: 3,
          complited: false,
          workName: "Замена *",
          cost: "1000$",
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        }
      },
      deletedTasks: {
        3: {
          id: 3,
          complited: false,
          deleted: true,
          workName: "Замена *",
          cost: "1000$",
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        },
        4: {
          id: 4,
          complited: true,
          deleted: true,
          workName: "Замена *",
          cost: "1000$",
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        }
      }
    },
    456: {
      activeTasks: {
        1: {
          id: 1,
          complited: true,
          deleted: false,
          workName: "Замена *",
          cost: "1000$",
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        },
        2: {
          id: 2,
          complited: false,
          deleted: false,
          workName: "Замена *",
          cost: "1000$",
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        }
      },
      deletedTasks: {
        3: {
          id: 3,
          complited: false,
          deleted: true,
          workName: "Замена *",
          cost: "1000$",
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        },
        4: {
          id: 4,
          complited: false,
          deleted: true,
          workName: "Замена *",
          cost: "1000$",
          currentDate: "12/07/17",
          pastDate: "12/07/16"
        }
      }
    }
  },
  accessories: {
    1: {
      1: { id: 1, name: "1", cost: "1000$", finished: true, changing: false },
      2: { id: 2, name: "2", cost: "1000$", finished: false, changing: false }
    },
    2: {
      3: { id: 3, name: "3", cost: "1000$", finished: false, changing: false },
      4: { id: 4, name: "4", cost: "1000$", finished: true, changing: false }
    },
    3: {
      1: { id: 1, name: "1", cost: "1000$", finished: true, changing: false },
      2: { id: 2, name: "2", cost: "1000$", finished: false, changing: false }
    },
    4: {
      3: { id: 3, name: "3", cost: "1000$", finished: false, changing: false },
      4: { id: 4, name: "4", cost: "1000$", finished: true, changing: false }
    }
  }
};

export default testStore;
