import PropTypes, { InferProps } from "prop-types";

function TitleSubscriptionRedis({ title }: InferProps<typeof TitleSubscriptionRedis.propTypes>) {
  return (
    <div>
      <hr className="hr-redis" />
      <p className="" style={{padding:'0px 10px'}}>{title}</p>
    </div>
  );
}
TitleSubscriptionRedis.propTypes = {
  title: PropTypes.string,
}
export default TitleSubscriptionRedis;
