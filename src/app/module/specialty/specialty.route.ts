import { Router,} from "express";
import { SpecialtyController } from "./specialty.controller";
import { checkAuth } from "../../middleware/checkAuth";
import { Role } from "../../../generated/prisma/enums";

const router = Router()
router.post('/', checkAuth(Role.ADMIN, Role.SUPER_ADMIN), SpecialtyController.createSpecialty)
router.get('/', SpecialtyController.getAllSpecialties)
router.patch('/:id', checkAuth(Role.ADMIN, Role.SUPER_ADMIN), SpecialtyController.updateSpecialty)
router.delete('/:id', checkAuth(Role.ADMIN, Role.SUPER_ADMIN), SpecialtyController.deleteSpecialty)

export const SpecialtyRoutes = router