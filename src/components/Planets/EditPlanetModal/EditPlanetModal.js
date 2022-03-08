import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import PropTypes from "prop-types";
import { FormField } from "./FormField";
import { useEditPlanetFormik } from "./useEditPlanetFormik";

function EditPlanetModal({ header, onClose, planet }) {
  const open = planet !== undefined;
  const formik = useEditPlanetFormik(planet);
  return (
    <Modal isOpen={open} toggle={onClose}>
      <>
        <ModalHeader toggle={onClose}>Edit {planet.name} Planet</ModalHeader>
        <form onSubmit={formik.handleSubmit}>
          <ModalBody>
            <FormField header={header} formik={formik} name={"name"} />
            <FormField
              header={header}
              formik={formik}
              name={"rotation_period"}
            />
            <FormField
              header={header}
              formik={formik}
              name={"orbital_period"}
            />
            <FormField header={header} formik={formik} name={"diameter"} />
            <FormField header={header} formik={formik} name={"climate"} />
            <FormField header={header} formik={formik} name={"gravity"} />
            <FormField header={header} formik={formik} name={"terrain"} />
            <FormField header={header} formik={formik} name={"surface_water"} />
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
