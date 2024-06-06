import PropTypes, { InferProps } from "prop-types";

function TitleRedisInsight({
  title,
  title1,
}: InferProps<typeof TitleRedisInsight.propTypes>) {
  return (
    <div>
      <p className="text-gray">{title}</p>
      <b>{title1}</b>
    </div>
  );
}
TitleRedisInsight.propTypes = {
  title: PropTypes.string,
  title1: PropTypes.string,
};
export default TitleRedisInsight;
