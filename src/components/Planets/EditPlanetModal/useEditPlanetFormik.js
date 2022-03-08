import { useFormik } from "formik";
import * as Yup from "yup";

export function useEditPlanetFormik(planet) {
  return useFormik({
    initialValues: planet,
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      rotation_period: Yup.string().required(),
      orbital_period: Yup.string().required(),
      diameter: Yup.string().required(),
      climate: Yup.string().required(),
      gravity: Yup.string().required(),
      terrain: Yup.string().required(),
      surface_water: Yup.string().required(),
    }),
    onSubmit: (editedPlanet) => {
      alert(JSON.stringify(editedPlanet));
    },
  });
}
