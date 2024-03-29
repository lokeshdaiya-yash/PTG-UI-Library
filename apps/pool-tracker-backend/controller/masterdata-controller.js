import Masterdata from '../schema/masterData-schema.js';

export const addMasterdata = async (request, response) => {
  const masterdata = request.body;

  const newMasterData = new Masterdata(masterdata);
  try {
    await newMasterData.save();
    response.status(201).json({ message: 'Added successfully' });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }

  console.log(masterdata);
};

export const editMasterdata = async (request, response) => {
  let userData = request.body;
  // const editUser = new Masterdata(masterdata);
  try {
    await Masterdata.updateOne({ _id: request.params.id }, userData);
    response.status(201).json({ message: 'Updated successfully!' });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const getMasterdata = async (request, response) => {
  try {
    const masterdatas = await Masterdata.find({});
    response.status(200).json(masterdatas);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getdata = async (request, response) => {
  try {
    const masterdata = await Masterdata.findById(request.params.id);
    response.status(200).json(masterdata);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const deleteMasterdata = async (request, response) => {
  try {
    await Masterdata.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

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
