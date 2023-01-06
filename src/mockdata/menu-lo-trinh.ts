const n5 = ["N5: Nấu cơm", "N5: Quét nhà", "N5: Thể dục"];
const tiengNhat = [
  "N5: Tiếng Nhật hằng ngày",
  "N4: Tiếng Nhật trong cuộc sống",
  "N3: Quản trị cảm xúc",
  "N2: Tiếng Nhật business",
  "N1: Chuyên gia",
];
let menuTN = [];
tiengNhat.map((value, index, array) => {
  console.log(value);
  menuTN.push({
    key: `tn-${index}`,
    label: value,
    children: n5.map((val1, index1) => ({key: '${index}-${index1}', label: val1}))
  })
})

let menuKNM = [];
const kynangmem = [
    "Giao tiếp hằng ngày",
    "Giao tiếp trong công việc",
    "Kỹ năng lãnh đạo",
    "Kỹ năng start-up"
]
kynangmem.map((value, index, array)=>{
    menuKNM.push({
        key: `knm-${index}`,
        label: value
    })
})
export {menuTN, menuKNM, tiengNhat};
