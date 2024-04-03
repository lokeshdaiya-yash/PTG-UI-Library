// import locations from '../schema/location-schema.js';
import Locations from '../schema/location-schema.js';

export const addLocation = async (request, response) => {
  console.log('addLocation', request);
  const location = request.body;
  try {
    const newLocation = new Locations(location);
    await newLocation.save();
    response
      .status(200)
      .json({ newLocation, message: 'location added successfully' });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }

  // try {
  //   const locations = await Locations.find({});
  //   if (locations.length > 0) {
  //     let checking = false;
  //     for (let i = 0; i < locations.length; i++) {
  //       if (
  //         locations[i]['name'].toLowerCase() === request.body.name.toLowerCase()
  //       ) {
  //         checking = true;
  //         break;
  //       }
  //     }
  //     if (checking == false) {
  //       const location = {};
  //       Object.keys(request.body).forEach((key) => {
  //         location[key] = request.body[key].toUpperCase();
  //       });
  //       // console.log('location', location);
  //       const newLocation = new Locations(location);
  //       await newLocation.save();
  //       response
  //         .status(200)
  //         .json({ newLocation, message: 'location added successfully' });
  //     } else {
  //       response.status(404).json({
  //         message: 'location (' + request.body.name + ') is already exist',
  //       });
  //     }
  //   }
  // } catch (error) {
  //   response.status(409).json({ message: error.message });
  // }
};

export const getLocation = async (request, response) => {
  try {
    const locations = await Locations.find({}).sort({createdAt: -1});
    response.status(200).json(locations);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const getSingleLocation = async (request, response) => {
  try {
    const location = await Location.findById(request.params.id);
    response.status(200).json(location);
  } catch (error) {
    response.status(404).json({ message: error.message });
  }
};

export const editLocation = async (request, response) => {
  let location = request.body;
  const editlocation = new locations(location);
  try {
    await Location.updateOne({ _id: request.params.id }, editlocation);
    response.status(201).json(editlocation);
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const deleteLocation = async (request, response) => {
  try {
    await Location.deleteOne({ _id: request.params.id });
    response.status(200).json({ message: 'location deleted successfully' });
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};

export const checkDuplicateLocation = async (request, response) => {
  const requestedName = request.params.name;
  try {
    const record = await Location.findOne({ name: {$regex: new RegExp('^' + requestedName + '$', 'i')} });
    if (record) {
      response
        .status(200)
        .json({ message: `${requestedName} is already exist` });
      response.end();
    } else {
      response.status(200).json({ message: '' });
      response.end();
    }
  } catch (error) {
    response.status(409).json({ message: error.message });
  }
};
