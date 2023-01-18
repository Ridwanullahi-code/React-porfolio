import PropTypes from 'prop-types';

const Predict = ({ list }) => {  
    return (
        <div>
            <div className="my-3 bg-white shadow space-y-4 py-4 border rounded-lg h-50 max-w-1 mx-5 md:mx-10
            justify-center text-center flex flex-col items-center">
            <h1 className="font-bold text-xl">Lunchtime Prediction</h1>
            <date className="font-bold">Jan 05, 2023</date>
            <div className="space-y-2">
                <p>Prediction 1</p>
                <ul className="flex space-x-3 md:space-x-1 lg:space-x-5">
                    <li className="circle draw green shadow">{list[0][0]}</li>
                    <li className="circle draw purple shadow">{list[0][1]}</li>
                    <li className="circle draw Blue shadow">{list[0][2]}</li>
                    <li className="circle draw yellow shadow">{list[0][3]}</li>
                    <li className="circle draw deepRed shadow">{list[0][4]}</li>     
            </ul>
            </div>
            <div>
                <p>Prediction 2</p>
                <ul className="flex space-x-3 md:space-x-1 lg:space-x-5">
               <li className="draw circle Blue shadow">{list[1][0]}</li>
               <li className="draw circle yellow shadow">{list[1][1]}</li>
               <li className="draw circle deepRed shadow">{list[1][2]}</li>
               <li className="draw circle purple shadow">{list[1][3]}</li>
               <li className="draw circle green shadow">{list[1][4]}</li> 
            </ul>
            <div className="flex items-center justify-center pt-6 space-x-2">
            <p className="font-bold">Booster Ball:</p>
            <p className="circle draw yellow">24</p>
            </div>
            </div>
            </div>
        </div>
    )
}

// props validation should be propTypes
Predict.propTypes = {
    list: PropTypes.arrayOf.isRequired,
};

export default Predict;