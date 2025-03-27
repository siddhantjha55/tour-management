import express from 'express'
import
    {
        createTour,
        deleteTour,
        updateTour,
        getSingleTour,
        getAllTour,
        getTourBySearch,
        getFeaturedTour,
        getTourCount
    } from './../controllers/tourController.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//create new tour

router.post("/", verifyAdmin, createTour);

//delete tour

router.delete("/:id", verifyAdmin, deleteTour);

//update tour

router.put("/:id", verifyAdmin, updateTour);

// get single tour

router.get("/:id", getSingleTour);

//getAll tour

router.get("/", getAllTour);

//get tour by search
router.get('/search/getTourBySearch', getTourBySearch);
router.get('/search/getFeaturedTours', getFeaturedTour);
router.get('/search/getTourCount', getTourCount);


export default router;