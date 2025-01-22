

import PropTypes from 'prop-types';

const PageHeader = ({name}) => {
  return (
    <div className='mb-6 '>
    <h1 className='text-3xl mb-1.5 font-bold text-[#ff7f50]'>{name}</h1>
    <hr className=' w-20 h-1.5 bg-gray-200 border-none dark:bg-[#3c6382]' />
    </div>
  )
}

PageHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PageHeader;

