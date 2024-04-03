import express from 'express';
import {
  addMasterdata,
  getMasterdata,
  getdata,
  editMasterdata,
  deleteMasterdata,
  checkDuplicateEmail,
} from '../controller/masterdata-controller.js';
import {
  addSkill,
  getSkills,
  getSingleSkill,
  editSkill,
  deleteSkill,
  checkDuplicateSkill
} from '../controller/skill-controller.js';
import {
  addUser,
  getUsers,
  getUser,
  editUser,
  loginUser,
} from '../controller/user-controller.js';
import {
  addCompetency,
  getCompetency,
  getSingleCompetency,
  editCompetency,
  deleteCompetency,
  checkDuplicateCompetency
} from '../controller/competency-controller.js';
import {
  addDesignation,
  getDesignation,
  getSingleDesignation,
  editDesignation,
  deleteDesignation,
  checkDuplicateDesignation
} from '../controller/designation-controller.js';
import {
  addLocation,
  getLocation,
  getSingleLocation,
  editLocation,
  deleteLocation,
  checkDuplicateLocation
} from '../controller/location-controller.js';
import {
  addBand,
  getBand,
  getSingleBand,
  editBand,
  deleteBand,
  checkDuplicateBand
} from '../controller/band-controller.js';

addDesignation;
const router = express.Router();

router.post('/band/addband', addBand);
router.get('/band/allband', getBand);
router.get('/band/:id', getSingleBand);
router.post('/band/:id', editBand);
router.delete('/band/:id', deleteBand);
router.get("/duplicateband/:name", checkDuplicateBand);

router.post('/competency/addcompetency', addCompetency);
router.get('/competency/allcompetency', getCompetency);
router.get('/competency/:id', getSingleCompetency);
router.post('/competency/:id', editCompetency);
router.delete('/competency/:id', deleteCompetency);
router.get('/duplicatecompetency/:name', checkDuplicateCompetency);

router.post('/designation/adddesignation', addDesignation);
router.get('/designation/alldesignation', getDesignation);
router.get('/designation/:id', getSingleDesignation);
router.post('/designation/:id', editDesignation);
router.delete('/designation/:id', deleteDesignation);
router.get('/duplicatedesignation/:name', checkDuplicateDesignation);


router.post('/location/addlocation', addLocation);
router.get('/location/alllocation', getLocation);
router.get('/location/:id', getSingleLocation);
router.post('/location/:id', editLocation);
router.delete('/location/:id', deleteLocation);
router.get('/duplicatelocation/:name', checkDuplicateLocation);


router.post('/masterdata/addmasterdata', addMasterdata);
router.get('/masterdata/allmasterdata', getMasterdata);
router.get('/masterdata/:id', getdata);
router.post('/masterdata/:id', editMasterdata);
router.delete('/masterdata/:id', deleteMasterdata);
router.get('/duplicateemail/:emailId', checkDuplicateEmail);

router.post('/skill/addskill', addSkill);
router.get('/skill/allskill', getSkills);
router.get('/skill/:id', getSingleSkill);
router.post('/skill/:id', editSkill);
router.delete('/skill/:id', deleteSkill);
router.get('/duplicateskill/:name', checkDuplicateSkill);


router.post('/user/add', addUser);
router.get('/users', getUsers);
router.get('/user/:id', getUser);
router.post('/user/:id', editUser);
router.post('/user/login', loginUser);

export default router;
