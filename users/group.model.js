var mongoose = require('mongoose');
var GroupSchema = new mongoose.Schema({
    userId: {
          type: String,
          trim: true,
          default: '',
          required: true
    },
    groupNumber: {
          type: String,
          trim: true,
          default: '',
          required: true
    },
    groupName: {
          type: String,
          trim: true,
          default: '',
          required:true
    },
    availableStock: {
          type: Number,
          trim: true,
          default: '',
          required: true,
    },
    minStockLimit: {
          type: Number,
          trim: true,
          default: '',
          required: true
    },
    measuringUnit: {
          type: String,
          trim: true,
          default: '',
          required: true
    },
    purchasingCost: {
          type: Number,
          trim: true,
          default: '',
          required: true
    },
    salePrice: {
          type: Number,
          trim: true,
          default: '',
          required: true
    }
});
mongoose.model('Group', GroupSchema);
module.exports = mongoose.model('Group');
