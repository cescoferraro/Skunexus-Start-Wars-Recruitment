import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  Input,
  InputGroup,
  InputGroupText,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import PropTypes from "prop-types";

function TextField({ placeholder, value, onChange }) {
  return (
    <InputGroup>
      <InputGroupText>{placeholder}</InputGroupText>
      <Input placeholder={placeholder} value={value} onChange={onChange} />
    </InputGroup>
  );
}

function FormField({ name, formik }) {
  return (
    <TextField
      placeholder={name}
      value={formik.values[name]}
      onChange={(e) => {
        formik.setFieldValue(name, e.target.value);
      }}
    />
  );
}

function EditPlanetModal({ onClose, planet }) {
  const open = planet !== undefined;
  const formik = useFormik({
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
  return (
    <Modal isOpen={open} toggle={onClose}>
      <>
        <ModalHeader toggle={onClose}>Edit {planet.name} Planet</ModalHeader>
        <form onSubmit={formik.handleSubmit}>
          <ModalBody>
            <FormField formik={formik} name={"name"} />
            <FormField formik={formik} name={"rotation_period"} />
            <FormField formik={formik} name={"orbital_period"} />
            <FormField formik={formik} name={"diameter"} />
            <FormField formik={formik} name={"climate"} />
            <FormField formik={formik} name={"gravity"} />
            <FormField formik={formik} name={"terrain"} />
            <FormField formik={formik} name={"surface_water"} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              disabled={!(formik.isValid && formik.dirty)}
              color="primary"
            >
              Do Something
            </Button>
          </ModalFooter>
        </form>
      </>
    </Modal>
  );
}

EditPlanetModal.propTypes = {
  planet: PropTypes.object,
  onClose: PropTypes.func,
};

export default EditPlanetModal;
