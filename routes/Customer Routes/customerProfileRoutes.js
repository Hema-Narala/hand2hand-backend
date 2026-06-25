import express from "express";
import {
  getMyCustomerProfile,
  createOrUpdateCustomerProfile,
  updateCustomerProfileImage,
  getCustomerProfileById
} from "../../controllers/customercontrollers/customerProfileController.js";

import authMiddleware from "../../middleware/authMiddleware.js";
import createUploader from "../../middleware/upload.js";

const router = express.Router();

const upload = createUploader("customer-profile");

router.get("/me", authMiddleware, getMyCustomerProfile);

router.post("/save", authMiddleware, createOrUpdateCustomerProfile);

// router.put(
//   "/image",
//   authMiddleware,
//   upload.single("image"),
//   updateCustomerProfileImage
// );
router.put(
  "/image",
  authMiddleware,
  (req, res, next) => {
    console.log("CUSTOMER IMAGE ROUTE REACHED");
    next();
  },
  upload.single("image"),
  updateCustomerProfileImage
);

router.get(
  "/view/:customerId",
  authMiddleware,
  getCustomerProfileById
);

export default router;
