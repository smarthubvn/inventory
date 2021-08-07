import { PropTypes} from "prop-types"

function FormItem(props) {
  return (
    <form>
      <label for="text-form">Type something:</label>
      <input type="text" value={props.text} id="text-form" />
      <p>{props.number}</p>
    </form>
  );
}

FormItem.defaultProps = {
    text: "default text",
    number: 86,
};

FormItem.propTypes = {
  text: PropTypes.string,
  number: PropTypes.number,
};

export default FormItem;
