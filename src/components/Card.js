import PropTypes from "prop-types";
const Card = ({ skill, summary, stack, tools, demo, link }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden py-4 shadow-lg bg-gray-200 dark:bg-gray-900
     text-deepBlue dark:text-white">
      <div className="px-6">
            <div className="font-bold text-xl mb-2">{skill}</div>
            <p className="text-gray-700 text-base text-[13px] dark:text-gray-400">
                {summary}
            </p>
      </div>  
      <div className="flex flex-col space-y-3 px-6">
        <p className="mt-2"><span className="font-medium text-black dark:text-white">Stack: </span>
          <span className="dark:text-gray-300 text-[13px]">{stack}</span>
        </p>
        <div className="flex space-x-2 items-center">
          {tools.map((tool, index) => (
          <span key={index} className="rounded-md p-1 bg-gray-400 text-black text-[11px] dark:bg-gray-300">
            {tool}
          </span>
        ))}
        </div>
        <div className="flex space-x-2 items-center">
          {demo.map((dem, index) => (
          <a type="button" key={index} className="light:text-gray-700 dark:text-gray-300 border cursor-pointer
            border-gray-300 hover:opacity-90 dark:border dark:border-gray-900 bg-white dark:bg-gray-700
            hover:text-black dark:hover:text-white px-3 py-1 text-sm font-medium rounded-full"
              href={link[index]} target="_blank" rel="noreferrer"
            >
            {dem}</a>
          ))}
        </div>
      </div>
    </div>
  );
};
// props validation should be propTypes
Card.propTypes = {
    skill: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    tools: PropTypes.arrayOf.isRequired,
    link: PropTypes.arrayOf.isRequired,
    demo:PropTypes.arrayOf.isRequired,
};
export default Card;
