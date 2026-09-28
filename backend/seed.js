require('dotenv').config();
const mongoose = require('mongoose');

const Student =
  mongoose.models.Student ||
  mongoose.model(
    'Student',
    new mongoose.Schema(
      { name: String, rollNumber: { type: String, default: '' } },
      { timestamps: true }
    )
  );

const list = [
  ['B2608082','TRẦN HOÀI AN'],['B2608083','ĐINH NHẬT ANH'],['B2608084','LÊ ĐỨC ANH'],
  ['B2608085','PHẠM THỊ HUỲNH ANH'],['B2608086','LÊ MINH ÂU'],['B2608087','DƯƠNG GIA BẢO'],
  ['B2608088','LÊ HOÀNG QUỐC BẢO'],['B2608089','PHẠM GIA BẢO'],['B2608090','NGUYỄN NHỰT BĂNG'],
  ['B2608091','MAI CHÍ BẰNG'],['B2608092','NGUYỄN THẾ DĨ'],['B2608094','ĐỖ MINH ĐẠT'],
  ['B2608095','LƯU THANH ĐẠT'],['B2608096','PHẠM GIA ĐẠT'],['B2608097','LÊ HOÀNG GIA'],
  ['B2608098','PHẠM VĂN GIỎI'],['B2608100','PHAN CHÍ HẢI'],['B2608101','NGÔ TRUNG HẬU'],
  ['B2608103','LÊ MINH HIỂN'],['B2608104','NGUYỄN MINH HIỂN'],['B2608105','NGUYỄN PHƯỚC HIỆP'],
  ['B2608102','NGUYỄN HOÀNG TRUNG HIẾU'],['B2608106','LÊ THỊ XUÂN HOA'],['B2608107','NGUYỄN QUỐC HUY'],
  ['B2608108','ĐINH QUANG HƯỞNG'],['B2608109','TRỊNH TẤN HỮU'],['B2608110','NGUYỄN VŨ KHA'],
  ['B2608111','THÁI NGỌC MINH KHA'],['B2608112','NGUYỄN MINH KHANG'],['B2608113','NGUYỄN TUẤN KHANG'],
  ['B2608114','PHAN HỮU GIA KHÁNH'],['B2608115','NGUYỄN TRỌNG KHÔI'],['B2608116','TRẦN QUỐC KIỆT'],
  ['B2608117','TRƯƠNG TRUNG TUẤN KIỆT'],['B2608118','LÊ NHẬT LÂM'],['B2608119','PHẠM DƯƠNG BÍCH LOAN'],
  ['B2608120','NGÔ THIỆN LỘC'],['B2608121','NGUYỄN TẤN LỘC'],['B2608122','THÁI PHƯỚC LỘC'],
  ['B2608123','NGUYỄN THÀNH LỢI'],['B2608124','NGUYỄN MINH LƯƠNG'],['B2608125','PHAN HOÀNG ĐỨC MINH'],
  ['B2608126','THÁI NGÂN'],['B2608129','TÔ VĂN HỮU NGHỊ'],['B2608128','NGUYỄN TRỌNG NGHĨA'],
  ['B2608127','VÕ THANH NGHIÊM'],['B2608130','NGUYỄN THANH NHÀN'],['B2608131','NGUYỄN HOÀNG NHÂN'],
  ['B2608132','DƯƠNG NGỌC NHI'],['B2608133','HỒ TRẦN PHÁT'],['B2608134','HỒ VỦ PHONG'],
  ['B2608135','HUỲNH HOÀNG PHONG'],['B2608136','LÊ AN PHÚ'],['B2608137','NGUYỄN GIA PHÚ'],
  ['B2608138','LÊ HOÀNG QUÂN'],['B2608139','LÊ PHÚ QUÝ'],['B2608140','PHẠM THÁI SƠN'],
  ['B2608141','NGUYỄN VĂN TÀI'],['B2608143','LÂM MINH THÁI'],['B2608142','LÊ CHÍ THANH'],
  ['B2608144','LỮ TUẤN THÀNH'],['B2608145','PHAN VĂN ĐÔNG THÀNH'],['B2608146','TRƯƠNG TUẤN THÀNH'],
  ['B2608147','ĐỖ TRUNG THẬT'],['B2608148','LÊ ĐỨC THIỆN'],['B2608149','LÊ MINH THIỆN'],
  ['B2608150','NGUYỄN CHÍ THIỆN'],['B2608151','NGUYỄN HOÀNG THIỆN'],['B2608152','NGUYỄN TRẦN THANH THIỆN'],
  ['B2608153','CAO NGUYỄN MINH THUẬN'],['B2608154','LỮ MINH THỨC'],['B2608155','TRẦN TRUNG TÍN'],
  ['B2608156','NGUYỄN CHÍ TÌNH'],['B2608157','HỒ THANH TOÀN'],['B2608158','LÊ THANH TRỌNG'],
  ['B2608159','NGUYỄN NGÔ QUANG TRUNG'],['B2608160','NGUYỄN MINH TRỰC'],['B2608161','NGUYỄN PHẠM DUY TUẤN'],
  ['B2608162','VÕ TRẦN ANH TUẤN'],['B2608163','VÕ TRUNG VIỆT'],['B2608164','LÊ QUANG VINH'],
  ['B2608165','NGUYỄN CHÍ VỈNH'],['B2608166','LƯU CHÍ VỸ'],
];

(async () => {
  await mongoose.connect(process.env.MONGODB_URI);
  for (const [rollNumber, name] of list) {
    await Student.updateOne({ rollNumber }, { $set: { name } }, { upsert: true });
  }
  console.log('Xong. Tổng số học sinh:', await Student.countDocuments());
  process.exit(0);
})();