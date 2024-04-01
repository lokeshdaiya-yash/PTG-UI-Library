import Masterdata from '../schema/masterData-schema.js';

// add a new record
export const addMasterdata = async (request, response) => {
  const masterdata = request.body;
  const newEmployee = new Masterdata(masterdata);
  try {
    await newEmployee.save();
    response.status(201).json({ message: 'Added successfully' });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// update existing record
export const editMasterdata = async (request, response) => {
  let employee = request.body;
  try {
    await Masterdata.updateOne({ _id: request.params.id }, employee);
    response.status(201).json({ message: 'Updated successfully!' });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// get all records
export const getMasterdata = async (request, response) => {
  try {
    const masterdatas = await Masterdata.find({}).sort({createdAt: -1});
    console.log('hasmat', masterdatas);
    response.status(200).json(masterdatas);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

// get a single record by employee's Id
export const getdata = async (request, response) => {
  try {
    const masterdata = await Masterdata.findById(request.params.id);
    response.status(200).json(masterdata);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

// delete a single record
export const deleteMasterdata = async (request, response) => {
  try {
    await Masterdata.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

// checking employee already exist or not
export const checkDuplicateEmail = async (request, response) => {
  const requestedEmail = request.params.emailId;
  try {
    const record = await Masterdata.findOne({ emailId: requestedEmail });
    if (record) {
      response
        .status(200)
        .json({ message: `${requestedEmail} is already exist` });
      response.end();
    } else {
      response.status(200).json({ message: '' });
      response.end();
    }
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
