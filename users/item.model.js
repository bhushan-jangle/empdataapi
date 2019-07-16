var mongoose = require('mongoose');
var ItemSchema = new mongoose.Schema({
      empId: {
            type: Number,
            trim: true,
            default: '',
            required: true
      },
      empName: {
            type: String,
            trim: true,
            default: '',
            required: true
      },
      address: {
            type: String,
            trim: true,
            default: '',
            required:true
      },
      prefTech: {
            type: String,
            trim: true,
            default: '',
            required: true,
      },
      mobileNo: {
            type: Number,
            trim: true,
            default: '',
            required: true
      },
      deptAllocated: {
            type: String,
            trim: true,
            default: '',
            required: true
      },
      deptId: {
            type: Number,
            trim: true,
            default: '',
            required: true
      },
      techId: {
            type: Number,
            trim: true,
            default: '',
            required: true
      }
});
mongoose.model('User2', ItemSchema);
module.exports = mongoose.model('User2');

