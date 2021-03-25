const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VolunteerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true,
    index: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  dateOfBirth: {
    type: Date,
    required: true
  },
  emergencyContact: {
    type: String,
    required: true
  },
  languages: {
    englishOnly: {type: Boolean, required: true, default: false},
    chineseMandarin: {type: Boolean, required: true, default: false},
    chineseCantonese: {type: Boolean, required: true, default: false},
    korean: {type: Boolean, required: true, default: false},
    japanese: {type: Boolean, required: true, default: false},
    tagolog: {type: Boolean, required: true, default: false},
    spanish: {type: Boolean, required: true, default: false},
    other: {type: String, required: true},
  },
  previousTraining: {
    yes: {type: Boolean, required: true, default: false},
    no: {type: Boolean, required: true, default: false},
    other: {type: String, required: true, default: ""}
  },
  roles: {
    chaperone: {type: Boolean, required: true, default: false},
    communityOutreach: {type: Boolean, required: true, default: false},
    adminWork: {type: Boolean, required: true, default: false},
    copywriting: {type: Boolean, required: true, default: false},
    socialMedia: {type: Boolean, required: true, default: false},
    dispatch: {type: Boolean, required: true, default: false},
    other: {type: String, required: true, default: ""}
  },
  skills: {
    type: String,
    required: true,
    default: ""
  },
  covidTest: {
    lastWeek: {type: Boolean},
    lastMonth: {type: Boolean},
    overMonth: {type: Boolean},
    never: {type: Boolean},
    vaccinated: {type: Boolean},
    other: {type: String},
    required: true
  },
  signature: {
    type: String,
    required: true
  }
})

const Volunteer = mongoose.model('Volunteer', VolunteerSchema);
module.exports = Volunteer;