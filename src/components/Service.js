import PropTypes from "prop-types";
const Card = ({ skill, summary, icon}) => {
  return (
      <div className="flex flex-col justify-center items-center
      bg-gray-200 dark:bg-gray-900 overflow-hidden shadow-lg p-3 rounded-md h-40">
        <span>
        <i className={icon} />
        </span>
        <p className="font-bold">{skill}</p>
        <p className="text-[12px] text-center">{summary}</p>
      </div>  
  );
};
// props validation should be propTypes
Card.propTypes = {
    skill: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
};
export default Card;
