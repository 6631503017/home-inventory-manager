export interface Item {
  id: string;
  name: string;
  quantity: number;
  category: string;
  needToBuy: boolean;
  lastUpdated: Date;
}


const mockItems: Item[] = [
  {
    id: '1',
    name: 'น้ำยาล้างจาน',
    quantity: 2,
    category: 'cleaning',
    needToBuy: false,
    lastUpdated: new Date(),
  },
  {
    id: '2',
    name: 'สบู่',
    quantity: 1,
    category: 'bathroom',
    needToBuy: true,
    lastUpdated: new Date(),
  },
  // เพิ่ม items อื่นๆ ตามต้องการ
];

export default mockItems