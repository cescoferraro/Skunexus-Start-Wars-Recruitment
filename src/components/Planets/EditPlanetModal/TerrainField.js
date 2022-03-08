import { FormGroup, Input, Label } from "reactstrap";
import PropTypes from "prop-types";

export function TerrainField(props) {
  return (
    <FormGroup>
      <Label for="exampleSelectMulti">Select Multiple</Label>
      <Input
        multiple
        type="select"
        value={props.formik.values.terrain
          .split(",")
          .map((a) => a.replaceAll(" ", ""))}
        onChange={(e) => {
          let opt;
          let opts = [];
          for (let i = 0, len = e.target.options.length; i < len; i++) {
            opt = e.target.options[i];
            if (opt.selected) {
              opts.push(opt.value);
            }
          }
          props.formik.setFieldValue("terrain", opts.join(","));
        }}
      >
        {props.terrain.split(",").map((s) => (
          <option key={s}>{s}</option>
        ))}
      </Input>
    </FormGroup>
  );
}

TerrainField.propTypes = {
  formik: PropTypes.any,
  terrain: PropTypes.any,
};
