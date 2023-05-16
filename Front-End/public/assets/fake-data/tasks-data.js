const Task = [
  {
    code: "TASK0001",
    description: "Dọn rác phường 2 Quận 2",
    creator: "Nguyen Thi Bach Khoa",
    ID_creator: "BO001",
    createDate: "28/02/2023",
    createTime: "02:29",
    janitor: [
      {
        staffID: "JN0001",
        name: "Nguyen Van A",
        phone: "088765212",
        address: "132/12 Nguyen Oanh",
        ward: "2",
        district: "Quan 2",
        mcp: "38 Le Loi",
        id_mcp: "MCP0001",
        time: "06:00",
        vehicle: "TK0001",
        sex: "Nam",
      },
      {
        staffID: "JN0002",
        name: "Nguyen Van B",
        phone: "077765212",
        address: "9 Nguyen Oanh",
        ward: "2",
        district: "Quan 2",
        mcp: "16 Quang Trung",
        id_mcp: "MCP0002",
        time: "06:30",
        vehicle: "TK0002",
        sex: "Nam",
      },
      {
        staffID: "JN0003",
        name: "Nguyen Van C",
        phone: "022765212",
        address: "9 Van Luong",
        ward: "2",
        mcp: "12 Le Van Duyet",
        id_mcp: "MCP0003",
        time: "07:00",
        vehicle: "TK0003",
        sex: "Nam",
      },
    ],
    collector: [
      {
        name: "Tran Van T",
        phone: "091827171",
        ID: "C010121",
        vehicle: "TK0002",
        address: "94 Van Luong Kha",
        ward: "2",
        district: "Quan 2",
        sex: "Nam",
      },
    ],
    route: ["43 Le Van Duyet", "21 Quang Trung", "15 Le Loi"],
    startDate: "28/02/2023",
    startTime: "06:00",
    finishDate_Expected: "28/02/2023",
    finishTimem_Expected: "08:00",
    finishDate_Reality: "28/02/2023",
    finishTimem_Reality: "07:33",
    state: "2",
    distance: "9.2 km",
    residential_area: 3,
    industrial_area: 0,
  },
  {
    code: "TASK0002",
    description: "Dọn rác Phường 5, Quận 1",
    creator: "Nguyen Thi Bach Khoa",
    ID_creator: "BO001",
    createDate: "01/03/2023",
    createTime: "02:29",
    janitor: [
      {
        staffID: "J010161",
        name: "Nguyen Van E",
        phone: "022765212",
        address: "9 Van Luong",
        ward: "2",
        mcp: "43 Le Van Duyet",
        id_mcp: "MCP0004",
        time: "06:00",
        vehicle: "TR0004",
        sex: "Nam",
      },
      {
        staffID: "J010172",
        name: "Nguyen Van F",
        phone: "022765213",
        address: "9 Van Luong",
        ward: "2",
        mcp: "21 Quang Trung",
        id_mcp: "MCP0005",
        time: "06:30",
        vehicle: "TR0005",
        sex: "Nam",
      },
      {
        staffID: "J010191",
        name: "Nguyen Van G",
        phone: "022765213",
        address: "9 Van Luong",
        ward: "2",
        mcp: "15 Le Loi",
        id_mcp: "MCP0005",
        time: "07:00",
        vehicle: "TR0009",
        sex: "Nam",
      },
    ],
    collector: [
      {
        name: "Tran Van Y",
        phone: "091827175",
        ID: "C010123",
        vehicle: "TK0003",
        address: "101 Van Luong Kha",
        ward: "2",
        district: "Quan 1",
        sex: "Nam",
      },
    ],
    route: ["43 Le Van Duyet", "21 Quang Trung", "15 Le Loi"],
    startDate: "01/03/2023",
    startTime: "06:00",
    finishDate_Expected: "01/03/2023",
    finishTimem_Expected: "08:00",
    finishDate_Reality: "01/03/2023",
    finishTimem_Reality: "07:33",
    state: "1",
    distance: "9.2 km",
    residential_area: 3,
    industrial_area: 0,
  },
  {
    code: "TASK0003",
    description: "",
    creator: "Nguyen Thi Bach Khoa",
    ID_creator: "BO001",
    createDate: "02/03/2023",
    createTime: "02:29",
    janitor: [
      {
        staffID: "J010123",
        name: "Nguyen Van Y",
        phone: "022765213",
        address: "9 Van Luong",
        ward: "2",
        mcp: "43 Le Van Duyet",
        id_mcp: "MCP0005",
        time: "06:00",
        vehicle: "TR0010",
        sex: "Nam",
      },
      {
        staffID: "J010126",
        name: "Nguyen Van B",
        phone: "022765213",
        address: "9 Van Luong",
        ward: "2",
        mcp: "21 Quang Trung",
        id_mcp: "MCP0005",
        time: "06:30",
        vehicle: "TR0006",
        sex: "Nam",
      },
      {
        staffID: "J010127",
        name: "Nguyen Van C",
        phone: "022765213",
        address: "9 Van Luong",
        ward: "2",
        mcp: "15 Le Loi",
        id_mcp: "MCP0005",
        time: "07:00",
        vehicle: "TR0010",
        sex: "Nam",
      },
    ],
    collector: [
      {
        name: "Tran Van V",
        phone: "091827172",
        ID: "C010122",
        vehicle: "TK0003",
        address: "95 Van Luong Kha",
        ward: "2",
        district: "Quan 3",
        sex: "Nam",
      },
    ],
    route: ["43 Le Van Duyet", "21 Quang Trung", "15 Le Loi"],
    startDate: "02/03/2023",
    startTime: "06:00",
    finishDate_Expected: "02/03/2023",
    finishTimem_Expected: "08:00",
    finishDate_Reality: "02/03/2023",
    finishTimem_Reality: "07:33",
    state: "0",
    distance: "9.2 km",
    residential_area: 3,
    industrial_area: 0,
  },
];
export default Task;
