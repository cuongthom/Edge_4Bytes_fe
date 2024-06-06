import PropTypes, { InferProps } from "prop-types";

function TableReusable({
  title1,
  title2,
  title3,
  title4,
  title5,
}: InferProps<typeof TableReusable.propTypes>) {
  return (
    <table
      className="scrollable-table"
      id="keywords"
      style={{ padding: "20px 0px" }}
    >
      <thead>
        <tr>
          <th>
            <span>{title1}</span>
          </th>
          <th>
            <span>{title2}</span>
          </th>
          <th>
            <span>{title3}</span>
          </th>
          <th>
            <span>{title4}</span>
          </th>
          <th>
            <span>{title5}</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="lalign">7 hours ago</td>
          <td>CONSOLE</td>
          <td>Delete Index</td>
          <td>cuongcuong112203</td>
          <td>58.187.178.25</td>
        </tr>
        <tr>
          <td className="lalign">23 hours ago</td>
          <td>CONSOLE</td>
          <td>Create Index</td>
          <td>cuongcuong112203</td>
          <td>113.23.42.90</td>
        </tr>
      </tbody>
    </table>
  );
}
TableReusable.propTypes = {
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  title4: PropTypes.string.isRequired,
  title5: PropTypes.string.isRequired,
};
export default TableReusable;
