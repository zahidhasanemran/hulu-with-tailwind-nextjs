import PropTypes from 'prop-types';
const HeaderItem = ({title, Icon}) => {
    return (
        <div className="group flex flex-col items-center cursor-pointer w-12 sm:w-12 hover:text-white">
            <Icon 
                className="h-8 mb-1 group-hover:animate-bounce"
            />
            <p className="opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    );
};

export default HeaderItem;

HeaderItem.propTypes = {
    title: PropTypes.string.isRequired,
    Icon: PropTypes.elementType.isRequired
}