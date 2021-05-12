import Thumbnail from './Thumbnail'

const Results = ({results}) => {
    return (
        <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {results && results.map(result => (
                <Thumbnail  
                    kay={result.id}
                    key={result.id}
                    result={result}
                />
            ))}
        </div>
    );
};

export default Results;