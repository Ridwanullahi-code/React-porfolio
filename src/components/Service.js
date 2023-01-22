import PropTypes from "prop-types";
const Card = ({ skill, summary, icon}) => {
  return (
      <div className="max-w-sm rounded overflow-hidden py-4 shadow-lg bg-gray-200
       dark:bg-gray-900 text-deepBlue dark:text-white flex flex-col items-center justify-center p-3 space-y-2">
        <span>
        <i className={icon} />
        </span>
        <p className="font-bold">{skill}</p>
        <p className="text-[12px]">{summary}</p>
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
